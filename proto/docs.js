/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.docs = (function() {

    /**
     * Namespace docs.
     * @exports docs
     * @namespace
     */
    var docs = {};

    docs.DocsRequest = (function() {

        /**
         * Properties of a DocsRequest.
         * @memberof docs
         * @interface IDocsRequest
         * @property {string|null} [userId] DocsRequest userId
         */

        /**
         * Constructs a new DocsRequest.
         * @memberof docs
         * @classdesc Represents a DocsRequest.
         * @implements IDocsRequest
         * @constructor
         * @param {docs.IDocsRequest=} [properties] Properties to set
         */
        function DocsRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DocsRequest userId.
         * @member {string} userId
         * @memberof docs.DocsRequest
         * @instance
         */
        DocsRequest.prototype.userId = "";

        /**
         * Creates a new DocsRequest instance using the specified properties.
         * @function create
         * @memberof docs.DocsRequest
         * @static
         * @param {docs.IDocsRequest=} [properties] Properties to set
         * @returns {docs.DocsRequest} DocsRequest instance
         */
        DocsRequest.create = function create(properties) {
            return new DocsRequest(properties);
        };

        /**
         * Encodes the specified DocsRequest message. Does not implicitly {@link docs.DocsRequest.verify|verify} messages.
         * @function encode
         * @memberof docs.DocsRequest
         * @static
         * @param {docs.IDocsRequest} message DocsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DocsRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.userId);
            return writer;
        };

        /**
         * Encodes the specified DocsRequest message, length delimited. Does not implicitly {@link docs.DocsRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof docs.DocsRequest
         * @static
         * @param {docs.IDocsRequest} message DocsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DocsRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DocsRequest message from the specified reader or buffer.
         * @function decode
         * @memberof docs.DocsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {docs.DocsRequest} DocsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DocsRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.docs.DocsRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.userId = reader.string();
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
         * Decodes a DocsRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof docs.DocsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {docs.DocsRequest} DocsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DocsRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DocsRequest message.
         * @function verify
         * @memberof docs.DocsRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DocsRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            return null;
        };

        /**
         * Creates a DocsRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof docs.DocsRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {docs.DocsRequest} DocsRequest
         */
        DocsRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.docs.DocsRequest)
                return object;
            var message = new $root.docs.DocsRequest();
            if (object.userId != null)
                message.userId = String(object.userId);
            return message;
        };

        /**
         * Creates a plain object from a DocsRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof docs.DocsRequest
         * @static
         * @param {docs.DocsRequest} message DocsRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DocsRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.userId = "";
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            return object;
        };

        /**
         * Converts this DocsRequest to JSON.
         * @function toJSON
         * @memberof docs.DocsRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DocsRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DocsRequest
         * @function getTypeUrl
         * @memberof docs.DocsRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DocsRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/docs.DocsRequest";
        };

        return DocsRequest;
    })();

    docs.Doc = (function() {

        /**
         * Properties of a Doc.
         * @memberof docs
         * @interface IDoc
         * @property {string|null} [title] Doc title
         * @property {string|null} [userId] Doc userId
         * @property {string|null} [text] Doc text
         */

        /**
         * Constructs a new Doc.
         * @memberof docs
         * @classdesc Represents a Doc.
         * @implements IDoc
         * @constructor
         * @param {docs.IDoc=} [properties] Properties to set
         */
        function Doc(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Doc title.
         * @member {string} title
         * @memberof docs.Doc
         * @instance
         */
        Doc.prototype.title = "";

        /**
         * Doc userId.
         * @member {string} userId
         * @memberof docs.Doc
         * @instance
         */
        Doc.prototype.userId = "";

        /**
         * Doc text.
         * @member {string} text
         * @memberof docs.Doc
         * @instance
         */
        Doc.prototype.text = "";

        /**
         * Creates a new Doc instance using the specified properties.
         * @function create
         * @memberof docs.Doc
         * @static
         * @param {docs.IDoc=} [properties] Properties to set
         * @returns {docs.Doc} Doc instance
         */
        Doc.create = function create(properties) {
            return new Doc(properties);
        };

        /**
         * Encodes the specified Doc message. Does not implicitly {@link docs.Doc.verify|verify} messages.
         * @function encode
         * @memberof docs.Doc
         * @static
         * @param {docs.IDoc} message Doc message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Doc.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.title);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.userId);
            if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.text);
            return writer;
        };

        /**
         * Encodes the specified Doc message, length delimited. Does not implicitly {@link docs.Doc.verify|verify} messages.
         * @function encodeDelimited
         * @memberof docs.Doc
         * @static
         * @param {docs.IDoc} message Doc message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Doc.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Doc message from the specified reader or buffer.
         * @function decode
         * @memberof docs.Doc
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {docs.Doc} Doc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Doc.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.docs.Doc();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.title = reader.string();
                        break;
                    }
                case 2: {
                        message.userId = reader.string();
                        break;
                    }
                case 3: {
                        message.text = reader.string();
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
         * Decodes a Doc message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof docs.Doc
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {docs.Doc} Doc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Doc.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Doc message.
         * @function verify
         * @memberof docs.Doc
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Doc.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.text != null && message.hasOwnProperty("text"))
                if (!$util.isString(message.text))
                    return "text: string expected";
            return null;
        };

        /**
         * Creates a Doc message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof docs.Doc
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {docs.Doc} Doc
         */
        Doc.fromObject = function fromObject(object) {
            if (object instanceof $root.docs.Doc)
                return object;
            var message = new $root.docs.Doc();
            if (object.title != null)
                message.title = String(object.title);
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.text != null)
                message.text = String(object.text);
            return message;
        };

        /**
         * Creates a plain object from a Doc message. Also converts values to other types if specified.
         * @function toObject
         * @memberof docs.Doc
         * @static
         * @param {docs.Doc} message Doc
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Doc.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.title = "";
                object.userId = "";
                object.text = "";
            }
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.text != null && message.hasOwnProperty("text"))
                object.text = message.text;
            return object;
        };

        /**
         * Converts this Doc to JSON.
         * @function toJSON
         * @memberof docs.Doc
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Doc.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Doc
         * @function getTypeUrl
         * @memberof docs.Doc
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Doc.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/docs.Doc";
        };

        return Doc;
    })();

    docs.DocsResponse = (function() {

        /**
         * Properties of a DocsResponse.
         * @memberof docs
         * @interface IDocsResponse
         * @property {Array.<docs.IDoc>|null} [documents] DocsResponse documents
         */

        /**
         * Constructs a new DocsResponse.
         * @memberof docs
         * @classdesc Represents a DocsResponse.
         * @implements IDocsResponse
         * @constructor
         * @param {docs.IDocsResponse=} [properties] Properties to set
         */
        function DocsResponse(properties) {
            this.documents = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DocsResponse documents.
         * @member {Array.<docs.IDoc>} documents
         * @memberof docs.DocsResponse
         * @instance
         */
        DocsResponse.prototype.documents = $util.emptyArray;

        /**
         * Creates a new DocsResponse instance using the specified properties.
         * @function create
         * @memberof docs.DocsResponse
         * @static
         * @param {docs.IDocsResponse=} [properties] Properties to set
         * @returns {docs.DocsResponse} DocsResponse instance
         */
        DocsResponse.create = function create(properties) {
            return new DocsResponse(properties);
        };

        /**
         * Encodes the specified DocsResponse message. Does not implicitly {@link docs.DocsResponse.verify|verify} messages.
         * @function encode
         * @memberof docs.DocsResponse
         * @static
         * @param {docs.IDocsResponse} message DocsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DocsResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.documents != null && message.documents.length)
                for (var i = 0; i < message.documents.length; ++i)
                    $root.docs.Doc.encode(message.documents[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DocsResponse message, length delimited. Does not implicitly {@link docs.DocsResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof docs.DocsResponse
         * @static
         * @param {docs.IDocsResponse} message DocsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DocsResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DocsResponse message from the specified reader or buffer.
         * @function decode
         * @memberof docs.DocsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {docs.DocsResponse} DocsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DocsResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.docs.DocsResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.documents && message.documents.length))
                            message.documents = [];
                        message.documents.push($root.docs.Doc.decode(reader, reader.uint32()));
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
         * Decodes a DocsResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof docs.DocsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {docs.DocsResponse} DocsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DocsResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DocsResponse message.
         * @function verify
         * @memberof docs.DocsResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DocsResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.documents != null && message.hasOwnProperty("documents")) {
                if (!Array.isArray(message.documents))
                    return "documents: array expected";
                for (var i = 0; i < message.documents.length; ++i) {
                    var error = $root.docs.Doc.verify(message.documents[i]);
                    if (error)
                        return "documents." + error;
                }
            }
            return null;
        };

        /**
         * Creates a DocsResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof docs.DocsResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {docs.DocsResponse} DocsResponse
         */
        DocsResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.docs.DocsResponse)
                return object;
            var message = new $root.docs.DocsResponse();
            if (object.documents) {
                if (!Array.isArray(object.documents))
                    throw TypeError(".docs.DocsResponse.documents: array expected");
                message.documents = [];
                for (var i = 0; i < object.documents.length; ++i) {
                    if (typeof object.documents[i] !== "object")
                        throw TypeError(".docs.DocsResponse.documents: object expected");
                    message.documents[i] = $root.docs.Doc.fromObject(object.documents[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a DocsResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof docs.DocsResponse
         * @static
         * @param {docs.DocsResponse} message DocsResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DocsResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.documents = [];
            if (message.documents && message.documents.length) {
                object.documents = [];
                for (var j = 0; j < message.documents.length; ++j)
                    object.documents[j] = $root.docs.Doc.toObject(message.documents[j], options);
            }
            return object;
        };

        /**
         * Converts this DocsResponse to JSON.
         * @function toJSON
         * @memberof docs.DocsResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DocsResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DocsResponse
         * @function getTypeUrl
         * @memberof docs.DocsResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DocsResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/docs.DocsResponse";
        };

        return DocsResponse;
    })();

    docs.DocsService = (function() {

        /**
         * Constructs a new DocsService service.
         * @memberof docs
         * @classdesc Represents a DocsService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function DocsService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (DocsService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = DocsService;

        /**
         * Creates new DocsService service using the specified rpc implementation.
         * @function create
         * @memberof docs.DocsService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {DocsService} RPC service. Useful where requests and/or responses are streamed.
         */
        DocsService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link docs.DocsService#documents}.
         * @memberof docs.DocsService
         * @typedef DocumentsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {docs.DocsResponse} [response] DocsResponse
         */

        /**
         * Calls Documents.
         * @function documents
         * @memberof docs.DocsService
         * @instance
         * @param {docs.IDocsRequest} request DocsRequest message or plain object
         * @param {docs.DocsService.DocumentsCallback} callback Node-style callback called with the error, if any, and DocsResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(DocsService.prototype.documents = function documents(request, callback) {
            return this.rpcCall(documents, $root.docs.DocsRequest, $root.docs.DocsResponse, request, callback);
        }, "name", { value: "Documents" });

        /**
         * Calls Documents.
         * @function documents
         * @memberof docs.DocsService
         * @instance
         * @param {docs.IDocsRequest} request DocsRequest message or plain object
         * @returns {Promise<docs.DocsResponse>} Promise
         * @variation 2
         */

        return DocsService;
    })();

    return docs;
})();

module.exports = $root;
