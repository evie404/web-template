package schema

import (
	"time"

	"entgo.io/contrib/entgql"
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
)

// Manufacturer holds the schema definition for the Manufacturer entity.
type Manufacturer struct {
	ent.Schema
}

// Fields of the Manufacturer.
func (Manufacturer) Fields() []ent.Field {
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

// Edges of the Manufacturer.
func (Manufacturer) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("phones", Manufacturer.Type).
			Annotations(entgql.Bind()).
			Unique(),
	}
}
