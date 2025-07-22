# ListTransactionsResponseBody

List of all transactions

## Example Usage

```typescript
import { ListTransactionsResponseBody } from "@mpesaflow/sdk/models/operations";

let value: ListTransactionsResponseBody = {
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
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `data`                                                                   | [models.TransactionResponse](../../models/transactionresponse.md)[]      | :heavy_check_mark:                                                       | N/A                                                                      |                                                                          |
| `nextCursor`                                                             | *string*                                                                 | :heavy_check_mark:                                                       | Cursor for pagination, representing the last item from the previous page | eyJpZCI6IjEyMyJ9                                                         |
| `limit`                                                                  | *number*                                                                 | :heavy_minus_sign:                                                       | The number of data to return (1-100)                                     | 10                                                                       |