package cursor

type CursorRequest interface {
	GetCursor() int64
	GetCount() int64
}

type CursorResult struct {
	Cursor int64
}

const (
	defaultCount = 20
	maxCount     = 100
)

func GetCursorOptions(req CursorRequest) (cursor int64, count int) {
	cursor = req.GetCursor()
	count = int(GetCount(req.GetCount()))

	return cursor, count
}

func GetCount(count int64) int64 {
	if count < 1 {
		return defaultCount
	}

	if count > maxCount {
		return maxCount
	}

	return count
}
