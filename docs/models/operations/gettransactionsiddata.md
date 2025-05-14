# GetTransactionsIdData

## Example Usage

```typescript
import { GetTransactionsIdData } from "mpesaflow/models/operations";

let value: GetTransactionsIdData = {
  id: "<id>",
  customerId: "<id>",
  object: "<value>",
  currency: "Dong",
  fee: "<value>",
  amount: "294.31",
  provider: "<value>",
  providerReference: "<value>",
  description:
    "tune-up pantyhose deeply bourgeoisie kielbasa yet near arraign questioningly",
  status: "completed",
  type: "payment",
  metadata: [
    "<value>",
  ],
  origin: "api",
  declineReason: "<value>",
  createdAt: "1742527917426",
  updatedAt: "1747190635187",
  refundedAt: "<value>",
  paidAt: "<value>",
  failedAt: "<value>",
  disputedAt: "<value>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `customerId`                                                                             | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `object`                                                                                 | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `currency`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `fee`                                                                                    | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `amount`                                                                                 | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `provider`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `providerReference`                                                                      | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `description`                                                                            | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `status`                                                                                 | [operations.GetTransactionsIdStatus](../../models/operations/gettransactionsidstatus.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `type`                                                                                   | [operations.GetTransactionsIdType](../../models/operations/gettransactionsidtype.md)     | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `metadata`                                                                               | *operations.GetTransactionsIdMetadata*                                                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `origin`                                                                                 | [operations.GetTransactionsIdOrigin](../../models/operations/gettransactionsidorigin.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `declineReason`                                                                          | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `createdAt`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `updatedAt`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `refundedAt`                                                                             | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `paidAt`                                                                                 | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `failedAt`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `disputedAt`                                                                             | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |