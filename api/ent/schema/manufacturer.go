package schema

import "entgo.io/ent"

// Manufacturer holds the schema definition for the Manufacturer entity.
type Manufacturer struct {
	ent.Schema
}

// Fields of the Manufacturer.
func (Manufacturer) Fields() []ent.Field {
	return nil
}

// Edges of the Manufacturer.
func (Manufacturer) Edges() []ent.Edge {
	return nil
}
