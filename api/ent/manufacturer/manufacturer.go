// Code generated by entc, DO NOT EDIT.

package manufacturer

import (
	"time"
)

const (
	// Label holds the string label denoting the manufacturer type in the database.
	Label = "manufacturer"
	// FieldID holds the string denoting the id field in the database.
	FieldID = "id"
	// FieldName holds the string denoting the name field in the database.
	FieldName = "name"
	// FieldCreatedAt holds the string denoting the created_at field in the database.
	FieldCreatedAt = "created_at"
	// FieldModifiedAt holds the string denoting the modified_at field in the database.
	FieldModifiedAt = "modified_at"
	// EdgePhones holds the string denoting the phones edge name in mutations.
	EdgePhones = "phones"
	// Table holds the table name of the manufacturer in the database.
	Table = "manufacturers"
	// PhonesTable is the table the holds the phones relation/edge.
	PhonesTable = "phones"
	// PhonesInverseTable is the table name for the Phone entity.
	// It exists in this package in order to avoid circular dependency with the "phone" package.
	PhonesInverseTable = "phones"
	// PhonesColumn is the table column denoting the phones relation/edge.
	PhonesColumn = "manufacturer_id"
)

// Columns holds all SQL columns for manufacturer fields.
var Columns = []string{
	FieldID,
	FieldName,
	FieldCreatedAt,
	FieldModifiedAt,
}

// ValidColumn reports if the column name is valid (part of the table columns).
func ValidColumn(column string) bool {
	for i := range Columns {
		if column == Columns[i] {
			return true
		}
	}
	return false
}

var (
	// NameValidator is a validator for the "name" field. It is called by the builders before save.
	NameValidator func(string) error
	// DefaultCreatedAt holds the default value on creation for the "created_at" field.
	DefaultCreatedAt func() time.Time
	// DefaultModifiedAt holds the default value on creation for the "modified_at" field.
	DefaultModifiedAt func() time.Time
)
