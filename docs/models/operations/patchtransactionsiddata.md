# PatchTransactionsIdData

## Example Usage

```typescript
import { PatchTransactionsIdData } from "mpesaflow/models/operations";

let value: PatchTransactionsIdData = {
  id: "<id>",
  customerId: "<id>",
  object: "<value>",
  currency: "Kenyan Shilling",
  fee: "<value>",
  amount: "656.78",
  provider: "<value>",
  providerReference: "<value>",
  description: "demonstrate sarong wear anenst",
  status: "pending",
  type: "payment",
  metadata: [
    "<value>",
  ],
  origin: "mobile",
  declineReason: "<value>",
  createdAt: "1733792076140",
  updatedAt: "1747372108808",
  refundedAt: "<value>",
  paidAt: "<value>",
  failedAt: "<value>",
  disputedAt: "<value>",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `customerId`                                                                                                 | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `object`                                                                                                     | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `currency`                                                                                                   | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `fee`                                                                                                        | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `amount`                                                                                                     | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `provider`                                                                                                   | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `providerReference`                                                                                          | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `description`                                                                                                | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `status`                                                                                                     | [operations.PatchTransactionsIdStatusResponse](../../models/operations/patchtransactionsidstatusresponse.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `type`                                                                                                       | [operations.PatchTransactionsIdTypeResponse](../../models/operations/patchtransactionsidtyperesponse.md)     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `metadata`                                                                                                   | *operations.PatchTransactionsIdMetadataResponse*                                                             | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `origin`                                                                                                     | [operations.PatchTransactionsIdOriginResponse](../../models/operations/patchtransactionsidoriginresponse.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `declineReason`                                                                                              | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `createdAt`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `updatedAt`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `refundedAt`                                                                                                 | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `paidAt`                                                                                                     | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `failedAt`                                                                                                   | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `disputedAt`                                                                                                 | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |