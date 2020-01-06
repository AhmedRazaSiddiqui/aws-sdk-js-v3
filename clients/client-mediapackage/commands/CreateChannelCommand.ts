import {
  MediaPackageClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../MediaPackageClient";
import { CreateChannelRequest, CreateChannelResponse } from "../models/index";
import {
  deserializeAws_restJson1_1CreateChannelCommand,
  serializeAws_restJson1_1CreateChannelCommand
} from "../protocols/Aws_restJson1_1";
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

export type CreateChannelCommandInput = CreateChannelRequest;
export type CreateChannelCommandOutput = CreateChannelResponse;

export class CreateChannelCommand extends $Command<
  CreateChannelCommandInput,
  CreateChannelCommandOutput,
  MediaPackageClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateChannelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaPackageClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateChannelCommandInput, CreateChannelCommandOutput> {
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
    input: CreateChannelCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1CreateChannelCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<CreateChannelCommandOutput> {
    return deserializeAws_restJson1_1CreateChannelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}