package schema

import (
	"entgo.io/contrib/entgql"
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
)

// Manufacturer holds the schema definition for the Manufacturer entity.
type Manufacturer struct {
	ent.Schema
}

// Fields of the Manufacturer.
func (Manufacturer) Fields() []ent.Field {
	return []ent.Field{}
}

// Edges of the Manufacturer.
func (Manufacturer) Edges() []ent.Edge {
	return []ent.Edge{
		edge.From("phones", Phone.Type).
			Annotations(entgql.Bind()).
			Ref("manufacturer"),
	}
}

func (Manufacturer) Mixin() []ent.Mixin {
	return []ent.Mixin{
		NameMixin{},
		TimestampsMixin{},
	}
}
