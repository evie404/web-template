package cursor

type CursorRequest interface {
	GetCursor() int64
	GetCount() int64
}

const defaultCount = 20

func GetCursorOptions(req CursorRequest) (cursor int64, count int) {
	cursor = req.GetCursor()
	count = int(req.GetCount())
	if count < 1 || count > defaultCount*2 {
		count = defaultCount
	}

	return cursor, count
}
