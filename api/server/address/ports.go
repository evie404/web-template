package address

const (
	GeneralAPIFQDN    = "localhost"
	GeneralAPIPort    = 50051
	GeneralAPIPortStr = "50051"
	GeneralAPIAddress = GeneralAPIFQDN + ":" + GeneralAPIPortStr

	// all the services have the same port value for now
	ManufacturerReaderFQDN    = GeneralAPIFQDN
	ManufacturerReaderPort    = GeneralAPIPort
	ManufacturerReaderPortStr = GeneralAPIPortStr
	ManufacturerReaderAddress = GeneralAPIAddress

	OperatingSystemReaderFQDN    = GeneralAPIFQDN
	OperatingSystemReaderPort    = GeneralAPIPort
	OperatingSystemReaderPortStr = GeneralAPIPortStr
	OperatingSystemReaderAddress = GeneralAPIAddress

	PhoneReaderFQDN    = GeneralAPIFQDN
	PhoneReaderPort    = GeneralAPIPort
	PhoneReaderPortStr = GeneralAPIPortStr
	PhoneReaderAddress = GeneralAPIAddress
)
