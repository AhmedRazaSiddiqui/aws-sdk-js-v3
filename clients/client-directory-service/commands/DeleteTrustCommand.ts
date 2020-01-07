import {
  DirectoryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../DirectoryServiceClient";
import { DeleteTrustRequest, DeleteTrustResult } from "../models/index";
import {
  deserializeAws_json1_1DeleteTrustCommand,
  serializeAws_json1_1DeleteTrustCommand
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

export type DeleteTrustCommandInput = DeleteTrustRequest;
export type DeleteTrustCommandOutput = DeleteTrustResult;

export class DeleteTrustCommand extends $Command<
  DeleteTrustCommandInput,
  DeleteTrustCommandOutput,
  DirectoryServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteTrustCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteTrustCommandInput, DeleteTrustCommandOutput> {
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
    input: DeleteTrustCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteTrustCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<DeleteTrustCommandOutput> {
    return deserializeAws_json1_1DeleteTrustCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}