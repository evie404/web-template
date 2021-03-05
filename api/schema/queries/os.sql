-- name: GetByID :one
SELECT * FROM os WHERE id = $1 LIMIT 1;

-- name: GetManyByIDs :many
SELECT * FROM os WHERE id = ANY($1::bigint[]);

-- name: ListOffset :many
SELECT * FROM os LIMIT $1 OFFSET $2;

-- name: CountTotal :one
SELECT COUNT(id) FROM os;

-- name: CreateOne :one
INSERT INTO os(name, created_at, modified_at) VALUES($1, $2, $3) RETURNING *;

-- name: ListByPattern :many
SELECT * FROM os WHERE name LIKE $1 ORDER BY name ASC LIMIT $2;
