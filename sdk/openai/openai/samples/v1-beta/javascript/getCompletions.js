// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary test getCompletions
 */

const { OpenAI } = require("@azure/ai-openai");
const { AzureKeyCredential } = require("@azure/core-auth");

// Load the .env file if it exists
require("dotenv").config();

// You will need to set these environment variables or edit the following values
const endpoint = process.env["ENDPOINT"] || "<openai endpoint>";
const apiKey = process.env["OPENAI_API_KEY"] || "<api key>";
const modelVersion = process.env["MODEL_NAME"] || "<model name>";

const doc = "";

async function main() {
  console.log("== Get completions Sample ==");

  const client = new OpenAI(endpoint, new AzureKeyCredential(apiKey));

  const result = await client.getCompletions(modelVersion, {
    prompt: [doc],
  });

  console.log(JSON.stringify(result, null, 2));
}

main().catch((err) => {
  console.trace(err);
  console.error("The sample encountered an error:", JSON.stringify(err));
});

module.exports = { main };
