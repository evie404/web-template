package common

import (
	"database/sql"
	"fmt"
	"os"

	"github.com/golang-migrate/migrate/v4"
	"github.com/golang-migrate/migrate/v4/database/postgres"
	_ "github.com/golang-migrate/migrate/v4/source/file"
)

func MigrateInstance(db *sql.DB) error {
	driver, err := postgres.WithInstance(db, &postgres.Config{})
	if err != nil {
		return fmt.Errorf("creating migration database driver: %s", err)
	}

	var m *migrate.Migrate

	if _, err := os.Stat("db/migrations"); os.IsNotExist(err) {
		m, err = migrate.NewWithDatabaseInstance(
			"file://../db/migrations",
			"postgres",
			driver,
		)
	} else {
		m, err = migrate.NewWithDatabaseInstance(
			"file://db/migrations",
			"postgres",
			driver,
		)
	}
	if err != nil {
		return fmt.Errorf("creating new migration instance: %s", err)
	}

	err = m.Up()
	if err != nil {
		return fmt.Errorf("running migrations: %s", err)
	}

	return nil
}
