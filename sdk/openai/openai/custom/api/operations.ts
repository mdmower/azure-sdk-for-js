// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OpenAIContext as Client } from "../rest/index.js";
import {
  DeploymentCompletionsOptionsCompletions,
} from "./models.js";
import { getCompletions as _getCompletions, GetCompletionsOptions } from "../../generated/api/operations.js"

// export interface GetCompletionsOptions extends _GetCompletionsOptions {
//   // @azsdk-remove
//   prompt?: string;
// }

export async function getCompletions(
  context: Client,
  deploymentId: string,
  options?: GetCompletionsOptions
): Promise<DeploymentCompletionsOptionsCompletions>
export async function getCompletions(
  context: Client,
  deploymentId: string,
  prompt: string,
  options?: GetCompletionsOptions
): Promise<DeploymentCompletionsOptionsCompletions>
export async function getCompletions(
  context: Client,
  deploymentId: string,
  prompt: string[],
  options?: GetCompletionsOptions
): Promise<DeploymentCompletionsOptionsCompletions>
/**
 * Gets completions for the provided input prompts.
 * Completions support a wide variety of tasks and generate text that continues from or "completes"
 * provided prompt data.
 */
export async function getCompletions(
  context: Client,
  deploymentId: string,
  inputPromptOrOptions?: string | string[] | GetCompletionsOptions,
  options: GetCompletionsOptions = { requestOptions: {} }
): Promise<DeploymentCompletionsOptionsCompletions> {
  if (typeof inputPromptOrOptions === "object" && !Array.isArray(inputPromptOrOptions)) {
    return _getCompletions(context, deploymentId, inputPromptOrOptions);
  } else {
    return _getCompletions(context, deploymentId, { ...options, prompt: inputPromptOrOptions });
  }
}