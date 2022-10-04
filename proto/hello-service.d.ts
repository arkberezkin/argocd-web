import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace hello. */
export namespace hello {

    /** Properties of a HelloRequest. */
    interface IHelloRequest {

        /** HelloRequest name */
        name?: (string|null);
    }

    /** Represents a HelloRequest. */
    class HelloRequest implements IHelloRequest {

        /**
         * Constructs a new HelloRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: hello.IHelloRequest);

        /** HelloRequest name. */
        public name: string;

        /**
         * Creates a new HelloRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HelloRequest instance
         */
        public static create(properties?: hello.IHelloRequest): hello.HelloRequest;

        /**
         * Encodes the specified HelloRequest message. Does not implicitly {@link hello.HelloRequest.verify|verify} messages.
         * @param message HelloRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hello.IHelloRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HelloRequest message, length delimited. Does not implicitly {@link hello.HelloRequest.verify|verify} messages.
         * @param message HelloRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hello.IHelloRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HelloRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HelloRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hello.HelloRequest;

        /**
         * Decodes a HelloRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HelloRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hello.HelloRequest;

        /**
         * Verifies a HelloRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HelloRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HelloRequest
         */
        public static fromObject(object: { [k: string]: any }): hello.HelloRequest;

        /**
         * Creates a plain object from a HelloRequest message. Also converts values to other types if specified.
         * @param message HelloRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hello.HelloRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HelloRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HelloRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HelloResponse. */
    interface IHelloResponse {

        /** HelloResponse message */
        message?: (string|null);
    }

    /** Represents a HelloResponse. */
    class HelloResponse implements IHelloResponse {

        /**
         * Constructs a new HelloResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: hello.IHelloResponse);

        /** HelloResponse message. */
        public message: string;

        /**
         * Creates a new HelloResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HelloResponse instance
         */
        public static create(properties?: hello.IHelloResponse): hello.HelloResponse;

        /**
         * Encodes the specified HelloResponse message. Does not implicitly {@link hello.HelloResponse.verify|verify} messages.
         * @param message HelloResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hello.IHelloResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HelloResponse message, length delimited. Does not implicitly {@link hello.HelloResponse.verify|verify} messages.
         * @param message HelloResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hello.IHelloResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HelloResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HelloResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hello.HelloResponse;

        /**
         * Decodes a HelloResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HelloResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hello.HelloResponse;

        /**
         * Verifies a HelloResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HelloResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HelloResponse
         */
        public static fromObject(object: { [k: string]: any }): hello.HelloResponse;

        /**
         * Creates a plain object from a HelloResponse message. Also converts values to other types if specified.
         * @param message HelloResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hello.HelloResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HelloResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HelloResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HealthCheckRequest. */
    interface IHealthCheckRequest {

        /** HealthCheckRequest service */
        service?: (string|null);
    }

    /** Represents a HealthCheckRequest. */
    class HealthCheckRequest implements IHealthCheckRequest {

        /**
         * Constructs a new HealthCheckRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: hello.IHealthCheckRequest);

        /** HealthCheckRequest service. */
        public service: string;

        /**
         * Creates a new HealthCheckRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HealthCheckRequest instance
         */
        public static create(properties?: hello.IHealthCheckRequest): hello.HealthCheckRequest;

        /**
         * Encodes the specified HealthCheckRequest message. Does not implicitly {@link hello.HealthCheckRequest.verify|verify} messages.
         * @param message HealthCheckRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hello.IHealthCheckRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HealthCheckRequest message, length delimited. Does not implicitly {@link hello.HealthCheckRequest.verify|verify} messages.
         * @param message HealthCheckRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hello.IHealthCheckRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HealthCheckRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HealthCheckRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hello.HealthCheckRequest;

        /**
         * Decodes a HealthCheckRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HealthCheckRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hello.HealthCheckRequest;

        /**
         * Verifies a HealthCheckRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HealthCheckRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HealthCheckRequest
         */
        public static fromObject(object: { [k: string]: any }): hello.HealthCheckRequest;

        /**
         * Creates a plain object from a HealthCheckRequest message. Also converts values to other types if specified.
         * @param message HealthCheckRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hello.HealthCheckRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HealthCheckRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HealthCheckRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HealthCheckResponse. */
    interface IHealthCheckResponse {

        /** HealthCheckResponse status */
        status?: (hello.HealthCheckResponse.ServingStatus|null);
    }

    /** Represents a HealthCheckResponse. */
    class HealthCheckResponse implements IHealthCheckResponse {

        /**
         * Constructs a new HealthCheckResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: hello.IHealthCheckResponse);

        /** HealthCheckResponse status. */
        public status: hello.HealthCheckResponse.ServingStatus;

        /**
         * Creates a new HealthCheckResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HealthCheckResponse instance
         */
        public static create(properties?: hello.IHealthCheckResponse): hello.HealthCheckResponse;

        /**
         * Encodes the specified HealthCheckResponse message. Does not implicitly {@link hello.HealthCheckResponse.verify|verify} messages.
         * @param message HealthCheckResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hello.IHealthCheckResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HealthCheckResponse message, length delimited. Does not implicitly {@link hello.HealthCheckResponse.verify|verify} messages.
         * @param message HealthCheckResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hello.IHealthCheckResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HealthCheckResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HealthCheckResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hello.HealthCheckResponse;

        /**
         * Decodes a HealthCheckResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HealthCheckResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hello.HealthCheckResponse;

        /**
         * Verifies a HealthCheckResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HealthCheckResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HealthCheckResponse
         */
        public static fromObject(object: { [k: string]: any }): hello.HealthCheckResponse;

        /**
         * Creates a plain object from a HealthCheckResponse message. Also converts values to other types if specified.
         * @param message HealthCheckResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hello.HealthCheckResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HealthCheckResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HealthCheckResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace HealthCheckResponse {

        /** ServingStatus enum. */
        enum ServingStatus {
            UNKNOWN = 0,
            SERVING = 1,
            NOT_SERVING = 2,
            SERVICE_UNKNOWN = 3
        }
    }

    /** Represents a HelloService */
    class HelloService extends $protobuf.rpc.Service {

        /**
         * Constructs a new HelloService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new HelloService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): HelloService;

        /**
         * Calls Hello.
         * @param request HelloRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and HelloResponse
         */
        public hello(request: hello.IHelloRequest, callback: hello.HelloService.HelloCallback): void;

        /**
         * Calls Hello.
         * @param request HelloRequest message or plain object
         * @returns Promise
         */
        public hello(request: hello.IHelloRequest): Promise<hello.HelloResponse>;

        /**
         * Calls Check.
         * @param request HealthCheckRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and HealthCheckResponse
         */
        public check(request: hello.IHealthCheckRequest, callback: hello.HelloService.CheckCallback): void;

        /**
         * Calls Check.
         * @param request HealthCheckRequest message or plain object
         * @returns Promise
         */
        public check(request: hello.IHealthCheckRequest): Promise<hello.HealthCheckResponse>;

        /**
         * Calls Watch.
         * @param request HealthCheckRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and HealthCheckResponse
         */
        public watch(request: hello.IHealthCheckRequest, callback: hello.HelloService.WatchCallback): void;

        /**
         * Calls Watch.
         * @param request HealthCheckRequest message or plain object
         * @returns Promise
         */
        public watch(request: hello.IHealthCheckRequest): Promise<hello.HealthCheckResponse>;
    }

    namespace HelloService {

        /**
         * Callback as used by {@link hello.HelloService#hello}.
         * @param error Error, if any
         * @param [response] HelloResponse
         */
        type HelloCallback = (error: (Error|null), response?: hello.HelloResponse) => void;

        /**
         * Callback as used by {@link hello.HelloService#check}.
         * @param error Error, if any
         * @param [response] HealthCheckResponse
         */
        type CheckCallback = (error: (Error|null), response?: hello.HealthCheckResponse) => void;

        /**
         * Callback as used by {@link hello.HelloService#watch}.
         * @param error Error, if any
         * @param [response] HealthCheckResponse
         */
        type WatchCallback = (error: (Error|null), response?: hello.HealthCheckResponse) => void;
    }
}
