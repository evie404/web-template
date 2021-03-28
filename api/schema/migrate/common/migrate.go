package common

import (
	"context"
	"database/sql"

	"github.com/rickypai/web-template/api/config"
	"github.com/rickypai/web-template/api/ent/migrate"
)

func MigrateInstance(ctx context.Context, db *sql.DB) error {
	client := config.EntClient(db)
	defer client.Close()

	// Run migration.
	return client.Schema.Create(
		ctx,
		migrate.WithDropIndex(true),
		migrate.WithDropColumn(true),
	)
}
