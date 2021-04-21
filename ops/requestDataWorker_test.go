package ops

import (
	"context"
	"fmt"
	"log"
	"math/big"
	"os"
	"testing"
	"time"

	berryCommon "github.com/berrydata/BerryMiner/common"
	"github.com/berrydata/BerryMiner/config"
	"github.com/berrydata/BerryMiner/db"
	"github.com/ethereum/go-ethereum/common/hexutil"
	"github.com/ethereum/go-ethereum/core/types"
)

var ctx context.Context

var (
	requestID *big.Int
	amount    *big.Int
)

type testContract struct {
}

func (t testContract) AddTip(_requestID *big.Int, _amount *big.Int) (*types.Transaction, error) {
	fmt.Printf("Contract simulation adding tip: %v, %v\n", _requestID, _amount)
	requestID = _requestID
	amount = _amount
	return nil, nil
}

func (t testContract) SubmitSolution(solution string, requestID *big.Int, value *big.Int) (*types.Transaction, error) {
	return nil, nil
}

func (t testContract) DidMine(challenge [32]byte) (bool, error) {
	return false, nil
}

type testSubmit struct {
	contract  *berryCommon.ContractInterface
	submitter *berryCommon.TransactionSubmitter
}

func (t testSubmit) PrepareTransaction(ctx context.Context, ctxName string, fn berryCommon.TransactionGeneratorFN) error {
	_, err := fn(ctx, *t.contract)
	return err
}

func TestRequestDataOps(t *testing.T) {
	exitCh := make(chan os.Signal)
	cfg := config.GetConfig()

	submitter := NewSubmitter()
	DB, err := db.Open(cfg.DBFile)

	//delete any request id
	DB.Delete(db.RequestIdKey)

	if err != nil {
		log.Fatal(err)
	}

	ctx := context.WithValue(context.Background(), berryCommon.DBContextKey, DB)
	proxy := ctx.Value(berryCommon.DataProxyKey).(db.DataServerProxy)
	reqData := CreateDataRequester(exitCh, submitter, 2, proxy)

	//it should not request data if not configured to do it
	cfg.RequestData = 0
	reqData.Start(ctx)
	time.Sleep(300 * time.Millisecond)
	if reqData.submittingRequests {
		t.Fatal("Should not be submitting requests without configured request id")
	}

	cfg.RequestData = 1
	DB.Put(db.RequestIdKey, []byte(hexutil.EncodeBig(big.NewInt(0))))
	reqData.Start(ctx)
	time.Sleep(2500 * time.Millisecond)
	if requestID == nil {
		t.Fatal("Should have requested data")
	}
	requestID = nil
	DB.Put(db.RequestIdKey, []byte(hexutil.EncodeBig(big.NewInt(1))))
	time.Sleep(2500 * time.Millisecond)
	if requestID != nil {
		t.Fatal("Should not have requested data when a challenge request is in progress")
	}

	exitCh <- os.Interrupt
	time.Sleep(300 * time.Millisecond)
	if reqData.submittingRequests {
		t.Fatal("Should not be submitting requests after exit sig")
	}
}
