-- name: GetByID :one
SELECT * FROM operating_system WHERE id = $1 LIMIT 1;

-- name: GetManyByIDs :many
SELECT * FROM operating_system WHERE id = ANY($1::bigint[]);

-- name: ListOffset :many
SELECT * FROM operating_system LIMIT $1 OFFSET $2;

-- name: CountTotal :one
SELECT COUNT(id) FROM operating_system;

-- name: CreateOne :one
INSERT INTO operating_system(name, created_at, modified_at) VALUES($1, $2, $3) RETURNING *;

-- name: ListByPattern :many
SELECT * FROM operating_system WHERE name LIKE $1 ORDER BY name ASC LIMIT $2;
