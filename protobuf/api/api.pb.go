// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0
// 	protoc        v3.14.0
// source: protobuf/api/api.proto

package api

import (
	proto "github.com/golang/protobuf/proto"
	image "github.com/rickypai/web-template/protobuf/image"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	_ "google.golang.org/protobuf/types/known/durationpb"
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

type GetImageRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id int64 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *GetImageRequest) Reset() {
	*x = GetImageRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protobuf_api_api_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetImageRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetImageRequest) ProtoMessage() {}

func (x *GetImageRequest) ProtoReflect() protoreflect.Message {
	mi := &file_protobuf_api_api_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetImageRequest.ProtoReflect.Descriptor instead.
func (*GetImageRequest) Descriptor() ([]byte, []int) {
	return file_protobuf_api_api_proto_rawDescGZIP(), []int{0}
}

func (x *GetImageRequest) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

type GetImageResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Image *image.Image `protobuf:"bytes,1,opt,name=image,proto3" json:"image,omitempty"`
}

func (x *GetImageResponse) Reset() {
	*x = GetImageResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protobuf_api_api_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetImageResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetImageResponse) ProtoMessage() {}

func (x *GetImageResponse) ProtoReflect() protoreflect.Message {
	mi := &file_protobuf_api_api_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetImageResponse.ProtoReflect.Descriptor instead.
func (*GetImageResponse) Descriptor() ([]byte, []int) {
	return file_protobuf_api_api_proto_rawDescGZIP(), []int{1}
}

func (x *GetImageResponse) GetImage() *image.Image {
	if x != nil {
		return x.Image
	}
	return nil
}

var File_protobuf_api_api_proto protoreflect.FileDescriptor

var file_protobuf_api_api_proto_rawDesc = []byte{
	0x0a, 0x16, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x61,
	0x70, 0x69, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x03, 0x61, 0x70, 0x69, 0x1a, 0x1a, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x69, 0x6d, 0x61, 0x67, 0x65, 0x2f, 0x69, 0x6d,
	0x61, 0x67, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1e, 0x67, 0x6f, 0x6f, 0x67, 0x6c,
	0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x64, 0x75, 0x72, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x21, 0x0a, 0x0f, 0x47, 0x65, 0x74,
	0x49, 0x6d, 0x61, 0x67, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x0e, 0x0a, 0x02,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x02, 0x69, 0x64, 0x22, 0x36, 0x0a, 0x10,
	0x47, 0x65, 0x74, 0x49, 0x6d, 0x61, 0x67, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x12, 0x22, 0x0a, 0x05, 0x69, 0x6d, 0x61, 0x67, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x0c, 0x2e, 0x69, 0x6d, 0x61, 0x67, 0x65, 0x2e, 0x49, 0x6d, 0x61, 0x67, 0x65, 0x52, 0x05, 0x69,
	0x6d, 0x61, 0x67, 0x65, 0x32, 0x40, 0x0a, 0x03, 0x41, 0x50, 0x49, 0x12, 0x39, 0x0a, 0x08, 0x47,
	0x65, 0x74, 0x49, 0x6d, 0x61, 0x67, 0x65, 0x12, 0x14, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x47, 0x65,
	0x74, 0x49, 0x6d, 0x61, 0x67, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x15, 0x2e,
	0x61, 0x70, 0x69, 0x2e, 0x47, 0x65, 0x74, 0x49, 0x6d, 0x61, 0x67, 0x65, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x42, 0x2f, 0x5a, 0x2d, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62,
	0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x72, 0x69, 0x63, 0x6b, 0x79, 0x70, 0x61, 0x69, 0x2f, 0x77, 0x65,
	0x62, 0x2d, 0x74, 0x65, 0x6d, 0x70, 0x6c, 0x61, 0x74, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x62, 0x75, 0x66, 0x2f, 0x61, 0x70, 0x69, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_protobuf_api_api_proto_rawDescOnce sync.Once
	file_protobuf_api_api_proto_rawDescData = file_protobuf_api_api_proto_rawDesc
)

func file_protobuf_api_api_proto_rawDescGZIP() []byte {
	file_protobuf_api_api_proto_rawDescOnce.Do(func() {
		file_protobuf_api_api_proto_rawDescData = protoimpl.X.CompressGZIP(file_protobuf_api_api_proto_rawDescData)
	})
	return file_protobuf_api_api_proto_rawDescData
}

var file_protobuf_api_api_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_protobuf_api_api_proto_goTypes = []interface{}{
	(*GetImageRequest)(nil),  // 0: api.GetImageRequest
	(*GetImageResponse)(nil), // 1: api.GetImageResponse
	(*image.Image)(nil),      // 2: image.Image
}
var file_protobuf_api_api_proto_depIdxs = []int32{
	2, // 0: api.GetImageResponse.image:type_name -> image.Image
	0, // 1: api.API.GetImage:input_type -> api.GetImageRequest
	1, // 2: api.API.GetImage:output_type -> api.GetImageResponse
	2, // [2:3] is the sub-list for method output_type
	1, // [1:2] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_protobuf_api_api_proto_init() }
func file_protobuf_api_api_proto_init() {
	if File_protobuf_api_api_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_protobuf_api_api_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetImageRequest); i {
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
		file_protobuf_api_api_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetImageResponse); i {
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
			RawDescriptor: file_protobuf_api_api_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_protobuf_api_api_proto_goTypes,
		DependencyIndexes: file_protobuf_api_api_proto_depIdxs,
		MessageInfos:      file_protobuf_api_api_proto_msgTypes,
	}.Build()
	File_protobuf_api_api_proto = out.File
	file_protobuf_api_api_proto_rawDesc = nil
	file_protobuf_api_api_proto_goTypes = nil
	file_protobuf_api_api_proto_depIdxs = nil
}
