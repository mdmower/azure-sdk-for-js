// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary test getCompletions
 */

import { OpenAI } from "@azure/ai-openai";
import { AzureKeyCredential } from "@azure/core-auth";

// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

// You will need to set these environment variables or edit the following values
const endpoint = process.env["ENDPOINT"] || "<openai endpoint>";
const apiKey = process.env["OPENAI_API_KEY"] || "<api key>";
const modelVersion = process.env["MODEL_NAME"] || "<model name>";

const doc = "Hello world!";

export async function main() {
  console.log("== Get completions Sample ==");

  const client = new OpenAI(endpoint, new AzureKeyCredential(apiKey));

  const result = await client.getCompletions(modelVersion, {
    prompt: [doc],
  })

  console.log(result?.choices?.[0].text);
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
