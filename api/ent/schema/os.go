package schema

import (
	"time"

	"entgo.io/contrib/entgql"
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
)

// OS holds the schema definition for the OS entity.
type OS struct {
	ent.Schema
}

// Fields of the OS.
func (OS) Fields() []ent.Field {
	return []ent.Field{
		field.Text("name").
			NotEmpty(),
		field.Time("created_at").
			Default(time.Now).
			Immutable(),
		field.Time("modified_at").
			Default(time.Now),
	}
}

// Edges of the OS.
func (OS) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("phones", Manufacturer.Type).
			Annotations(entgql.Bind()).
			Unique().
			From("os").
			Annotations(entgql.Bind()),
	}
}
