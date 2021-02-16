-- name: GetByID :one
SELECT * FROM os WHERE id = $1 LIMIT 1;

