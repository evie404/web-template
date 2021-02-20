package cursor

type PageRequest interface {
	GetPage() int64
	GetSize() int64
}

func GetPageOptions(r PageRequest) (cursor int64, count int) {
	page := r.GetPage()
	if page < 0 {
		page = 0
	}

	count = int(r.GetSize())
	if count < 1 || count > defaultCount*2 {
		count = defaultCount
	}

	cursor = page * int64(count)

	return cursor, count
}
