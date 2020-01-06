import {
  PutEventsCommandInput,
  PutEventsCommandOutput
} from "../commands/PutEventsCommand";
import { Event, InvalidInputException } from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_restJson1_1PutEventsCommand(
  input: PutEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/events";
  let body: any = {};
  const bodyParams: any = {};
  if (input.eventList !== undefined) {
    bodyParams["eventList"] = serializeAws_restJson1_1EventList(
      input.eventList,
      context
    );
  }
  if (input.sessionId !== undefined) {
    bodyParams["sessionId"] = input.sessionId;
  }
  if (input.trackingId !== undefined) {
    bodyParams["trackingId"] = input.trackingId;
  }
  if (input.userId !== undefined) {
    bodyParams["userId"] = input.userId;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function deserializeAws_restJson1_1PutEventsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEventsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1PutEventsCommandError(output, context);
  }
  const contents: PutEventsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1PutEventsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEventsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.services.personalize.events.exceptions#InvalidInputException":
      response = await deserializeAws_restJson1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.services.personalize.events#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_restJson1_1InvalidInputExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const contents: InvalidInputException = {
    __type: "InvalidInputException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const serializeAws_restJson1_1Event = (
  input: Event,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.eventId !== undefined) {
    bodyParams["eventId"] = input.eventId;
  }
  if (input.eventType !== undefined) {
    bodyParams["eventType"] = input.eventType;
  }
  if (input.properties !== undefined) {
    bodyParams["properties"] = input.properties;
  }
  if (input.sentAt !== undefined) {
    bodyParams["sentAt"] = Math.round(input.sentAt.getTime() / 1000);
  }
  return bodyParams;
};

const serializeAws_restJson1_1EventList = (
  input: Array<Event>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1Event(entry, context)
  );
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return context.streamCollector(streamBody).then((body: any) => {
    const encoded = context.utf8Encoder(body);
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};