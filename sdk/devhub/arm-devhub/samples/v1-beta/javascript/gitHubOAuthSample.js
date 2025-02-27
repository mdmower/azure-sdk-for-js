/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { DeveloperHubServiceClient } = require("@azure/arm-devhub");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Gets GitHubOAuth info used to authenticate users with the Developer Hub GitHub App.
 *
 * @summary Gets GitHubOAuth info used to authenticate users with the Developer Hub GitHub App.
 * x-ms-original-file: specification/developerhub/resource-manager/Microsoft.DevHub/preview/2022-04-01-preview/examples/GitHubOAuth.json
 */
async function gitHubOAuth() {
  const subscriptionId = process.env["DEVHUB_SUBSCRIPTION_ID"] || "subscriptionId1";
  const location = "eastus2euap";
  const parameters = {
    redirectUrl: "https://ms.portal.azure.com/aks",
  };
  const options = { parameters };
  const credential = new DefaultAzureCredential();
  const client = new DeveloperHubServiceClient(credential, subscriptionId);
  const result = await client.gitHubOAuth(location, options);
  console.log(result);
}

async function main() {
  gitHubOAuth();
}

main().catch(console.error);
