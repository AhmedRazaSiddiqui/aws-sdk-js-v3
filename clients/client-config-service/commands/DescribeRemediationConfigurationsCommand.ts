import {
  ConfigServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../ConfigServiceClient";
import {
  DescribeRemediationConfigurationsRequest,
  DescribeRemediationConfigurationsResponse
} from "../models/index";
import {
  deserializeAws_json1_1DescribeRemediationConfigurationsCommand,
  serializeAws_json1_1DescribeRemediationConfigurationsCommand
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

export type DescribeRemediationConfigurationsCommandInput = DescribeRemediationConfigurationsRequest;
export type DescribeRemediationConfigurationsCommandOutput = DescribeRemediationConfigurationsResponse;

export class DescribeRemediationConfigurationsCommand extends $Command<
  DescribeRemediationConfigurationsCommandInput,
  DescribeRemediationConfigurationsCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeRemediationConfigurationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeRemediationConfigurationsCommandInput,
    DescribeRemediationConfigurationsCommandOutput
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
    input: DescribeRemediationConfigurationsCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeRemediationConfigurationsCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<DescribeRemediationConfigurationsCommandOutput> {
    return deserializeAws_json1_1DescribeRemediationConfigurationsCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}