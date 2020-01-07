import {
  CloudTrailClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../CloudTrailClient";
import {
  PutEventSelectorsRequest,
  PutEventSelectorsResponse
} from "../models/index";
import {
  deserializeAws_json1_1PutEventSelectorsCommand,
  serializeAws_json1_1PutEventSelectorsCommand
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type PutEventSelectorsCommandInput = PutEventSelectorsRequest;
export type PutEventSelectorsCommandOutput = PutEventSelectorsResponse;

export class PutEventSelectorsCommand extends $Command<
  PutEventSelectorsCommandInput,
  PutEventSelectorsCommandOutput,
  CloudTrailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutEventSelectorsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudTrailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutEventSelectorsCommandInput, PutEventSelectorsCommandOutput> {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutEventSelectorsCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1PutEventSelectorsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<PutEventSelectorsCommandOutput> {
    return deserializeAws_json1_1PutEventSelectorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}