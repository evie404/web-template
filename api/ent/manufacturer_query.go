// Code generated by entc, DO NOT EDIT.

package ent

import (
	"context"
	"database/sql/driver"
	"errors"
	"fmt"
	"math"

	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
	"entgo.io/ent/schema/field"
	"github.com/rickypai/web-template/api/ent/manufacturer"
	"github.com/rickypai/web-template/api/ent/phone"
	"github.com/rickypai/web-template/api/ent/predicate"
)

// ManufacturerQuery is the builder for querying Manufacturer entities.
type ManufacturerQuery struct {
	config
	limit      *int
	offset     *int
	order      []OrderFunc
	fields     []string
	predicates []predicate.Manufacturer
	// eager-loading edges.
	withPhones *PhoneQuery
	// intermediate query (i.e. traversal path).
	sql  *sql.Selector
	path func(context.Context) (*sql.Selector, error)
}

// Where adds a new predicate for the ManufacturerQuery builder.
func (mq *ManufacturerQuery) Where(ps ...predicate.Manufacturer) *ManufacturerQuery {
	mq.predicates = append(mq.predicates, ps...)
	return mq
}

// Limit adds a limit step to the query.
func (mq *ManufacturerQuery) Limit(limit int) *ManufacturerQuery {
	mq.limit = &limit
	return mq
}

// Offset adds an offset step to the query.
func (mq *ManufacturerQuery) Offset(offset int) *ManufacturerQuery {
	mq.offset = &offset
	return mq
}

// Order adds an order step to the query.
func (mq *ManufacturerQuery) Order(o ...OrderFunc) *ManufacturerQuery {
	mq.order = append(mq.order, o...)
	return mq
}

// QueryPhones chains the current query on the "phones" edge.
func (mq *ManufacturerQuery) QueryPhones() *PhoneQuery {
	query := &PhoneQuery{config: mq.config}
	query.path = func(ctx context.Context) (fromU *sql.Selector, err error) {
		if err := mq.prepareQuery(ctx); err != nil {
			return nil, err
		}
		selector := mq.sqlQuery(ctx)
		if err := selector.Err(); err != nil {
			return nil, err
		}
		step := sqlgraph.NewStep(
			sqlgraph.From(manufacturer.Table, manufacturer.FieldID, selector),
			sqlgraph.To(phone.Table, phone.FieldID),
			sqlgraph.Edge(sqlgraph.O2M, true, manufacturer.PhonesTable, manufacturer.PhonesColumn),
		)
		fromU = sqlgraph.SetNeighbors(mq.driver.Dialect(), step)
		return fromU, nil
	}
	return query
}

// First returns the first Manufacturer entity from the query.
// Returns a *NotFoundError when no Manufacturer was found.
func (mq *ManufacturerQuery) First(ctx context.Context) (*Manufacturer, error) {
	nodes, err := mq.Limit(1).All(ctx)
	if err != nil {
		return nil, err
	}
	if len(nodes) == 0 {
		return nil, &NotFoundError{manufacturer.Label}
	}
	return nodes[0], nil
}

// FirstX is like First, but panics if an error occurs.
func (mq *ManufacturerQuery) FirstX(ctx context.Context) *Manufacturer {
	node, err := mq.First(ctx)
	if err != nil && !IsNotFound(err) {
		panic(err)
	}
	return node
}

// FirstID returns the first Manufacturer ID from the query.
// Returns a *NotFoundError when no Manufacturer ID was found.
func (mq *ManufacturerQuery) FirstID(ctx context.Context) (id int, err error) {
	var ids []int
	if ids, err = mq.Limit(1).IDs(ctx); err != nil {
		return
	}
	if len(ids) == 0 {
		err = &NotFoundError{manufacturer.Label}
		return
	}
	return ids[0], nil
}

// FirstIDX is like FirstID, but panics if an error occurs.
func (mq *ManufacturerQuery) FirstIDX(ctx context.Context) int {
	id, err := mq.FirstID(ctx)
	if err != nil && !IsNotFound(err) {
		panic(err)
	}
	return id
}

// Only returns a single Manufacturer entity found by the query, ensuring it only returns one.
// Returns a *NotSingularError when exactly one Manufacturer entity is not found.
// Returns a *NotFoundError when no Manufacturer entities are found.
func (mq *ManufacturerQuery) Only(ctx context.Context) (*Manufacturer, error) {
	nodes, err := mq.Limit(2).All(ctx)
	if err != nil {
		return nil, err
	}
	switch len(nodes) {
	case 1:
		return nodes[0], nil
	case 0:
		return nil, &NotFoundError{manufacturer.Label}
	default:
		return nil, &NotSingularError{manufacturer.Label}
	}
}

// OnlyX is like Only, but panics if an error occurs.
func (mq *ManufacturerQuery) OnlyX(ctx context.Context) *Manufacturer {
	node, err := mq.Only(ctx)
	if err != nil {
		panic(err)
	}
	return node
}

// OnlyID is like Only, but returns the only Manufacturer ID in the query.
// Returns a *NotSingularError when exactly one Manufacturer ID is not found.
// Returns a *NotFoundError when no entities are found.
func (mq *ManufacturerQuery) OnlyID(ctx context.Context) (id int, err error) {
	var ids []int
	if ids, err = mq.Limit(2).IDs(ctx); err != nil {
		return
	}
	switch len(ids) {
	case 1:
		id = ids[0]
	case 0:
		err = &NotFoundError{manufacturer.Label}
	default:
		err = &NotSingularError{manufacturer.Label}
	}
	return
}

// OnlyIDX is like OnlyID, but panics if an error occurs.
func (mq *ManufacturerQuery) OnlyIDX(ctx context.Context) int {
	id, err := mq.OnlyID(ctx)
	if err != nil {
		panic(err)
	}
	return id
}

// All executes the query and returns a list of Manufacturers.
func (mq *ManufacturerQuery) All(ctx context.Context) ([]*Manufacturer, error) {
	if err := mq.prepareQuery(ctx); err != nil {
		return nil, err
	}
	return mq.sqlAll(ctx)
}

// AllX is like All, but panics if an error occurs.
func (mq *ManufacturerQuery) AllX(ctx context.Context) []*Manufacturer {
	nodes, err := mq.All(ctx)
	if err != nil {
		panic(err)
	}
	return nodes
}

// IDs executes the query and returns a list of Manufacturer IDs.
func (mq *ManufacturerQuery) IDs(ctx context.Context) ([]int, error) {
	var ids []int
	if err := mq.Select(manufacturer.FieldID).Scan(ctx, &ids); err != nil {
		return nil, err
	}
	return ids, nil
}

// IDsX is like IDs, but panics if an error occurs.
func (mq *ManufacturerQuery) IDsX(ctx context.Context) []int {
	ids, err := mq.IDs(ctx)
	if err != nil {
		panic(err)
	}
	return ids
}

// Count returns the count of the given query.
func (mq *ManufacturerQuery) Count(ctx context.Context) (int, error) {
	if err := mq.prepareQuery(ctx); err != nil {
		return 0, err
	}
	return mq.sqlCount(ctx)
}

// CountX is like Count, but panics if an error occurs.
func (mq *ManufacturerQuery) CountX(ctx context.Context) int {
	count, err := mq.Count(ctx)
	if err != nil {
		panic(err)
	}
	return count
}

// Exist returns true if the query has elements in the graph.
func (mq *ManufacturerQuery) Exist(ctx context.Context) (bool, error) {
	if err := mq.prepareQuery(ctx); err != nil {
		return false, err
	}
	return mq.sqlExist(ctx)
}

// ExistX is like Exist, but panics if an error occurs.
func (mq *ManufacturerQuery) ExistX(ctx context.Context) bool {
	exist, err := mq.Exist(ctx)
	if err != nil {
		panic(err)
	}
	return exist
}

// Clone returns a duplicate of the ManufacturerQuery builder, including all associated steps. It can be
// used to prepare common query builders and use them differently after the clone is made.
func (mq *ManufacturerQuery) Clone() *ManufacturerQuery {
	if mq == nil {
		return nil
	}
	return &ManufacturerQuery{
		config:     mq.config,
		limit:      mq.limit,
		offset:     mq.offset,
		order:      append([]OrderFunc{}, mq.order...),
		predicates: append([]predicate.Manufacturer{}, mq.predicates...),
		withPhones: mq.withPhones.Clone(),
		// clone intermediate query.
		sql:  mq.sql.Clone(),
		path: mq.path,
	}
}

// WithPhones tells the query-builder to eager-load the nodes that are connected to
// the "phones" edge. The optional arguments are used to configure the query builder of the edge.
func (mq *ManufacturerQuery) WithPhones(opts ...func(*PhoneQuery)) *ManufacturerQuery {
	query := &PhoneQuery{config: mq.config}
	for _, opt := range opts {
		opt(query)
	}
	mq.withPhones = query
	return mq
}

// GroupBy is used to group vertices by one or more fields/columns.
// It is often used with aggregate functions, like: count, max, mean, min, sum.
//
// Example:
//
//	var v []struct {
//		Name string `json:"name,omitempty"`
//		Count int `json:"count,omitempty"`
//	}
//
//	client.Manufacturer.Query().
//		GroupBy(manufacturer.FieldName).
//		Aggregate(ent.Count()).
//		Scan(ctx, &v)
//
func (mq *ManufacturerQuery) GroupBy(field string, fields ...string) *ManufacturerGroupBy {
	group := &ManufacturerGroupBy{config: mq.config}
	group.fields = append([]string{field}, fields...)
	group.path = func(ctx context.Context) (prev *sql.Selector, err error) {
		if err := mq.prepareQuery(ctx); err != nil {
			return nil, err
		}
		return mq.sqlQuery(ctx), nil
	}
	return group
}

// Select allows the selection one or more fields/columns for the given query,
// instead of selecting all fields in the entity.
//
// Example:
//
//	var v []struct {
//		Name string `json:"name,omitempty"`
//	}
//
//	client.Manufacturer.Query().
//		Select(manufacturer.FieldName).
//		Scan(ctx, &v)
//
func (mq *ManufacturerQuery) Select(field string, fields ...string) *ManufacturerSelect {
	mq.fields = append([]string{field}, fields...)
	return &ManufacturerSelect{ManufacturerQuery: mq}
}

func (mq *ManufacturerQuery) prepareQuery(ctx context.Context) error {
	for _, f := range mq.fields {
		if !manufacturer.ValidColumn(f) {
			return &ValidationError{Name: f, err: fmt.Errorf("ent: invalid field %q for query", f)}
		}
	}
	if mq.path != nil {
		prev, err := mq.path(ctx)
		if err != nil {
			return err
		}
		mq.sql = prev
	}
	return nil
}

func (mq *ManufacturerQuery) sqlAll(ctx context.Context) ([]*Manufacturer, error) {
	var (
		nodes       = []*Manufacturer{}
		_spec       = mq.querySpec()
		loadedTypes = [1]bool{
			mq.withPhones != nil,
		}
	)
	_spec.ScanValues = func(columns []string) ([]interface{}, error) {
		node := &Manufacturer{config: mq.config}
		nodes = append(nodes, node)
		return node.scanValues(columns)
	}
	_spec.Assign = func(columns []string, values []interface{}) error {
		if len(nodes) == 0 {
			return fmt.Errorf("ent: Assign called without calling ScanValues")
		}
		node := nodes[len(nodes)-1]
		node.Edges.loadedTypes = loadedTypes
		return node.assignValues(columns, values)
	}
	if err := sqlgraph.QueryNodes(ctx, mq.driver, _spec); err != nil {
		return nil, err
	}
	if len(nodes) == 0 {
		return nodes, nil
	}

	if query := mq.withPhones; query != nil {
		fks := make([]driver.Value, 0, len(nodes))
		nodeids := make(map[int]*Manufacturer)
		for i := range nodes {
			fks = append(fks, nodes[i].ID)
			nodeids[nodes[i].ID] = nodes[i]
			nodes[i].Edges.Phones = []*Phone{}
		}
		query.withFKs = true
		query.Where(predicate.Phone(func(s *sql.Selector) {
			s.Where(sql.InValues(manufacturer.PhonesColumn, fks...))
		}))
		neighbors, err := query.All(ctx)
		if err != nil {
			return nil, err
		}
		for _, n := range neighbors {
			fk := n.manufacturer_id
			if fk == nil {
				return nil, fmt.Errorf(`foreign-key "manufacturer_id" is nil for node %v`, n.ID)
			}
			node, ok := nodeids[*fk]
			if !ok {
				return nil, fmt.Errorf(`unexpected foreign-key "manufacturer_id" returned %v for node %v`, *fk, n.ID)
			}
			node.Edges.Phones = append(node.Edges.Phones, n)
		}
	}

	return nodes, nil
}

func (mq *ManufacturerQuery) sqlCount(ctx context.Context) (int, error) {
	_spec := mq.querySpec()
	return sqlgraph.CountNodes(ctx, mq.driver, _spec)
}

func (mq *ManufacturerQuery) sqlExist(ctx context.Context) (bool, error) {
	n, err := mq.sqlCount(ctx)
	if err != nil {
		return false, fmt.Errorf("ent: check existence: %w", err)
	}
	return n > 0, nil
}

func (mq *ManufacturerQuery) querySpec() *sqlgraph.QuerySpec {
	_spec := &sqlgraph.QuerySpec{
		Node: &sqlgraph.NodeSpec{
			Table:   manufacturer.Table,
			Columns: manufacturer.Columns,
			ID: &sqlgraph.FieldSpec{
				Type:   field.TypeInt,
				Column: manufacturer.FieldID,
			},
		},
		From:   mq.sql,
		Unique: true,
	}
	if fields := mq.fields; len(fields) > 0 {
		_spec.Node.Columns = make([]string, 0, len(fields))
		_spec.Node.Columns = append(_spec.Node.Columns, manufacturer.FieldID)
		for i := range fields {
			if fields[i] != manufacturer.FieldID {
				_spec.Node.Columns = append(_spec.Node.Columns, fields[i])
			}
		}
	}
	if ps := mq.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	if limit := mq.limit; limit != nil {
		_spec.Limit = *limit
	}
	if offset := mq.offset; offset != nil {
		_spec.Offset = *offset
	}
	if ps := mq.order; len(ps) > 0 {
		_spec.Order = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector, manufacturer.ValidColumn)
			}
		}
	}
	return _spec
}

func (mq *ManufacturerQuery) sqlQuery(ctx context.Context) *sql.Selector {
	builder := sql.Dialect(mq.driver.Dialect())
	t1 := builder.Table(manufacturer.Table)
	selector := builder.Select(t1.Columns(manufacturer.Columns...)...).From(t1)
	if mq.sql != nil {
		selector = mq.sql
		selector.Select(selector.Columns(manufacturer.Columns...)...)
	}
	for _, p := range mq.predicates {
		p(selector)
	}
	for _, p := range mq.order {
		p(selector, manufacturer.ValidColumn)
	}
	if offset := mq.offset; offset != nil {
		// limit is mandatory for offset clause. We start
		// with default value, and override it below if needed.
		selector.Offset(*offset).Limit(math.MaxInt32)
	}
	if limit := mq.limit; limit != nil {
		selector.Limit(*limit)
	}
	return selector
}

// ManufacturerGroupBy is the group-by builder for Manufacturer entities.
type ManufacturerGroupBy struct {
	config
	fields []string
	fns    []AggregateFunc
	// intermediate query (i.e. traversal path).
	sql  *sql.Selector
	path func(context.Context) (*sql.Selector, error)
}

// Aggregate adds the given aggregation functions to the group-by query.
func (mgb *ManufacturerGroupBy) Aggregate(fns ...AggregateFunc) *ManufacturerGroupBy {
	mgb.fns = append(mgb.fns, fns...)
	return mgb
}

// Scan applies the group-by query and scans the result into the given value.
func (mgb *ManufacturerGroupBy) Scan(ctx context.Context, v interface{}) error {
	query, err := mgb.path(ctx)
	if err != nil {
		return err
	}
	mgb.sql = query
	return mgb.sqlScan(ctx, v)
}

// ScanX is like Scan, but panics if an error occurs.
func (mgb *ManufacturerGroupBy) ScanX(ctx context.Context, v interface{}) {
	if err := mgb.Scan(ctx, v); err != nil {
		panic(err)
	}
}

// Strings returns list of strings from group-by.
// It is only allowed when executing a group-by query with one field.
func (mgb *ManufacturerGroupBy) Strings(ctx context.Context) ([]string, error) {
	if len(mgb.fields) > 1 {
		return nil, errors.New("ent: ManufacturerGroupBy.Strings is not achievable when grouping more than 1 field")
	}
	var v []string
	if err := mgb.Scan(ctx, &v); err != nil {
		return nil, err
	}
	return v, nil
}

// StringsX is like Strings, but panics if an error occurs.
func (mgb *ManufacturerGroupBy) StringsX(ctx context.Context) []string {
	v, err := mgb.Strings(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

// String returns a single string from a group-by query.
// It is only allowed when executing a group-by query with one field.
func (mgb *ManufacturerGroupBy) String(ctx context.Context) (_ string, err error) {
	var v []string
	if v, err = mgb.Strings(ctx); err != nil {
		return
	}
	switch len(v) {
	case 1:
		return v[0], nil
	case 0:
		err = &NotFoundError{manufacturer.Label}
	default:
		err = fmt.Errorf("ent: ManufacturerGroupBy.Strings returned %d results when one was expected", len(v))
	}
	return
}

// StringX is like String, but panics if an error occurs.
func (mgb *ManufacturerGroupBy) StringX(ctx context.Context) string {
	v, err := mgb.String(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

// Ints returns list of ints from group-by.
// It is only allowed when executing a group-by query with one field.
func (mgb *ManufacturerGroupBy) Ints(ctx context.Context) ([]int, error) {
	if len(mgb.fields) > 1 {
		return nil, errors.New("ent: ManufacturerGroupBy.Ints is not achievable when grouping more than 1 field")
	}
	var v []int
	if err := mgb.Scan(ctx, &v); err != nil {
		return nil, err
	}
	return v, nil
}

// IntsX is like Ints, but panics if an error occurs.
func (mgb *ManufacturerGroupBy) IntsX(ctx context.Context) []int {
	v, err := mgb.Ints(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

// Int returns a single int from a group-by query.
// It is only allowed when executing a group-by query with one field.
func (mgb *ManufacturerGroupBy) Int(ctx context.Context) (_ int, err error) {
	var v []int
	if v, err = mgb.Ints(ctx); err != nil {
		return
	}
	switch len(v) {
	case 1:
		return v[0], nil
	case 0:
		err = &NotFoundError{manufacturer.Label}
	default:
		err = fmt.Errorf("ent: ManufacturerGroupBy.Ints returned %d results when one was expected", len(v))
	}
	return
}

// IntX is like Int, but panics if an error occurs.
func (mgb *ManufacturerGroupBy) IntX(ctx context.Context) int {
	v, err := mgb.Int(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

// Float64s returns list of float64s from group-by.
// It is only allowed when executing a group-by query with one field.
func (mgb *ManufacturerGroupBy) Float64s(ctx context.Context) ([]float64, error) {
	if len(mgb.fields) > 1 {
		return nil, errors.New("ent: ManufacturerGroupBy.Float64s is not achievable when grouping more than 1 field")
	}
	var v []float64
	if err := mgb.Scan(ctx, &v); err != nil {
		return nil, err
	}
	return v, nil
}

// Float64sX is like Float64s, but panics if an error occurs.
func (mgb *ManufacturerGroupBy) Float64sX(ctx context.Context) []float64 {
	v, err := mgb.Float64s(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

// Float64 returns a single float64 from a group-by query.
// It is only allowed when executing a group-by query with one field.
func (mgb *ManufacturerGroupBy) Float64(ctx context.Context) (_ float64, err error) {
	var v []float64
	if v, err = mgb.Float64s(ctx); err != nil {
		return
	}
	switch len(v) {
	case 1:
		return v[0], nil
	case 0:
		err = &NotFoundError{manufacturer.Label}
	default:
		err = fmt.Errorf("ent: ManufacturerGroupBy.Float64s returned %d results when one was expected", len(v))
	}
	return
}

// Float64X is like Float64, but panics if an error occurs.
func (mgb *ManufacturerGroupBy) Float64X(ctx context.Context) float64 {
	v, err := mgb.Float64(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

// Bools returns list of bools from group-by.
// It is only allowed when executing a group-by query with one field.
func (mgb *ManufacturerGroupBy) Bools(ctx context.Context) ([]bool, error) {
	if len(mgb.fields) > 1 {
		return nil, errors.New("ent: ManufacturerGroupBy.Bools is not achievable when grouping more than 1 field")
	}
	var v []bool
	if err := mgb.Scan(ctx, &v); err != nil {
		return nil, err
	}
	return v, nil
}

// BoolsX is like Bools, but panics if an error occurs.
func (mgb *ManufacturerGroupBy) BoolsX(ctx context.Context) []bool {
	v, err := mgb.Bools(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

// Bool returns a single bool from a group-by query.
// It is only allowed when executing a group-by query with one field.
func (mgb *ManufacturerGroupBy) Bool(ctx context.Context) (_ bool, err error) {
	var v []bool
	if v, err = mgb.Bools(ctx); err != nil {
		return
	}
	switch len(v) {
	case 1:
		return v[0], nil
	case 0:
		err = &NotFoundError{manufacturer.Label}
	default:
		err = fmt.Errorf("ent: ManufacturerGroupBy.Bools returned %d results when one was expected", len(v))
	}
	return
}

// BoolX is like Bool, but panics if an error occurs.
func (mgb *ManufacturerGroupBy) BoolX(ctx context.Context) bool {
	v, err := mgb.Bool(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

func (mgb *ManufacturerGroupBy) sqlScan(ctx context.Context, v interface{}) error {
	for _, f := range mgb.fields {
		if !manufacturer.ValidColumn(f) {
			return &ValidationError{Name: f, err: fmt.Errorf("invalid field %q for group-by", f)}
		}
	}
	selector := mgb.sqlQuery()
	if err := selector.Err(); err != nil {
		return err
	}
	rows := &sql.Rows{}
	query, args := selector.Query()
	if err := mgb.driver.Query(ctx, query, args, rows); err != nil {
		return err
	}
	defer rows.Close()
	return sql.ScanSlice(rows, v)
}

func (mgb *ManufacturerGroupBy) sqlQuery() *sql.Selector {
	selector := mgb.sql
	columns := make([]string, 0, len(mgb.fields)+len(mgb.fns))
	columns = append(columns, mgb.fields...)
	for _, fn := range mgb.fns {
		columns = append(columns, fn(selector, manufacturer.ValidColumn))
	}
	return selector.Select(columns...).GroupBy(mgb.fields...)
}

// ManufacturerSelect is the builder for selecting fields of Manufacturer entities.
type ManufacturerSelect struct {
	*ManufacturerQuery
	// intermediate query (i.e. traversal path).
	sql *sql.Selector
}

// Scan applies the selector query and scans the result into the given value.
func (ms *ManufacturerSelect) Scan(ctx context.Context, v interface{}) error {
	if err := ms.prepareQuery(ctx); err != nil {
		return err
	}
	ms.sql = ms.ManufacturerQuery.sqlQuery(ctx)
	return ms.sqlScan(ctx, v)
}

// ScanX is like Scan, but panics if an error occurs.
func (ms *ManufacturerSelect) ScanX(ctx context.Context, v interface{}) {
	if err := ms.Scan(ctx, v); err != nil {
		panic(err)
	}
}

// Strings returns list of strings from a selector. It is only allowed when selecting one field.
func (ms *ManufacturerSelect) Strings(ctx context.Context) ([]string, error) {
	if len(ms.fields) > 1 {
		return nil, errors.New("ent: ManufacturerSelect.Strings is not achievable when selecting more than 1 field")
	}
	var v []string
	if err := ms.Scan(ctx, &v); err != nil {
		return nil, err
	}
	return v, nil
}

// StringsX is like Strings, but panics if an error occurs.
func (ms *ManufacturerSelect) StringsX(ctx context.Context) []string {
	v, err := ms.Strings(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

// String returns a single string from a selector. It is only allowed when selecting one field.
func (ms *ManufacturerSelect) String(ctx context.Context) (_ string, err error) {
	var v []string
	if v, err = ms.Strings(ctx); err != nil {
		return
	}
	switch len(v) {
	case 1:
		return v[0], nil
	case 0:
		err = &NotFoundError{manufacturer.Label}
	default:
		err = fmt.Errorf("ent: ManufacturerSelect.Strings returned %d results when one was expected", len(v))
	}
	return
}

// StringX is like String, but panics if an error occurs.
func (ms *ManufacturerSelect) StringX(ctx context.Context) string {
	v, err := ms.String(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

// Ints returns list of ints from a selector. It is only allowed when selecting one field.
func (ms *ManufacturerSelect) Ints(ctx context.Context) ([]int, error) {
	if len(ms.fields) > 1 {
		return nil, errors.New("ent: ManufacturerSelect.Ints is not achievable when selecting more than 1 field")
	}
	var v []int
	if err := ms.Scan(ctx, &v); err != nil {
		return nil, err
	}
	return v, nil
}

// IntsX is like Ints, but panics if an error occurs.
func (ms *ManufacturerSelect) IntsX(ctx context.Context) []int {
	v, err := ms.Ints(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

// Int returns a single int from a selector. It is only allowed when selecting one field.
func (ms *ManufacturerSelect) Int(ctx context.Context) (_ int, err error) {
	var v []int
	if v, err = ms.Ints(ctx); err != nil {
		return
	}
	switch len(v) {
	case 1:
		return v[0], nil
	case 0:
		err = &NotFoundError{manufacturer.Label}
	default:
		err = fmt.Errorf("ent: ManufacturerSelect.Ints returned %d results when one was expected", len(v))
	}
	return
}

// IntX is like Int, but panics if an error occurs.
func (ms *ManufacturerSelect) IntX(ctx context.Context) int {
	v, err := ms.Int(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

// Float64s returns list of float64s from a selector. It is only allowed when selecting one field.
func (ms *ManufacturerSelect) Float64s(ctx context.Context) ([]float64, error) {
	if len(ms.fields) > 1 {
		return nil, errors.New("ent: ManufacturerSelect.Float64s is not achievable when selecting more than 1 field")
	}
	var v []float64
	if err := ms.Scan(ctx, &v); err != nil {
		return nil, err
	}
	return v, nil
}

// Float64sX is like Float64s, but panics if an error occurs.
func (ms *ManufacturerSelect) Float64sX(ctx context.Context) []float64 {
	v, err := ms.Float64s(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

// Float64 returns a single float64 from a selector. It is only allowed when selecting one field.
func (ms *ManufacturerSelect) Float64(ctx context.Context) (_ float64, err error) {
	var v []float64
	if v, err = ms.Float64s(ctx); err != nil {
		return
	}
	switch len(v) {
	case 1:
		return v[0], nil
	case 0:
		err = &NotFoundError{manufacturer.Label}
	default:
		err = fmt.Errorf("ent: ManufacturerSelect.Float64s returned %d results when one was expected", len(v))
	}
	return
}

// Float64X is like Float64, but panics if an error occurs.
func (ms *ManufacturerSelect) Float64X(ctx context.Context) float64 {
	v, err := ms.Float64(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

// Bools returns list of bools from a selector. It is only allowed when selecting one field.
func (ms *ManufacturerSelect) Bools(ctx context.Context) ([]bool, error) {
	if len(ms.fields) > 1 {
		return nil, errors.New("ent: ManufacturerSelect.Bools is not achievable when selecting more than 1 field")
	}
	var v []bool
	if err := ms.Scan(ctx, &v); err != nil {
		return nil, err
	}
	return v, nil
}

// BoolsX is like Bools, but panics if an error occurs.
func (ms *ManufacturerSelect) BoolsX(ctx context.Context) []bool {
	v, err := ms.Bools(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

// Bool returns a single bool from a selector. It is only allowed when selecting one field.
func (ms *ManufacturerSelect) Bool(ctx context.Context) (_ bool, err error) {
	var v []bool
	if v, err = ms.Bools(ctx); err != nil {
		return
	}
	switch len(v) {
	case 1:
		return v[0], nil
	case 0:
		err = &NotFoundError{manufacturer.Label}
	default:
		err = fmt.Errorf("ent: ManufacturerSelect.Bools returned %d results when one was expected", len(v))
	}
	return
}

// BoolX is like Bool, but panics if an error occurs.
func (ms *ManufacturerSelect) BoolX(ctx context.Context) bool {
	v, err := ms.Bool(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

func (ms *ManufacturerSelect) sqlScan(ctx context.Context, v interface{}) error {
	rows := &sql.Rows{}
	query, args := ms.sqlQuery().Query()
	if err := ms.driver.Query(ctx, query, args, rows); err != nil {
		return err
	}
	defer rows.Close()
	return sql.ScanSlice(rows, v)
}

func (ms *ManufacturerSelect) sqlQuery() sql.Querier {
	selector := ms.sql
	selector.Select(selector.Columns(ms.fields...)...)
	return selector
}
