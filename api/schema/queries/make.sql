-- name: GetByID :one
SELECT * FROM make WHERE id = $1 LIMIT 1;

-- name: GetManyByIDs :many
SELECT * FROM make WHERE id = ANY($1::bigint[]);

-- name: ListOffset :many
SELECT * FROM make LIMIT $1 OFFSET $2;

-- name: CountTotal :one
SELECT COUNT(id) FROM make;

-- name: CreateOne :one
INSERT INTO make(name, created_at, modified_at) VALUES($1, $2, $3) RETURNING *;

-- name: ListByPattern :many
SELECT * FROM make WHERE name LIKE $1 LIMIT $2;
