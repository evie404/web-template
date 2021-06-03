package schema

import (
	"entgo.io/contrib/entgql"
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
)

// OperatingSystem holds the schema definition for the OperatingSystem entity.
type OperatingSystem struct {
	ent.Schema
}

// Fields of the OperatingSystem.
func (OperatingSystem) Fields() []ent.Field {
	return []ent.Field{}
}

// Edges of the OperatingSystem.
func (OperatingSystem) Edges() []ent.Edge {
	return []ent.Edge{
		edge.From("phones", Phone.Type).
			Annotations(entgql.Bind()).
			Ref("operating_system"),
	}
}

func (OperatingSystem) Mixin() []ent.Mixin {
	return []ent.Mixin{
		NameMixin{},
		TimestampsMixin{},
	}
}
