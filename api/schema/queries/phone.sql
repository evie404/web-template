-- name: GetByID :one
SELECT * FROM phone WHERE id = $1 LIMIT 1;

-- name: ListPhones :many
SELECT * FROM phone;
