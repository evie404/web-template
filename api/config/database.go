package config

import (
	"context"
	"database/sql"
	"fmt"
	"os"
	"time"

	"entgo.io/ent/dialect"
	entsql "entgo.io/ent/dialect/sql"
	"github.com/jackc/pgx/v4"
	"github.com/jackc/pgx/v4/log/logrusadapter"
	"github.com/jackc/pgx/v4/stdlib"
	"github.com/rickypai/web-template/api/ent"
	"github.com/sirupsen/logrus"
)

func DB(ctx context.Context) (*sql.DB, error) {
	return databaseConnection(ctx, os.Getenv("POSTGRES_HOST")+"/web_template_dev", nil)
}

func EntClient(db *sql.DB) *ent.Client {
	drv := entsql.OpenDB(dialect.Postgres, db)
	return ent.NewClient(ent.Driver(drv))
}

func TestDB(ctx context.Context) (*sql.DB, error) {
	looger := logrusadapter.NewLogger(
		logrus.New(),
	)

	return databaseConnection(ctx, os.Getenv("POSTGRES_HOST")+"/web_template_test", looger)
}

func databaseConnection(ctx context.Context, url string, logger pgx.Logger) (*sql.DB, error) {
	// TODO: use connection pool
	c, err := pgx.ParseConfig(url)
	if err != nil {
		return nil, fmt.Errorf("parsing postgres URI: %w", err)
	}

	c.Logger = logger

	db := stdlib.OpenDB(*c)

	go pingDbLoop(ctx, db)

	return db, nil
}

func pingDbLoop(ctx context.Context, db *sql.DB) {
	for {
		err := db.PingContext(ctx)
		if err != nil {
			fmt.Println("PostgreSQL is down", err)
		}

		time.Sleep(100 * time.Millisecond)
	}
}
