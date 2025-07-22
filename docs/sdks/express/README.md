# Express
(*express*)

## Overview

Everything about express in the business

### Available Operations

* [pay](#pay) - Simulate Daraja express payment

## pay

Simulate Daraja express payment

### Example Usage

```typescript
import { MpesaFlow } from "@mpesaflow/sdk";

const mpesaFlow = new MpesaFlow({
  token: "MPESAFLOW_API_KEY",
});

async function run() {
  const result = await mpesaFlow.express.pay({
    phoneNumber: "254712345678",
    amount: "100.00",
    transactionDesc: "mpesaflow",
    customerName: "John Doe",
    accountReference: "mpesaflow",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MpesaFlowCore } from "@mpesaflow/sdk/core.js";
import { expressPay } from "@mpesaflow/sdk/funcs/expressPay.js";

// Use `MpesaFlowCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mpesaFlow = new MpesaFlowCore({
  token: "MPESAFLOW_API_KEY",
});

async function run() {
  const res = await expressPay(mpesaFlow, {
    phoneNumber: "254712345678",
    amount: "100.00",
    transactionDesc: "mpesaflow",
    customerName: "John Doe",
    accountReference: "mpesaflow",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("expressPay failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ExpressRequest](../../models/operations/expressrequest.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ExpressResponse](../../models/operations/expressresponse.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.MissingApiKeyError    | 401                          | application/json             |
| errors.InvalidApiKeyError    | 403                          | application/json             |
| errors.ValidationError       | 422                          | application/json             |
| errors.TooManyRequestsError  | 429                          | application/json             |
| errors.InternalServerError   | 500                          | application/json             |
| errors.MpesaFlowDefaultError | 4XX, 5XX                     | \*/\*                        |