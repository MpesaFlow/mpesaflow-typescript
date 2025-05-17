# Transactions
(*transactions*)

## Overview

### Available Operations

* [list](#list) - List of all transactions
* [create](#create) - Create a transaction
* [get](#get) - Get a transaction
* [update](#update) - Update a transaction
* [delete](#delete) - Remove a transaction

## list

List of all transactions

### Example Usage

```typescript
import { MpesaFlow } from "mpesaflow";

const mpesaFlow = new MpesaFlow({
  bearer: process.env["MPESAFLOW_BEARER"] ?? "",
});

async function run() {
  const result = await mpesaFlow.transactions.list({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MpesaFlowCore } from "mpesaflow/core.js";
import { transactionsList } from "mpesaflow/funcs/transactionsList.js";

// Use `MpesaFlowCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mpesaFlow = new MpesaFlowCore({
  bearer: process.env["MPESAFLOW_BEARER"] ?? "",
});

async function run() {
  const res = await transactionsList(mpesaFlow, {});

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
| `request`                                                                                                                                                                      | [operations.GetTransactionsRequest](../../models/operations/gettransactionsrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetTransactionsResponse](../../models/operations/gettransactionsresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.GetProductsBadRequestError   | 400                                 | application/json                    |
| errors.GetProductsUnauthorizedError | 401                                 | application/json                    |
| errors.GetProductsNotFoundError     | 404                                 | application/json                    |
| errors.InternalServerError          | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## create

Create a transaction

### Example Usage

```typescript
import { MpesaFlow } from "mpesaflow";

const mpesaFlow = new MpesaFlow({
  bearer: process.env["MPESAFLOW_BEARER"] ?? "",
});

async function run() {
  const result = await mpesaFlow.transactions.create({
    customerId: "<id>",
    amount: "216.76",
    providerReference: "<value>",
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
import { transactionsCreate } from "mpesaflow/funcs/transactionsCreate.js";

// Use `MpesaFlowCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mpesaFlow = new MpesaFlowCore({
  bearer: process.env["MPESAFLOW_BEARER"] ?? "",
});

async function run() {
  const res = await transactionsCreate(mpesaFlow, {
    customerId: "<id>",
    amount: "216.76",
    providerReference: "<value>",
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
| `request`                                                                                                                                                                      | [operations.PostTransactionsRequest](../../models/operations/posttransactionsrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostTransactionsResponse](../../models/operations/posttransactionsresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.GetProductsBadRequestError   | 400                                 | application/json                    |
| errors.GetProductsUnauthorizedError | 401                                 | application/json                    |
| errors.InternalServerError          | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## get

Get a transaction

### Example Usage

```typescript
import { MpesaFlow } from "mpesaflow";

const mpesaFlow = new MpesaFlow({
  bearer: process.env["MPESAFLOW_BEARER"] ?? "",
});

async function run() {
  const result = await mpesaFlow.transactions.get({
    id: "txn_12345",
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
import { transactionsGet } from "mpesaflow/funcs/transactionsGet.js";

// Use `MpesaFlowCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mpesaFlow = new MpesaFlowCore({
  bearer: process.env["MPESAFLOW_BEARER"] ?? "",
});

async function run() {
  const res = await transactionsGet(mpesaFlow, {
    id: "txn_12345",
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
| `request`                                                                                                                                                                      | [operations.GetTransactionsIdRequest](../../models/operations/gettransactionsidrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetTransactionsIdResponse](../../models/operations/gettransactionsidresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.GetProductsBadRequestError   | 400                                 | application/json                    |
| errors.GetProductsUnauthorizedError | 401                                 | application/json                    |
| errors.GetProductsNotFoundError     | 404                                 | application/json                    |
| errors.InternalServerError          | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## update

Update a transaction

### Example Usage

```typescript
import { MpesaFlow } from "mpesaflow";

const mpesaFlow = new MpesaFlow({
  bearer: process.env["MPESAFLOW_BEARER"] ?? "",
});

async function run() {
  const result = await mpesaFlow.transactions.update({
    id: "txn_12345",
    requestBody: {},
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
import { transactionsUpdate } from "mpesaflow/funcs/transactionsUpdate.js";

// Use `MpesaFlowCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mpesaFlow = new MpesaFlowCore({
  bearer: process.env["MPESAFLOW_BEARER"] ?? "",
});

async function run() {
  const res = await transactionsUpdate(mpesaFlow, {
    id: "txn_12345",
    requestBody: {},
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
| `request`                                                                                                                                                                      | [operations.PatchTransactionsIdRequest](../../models/operations/patchtransactionsidrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PatchTransactionsIdResponse](../../models/operations/patchtransactionsidresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.GetProductsBadRequestError   | 400                                 | application/json                    |
| errors.GetProductsUnauthorizedError | 401                                 | application/json                    |
| errors.GetProductsNotFoundError     | 404                                 | application/json                    |
| errors.ResponseBodyError1           | 422                                 | application/json                    |
| errors.ResponseBodyError2           | 422                                 | application/json                    |
| errors.InternalServerError          | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## delete

Remove a transaction

### Example Usage

```typescript
import { MpesaFlow } from "mpesaflow";

const mpesaFlow = new MpesaFlow({
  bearer: process.env["MPESAFLOW_BEARER"] ?? "",
});

async function run() {
  await mpesaFlow.transactions.delete({
    id: "txn_12345",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MpesaFlowCore } from "mpesaflow/core.js";
import { transactionsDelete } from "mpesaflow/funcs/transactionsDelete.js";

// Use `MpesaFlowCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mpesaFlow = new MpesaFlowCore({
  bearer: process.env["MPESAFLOW_BEARER"] ?? "",
});

async function run() {
  const res = await transactionsDelete(mpesaFlow, {
    id: "txn_12345",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteTransactionsIdRequest](../../models/operations/deletetransactionsidrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                      | Status Code                                     | Content Type                                    |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| errors.GetProductsBadRequestError               | 400                                             | application/json                                |
| errors.GetProductsUnauthorizedError             | 401                                             | application/json                                |
| errors.GetProductsNotFoundError                 | 404                                             | application/json                                |
| errors.DeleteProductsIdUnprocessableEntityError | 422                                             | application/json                                |
| errors.InternalServerError                      | 500                                             | application/json                                |
| errors.APIError                                 | 4XX, 5XX                                        | \*/\*                                           |