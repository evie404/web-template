package schema

import (
	"entgo.io/contrib/entgql"
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
)

// Phone holds the schema definition for the Phone entity.
type Phone struct {
	ent.Schema
}

// Fields of the Phone.
func (Phone) Fields() []ent.Field {
	return []ent.Field{}
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

func (Phone) Mixin() []ent.Mixin {
	return []ent.Mixin{
		NameMixin{},
		TimestampsMixin{},
	}
}
