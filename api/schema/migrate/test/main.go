package main

import (
	"context"
	"log"

	"github.com/rickypai/web-template/api/config"
	"github.com/rickypai/web-template/api/schema/migrate/common"
)

func main() {
	ctx := context.Background()

	db, err := config.TestDB(ctx)
	if err != nil {
		log.Fatalf("creating database connection: %s", err)
	}

	err = common.MigrateInstance(db)
	if err != nil {
		log.Fatalf("running migrations: %s", err)
	}
}
