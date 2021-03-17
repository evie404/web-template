-- name: GetByID :one
SELECT * FROM phone WHERE id = $1 LIMIT 1;

-- name: GetManyByIDs :many
SELECT * FROM phone WHERE id = ANY($1::bigint[]);

-- name: ListOffset :many
SELECT * FROM phone LIMIT $1 OFFSET $2;

-- name: CountTotal :one
SELECT COUNT(id) FROM phone;

-- name: CreateOne :one
INSERT INTO phone(name, manufacturer_id, os_id, created_at, modified_at) VALUES($1, $2, $3, $4, $5) RETURNING *;

-- name: ListByPattern :many
SELECT * FROM phone WHERE name LIKE $1 ORDER BY name ASC LIMIT $2;
