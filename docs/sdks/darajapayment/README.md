# DarajaPayment
(*darajaPayment*)

## Overview

### Available Operations

* [mpesaPay](#mpesapay) - Initiate M-Pesa payment

## mpesaPay

Initiate M-Pesa payment

### Example Usage

```typescript
import { MpesaFlow } from "mpesaflow";

const mpesaFlow = new MpesaFlow({
  bearer: process.env["MPESAFLOW_BEARER"] ?? "",
});

async function run() {
  const result = await mpesaFlow.darajaPayment.mpesaPay({
    phoneNumber: "478-851-4355 x0372",
    amount: "835.52",
    transactionDesc: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MpesaFlowCore } from "mpesaflow/core.js";
import { darajaPaymentMpesaPay } from "mpesaflow/funcs/darajaPaymentMpesaPay.js";

// Use `MpesaFlowCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mpesaFlow = new MpesaFlowCore({
  bearer: process.env["MPESAFLOW_BEARER"] ?? "",
});

async function run() {
  const res = await darajaPaymentMpesaPay(mpesaFlow, {
    phoneNumber: "478-851-4355 x0372",
    amount: "835.52",
    transactionDesc: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostPayMpesaRequest](../../models/operations/postpaympesarequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostPayMpesaResponse](../../models/operations/postpaympesaresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.GetProductsBadRequestError   | 400                                 | application/json                    |
| errors.GetProductsUnauthorizedError | 401                                 | application/json                    |
| errors.InternalServerError          | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |