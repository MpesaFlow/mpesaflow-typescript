# Customers
(*customers*)

## Overview

Everything about customers in the business

### Available Operations

* [list](#list) - List all customers
* [create](#create) - Create a customer
* [getOne](#getone) - Get a customer
* [update](#update) - Update a customer
* [delete](#delete) - Delete a customer

## list

Get a list of all customers in the business

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listCustomers" method="get" path="/customers" -->
```typescript
import { MpesaFlow } from "@mpesaflow/sdk";

const mpesaFlow = new MpesaFlow({
  token: "MPESAFLOW_API_KEY",
});

async function run() {
  const result = await mpesaFlow.customers.list({
    q: "John Doe",
    cursor: "eyJpZCI6IjEyMyJ9",
    start: "2024-04-01T00:00:00.000Z",
    end: "2024-04-30T23:59:59.999Z",
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
import { customersList } from "@mpesaflow/sdk/funcs/customersList.js";

// Use `MpesaFlowCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mpesaFlow = new MpesaFlowCore({
  token: "MPESAFLOW_API_KEY",
});

async function run() {
  const res = await customersList(mpesaFlow, {
    q: "John Doe",
    cursor: "eyJpZCI6IjEyMyJ9",
    start: "2024-04-01T00:00:00.000Z",
    end: "2024-04-30T23:59:59.999Z",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("customersList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCustomersRequest](../../models/operations/listcustomersrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListCustomersResponse](../../models/operations/listcustomersresponse.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.MissingApiKeyError    | 401                          | application/json             |
| errors.InvalidApiKeyError    | 403                          | application/json             |
| errors.ValidationError       | 422                          | application/json             |
| errors.TooManyRequestsError  | 429                          | application/json             |
| errors.InternalServerError   | 500                          | application/json             |
| errors.MpesaFlowDefaultError | 4XX, 5XX                     | \*/\*                        |

## create

Create a customer in the business

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create" method="post" path="/customers" -->
```typescript
import { MpesaFlow } from "@mpesaflow/sdk";

const mpesaFlow = new MpesaFlow({
  token: "MPESAFLOW_API_KEY",
});

async function run() {
  const result = await mpesaFlow.customers.create({
    name: "John Doe",
    phoneNumber: "254712345678",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MpesaFlowCore } from "@mpesaflow/sdk/core.js";
import { customersCreate } from "@mpesaflow/sdk/funcs/customersCreate.js";

// Use `MpesaFlowCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mpesaFlow = new MpesaFlowCore({
  token: "MPESAFLOW_API_KEY",
});

async function run() {
  const res = await customersCreate(mpesaFlow, {
    name: "John Doe",
    phoneNumber: "254712345678",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customersCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateRequest](../../models/operations/createrequest.md)                                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CustomerResponse](../../models/customerresponse.md)\>**

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

Get a customer by their ID in the business

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCustomer" method="get" path="/customers/{id}" -->
```typescript
import { MpesaFlow } from "@mpesaflow/sdk";

const mpesaFlow = new MpesaFlow({
  token: "MPESAFLOW_API_KEY",
});

async function run() {
  const result = await mpesaFlow.customers.getOne({
    id: "cus_GqfKXLmg61LURZhB",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MpesaFlowCore } from "@mpesaflow/sdk/core.js";
import { customersGetOne } from "@mpesaflow/sdk/funcs/customersGetOne.js";

// Use `MpesaFlowCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mpesaFlow = new MpesaFlowCore({
  token: "MPESAFLOW_API_KEY",
});

async function run() {
  const res = await customersGetOne(mpesaFlow, {
    id: "cus_GqfKXLmg61LURZhB",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customersGetOne failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCustomerRequest](../../models/operations/getcustomerrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CustomerResponse](../../models/customerresponse.md)\>**

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

## update

Update a customer in the business

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update" method="patch" path="/customers/{id}" -->
```typescript
import { MpesaFlow } from "@mpesaflow/sdk";

const mpesaFlow = new MpesaFlow({
  token: "MPESAFLOW_API_KEY",
});

async function run() {
  const result = await mpesaFlow.customers.update({
    id: "cus_GqfKXLmg61LURZhB",
    requestBody: {
      name: "John Doe",
      phoneNumber: "254712345678",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MpesaFlowCore } from "@mpesaflow/sdk/core.js";
import { customersUpdate } from "@mpesaflow/sdk/funcs/customersUpdate.js";

// Use `MpesaFlowCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mpesaFlow = new MpesaFlowCore({
  token: "MPESAFLOW_API_KEY",
});

async function run() {
  const res = await customersUpdate(mpesaFlow, {
    id: "cus_GqfKXLmg61LURZhB",
    requestBody: {
      name: "John Doe",
      phoneNumber: "254712345678",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customersUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateRequest](../../models/operations/updaterequest.md)                                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CustomerResponse](../../models/customerresponse.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.MissingApiKeyError    | 401                          | application/json             |
| errors.InvalidApiKeyError    | 403                          | application/json             |
| errors.ValidationError       | 422                          | application/json             |
| errors.TooManyRequestsError  | 429                          | application/json             |
| errors.InternalServerError   | 500                          | application/json             |
| errors.MpesaFlowDefaultError | 4XX, 5XX                     | \*/\*                        |

## delete

Delete a customer by their ID in the business

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete" method="delete" path="/customers/{id}" -->
```typescript
import { MpesaFlow } from "@mpesaflow/sdk";

const mpesaFlow = new MpesaFlow({
  token: "MPESAFLOW_API_KEY",
});

async function run() {
  const result = await mpesaFlow.customers.delete({
    id: "cus_GqfKXLmg61LURZhB",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MpesaFlowCore } from "@mpesaflow/sdk/core.js";
import { customersDelete } from "@mpesaflow/sdk/funcs/customersDelete.js";

// Use `MpesaFlowCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mpesaFlow = new MpesaFlowCore({
  token: "MPESAFLOW_API_KEY",
});

async function run() {
  const res = await customersDelete(mpesaFlow, {
    id: "cus_GqfKXLmg61LURZhB",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customersDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteRequest](../../models/operations/deleterequest.md)                                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[string](../../models/.md)\>**

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