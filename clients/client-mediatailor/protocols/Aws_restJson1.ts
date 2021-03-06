import {
  DeletePlaybackConfigurationCommandInput,
  DeletePlaybackConfigurationCommandOutput,
} from "../commands/DeletePlaybackConfigurationCommand";
import {
  GetPlaybackConfigurationCommandInput,
  GetPlaybackConfigurationCommandOutput,
} from "../commands/GetPlaybackConfigurationCommand";
import {
  ListPlaybackConfigurationsCommandInput,
  ListPlaybackConfigurationsCommandOutput,
} from "../commands/ListPlaybackConfigurationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  PutPlaybackConfigurationCommandInput,
  PutPlaybackConfigurationCommandOutput,
} from "../commands/PutPlaybackConfigurationCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  AdMarkerPassthrough,
  AvailSuppression,
  BadRequestException,
  Bumper,
  CdnConfiguration,
  DashConfiguration,
  DashConfigurationForPut,
  HlsConfiguration,
  LivePreRollConfiguration,
  ManifestProcessingRules,
  PlaybackConfiguration,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export const serializeAws_restJson1DeletePlaybackConfigurationCommand = async (
  input: DeletePlaybackConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/playbackConfiguration/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetPlaybackConfigurationCommand = async (
  input: GetPlaybackConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/playbackConfiguration/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListPlaybackConfigurationsCommand = async (
  input: ListPlaybackConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/playbackConfigurations";
  const query: any = {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PutPlaybackConfigurationCommand = async (
  input: PutPlaybackConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/playbackConfiguration";
  let body: any;
  body = JSON.stringify({
    ...(input.AdDecisionServerUrl !== undefined &&
      input.AdDecisionServerUrl !== null && { AdDecisionServerUrl: input.AdDecisionServerUrl }),
    ...(input.AvailSuppression !== undefined &&
      input.AvailSuppression !== null && {
        AvailSuppression: serializeAws_restJson1AvailSuppression(input.AvailSuppression, context),
      }),
    ...(input.Bumper !== undefined &&
      input.Bumper !== null && { Bumper: serializeAws_restJson1Bumper(input.Bumper, context) }),
    ...(input.CdnConfiguration !== undefined &&
      input.CdnConfiguration !== null && {
        CdnConfiguration: serializeAws_restJson1CdnConfiguration(input.CdnConfiguration, context),
      }),
    ...(input.DashConfiguration !== undefined &&
      input.DashConfiguration !== null && {
        DashConfiguration: serializeAws_restJson1DashConfigurationForPut(input.DashConfiguration, context),
      }),
    ...(input.LivePreRollConfiguration !== undefined &&
      input.LivePreRollConfiguration !== null && {
        LivePreRollConfiguration: serializeAws_restJson1LivePreRollConfiguration(
          input.LivePreRollConfiguration,
          context
        ),
      }),
    ...(input.ManifestProcessingRules !== undefined &&
      input.ManifestProcessingRules !== null && {
        ManifestProcessingRules: serializeAws_restJson1ManifestProcessingRules(input.ManifestProcessingRules, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.PersonalizationThresholdSeconds !== undefined &&
      input.PersonalizationThresholdSeconds !== null && {
        PersonalizationThresholdSeconds: input.PersonalizationThresholdSeconds,
      }),
    ...(input.SlateAdUrl !== undefined && input.SlateAdUrl !== null && { SlateAdUrl: input.SlateAdUrl }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { tags: serializeAws_restJson1__mapOf__string(input.Tags, context) }),
    ...(input.TranscodeProfileName !== undefined &&
      input.TranscodeProfileName !== null && { TranscodeProfileName: input.TranscodeProfileName }),
    ...(input.VideoContentSourceUrl !== undefined &&
      input.VideoContentSourceUrl !== null && { VideoContentSourceUrl: input.VideoContentSourceUrl }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Tags !== undefined &&
      input.Tags !== null && { tags: serializeAws_restJson1__mapOf__string(input.Tags, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  const query: any = {
    ...(input.TagKeys !== undefined && { tagKeys: (input.TagKeys || []).map((_entry) => _entry) }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const deserializeAws_restJson1DeletePlaybackConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePlaybackConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeletePlaybackConfigurationCommandError(output, context);
  }
  const contents: DeletePlaybackConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeletePlaybackConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePlaybackConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetPlaybackConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPlaybackConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetPlaybackConfigurationCommandError(output, context);
  }
  const contents: GetPlaybackConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    AdDecisionServerUrl: undefined,
    AvailSuppression: undefined,
    Bumper: undefined,
    CdnConfiguration: undefined,
    DashConfiguration: undefined,
    HlsConfiguration: undefined,
    LivePreRollConfiguration: undefined,
    ManifestProcessingRules: undefined,
    Name: undefined,
    PersonalizationThresholdSeconds: undefined,
    PlaybackConfigurationArn: undefined,
    PlaybackEndpointPrefix: undefined,
    SessionInitializationEndpointPrefix: undefined,
    SlateAdUrl: undefined,
    Tags: undefined,
    TranscodeProfileName: undefined,
    VideoContentSourceUrl: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.AdDecisionServerUrl !== undefined && data.AdDecisionServerUrl !== null) {
    contents.AdDecisionServerUrl = data.AdDecisionServerUrl;
  }
  if (data.AvailSuppression !== undefined && data.AvailSuppression !== null) {
    contents.AvailSuppression = deserializeAws_restJson1AvailSuppression(data.AvailSuppression, context);
  }
  if (data.Bumper !== undefined && data.Bumper !== null) {
    contents.Bumper = deserializeAws_restJson1Bumper(data.Bumper, context);
  }
  if (data.CdnConfiguration !== undefined && data.CdnConfiguration !== null) {
    contents.CdnConfiguration = deserializeAws_restJson1CdnConfiguration(data.CdnConfiguration, context);
  }
  if (data.DashConfiguration !== undefined && data.DashConfiguration !== null) {
    contents.DashConfiguration = deserializeAws_restJson1DashConfiguration(data.DashConfiguration, context);
  }
  if (data.HlsConfiguration !== undefined && data.HlsConfiguration !== null) {
    contents.HlsConfiguration = deserializeAws_restJson1HlsConfiguration(data.HlsConfiguration, context);
  }
  if (data.LivePreRollConfiguration !== undefined && data.LivePreRollConfiguration !== null) {
    contents.LivePreRollConfiguration = deserializeAws_restJson1LivePreRollConfiguration(
      data.LivePreRollConfiguration,
      context
    );
  }
  if (data.ManifestProcessingRules !== undefined && data.ManifestProcessingRules !== null) {
    contents.ManifestProcessingRules = deserializeAws_restJson1ManifestProcessingRules(
      data.ManifestProcessingRules,
      context
    );
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = data.Name;
  }
  if (data.PersonalizationThresholdSeconds !== undefined && data.PersonalizationThresholdSeconds !== null) {
    contents.PersonalizationThresholdSeconds = data.PersonalizationThresholdSeconds;
  }
  if (data.PlaybackConfigurationArn !== undefined && data.PlaybackConfigurationArn !== null) {
    contents.PlaybackConfigurationArn = data.PlaybackConfigurationArn;
  }
  if (data.PlaybackEndpointPrefix !== undefined && data.PlaybackEndpointPrefix !== null) {
    contents.PlaybackEndpointPrefix = data.PlaybackEndpointPrefix;
  }
  if (data.SessionInitializationEndpointPrefix !== undefined && data.SessionInitializationEndpointPrefix !== null) {
    contents.SessionInitializationEndpointPrefix = data.SessionInitializationEndpointPrefix;
  }
  if (data.SlateAdUrl !== undefined && data.SlateAdUrl !== null) {
    contents.SlateAdUrl = data.SlateAdUrl;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
  }
  if (data.TranscodeProfileName !== undefined && data.TranscodeProfileName !== null) {
    contents.TranscodeProfileName = data.TranscodeProfileName;
  }
  if (data.VideoContentSourceUrl !== undefined && data.VideoContentSourceUrl !== null) {
    contents.VideoContentSourceUrl = data.VideoContentSourceUrl;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetPlaybackConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPlaybackConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListPlaybackConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPlaybackConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPlaybackConfigurationsCommandError(output, context);
  }
  const contents: ListPlaybackConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Items: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Items !== undefined && data.Items !== null) {
    contents.Items = deserializeAws_restJson1__listOfPlaybackConfigurations(data.Items, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListPlaybackConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPlaybackConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    Tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediatailor#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1PutPlaybackConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPlaybackConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutPlaybackConfigurationCommandError(output, context);
  }
  const contents: PutPlaybackConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    AdDecisionServerUrl: undefined,
    AvailSuppression: undefined,
    Bumper: undefined,
    CdnConfiguration: undefined,
    DashConfiguration: undefined,
    HlsConfiguration: undefined,
    LivePreRollConfiguration: undefined,
    ManifestProcessingRules: undefined,
    Name: undefined,
    PersonalizationThresholdSeconds: undefined,
    PlaybackConfigurationArn: undefined,
    PlaybackEndpointPrefix: undefined,
    SessionInitializationEndpointPrefix: undefined,
    SlateAdUrl: undefined,
    Tags: undefined,
    TranscodeProfileName: undefined,
    VideoContentSourceUrl: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.AdDecisionServerUrl !== undefined && data.AdDecisionServerUrl !== null) {
    contents.AdDecisionServerUrl = data.AdDecisionServerUrl;
  }
  if (data.AvailSuppression !== undefined && data.AvailSuppression !== null) {
    contents.AvailSuppression = deserializeAws_restJson1AvailSuppression(data.AvailSuppression, context);
  }
  if (data.Bumper !== undefined && data.Bumper !== null) {
    contents.Bumper = deserializeAws_restJson1Bumper(data.Bumper, context);
  }
  if (data.CdnConfiguration !== undefined && data.CdnConfiguration !== null) {
    contents.CdnConfiguration = deserializeAws_restJson1CdnConfiguration(data.CdnConfiguration, context);
  }
  if (data.DashConfiguration !== undefined && data.DashConfiguration !== null) {
    contents.DashConfiguration = deserializeAws_restJson1DashConfiguration(data.DashConfiguration, context);
  }
  if (data.HlsConfiguration !== undefined && data.HlsConfiguration !== null) {
    contents.HlsConfiguration = deserializeAws_restJson1HlsConfiguration(data.HlsConfiguration, context);
  }
  if (data.LivePreRollConfiguration !== undefined && data.LivePreRollConfiguration !== null) {
    contents.LivePreRollConfiguration = deserializeAws_restJson1LivePreRollConfiguration(
      data.LivePreRollConfiguration,
      context
    );
  }
  if (data.ManifestProcessingRules !== undefined && data.ManifestProcessingRules !== null) {
    contents.ManifestProcessingRules = deserializeAws_restJson1ManifestProcessingRules(
      data.ManifestProcessingRules,
      context
    );
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = data.Name;
  }
  if (data.PersonalizationThresholdSeconds !== undefined && data.PersonalizationThresholdSeconds !== null) {
    contents.PersonalizationThresholdSeconds = data.PersonalizationThresholdSeconds;
  }
  if (data.PlaybackConfigurationArn !== undefined && data.PlaybackConfigurationArn !== null) {
    contents.PlaybackConfigurationArn = data.PlaybackConfigurationArn;
  }
  if (data.PlaybackEndpointPrefix !== undefined && data.PlaybackEndpointPrefix !== null) {
    contents.PlaybackEndpointPrefix = data.PlaybackEndpointPrefix;
  }
  if (data.SessionInitializationEndpointPrefix !== undefined && data.SessionInitializationEndpointPrefix !== null) {
    contents.SessionInitializationEndpointPrefix = data.SessionInitializationEndpointPrefix;
  }
  if (data.SlateAdUrl !== undefined && data.SlateAdUrl !== null) {
    contents.SlateAdUrl = data.SlateAdUrl;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
  }
  if (data.TranscodeProfileName !== undefined && data.TranscodeProfileName !== null) {
    contents.TranscodeProfileName = data.TranscodeProfileName;
  }
  if (data.VideoContentSourceUrl !== undefined && data.VideoContentSourceUrl !== null) {
    contents.VideoContentSourceUrl = data.VideoContentSourceUrl;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutPlaybackConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPlaybackConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediatailor#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediatailor#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const serializeAws_restJson1__mapOf__string = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1AdMarkerPassthrough = (input: AdMarkerPassthrough, context: __SerdeContext): any => {
  return {
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
  };
};

const serializeAws_restJson1AvailSuppression = (input: AvailSuppression, context: __SerdeContext): any => {
  return {
    ...(input.Mode !== undefined && input.Mode !== null && { Mode: input.Mode }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_restJson1Bumper = (input: Bumper, context: __SerdeContext): any => {
  return {
    ...(input.EndUrl !== undefined && input.EndUrl !== null && { EndUrl: input.EndUrl }),
    ...(input.StartUrl !== undefined && input.StartUrl !== null && { StartUrl: input.StartUrl }),
  };
};

const serializeAws_restJson1CdnConfiguration = (input: CdnConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AdSegmentUrlPrefix !== undefined &&
      input.AdSegmentUrlPrefix !== null && { AdSegmentUrlPrefix: input.AdSegmentUrlPrefix }),
    ...(input.ContentSegmentUrlPrefix !== undefined &&
      input.ContentSegmentUrlPrefix !== null && { ContentSegmentUrlPrefix: input.ContentSegmentUrlPrefix }),
  };
};

const serializeAws_restJson1DashConfigurationForPut = (
  input: DashConfigurationForPut,
  context: __SerdeContext
): any => {
  return {
    ...(input.MpdLocation !== undefined && input.MpdLocation !== null && { MpdLocation: input.MpdLocation }),
    ...(input.OriginManifestType !== undefined &&
      input.OriginManifestType !== null && { OriginManifestType: input.OriginManifestType }),
  };
};

const serializeAws_restJson1LivePreRollConfiguration = (
  input: LivePreRollConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdDecisionServerUrl !== undefined &&
      input.AdDecisionServerUrl !== null && { AdDecisionServerUrl: input.AdDecisionServerUrl }),
    ...(input.MaxDurationSeconds !== undefined &&
      input.MaxDurationSeconds !== null && { MaxDurationSeconds: input.MaxDurationSeconds }),
  };
};

const serializeAws_restJson1ManifestProcessingRules = (
  input: ManifestProcessingRules,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdMarkerPassthrough !== undefined &&
      input.AdMarkerPassthrough !== null && {
        AdMarkerPassthrough: serializeAws_restJson1AdMarkerPassthrough(input.AdMarkerPassthrough, context),
      }),
  };
};

const deserializeAws_restJson1__listOfPlaybackConfigurations = (
  output: any,
  context: __SerdeContext
): PlaybackConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PlaybackConfiguration(entry, context);
    });
};

const deserializeAws_restJson1__mapOf__string = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const deserializeAws_restJson1AdMarkerPassthrough = (output: any, context: __SerdeContext): AdMarkerPassthrough => {
  return {
    Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
  } as any;
};

const deserializeAws_restJson1AvailSuppression = (output: any, context: __SerdeContext): AvailSuppression => {
  return {
    Mode: output.Mode !== undefined && output.Mode !== null ? output.Mode : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  } as any;
};

const deserializeAws_restJson1Bumper = (output: any, context: __SerdeContext): Bumper => {
  return {
    EndUrl: output.EndUrl !== undefined && output.EndUrl !== null ? output.EndUrl : undefined,
    StartUrl: output.StartUrl !== undefined && output.StartUrl !== null ? output.StartUrl : undefined,
  } as any;
};

const deserializeAws_restJson1CdnConfiguration = (output: any, context: __SerdeContext): CdnConfiguration => {
  return {
    AdSegmentUrlPrefix:
      output.AdSegmentUrlPrefix !== undefined && output.AdSegmentUrlPrefix !== null
        ? output.AdSegmentUrlPrefix
        : undefined,
    ContentSegmentUrlPrefix:
      output.ContentSegmentUrlPrefix !== undefined && output.ContentSegmentUrlPrefix !== null
        ? output.ContentSegmentUrlPrefix
        : undefined,
  } as any;
};

const deserializeAws_restJson1DashConfiguration = (output: any, context: __SerdeContext): DashConfiguration => {
  return {
    ManifestEndpointPrefix:
      output.ManifestEndpointPrefix !== undefined && output.ManifestEndpointPrefix !== null
        ? output.ManifestEndpointPrefix
        : undefined,
    MpdLocation: output.MpdLocation !== undefined && output.MpdLocation !== null ? output.MpdLocation : undefined,
    OriginManifestType:
      output.OriginManifestType !== undefined && output.OriginManifestType !== null
        ? output.OriginManifestType
        : undefined,
  } as any;
};

const deserializeAws_restJson1HlsConfiguration = (output: any, context: __SerdeContext): HlsConfiguration => {
  return {
    ManifestEndpointPrefix:
      output.ManifestEndpointPrefix !== undefined && output.ManifestEndpointPrefix !== null
        ? output.ManifestEndpointPrefix
        : undefined,
  } as any;
};

const deserializeAws_restJson1LivePreRollConfiguration = (
  output: any,
  context: __SerdeContext
): LivePreRollConfiguration => {
  return {
    AdDecisionServerUrl:
      output.AdDecisionServerUrl !== undefined && output.AdDecisionServerUrl !== null
        ? output.AdDecisionServerUrl
        : undefined,
    MaxDurationSeconds:
      output.MaxDurationSeconds !== undefined && output.MaxDurationSeconds !== null
        ? output.MaxDurationSeconds
        : undefined,
  } as any;
};

const deserializeAws_restJson1ManifestProcessingRules = (
  output: any,
  context: __SerdeContext
): ManifestProcessingRules => {
  return {
    AdMarkerPassthrough:
      output.AdMarkerPassthrough !== undefined && output.AdMarkerPassthrough !== null
        ? deserializeAws_restJson1AdMarkerPassthrough(output.AdMarkerPassthrough, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PlaybackConfiguration = (output: any, context: __SerdeContext): PlaybackConfiguration => {
  return {
    AdDecisionServerUrl:
      output.AdDecisionServerUrl !== undefined && output.AdDecisionServerUrl !== null
        ? output.AdDecisionServerUrl
        : undefined,
    AvailSuppression:
      output.AvailSuppression !== undefined && output.AvailSuppression !== null
        ? deserializeAws_restJson1AvailSuppression(output.AvailSuppression, context)
        : undefined,
    Bumper:
      output.Bumper !== undefined && output.Bumper !== null
        ? deserializeAws_restJson1Bumper(output.Bumper, context)
        : undefined,
    CdnConfiguration:
      output.CdnConfiguration !== undefined && output.CdnConfiguration !== null
        ? deserializeAws_restJson1CdnConfiguration(output.CdnConfiguration, context)
        : undefined,
    DashConfiguration:
      output.DashConfiguration !== undefined && output.DashConfiguration !== null
        ? deserializeAws_restJson1DashConfiguration(output.DashConfiguration, context)
        : undefined,
    HlsConfiguration:
      output.HlsConfiguration !== undefined && output.HlsConfiguration !== null
        ? deserializeAws_restJson1HlsConfiguration(output.HlsConfiguration, context)
        : undefined,
    ManifestProcessingRules:
      output.ManifestProcessingRules !== undefined && output.ManifestProcessingRules !== null
        ? deserializeAws_restJson1ManifestProcessingRules(output.ManifestProcessingRules, context)
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    PersonalizationThresholdSeconds:
      output.PersonalizationThresholdSeconds !== undefined && output.PersonalizationThresholdSeconds !== null
        ? output.PersonalizationThresholdSeconds
        : undefined,
    PlaybackConfigurationArn:
      output.PlaybackConfigurationArn !== undefined && output.PlaybackConfigurationArn !== null
        ? output.PlaybackConfigurationArn
        : undefined,
    PlaybackEndpointPrefix:
      output.PlaybackEndpointPrefix !== undefined && output.PlaybackEndpointPrefix !== null
        ? output.PlaybackEndpointPrefix
        : undefined,
    SessionInitializationEndpointPrefix:
      output.SessionInitializationEndpointPrefix !== undefined && output.SessionInitializationEndpointPrefix !== null
        ? output.SessionInitializationEndpointPrefix
        : undefined,
    SlateAdUrl: output.SlateAdUrl !== undefined && output.SlateAdUrl !== null ? output.SlateAdUrl : undefined,
    Tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1__mapOf__string(output.tags, context)
        : undefined,
    TranscodeProfileName:
      output.TranscodeProfileName !== undefined && output.TranscodeProfileName !== null
        ? output.TranscodeProfileName
        : undefined,
    VideoContentSourceUrl:
      output.VideoContentSourceUrl !== undefined && output.VideoContentSourceUrl !== null
        ? output.VideoContentSourceUrl
        : undefined,
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }

  return "";
};
