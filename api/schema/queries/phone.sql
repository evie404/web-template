-- name: GetByID :one
SELECT * FROM phones WHERE id = $1 LIMIT 1;

-- name: GetManyByIDs :many
SELECT * FROM phones WHERE id = ANY($1::bigint[]);

-- name: ListOffset :many
SELECT * FROM phones LIMIT $1 OFFSET $2;

-- name: CountTotal :one
SELECT COUNT(id) FROM phones;

-- name: CreateOne :one
INSERT INTO phones(name, manufacturer_id, operating_system_id, created_at, modified_at) VALUES($1, $2, $3, $4, $5) RETURNING *;

-- name: ListByPattern :many
SELECT * FROM phones WHERE name LIKE $1 ORDER BY name ASC LIMIT $2;
