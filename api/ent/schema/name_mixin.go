package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/field"
	"entgo.io/ent/schema/mixin"
)

type NameMixin struct {
	mixin.Schema
}

func (NameMixin) Fields() []ent.Field {
	return []ent.Field{
		field.Text("name").
			NotEmpty().
			Unique(),
	}
}
