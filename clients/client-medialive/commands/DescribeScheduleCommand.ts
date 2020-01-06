import {
  MediaLiveClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../MediaLiveClient";
import {
  DescribeScheduleRequest,
  DescribeScheduleResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1DescribeScheduleCommand,
  serializeAws_restJson1_1DescribeScheduleCommand
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

export type DescribeScheduleCommandInput = DescribeScheduleRequest;
export type DescribeScheduleCommandOutput = DescribeScheduleResponse;

export class DescribeScheduleCommand extends $Command<
  DescribeScheduleCommandInput,
  DescribeScheduleCommandOutput,
  MediaLiveClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeScheduleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaLiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeScheduleCommandInput, DescribeScheduleCommandOutput> {
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
    input: DescribeScheduleCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1DescribeScheduleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<DescribeScheduleCommandOutput> {
    return deserializeAws_restJson1_1DescribeScheduleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}