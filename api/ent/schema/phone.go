package schema

import "entgo.io/ent"

// Phone holds the schema definition for the Phone entity.
type Phone struct {
	ent.Schema
}

// Fields of the Phone.
func (Phone) Fields() []ent.Field {
	return nil
}

// Edges of the Phone.
func (Phone) Edges() []ent.Edge {
	return nil
}
