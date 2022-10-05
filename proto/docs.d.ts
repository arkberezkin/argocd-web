import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace docs. */
export namespace docs {

    /** Properties of a DocsRequest. */
    interface IDocsRequest {

        /** DocsRequest userId */
        userId?: (string|null);
    }

    /** Represents a DocsRequest. */
    class DocsRequest implements IDocsRequest {

        /**
         * Constructs a new DocsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: docs.IDocsRequest);

        /** DocsRequest userId. */
        public userId: string;

        /**
         * Creates a new DocsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DocsRequest instance
         */
        public static create(properties?: docs.IDocsRequest): docs.DocsRequest;

        /**
         * Encodes the specified DocsRequest message. Does not implicitly {@link docs.DocsRequest.verify|verify} messages.
         * @param message DocsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: docs.IDocsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DocsRequest message, length delimited. Does not implicitly {@link docs.DocsRequest.verify|verify} messages.
         * @param message DocsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: docs.IDocsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DocsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DocsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): docs.DocsRequest;

        /**
         * Decodes a DocsRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DocsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): docs.DocsRequest;

        /**
         * Verifies a DocsRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DocsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DocsRequest
         */
        public static fromObject(object: { [k: string]: any }): docs.DocsRequest;

        /**
         * Creates a plain object from a DocsRequest message. Also converts values to other types if specified.
         * @param message DocsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: docs.DocsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DocsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DocsRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Doc. */
    interface IDoc {

        /** Doc title */
        title?: (string|null);

        /** Doc userId */
        userId?: (string|null);

        /** Doc text */
        text?: (string|null);
    }

    /** Represents a Doc. */
    class Doc implements IDoc {

        /**
         * Constructs a new Doc.
         * @param [properties] Properties to set
         */
        constructor(properties?: docs.IDoc);

        /** Doc title. */
        public title: string;

        /** Doc userId. */
        public userId: string;

        /** Doc text. */
        public text: string;

        /**
         * Creates a new Doc instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Doc instance
         */
        public static create(properties?: docs.IDoc): docs.Doc;

        /**
         * Encodes the specified Doc message. Does not implicitly {@link docs.Doc.verify|verify} messages.
         * @param message Doc message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: docs.IDoc, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Doc message, length delimited. Does not implicitly {@link docs.Doc.verify|verify} messages.
         * @param message Doc message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: docs.IDoc, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Doc message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Doc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): docs.Doc;

        /**
         * Decodes a Doc message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Doc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): docs.Doc;

        /**
         * Verifies a Doc message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Doc message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Doc
         */
        public static fromObject(object: { [k: string]: any }): docs.Doc;

        /**
         * Creates a plain object from a Doc message. Also converts values to other types if specified.
         * @param message Doc
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: docs.Doc, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Doc to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Doc
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DocsResponse. */
    interface IDocsResponse {

        /** DocsResponse documents */
        documents?: (docs.IDoc[]|null);
    }

    /** Represents a DocsResponse. */
    class DocsResponse implements IDocsResponse {

        /**
         * Constructs a new DocsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: docs.IDocsResponse);

        /** DocsResponse documents. */
        public documents: docs.IDoc[];

        /**
         * Creates a new DocsResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DocsResponse instance
         */
        public static create(properties?: docs.IDocsResponse): docs.DocsResponse;

        /**
         * Encodes the specified DocsResponse message. Does not implicitly {@link docs.DocsResponse.verify|verify} messages.
         * @param message DocsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: docs.IDocsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DocsResponse message, length delimited. Does not implicitly {@link docs.DocsResponse.verify|verify} messages.
         * @param message DocsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: docs.IDocsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DocsResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DocsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): docs.DocsResponse;

        /**
         * Decodes a DocsResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DocsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): docs.DocsResponse;

        /**
         * Verifies a DocsResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DocsResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DocsResponse
         */
        public static fromObject(object: { [k: string]: any }): docs.DocsResponse;

        /**
         * Creates a plain object from a DocsResponse message. Also converts values to other types if specified.
         * @param message DocsResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: docs.DocsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DocsResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DocsResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Represents a DocsService */
    class DocsService extends $protobuf.rpc.Service {

        /**
         * Constructs a new DocsService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new DocsService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): DocsService;

        /**
         * Calls Documents.
         * @param request DocsRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and DocsResponse
         */
        public documents(request: docs.IDocsRequest, callback: docs.DocsService.DocumentsCallback): void;

        /**
         * Calls Documents.
         * @param request DocsRequest message or plain object
         * @returns Promise
         */
        public documents(request: docs.IDocsRequest): Promise<docs.DocsResponse>;
    }

    namespace DocsService {

        /**
         * Callback as used by {@link docs.DocsService#documents}.
         * @param error Error, if any
         * @param [response] DocsResponse
         */
        type DocumentsCallback = (error: (Error|null), response?: docs.DocsResponse) => void;
    }
}
