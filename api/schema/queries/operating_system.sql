-- name: GetByID :one
SELECT * FROM operating_systems WHERE id = $1 LIMIT 1;

-- name: GetManyByIDs :many
SELECT * FROM operating_systems WHERE id = ANY($1::bigint[]);

-- name: ListOffset :many
SELECT * FROM operating_systems LIMIT $1 OFFSET $2;

-- name: CountTotal :one
SELECT COUNT(id) FROM operating_systems;

-- name: CreateOne :one
INSERT INTO operating_systems(name, created_at, modified_at) VALUES($1, $2, $3) RETURNING *;

-- name: ListByPattern :many
SELECT * FROM operating_systems WHERE name LIKE $1 ORDER BY name ASC LIMIT $2;
