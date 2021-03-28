-- name: GetByID :one
SELECT * FROM manufacturers WHERE id = $1 LIMIT 1;

-- name: GetManyByIDs :many
SELECT * FROM manufacturers WHERE id = ANY($1::bigint[]);

-- name: ListOffset :many
SELECT * FROM manufacturers LIMIT $1 OFFSET $2;

-- name: CountTotal :one
SELECT COUNT(id) FROM manufacturers;

-- name: CreateOne :one
INSERT INTO manufacturers(name, created_at, modified_at) VALUES($1, $2, $3) RETURNING *;

-- name: ListByPattern :many
SELECT * FROM manufacturers WHERE name LIKE $1 ORDER BY name ASC LIMIT $2;
