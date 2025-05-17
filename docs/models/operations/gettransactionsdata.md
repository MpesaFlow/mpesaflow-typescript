# GetTransactionsData

## Example Usage

```typescript
import { GetTransactionsData } from "mpesaflow/models/operations";

let value: GetTransactionsData = {
  id: "<id>",
  customerId: "<id>",
  object: "<value>",
  currency: "Aruban Guilder",
  fee: "<value>",
  amount: "187.21",
  provider: "<value>",
  providerReference: "<value>",
  description: "likewise aboard illiterate once volunteer",
  status: "refunded",
  type: "donation",
  metadata: false,
  origin: "mobile",
  declineReason: "<value>",
  createdAt: "1730257970027",
  updatedAt: "1747398531020",
  refundedAt: "<value>",
  paidAt: "<value>",
  failedAt: "<value>",
  disputedAt: "<value>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `customerId`                                                                         | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `object`                                                                             | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `currency`                                                                           | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `fee`                                                                                | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `amount`                                                                             | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `provider`                                                                           | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `providerReference`                                                                  | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `description`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `status`                                                                             | [operations.GetTransactionsStatus](../../models/operations/gettransactionsstatus.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `type`                                                                               | [operations.GetTransactionsType](../../models/operations/gettransactionstype.md)     | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `metadata`                                                                           | *operations.GetTransactionsMetadata*                                                 | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `origin`                                                                             | [operations.GetTransactionsOrigin](../../models/operations/gettransactionsorigin.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `declineReason`                                                                      | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `createdAt`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `updatedAt`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `refundedAt`                                                                         | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `paidAt`                                                                             | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `failedAt`                                                                           | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `disputedAt`                                                                         | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |