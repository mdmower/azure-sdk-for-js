/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { StorageMoverClient } = require("@azure/arm-storagemover");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Gets an Endpoint resource.
 *
 * @summary Gets an Endpoint resource.
 * x-ms-original-file: specification/storagemover/resource-manager/Microsoft.StorageMover/stable/2023-03-01/examples/Endpoints_Get.json
 */
async function endpointsGet() {
  const subscriptionId =
    process.env["STORAGEMOVER_SUBSCRIPTION_ID"] || "11111111-2222-3333-4444-555555555555";
  const resourceGroupName = process.env["STORAGEMOVER_RESOURCE_GROUP"] || "examples-rg";
  const storageMoverName = "examples-storageMoverName";
  const endpointName = "examples-endpointName";
  const credential = new DefaultAzureCredential();
  const client = new StorageMoverClient(credential, subscriptionId);
  const result = await client.endpoints.get(resourceGroupName, storageMoverName, endpointName);
  console.log(result);
}

async function main() {
  endpointsGet();
}

main().catch(console.error);
