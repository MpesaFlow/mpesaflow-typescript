# Transactions
(*transactions*)

## Overview

Everything about transactions in the business

### Available Operations

* [list](#list) - List Transactions
* [getOne](#getone) - Get Transaction

## list

List of all transactions in the business

### Example Usage

```typescript
import { MpesaFlow } from "@mpesaflow/sdk";

const mpesaFlow = new MpesaFlow({
  token: "MPESAFLOW_API_KEY",
});

async function run() {
  const result = await mpesaFlow.transactions.list({
    q: "John Doe",
    cursor: "eyJpZCI6IjEyMyJ9",
    customerId: "cus_12345",
    statuses: [
      "pending",
      "completed",
    ],
    amountRange: [
      100,
      1000,
    ],
    amount: [
      "150.75",
      "299.99",
    ],
    start: "2024-04-01T00:00:00.000Z",
    end: "2024-04-30T23:59:59.999Z",
    sort: [
      "createdAt",
      "desc",
    ],
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MpesaFlowCore } from "@mpesaflow/sdk/core.js";
import { transactionsList } from "@mpesaflow/sdk/funcs/transactionsList.js";

// Use `MpesaFlowCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mpesaFlow = new MpesaFlowCore({
  token: "MPESAFLOW_API_KEY",
});

async function run() {
  const res = await transactionsList(mpesaFlow, {
    q: "John Doe",
    cursor: "eyJpZCI6IjEyMyJ9",
    customerId: "cus_12345",
    statuses: [
      "pending",
      "completed",
    ],
    amountRange: [
      100,
      1000,
    ],
    amount: [
      "150.75",
      "299.99",
    ],
    start: "2024-04-01T00:00:00.000Z",
    end: "2024-04-30T23:59:59.999Z",
    sort: [
      "createdAt",
      "desc",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("transactionsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListTransactionsRequest](../../models/operations/listtransactionsrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListTransactionsResponse](../../models/operations/listtransactionsresponse.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.MissingApiKeyError    | 401                          | application/json             |
| errors.InvalidApiKeyError    | 403                          | application/json             |
| errors.ValidationError       | 422                          | application/json             |
| errors.TooManyRequestsError  | 429                          | application/json             |
| errors.InternalServerError   | 500                          | application/json             |
| errors.MpesaFlowDefaultError | 4XX, 5XX                     | \*/\*                        |

## getOne

Get a transaction in the  business

### Example Usage

```typescript
import { MpesaFlow } from "@mpesaflow/sdk";

const mpesaFlow = new MpesaFlow({
  token: "MPESAFLOW_API_KEY",
});

async function run() {
  const result = await mpesaFlow.transactions.getOne({
    id: "trxn_YGZBY32PBBavYbhL",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MpesaFlowCore } from "@mpesaflow/sdk/core.js";
import { transactionsGetOne } from "@mpesaflow/sdk/funcs/transactionsGetOne.js";

// Use `MpesaFlowCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mpesaFlow = new MpesaFlowCore({
  token: "MPESAFLOW_API_KEY",
});

async function run() {
  const res = await transactionsGetOne(mpesaFlow, {
    id: "trxn_YGZBY32PBBavYbhL",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transactionsGetOne failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTransactionRequest](../../models/operations/gettransactionrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.TransactionResponse](../../models/transactionresponse.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.MissingApiKeyError    | 401                          | application/json             |
| errors.InvalidApiKeyError    | 403                          | application/json             |
| errors.NotFoundError         | 404                          | application/json             |
| errors.ValidationError       | 422                          | application/json             |
| errors.TooManyRequestsError  | 429                          | application/json             |
| errors.InternalServerError   | 500                          | application/json             |
| errors.MpesaFlowDefaultError | 4XX, 5XX                     | \*/\*                        |