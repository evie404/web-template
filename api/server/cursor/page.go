package cursor

type PageRequest interface {
	GetPage() int64
	GetSize() int64
}

type PageResult struct {
	NextPage   int64
	HasNext    bool
	TotalItems int64
}

func GetPageOptions(r PageRequest) (page, cursor int64, count int) {
	page = r.GetPage()
	if page < 0 {
		page = 0
	}

	count = int(GetCount(r.GetSize()))
	cursor = page * int64(count)

	return page, cursor, count
}
