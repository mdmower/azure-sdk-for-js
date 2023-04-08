// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  DeploymentCompletionsOptionsCompletions,
  OpenAIContext,
  getCompletions,
  GetCompletionsOptions,
} from "./api/index.js";

export class OpenAIClient {
  private _client: OpenAIContext;

  getCompletions(
    deploymentId: string,
    prompt: string,
    options?: GetCompletionsOptions
  ): Promise<DeploymentCompletionsOptionsCompletions>;
  getCompletions(
    deploymentId: string,
    prompt: string[],
    options?: GetCompletionsOptions
  ): Promise<DeploymentCompletionsOptionsCompletions>;
  getCompletions(
    deploymentId: string,
    options?: GetCompletionsOptions
  ): Promise<DeploymentCompletionsOptionsCompletions>;
  getCompletions(
    deploymentId: string,
    promptOrOptions?: string | string[] | GetCompletionsOptions,
    options: GetCompletionsOptions = { requestOptions: {} }
  ): Promise<DeploymentCompletionsOptionsCompletions> {
    return getCompletions(this._client, deploymentId, promptOrOptions as any, options);
  }
}
