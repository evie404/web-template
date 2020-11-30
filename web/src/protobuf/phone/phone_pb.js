// source: protobuf/phone/phone.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var protobuf_make_make_pb = require('../../protobuf/make/make_pb.js');
goog.object.extend(proto, protobuf_make_make_pb);
var protobuf_os_os_pb = require('../../protobuf/os/os_pb.js');
goog.object.extend(proto, protobuf_os_os_pb);
goog.exportSymbol('proto.phone.Phone', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.phone.Phone = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.phone.Phone, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.phone.Phone.displayName = 'proto.phone.Phone';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.phone.Phone.prototype.toObject = function(opt_includeInstance) {
  return proto.phone.Phone.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.phone.Phone} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.phone.Phone.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    name: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    make: (f = msg.getMake()) && protobuf_make_make_pb.Make.toObject(includeInstance, f),
    os: (f = msg.getOs()) && protobuf_os_os_pb.OS.toObject(includeInstance, f),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    modifiedAt: (f = msg.getModifiedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.phone.Phone}
 */
proto.phone.Phone.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.phone.Phone;
  return proto.phone.Phone.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.phone.Phone} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.phone.Phone}
 */
proto.phone.Phone.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new protobuf_make_make_pb.Make;
      reader.readMessage(value,protobuf_make_make_pb.Make.deserializeBinaryFromReader);
      msg.setMake(value);
      break;
    case 4:
      var value = new protobuf_os_os_pb.OS;
      reader.readMessage(value,protobuf_os_os_pb.OS.deserializeBinaryFromReader);
      msg.setOs(value);
      break;
    case 9000:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 9001:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setModifiedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.phone.Phone.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.phone.Phone.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.phone.Phone} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.phone.Phone.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMake();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      protobuf_make_make_pb.Make.serializeBinaryToWriter
    );
  }
  f = message.getOs();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      protobuf_os_os_pb.OS.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      9000,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getModifiedAt();
  if (f != null) {
    writer.writeMessage(
      9001,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.phone.Phone.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.phone.Phone} returns this
 */
proto.phone.Phone.prototype.setId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.phone.Phone} returns this
 */
proto.phone.Phone.prototype.clearId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.phone.Phone.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.phone.Phone.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.phone.Phone} returns this
 */
proto.phone.Phone.prototype.setName = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.phone.Phone} returns this
 */
proto.phone.Phone.prototype.clearName = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.phone.Phone.prototype.hasName = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional make.Make make = 3;
 * @return {?proto.make.Make}
 */
proto.phone.Phone.prototype.getMake = function() {
  return /** @type{?proto.make.Make} */ (
    jspb.Message.getWrapperField(this, protobuf_make_make_pb.Make, 3));
};


/**
 * @param {?proto.make.Make|undefined} value
 * @return {!proto.phone.Phone} returns this
*/
proto.phone.Phone.prototype.setMake = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.phone.Phone} returns this
 */
proto.phone.Phone.prototype.clearMake = function() {
  return this.setMake(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.phone.Phone.prototype.hasMake = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional os.OS os = 4;
 * @return {?proto.os.OS}
 */
proto.phone.Phone.prototype.getOs = function() {
  return /** @type{?proto.os.OS} */ (
    jspb.Message.getWrapperField(this, protobuf_os_os_pb.OS, 4));
};


/**
 * @param {?proto.os.OS|undefined} value
 * @return {!proto.phone.Phone} returns this
*/
proto.phone.Phone.prototype.setOs = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.phone.Phone} returns this
 */
proto.phone.Phone.prototype.clearOs = function() {
  return this.setOs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.phone.Phone.prototype.hasOs = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 9000;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.phone.Phone.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9000));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.phone.Phone} returns this
*/
proto.phone.Phone.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 9000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.phone.Phone} returns this
 */
proto.phone.Phone.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.phone.Phone.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 9000) != null;
};


/**
 * optional google.protobuf.Timestamp modified_at = 9001;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.phone.Phone.prototype.getModifiedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9001));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.phone.Phone} returns this
*/
proto.phone.Phone.prototype.setModifiedAt = function(value) {
  return jspb.Message.setWrapperField(this, 9001, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.phone.Phone} returns this
 */
proto.phone.Phone.prototype.clearModifiedAt = function() {
  return this.setModifiedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.phone.Phone.prototype.hasModifiedAt = function() {
  return jspb.Message.getField(this, 9001) != null;
};


goog.object.extend(exports, proto.phone);
