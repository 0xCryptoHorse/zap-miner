package ops

import (
	"context"
	"fmt"
	"math/big"
	"os"
	"time"

	zapcommon "github.com/zapproject/zap-miner/common"
	zap "github.com/zapproject/zap-miner/contracts"
	zap1 "github.com/zapproject/zap-miner/contracts1"
	"github.com/zapproject/zap-miner/dataServer"
	"github.com/zapproject/zap-miner/util"
)

/**
 * This is the operational database component. Its purpose is to monitor/track various
 * values and cache those values in a local data store for faster retrieval from a miner.
 */

//DataServerOps is the driver for data server
type DataServerOps struct {
	exitCh  chan os.Signal
	done    chan int
	server  *dataServer.DataServer
	log     *util.Logger
	Running bool
}

//CreateDataServerOps creates a data server instance for runtime
func CreateDataServerOps(ctx context.Context, exitCh chan os.Signal) (*DataServerOps, error) {
	ds, err := dataServer.CreateServer(ctx)
	if err != nil {
		return nil, err
	}
	done := make(chan int)
	ops := &DataServerOps{exitCh: exitCh, server: ds, log: util.NewLogger("ops", "DataServerOps"), done: done, Running: false}

	return ops, nil
}

//Start the data server
func (ops *DataServerOps) Start(ctx context.Context) {
	auth, _ := PrepareEthTransaction(ctx)
	instance := ctx.Value(zapcommon.TransactorContractContextKey).(*zap1.ZapTransactor)
	instance.RequestData(auth,
		"json(https://api.coindesk.com/v1/bpi/currentprice.json).bpi.USD.rate", "USD",
		new(big.Int).SetInt64(10), new(big.Int).SetInt64(1))

	master := ctx.Value(zapcommon.MasterContractContextKey).(*zap.ZapMaster)
	fmt.Println(master.GetRequestQ(nil))
	ops.server.Start(ctx, ops.done)
	ops.Running = true
	go func() {
		<-ops.exitCh
		ops.log.Info("Shutting down data server...")
		ops.done <- 1
		cnt := 0
		for {
			time.Sleep(500 * time.Millisecond)
			cnt++
			if ops.server.Stopped {
				break
			}
			if cnt > 60 {
				ops.log.Warn("Expected data server to stop by now, Giving up...")
				return
			}
		}
		ops.Running = false
		ops.log.Info("Data server shutdown complete")
	}()
}

//Ready signals that the data server has completed at least one tracker cycle and any external dependencies
//should be ready to use its initial output
func (ops *DataServerOps) Ready() chan bool {
	return ops.server.Ready()
}
