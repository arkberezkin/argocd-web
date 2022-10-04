/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.hello = (function() {

    /**
     * Namespace hello.
     * @exports hello
     * @namespace
     */
    var hello = {};

    hello.HelloRequest = (function() {

        /**
         * Properties of a HelloRequest.
         * @memberof hello
         * @interface IHelloRequest
         * @property {string|null} [name] HelloRequest name
         */

        /**
         * Constructs a new HelloRequest.
         * @memberof hello
         * @classdesc Represents a HelloRequest.
         * @implements IHelloRequest
         * @constructor
         * @param {hello.IHelloRequest=} [properties] Properties to set
         */
        function HelloRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HelloRequest name.
         * @member {string} name
         * @memberof hello.HelloRequest
         * @instance
         */
        HelloRequest.prototype.name = "";

        /**
         * Creates a new HelloRequest instance using the specified properties.
         * @function create
         * @memberof hello.HelloRequest
         * @static
         * @param {hello.IHelloRequest=} [properties] Properties to set
         * @returns {hello.HelloRequest} HelloRequest instance
         */
        HelloRequest.create = function create(properties) {
            return new HelloRequest(properties);
        };

        /**
         * Encodes the specified HelloRequest message. Does not implicitly {@link hello.HelloRequest.verify|verify} messages.
         * @function encode
         * @memberof hello.HelloRequest
         * @static
         * @param {hello.IHelloRequest} message HelloRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified HelloRequest message, length delimited. Does not implicitly {@link hello.HelloRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hello.HelloRequest
         * @static
         * @param {hello.IHelloRequest} message HelloRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HelloRequest message from the specified reader or buffer.
         * @function decode
         * @memberof hello.HelloRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hello.HelloRequest} HelloRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hello.HelloRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HelloRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hello.HelloRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hello.HelloRequest} HelloRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HelloRequest message.
         * @function verify
         * @memberof hello.HelloRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HelloRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a HelloRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hello.HelloRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hello.HelloRequest} HelloRequest
         */
        HelloRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.hello.HelloRequest)
                return object;
            var message = new $root.hello.HelloRequest();
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a HelloRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hello.HelloRequest
         * @static
         * @param {hello.HelloRequest} message HelloRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HelloRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this HelloRequest to JSON.
         * @function toJSON
         * @memberof hello.HelloRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HelloRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HelloRequest
         * @function getTypeUrl
         * @memberof hello.HelloRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HelloRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/hello.HelloRequest";
        };

        return HelloRequest;
    })();

    hello.HelloResponse = (function() {

        /**
         * Properties of a HelloResponse.
         * @memberof hello
         * @interface IHelloResponse
         * @property {string|null} [message] HelloResponse message
         */

        /**
         * Constructs a new HelloResponse.
         * @memberof hello
         * @classdesc Represents a HelloResponse.
         * @implements IHelloResponse
         * @constructor
         * @param {hello.IHelloResponse=} [properties] Properties to set
         */
        function HelloResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HelloResponse message.
         * @member {string} message
         * @memberof hello.HelloResponse
         * @instance
         */
        HelloResponse.prototype.message = "";

        /**
         * Creates a new HelloResponse instance using the specified properties.
         * @function create
         * @memberof hello.HelloResponse
         * @static
         * @param {hello.IHelloResponse=} [properties] Properties to set
         * @returns {hello.HelloResponse} HelloResponse instance
         */
        HelloResponse.create = function create(properties) {
            return new HelloResponse(properties);
        };

        /**
         * Encodes the specified HelloResponse message. Does not implicitly {@link hello.HelloResponse.verify|verify} messages.
         * @function encode
         * @memberof hello.HelloResponse
         * @static
         * @param {hello.IHelloResponse} message HelloResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
            return writer;
        };

        /**
         * Encodes the specified HelloResponse message, length delimited. Does not implicitly {@link hello.HelloResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hello.HelloResponse
         * @static
         * @param {hello.IHelloResponse} message HelloResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HelloResponse message from the specified reader or buffer.
         * @function decode
         * @memberof hello.HelloResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hello.HelloResponse} HelloResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hello.HelloResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.message = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HelloResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hello.HelloResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hello.HelloResponse} HelloResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HelloResponse message.
         * @function verify
         * @memberof hello.HelloResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HelloResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };

        /**
         * Creates a HelloResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hello.HelloResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hello.HelloResponse} HelloResponse
         */
        HelloResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.hello.HelloResponse)
                return object;
            var message = new $root.hello.HelloResponse();
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from a HelloResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hello.HelloResponse
         * @static
         * @param {hello.HelloResponse} message HelloResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HelloResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.message = "";
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        /**
         * Converts this HelloResponse to JSON.
         * @function toJSON
         * @memberof hello.HelloResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HelloResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HelloResponse
         * @function getTypeUrl
         * @memberof hello.HelloResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HelloResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/hello.HelloResponse";
        };

        return HelloResponse;
    })();

    hello.HealthCheckRequest = (function() {

        /**
         * Properties of a HealthCheckRequest.
         * @memberof hello
         * @interface IHealthCheckRequest
         * @property {string|null} [service] HealthCheckRequest service
         */

        /**
         * Constructs a new HealthCheckRequest.
         * @memberof hello
         * @classdesc Represents a HealthCheckRequest.
         * @implements IHealthCheckRequest
         * @constructor
         * @param {hello.IHealthCheckRequest=} [properties] Properties to set
         */
        function HealthCheckRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HealthCheckRequest service.
         * @member {string} service
         * @memberof hello.HealthCheckRequest
         * @instance
         */
        HealthCheckRequest.prototype.service = "";

        /**
         * Creates a new HealthCheckRequest instance using the specified properties.
         * @function create
         * @memberof hello.HealthCheckRequest
         * @static
         * @param {hello.IHealthCheckRequest=} [properties] Properties to set
         * @returns {hello.HealthCheckRequest} HealthCheckRequest instance
         */
        HealthCheckRequest.create = function create(properties) {
            return new HealthCheckRequest(properties);
        };

        /**
         * Encodes the specified HealthCheckRequest message. Does not implicitly {@link hello.HealthCheckRequest.verify|verify} messages.
         * @function encode
         * @memberof hello.HealthCheckRequest
         * @static
         * @param {hello.IHealthCheckRequest} message HealthCheckRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HealthCheckRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.service != null && Object.hasOwnProperty.call(message, "service"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.service);
            return writer;
        };

        /**
         * Encodes the specified HealthCheckRequest message, length delimited. Does not implicitly {@link hello.HealthCheckRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hello.HealthCheckRequest
         * @static
         * @param {hello.IHealthCheckRequest} message HealthCheckRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HealthCheckRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HealthCheckRequest message from the specified reader or buffer.
         * @function decode
         * @memberof hello.HealthCheckRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hello.HealthCheckRequest} HealthCheckRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HealthCheckRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hello.HealthCheckRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.service = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HealthCheckRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hello.HealthCheckRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hello.HealthCheckRequest} HealthCheckRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HealthCheckRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HealthCheckRequest message.
         * @function verify
         * @memberof hello.HealthCheckRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HealthCheckRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.service != null && message.hasOwnProperty("service"))
                if (!$util.isString(message.service))
                    return "service: string expected";
            return null;
        };

        /**
         * Creates a HealthCheckRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hello.HealthCheckRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hello.HealthCheckRequest} HealthCheckRequest
         */
        HealthCheckRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.hello.HealthCheckRequest)
                return object;
            var message = new $root.hello.HealthCheckRequest();
            if (object.service != null)
                message.service = String(object.service);
            return message;
        };

        /**
         * Creates a plain object from a HealthCheckRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hello.HealthCheckRequest
         * @static
         * @param {hello.HealthCheckRequest} message HealthCheckRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HealthCheckRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.service = "";
            if (message.service != null && message.hasOwnProperty("service"))
                object.service = message.service;
            return object;
        };

        /**
         * Converts this HealthCheckRequest to JSON.
         * @function toJSON
         * @memberof hello.HealthCheckRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HealthCheckRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HealthCheckRequest
         * @function getTypeUrl
         * @memberof hello.HealthCheckRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HealthCheckRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/hello.HealthCheckRequest";
        };

        return HealthCheckRequest;
    })();

    hello.HealthCheckResponse = (function() {

        /**
         * Properties of a HealthCheckResponse.
         * @memberof hello
         * @interface IHealthCheckResponse
         * @property {hello.HealthCheckResponse.ServingStatus|null} [status] HealthCheckResponse status
         */

        /**
         * Constructs a new HealthCheckResponse.
         * @memberof hello
         * @classdesc Represents a HealthCheckResponse.
         * @implements IHealthCheckResponse
         * @constructor
         * @param {hello.IHealthCheckResponse=} [properties] Properties to set
         */
        function HealthCheckResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HealthCheckResponse status.
         * @member {hello.HealthCheckResponse.ServingStatus} status
         * @memberof hello.HealthCheckResponse
         * @instance
         */
        HealthCheckResponse.prototype.status = 0;

        /**
         * Creates a new HealthCheckResponse instance using the specified properties.
         * @function create
         * @memberof hello.HealthCheckResponse
         * @static
         * @param {hello.IHealthCheckResponse=} [properties] Properties to set
         * @returns {hello.HealthCheckResponse} HealthCheckResponse instance
         */
        HealthCheckResponse.create = function create(properties) {
            return new HealthCheckResponse(properties);
        };

        /**
         * Encodes the specified HealthCheckResponse message. Does not implicitly {@link hello.HealthCheckResponse.verify|verify} messages.
         * @function encode
         * @memberof hello.HealthCheckResponse
         * @static
         * @param {hello.IHealthCheckResponse} message HealthCheckResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HealthCheckResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            return writer;
        };

        /**
         * Encodes the specified HealthCheckResponse message, length delimited. Does not implicitly {@link hello.HealthCheckResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hello.HealthCheckResponse
         * @static
         * @param {hello.IHealthCheckResponse} message HealthCheckResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HealthCheckResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HealthCheckResponse message from the specified reader or buffer.
         * @function decode
         * @memberof hello.HealthCheckResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hello.HealthCheckResponse} HealthCheckResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HealthCheckResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hello.HealthCheckResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.status = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HealthCheckResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hello.HealthCheckResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hello.HealthCheckResponse} HealthCheckResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HealthCheckResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HealthCheckResponse message.
         * @function verify
         * @memberof hello.HealthCheckResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HealthCheckResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            return null;
        };

        /**
         * Creates a HealthCheckResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hello.HealthCheckResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hello.HealthCheckResponse} HealthCheckResponse
         */
        HealthCheckResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.hello.HealthCheckResponse)
                return object;
            var message = new $root.hello.HealthCheckResponse();
            switch (object.status) {
            default:
                if (typeof object.status === "number") {
                    message.status = object.status;
                    break;
                }
                break;
            case "UNKNOWN":
            case 0:
                message.status = 0;
                break;
            case "SERVING":
            case 1:
                message.status = 1;
                break;
            case "NOT_SERVING":
            case 2:
                message.status = 2;
                break;
            case "SERVICE_UNKNOWN":
            case 3:
                message.status = 3;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a HealthCheckResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hello.HealthCheckResponse
         * @static
         * @param {hello.HealthCheckResponse} message HealthCheckResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HealthCheckResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.status = options.enums === String ? "UNKNOWN" : 0;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.hello.HealthCheckResponse.ServingStatus[message.status] === undefined ? message.status : $root.hello.HealthCheckResponse.ServingStatus[message.status] : message.status;
            return object;
        };

        /**
         * Converts this HealthCheckResponse to JSON.
         * @function toJSON
         * @memberof hello.HealthCheckResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HealthCheckResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HealthCheckResponse
         * @function getTypeUrl
         * @memberof hello.HealthCheckResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HealthCheckResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/hello.HealthCheckResponse";
        };

        /**
         * ServingStatus enum.
         * @name hello.HealthCheckResponse.ServingStatus
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} SERVING=1 SERVING value
         * @property {number} NOT_SERVING=2 NOT_SERVING value
         * @property {number} SERVICE_UNKNOWN=3 SERVICE_UNKNOWN value
         */
        HealthCheckResponse.ServingStatus = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "SERVING"] = 1;
            values[valuesById[2] = "NOT_SERVING"] = 2;
            values[valuesById[3] = "SERVICE_UNKNOWN"] = 3;
            return values;
        })();

        return HealthCheckResponse;
    })();

    hello.HelloService = (function() {

        /**
         * Constructs a new HelloService service.
         * @memberof hello
         * @classdesc Represents a HelloService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function HelloService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (HelloService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = HelloService;

        /**
         * Creates new HelloService service using the specified rpc implementation.
         * @function create
         * @memberof hello.HelloService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {HelloService} RPC service. Useful where requests and/or responses are streamed.
         */
        HelloService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link hello.HelloService#hello}.
         * @memberof hello.HelloService
         * @typedef HelloCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {hello.HelloResponse} [response] HelloResponse
         */

        /**
         * Calls Hello.
         * @function hello
         * @memberof hello.HelloService
         * @instance
         * @param {hello.IHelloRequest} request HelloRequest message or plain object
         * @param {hello.HelloService.HelloCallback} callback Node-style callback called with the error, if any, and HelloResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(HelloService.prototype.hello = function hello(request, callback) {
            return this.rpcCall(hello, $root.hello.HelloRequest, $root.hello.HelloResponse, request, callback);
        }, "name", { value: "Hello" });

        /**
         * Calls Hello.
         * @function hello
         * @memberof hello.HelloService
         * @instance
         * @param {hello.IHelloRequest} request HelloRequest message or plain object
         * @returns {Promise<hello.HelloResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link hello.HelloService#check}.
         * @memberof hello.HelloService
         * @typedef CheckCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {hello.HealthCheckResponse} [response] HealthCheckResponse
         */

        /**
         * Calls Check.
         * @function check
         * @memberof hello.HelloService
         * @instance
         * @param {hello.IHealthCheckRequest} request HealthCheckRequest message or plain object
         * @param {hello.HelloService.CheckCallback} callback Node-style callback called with the error, if any, and HealthCheckResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(HelloService.prototype.check = function check(request, callback) {
            return this.rpcCall(check, $root.hello.HealthCheckRequest, $root.hello.HealthCheckResponse, request, callback);
        }, "name", { value: "Check" });

        /**
         * Calls Check.
         * @function check
         * @memberof hello.HelloService
         * @instance
         * @param {hello.IHealthCheckRequest} request HealthCheckRequest message or plain object
         * @returns {Promise<hello.HealthCheckResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link hello.HelloService#watch}.
         * @memberof hello.HelloService
         * @typedef WatchCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {hello.HealthCheckResponse} [response] HealthCheckResponse
         */

        /**
         * Calls Watch.
         * @function watch
         * @memberof hello.HelloService
         * @instance
         * @param {hello.IHealthCheckRequest} request HealthCheckRequest message or plain object
         * @param {hello.HelloService.WatchCallback} callback Node-style callback called with the error, if any, and HealthCheckResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(HelloService.prototype.watch = function watch(request, callback) {
            return this.rpcCall(watch, $root.hello.HealthCheckRequest, $root.hello.HealthCheckResponse, request, callback);
        }, "name", { value: "Watch" });

        /**
         * Calls Watch.
         * @function watch
         * @memberof hello.HelloService
         * @instance
         * @param {hello.IHealthCheckRequest} request HealthCheckRequest message or plain object
         * @returns {Promise<hello.HealthCheckResponse>} Promise
         * @variation 2
         */

        return HelloService;
    })();

    return hello;
})();

module.exports = $root;
