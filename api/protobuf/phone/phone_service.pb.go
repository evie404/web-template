// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0
// 	protoc        v3.15.0
// source: protobuf/phone/phone_service.proto

package phone

import (
	proto "github.com/golang/protobuf/proto"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// This is a compile-time assertion that a sufficiently up-to-date version
// of the legacy proto package is being used.
const _ = proto.ProtoPackageIsVersion4

type GetOneByIDRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id int64 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *GetOneByIDRequest) Reset() {
	*x = GetOneByIDRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protobuf_phone_phone_service_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetOneByIDRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetOneByIDRequest) ProtoMessage() {}

func (x *GetOneByIDRequest) ProtoReflect() protoreflect.Message {
	mi := &file_protobuf_phone_phone_service_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetOneByIDRequest.ProtoReflect.Descriptor instead.
func (*GetOneByIDRequest) Descriptor() ([]byte, []int) {
	return file_protobuf_phone_phone_service_proto_rawDescGZIP(), []int{0}
}

func (x *GetOneByIDRequest) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

type GetOneByIDResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Result *Phone `protobuf:"bytes,1,opt,name=result,proto3" json:"result,omitempty"`
}

func (x *GetOneByIDResponse) Reset() {
	*x = GetOneByIDResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protobuf_phone_phone_service_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetOneByIDResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetOneByIDResponse) ProtoMessage() {}

func (x *GetOneByIDResponse) ProtoReflect() protoreflect.Message {
	mi := &file_protobuf_phone_phone_service_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetOneByIDResponse.ProtoReflect.Descriptor instead.
func (*GetOneByIDResponse) Descriptor() ([]byte, []int) {
	return file_protobuf_phone_phone_service_proto_rawDescGZIP(), []int{1}
}

func (x *GetOneByIDResponse) GetResult() *Phone {
	if x != nil {
		return x.Result
	}
	return nil
}

type ListByCursorRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Cursor int64 `protobuf:"varint,1,opt,name=cursor,proto3" json:"cursor,omitempty"`
	Count  int64 `protobuf:"varint,2,opt,name=count,proto3" json:"count,omitempty"` // defaults to 20
}

func (x *ListByCursorRequest) Reset() {
	*x = ListByCursorRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protobuf_phone_phone_service_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListByCursorRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListByCursorRequest) ProtoMessage() {}

func (x *ListByCursorRequest) ProtoReflect() protoreflect.Message {
	mi := &file_protobuf_phone_phone_service_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListByCursorRequest.ProtoReflect.Descriptor instead.
func (*ListByCursorRequest) Descriptor() ([]byte, []int) {
	return file_protobuf_phone_phone_service_proto_rawDescGZIP(), []int{2}
}

func (x *ListByCursorRequest) GetCursor() int64 {
	if x != nil {
		return x.Cursor
	}
	return 0
}

func (x *ListByCursorRequest) GetCount() int64 {
	if x != nil {
		return x.Count
	}
	return 0
}

type ListByCursorResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Results []*Phone `protobuf:"bytes,1,rep,name=results,proto3" json:"results,omitempty"`
	Cursor  int64    `protobuf:"varint,2,opt,name=cursor,proto3" json:"cursor,omitempty"`
}

func (x *ListByCursorResponse) Reset() {
	*x = ListByCursorResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protobuf_phone_phone_service_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListByCursorResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListByCursorResponse) ProtoMessage() {}

func (x *ListByCursorResponse) ProtoReflect() protoreflect.Message {
	mi := &file_protobuf_phone_phone_service_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListByCursorResponse.ProtoReflect.Descriptor instead.
func (*ListByCursorResponse) Descriptor() ([]byte, []int) {
	return file_protobuf_phone_phone_service_proto_rawDescGZIP(), []int{3}
}

func (x *ListByCursorResponse) GetResults() []*Phone {
	if x != nil {
		return x.Results
	}
	return nil
}

func (x *ListByCursorResponse) GetCursor() int64 {
	if x != nil {
		return x.Cursor
	}
	return 0
}

type ListByPageRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Page int64 `protobuf:"varint,1,opt,name=page,proto3" json:"page,omitempty"`
	Size int64 `protobuf:"varint,2,opt,name=size,proto3" json:"size,omitempty"` // defaults to 20
}

func (x *ListByPageRequest) Reset() {
	*x = ListByPageRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protobuf_phone_phone_service_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListByPageRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListByPageRequest) ProtoMessage() {}

func (x *ListByPageRequest) ProtoReflect() protoreflect.Message {
	mi := &file_protobuf_phone_phone_service_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListByPageRequest.ProtoReflect.Descriptor instead.
func (*ListByPageRequest) Descriptor() ([]byte, []int) {
	return file_protobuf_phone_phone_service_proto_rawDescGZIP(), []int{4}
}

func (x *ListByPageRequest) GetPage() int64 {
	if x != nil {
		return x.Page
	}
	return 0
}

func (x *ListByPageRequest) GetSize() int64 {
	if x != nil {
		return x.Size
	}
	return 0
}

type ListByPageResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Results  []*Phone `protobuf:"bytes,1,rep,name=results,proto3" json:"results,omitempty"`
	NextPage int64    `protobuf:"varint,2,opt,name=next_page,json=nextPage,proto3" json:"next_page,omitempty"`
	HasNext  bool     `protobuf:"varint,3,opt,name=has_next,json=hasNext,proto3" json:"has_next,omitempty"`
}

func (x *ListByPageResponse) Reset() {
	*x = ListByPageResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protobuf_phone_phone_service_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListByPageResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListByPageResponse) ProtoMessage() {}

func (x *ListByPageResponse) ProtoReflect() protoreflect.Message {
	mi := &file_protobuf_phone_phone_service_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListByPageResponse.ProtoReflect.Descriptor instead.
func (*ListByPageResponse) Descriptor() ([]byte, []int) {
	return file_protobuf_phone_phone_service_proto_rawDescGZIP(), []int{5}
}

func (x *ListByPageResponse) GetResults() []*Phone {
	if x != nil {
		return x.Results
	}
	return nil
}

func (x *ListByPageResponse) GetNextPage() int64 {
	if x != nil {
		return x.NextPage
	}
	return 0
}

func (x *ListByPageResponse) GetHasNext() bool {
	if x != nil {
		return x.HasNext
	}
	return false
}

var File_protobuf_phone_phone_service_proto protoreflect.FileDescriptor

var file_protobuf_phone_phone_service_proto_rawDesc = []byte{
	0x0a, 0x22, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x70, 0x68, 0x6f, 0x6e, 0x65,
	0x2f, 0x70, 0x68, 0x6f, 0x6e, 0x65, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x12, 0x05, 0x70, 0x68, 0x6f, 0x6e, 0x65, 0x1a, 0x1a, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x70, 0x68, 0x6f, 0x6e, 0x65, 0x2f, 0x70, 0x68, 0x6f, 0x6e,
	0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x23, 0x0a, 0x11, 0x47, 0x65, 0x74, 0x4f, 0x6e,
	0x65, 0x42, 0x79, 0x49, 0x44, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x0e, 0x0a, 0x02,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x02, 0x69, 0x64, 0x22, 0x3a, 0x0a, 0x12,
	0x47, 0x65, 0x74, 0x4f, 0x6e, 0x65, 0x42, 0x79, 0x49, 0x44, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x12, 0x24, 0x0a, 0x06, 0x72, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x0c, 0x2e, 0x70, 0x68, 0x6f, 0x6e, 0x65, 0x2e, 0x50, 0x68, 0x6f, 0x6e, 0x65,
	0x52, 0x06, 0x72, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x22, 0x43, 0x0a, 0x13, 0x4c, 0x69, 0x73, 0x74,
	0x42, 0x79, 0x43, 0x75, 0x72, 0x73, 0x6f, 0x72, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12,
	0x16, 0x0a, 0x06, 0x63, 0x75, 0x72, 0x73, 0x6f, 0x72, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52,
	0x06, 0x63, 0x75, 0x72, 0x73, 0x6f, 0x72, 0x12, 0x14, 0x0a, 0x05, 0x63, 0x6f, 0x75, 0x6e, 0x74,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x03, 0x52, 0x05, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x22, 0x56, 0x0a,
	0x14, 0x4c, 0x69, 0x73, 0x74, 0x42, 0x79, 0x43, 0x75, 0x72, 0x73, 0x6f, 0x72, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x26, 0x0a, 0x07, 0x72, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x73,
	0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x0c, 0x2e, 0x70, 0x68, 0x6f, 0x6e, 0x65, 0x2e, 0x50,
	0x68, 0x6f, 0x6e, 0x65, 0x52, 0x07, 0x72, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x73, 0x12, 0x16, 0x0a,
	0x06, 0x63, 0x75, 0x72, 0x73, 0x6f, 0x72, 0x18, 0x02, 0x20, 0x01, 0x28, 0x03, 0x52, 0x06, 0x63,
	0x75, 0x72, 0x73, 0x6f, 0x72, 0x22, 0x3b, 0x0a, 0x11, 0x4c, 0x69, 0x73, 0x74, 0x42, 0x79, 0x50,
	0x61, 0x67, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x70, 0x61,
	0x67, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x04, 0x70, 0x61, 0x67, 0x65, 0x12, 0x12,
	0x0a, 0x04, 0x73, 0x69, 0x7a, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x03, 0x52, 0x04, 0x73, 0x69,
	0x7a, 0x65, 0x22, 0x74, 0x0a, 0x12, 0x4c, 0x69, 0x73, 0x74, 0x42, 0x79, 0x50, 0x61, 0x67, 0x65,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x26, 0x0a, 0x07, 0x72, 0x65, 0x73, 0x75,
	0x6c, 0x74, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x0c, 0x2e, 0x70, 0x68, 0x6f, 0x6e,
	0x65, 0x2e, 0x50, 0x68, 0x6f, 0x6e, 0x65, 0x52, 0x07, 0x72, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x73,
	0x12, 0x1b, 0x0a, 0x09, 0x6e, 0x65, 0x78, 0x74, 0x5f, 0x70, 0x61, 0x67, 0x65, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x03, 0x52, 0x08, 0x6e, 0x65, 0x78, 0x74, 0x50, 0x61, 0x67, 0x65, 0x12, 0x19, 0x0a,
	0x08, 0x68, 0x61, 0x73, 0x5f, 0x6e, 0x65, 0x78, 0x74, 0x18, 0x03, 0x20, 0x01, 0x28, 0x08, 0x52,
	0x07, 0x68, 0x61, 0x73, 0x4e, 0x65, 0x78, 0x74, 0x32, 0xe3, 0x01, 0x0a, 0x0c, 0x50, 0x68, 0x6f,
	0x6e, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x43, 0x0a, 0x0a, 0x47, 0x65, 0x74,
	0x4f, 0x6e, 0x65, 0x42, 0x79, 0x49, 0x44, 0x12, 0x18, 0x2e, 0x70, 0x68, 0x6f, 0x6e, 0x65, 0x2e,
	0x47, 0x65, 0x74, 0x4f, 0x6e, 0x65, 0x42, 0x79, 0x49, 0x44, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x1a, 0x19, 0x2e, 0x70, 0x68, 0x6f, 0x6e, 0x65, 0x2e, 0x47, 0x65, 0x74, 0x4f, 0x6e, 0x65,
	0x42, 0x79, 0x49, 0x44, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x49,
	0x0a, 0x0c, 0x4c, 0x69, 0x73, 0x74, 0x42, 0x79, 0x43, 0x75, 0x72, 0x73, 0x6f, 0x72, 0x12, 0x1a,
	0x2e, 0x70, 0x68, 0x6f, 0x6e, 0x65, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x42, 0x79, 0x43, 0x75, 0x72,
	0x73, 0x6f, 0x72, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1b, 0x2e, 0x70, 0x68, 0x6f,
	0x6e, 0x65, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x42, 0x79, 0x43, 0x75, 0x72, 0x73, 0x6f, 0x72, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x43, 0x0a, 0x0a, 0x4c, 0x69, 0x73,
	0x74, 0x42, 0x79, 0x50, 0x61, 0x67, 0x65, 0x12, 0x18, 0x2e, 0x70, 0x68, 0x6f, 0x6e, 0x65, 0x2e,
	0x4c, 0x69, 0x73, 0x74, 0x42, 0x79, 0x50, 0x61, 0x67, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x1a, 0x19, 0x2e, 0x70, 0x68, 0x6f, 0x6e, 0x65, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x42, 0x79,
	0x50, 0x61, 0x67, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x42, 0x35,
	0x5a, 0x33, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x72, 0x69, 0x63,
	0x6b, 0x79, 0x70, 0x61, 0x69, 0x2f, 0x77, 0x65, 0x62, 0x2d, 0x74, 0x65, 0x6d, 0x70, 0x6c, 0x61,
	0x74, 0x65, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f,
	0x70, 0x68, 0x6f, 0x6e, 0x65, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_protobuf_phone_phone_service_proto_rawDescOnce sync.Once
	file_protobuf_phone_phone_service_proto_rawDescData = file_protobuf_phone_phone_service_proto_rawDesc
)

func file_protobuf_phone_phone_service_proto_rawDescGZIP() []byte {
	file_protobuf_phone_phone_service_proto_rawDescOnce.Do(func() {
		file_protobuf_phone_phone_service_proto_rawDescData = protoimpl.X.CompressGZIP(file_protobuf_phone_phone_service_proto_rawDescData)
	})
	return file_protobuf_phone_phone_service_proto_rawDescData
}

var file_protobuf_phone_phone_service_proto_msgTypes = make([]protoimpl.MessageInfo, 6)
var file_protobuf_phone_phone_service_proto_goTypes = []interface{}{
	(*GetOneByIDRequest)(nil),    // 0: phone.GetOneByIDRequest
	(*GetOneByIDResponse)(nil),   // 1: phone.GetOneByIDResponse
	(*ListByCursorRequest)(nil),  // 2: phone.ListByCursorRequest
	(*ListByCursorResponse)(nil), // 3: phone.ListByCursorResponse
	(*ListByPageRequest)(nil),    // 4: phone.ListByPageRequest
	(*ListByPageResponse)(nil),   // 5: phone.ListByPageResponse
	(*Phone)(nil),                // 6: phone.Phone
}
var file_protobuf_phone_phone_service_proto_depIdxs = []int32{
	6, // 0: phone.GetOneByIDResponse.result:type_name -> phone.Phone
	6, // 1: phone.ListByCursorResponse.results:type_name -> phone.Phone
	6, // 2: phone.ListByPageResponse.results:type_name -> phone.Phone
	0, // 3: phone.PhoneService.GetOneByID:input_type -> phone.GetOneByIDRequest
	2, // 4: phone.PhoneService.ListByCursor:input_type -> phone.ListByCursorRequest
	4, // 5: phone.PhoneService.ListByPage:input_type -> phone.ListByPageRequest
	1, // 6: phone.PhoneService.GetOneByID:output_type -> phone.GetOneByIDResponse
	3, // 7: phone.PhoneService.ListByCursor:output_type -> phone.ListByCursorResponse
	5, // 8: phone.PhoneService.ListByPage:output_type -> phone.ListByPageResponse
	6, // [6:9] is the sub-list for method output_type
	3, // [3:6] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_protobuf_phone_phone_service_proto_init() }
func file_protobuf_phone_phone_service_proto_init() {
	if File_protobuf_phone_phone_service_proto != nil {
		return
	}
	file_protobuf_phone_phone_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_protobuf_phone_phone_service_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetOneByIDRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_protobuf_phone_phone_service_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetOneByIDResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_protobuf_phone_phone_service_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListByCursorRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_protobuf_phone_phone_service_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListByCursorResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_protobuf_phone_phone_service_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListByPageRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_protobuf_phone_phone_service_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListByPageResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_protobuf_phone_phone_service_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   6,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_protobuf_phone_phone_service_proto_goTypes,
		DependencyIndexes: file_protobuf_phone_phone_service_proto_depIdxs,
		MessageInfos:      file_protobuf_phone_phone_service_proto_msgTypes,
	}.Build()
	File_protobuf_phone_phone_service_proto = out.File
	file_protobuf_phone_phone_service_proto_rawDesc = nil
	file_protobuf_phone_phone_service_proto_goTypes = nil
	file_protobuf_phone_phone_service_proto_depIdxs = nil
}
