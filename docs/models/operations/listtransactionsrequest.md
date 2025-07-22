# ListTransactionsRequest

## Example Usage

```typescript
import { ListTransactionsRequest } from "@mpesaflow/sdk/models/operations";

let value: ListTransactionsRequest = {
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
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `q`                                                                                      | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      | John Doe                                                                                 |
| `cursor`                                                                                 | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      | eyJpZCI6IjEyMyJ9                                                                         |
| `customerId`                                                                             | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      | cus_12345                                                                                |
| `statuses`                                                                               | [operations.ListTransactionsStatus](../../models/operations/listtransactionsstatus.md)[] | :heavy_minus_sign:                                                                       | N/A                                                                                      | [<br/>"pending",<br/>"completed"<br/>]                                                   |
| `amountRange`                                                                            | *number*[]                                                                               | :heavy_minus_sign:                                                                       | N/A                                                                                      | [<br/>100,<br/>1000<br/>]                                                                |
| `amount`                                                                                 | *string*[]                                                                               | :heavy_minus_sign:                                                                       | N/A                                                                                      | [<br/>"150.75",<br/>"299.99"<br/>]                                                       |
| `limit`                                                                                  | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      | 10                                                                                       |
| `start`                                                                                  | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      | 2024-04-01T00:00:00.000Z                                                                 |
| `end`                                                                                    | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      | 2024-04-30T23:59:59.999Z                                                                 |
| `sort`                                                                                   | *operations.ListTransactionsSortUnion*[]                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      | [<br/>"createdAt",<br/>"desc"<br/>]                                                      |