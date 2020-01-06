import {
  MediaLiveClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../MediaLiveClient";
import {
  ListInputSecurityGroupsRequest,
  ListInputSecurityGroupsResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1ListInputSecurityGroupsCommand,
  serializeAws_restJson1_1ListInputSecurityGroupsCommand
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

export type ListInputSecurityGroupsCommandInput = ListInputSecurityGroupsRequest;
export type ListInputSecurityGroupsCommandOutput = ListInputSecurityGroupsResponse;

export class ListInputSecurityGroupsCommand extends $Command<
  ListInputSecurityGroupsCommandInput,
  ListInputSecurityGroupsCommandOutput,
  MediaLiveClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListInputSecurityGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaLiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListInputSecurityGroupsCommandInput,
    ListInputSecurityGroupsCommandOutput
  > {
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
    input: ListInputSecurityGroupsCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1ListInputSecurityGroupsCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<ListInputSecurityGroupsCommandOutput> {
    return deserializeAws_restJson1_1ListInputSecurityGroupsCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}