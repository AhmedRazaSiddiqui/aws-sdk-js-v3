import {
  Route53ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../Route53Client";
import {
  ListGeoLocationsRequest,
  ListGeoLocationsResponse
} from "../models/index";
import {
  deserializeAws_restXmlListGeoLocationsCommand,
  serializeAws_restXmlListGeoLocationsCommand
} from "../protocols/Aws_restXml";
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

export type ListGeoLocationsCommandInput = ListGeoLocationsRequest;
export type ListGeoLocationsCommandOutput = ListGeoLocationsResponse;

export class ListGeoLocationsCommand extends $Command<
  ListGeoLocationsCommandInput,
  ListGeoLocationsCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListGeoLocationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListGeoLocationsCommandInput, ListGeoLocationsCommandOutput> {
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
    input: ListGeoLocationsCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlListGeoLocationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<ListGeoLocationsCommandOutput> {
    return deserializeAws_restXmlListGeoLocationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}