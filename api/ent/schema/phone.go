package schema

import (
	"time"

	"entgo.io/contrib/entgql"
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
)

// Phone holds the schema definition for the Phone entity.
type Phone struct {
	ent.Schema
}

// Fields of the Phone.
func (Phone) Fields() []ent.Field {
	return []ent.Field{
		field.Text("name").
			NotEmpty().
			Unique(),
		field.Time("created_at").
			Default(time.Now).
			Immutable(),
		field.Time("modified_at").
			Default(time.Now),
	}
}

// Edges of the Phone.
func (Phone) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("manufacturer", Manufacturer.Type).
			Annotations(entgql.Bind()).
			StorageKey(edge.Column("manufacturer_id")).
			Unique().
			Required(),
		edge.To("operating_system", OperatingSystem.Type).
			Annotations(entgql.Bind()).
			StorageKey(edge.Column("operating_system_id")).
			Unique().
			Required(),
	}
}
