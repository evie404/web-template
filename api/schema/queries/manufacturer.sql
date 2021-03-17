-- name: GetByID :one
SELECT * FROM manufacturer WHERE id = $1 LIMIT 1;

-- name: GetManyByIDs :many
SELECT * FROM manufacturer WHERE id = ANY($1::bigint[]);

-- name: ListOffset :many
SELECT * FROM manufacturer LIMIT $1 OFFSET $2;

-- name: CountTotal :one
SELECT COUNT(id) FROM manufacturer;

-- name: CreateOne :one
INSERT INTO manufacturer(name, created_at, modified_at) VALUES($1, $2, $3) RETURNING *;

-- name: ListByPattern :many
SELECT * FROM manufacturer WHERE name LIKE $1 ORDER BY name ASC LIMIT $2;
