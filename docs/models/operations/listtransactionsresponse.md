# ListTransactionsResponse

## Example Usage

```typescript
import { ListTransactionsResponse } from "@mpesaflow/sdk/models/operations";

let value: ListTransactionsResponse = {
  result: {
    data: [
      {
        id: "trxn_YGZBY32PBBavYbhL",
        customerId: "cus_GqfKXLmg61LURZhB",
        object: "transaction",
        amount: "1000",
        currency: "KES",
        status: "completed",
        phoneNumber: "254712345678",
        metadata: {},
        failureReason: null,
        createdAt: "2021-01-01T00:00:00Z",
        paidAt: "2021-01-01T00:00:00Z",
        failedAt: null,
      },
    ],
    nextCursor: "eyJpZCI6IjEyMyJ9",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `result`                                                                                           | [operations.ListTransactionsResponseBody](../../models/operations/listtransactionsresponsebody.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |