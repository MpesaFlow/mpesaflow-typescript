# PatchTransactionsIdResponse

Updated Transaction

## Example Usage

```typescript
import { PatchTransactionsIdResponse } from "mpesaflow/models/operations";

let value: PatchTransactionsIdResponse = {
  success: false,
  data: {
    id: "<id>",
    customerId: "<id>",
    object: "<value>",
    currency: "Metical",
    fee: "<value>",
    amount: "916.69",
    provider: "<value>",
    providerReference: "<value>",
    description:
      "keenly colorfully deflect babushka hm readjust typewriter provided",
    status: "failed",
    type: "payment",
    metadata: 7270.08,
    origin: "mobile",
    declineReason: "<value>",
    createdAt: "1739982402717",
    updatedAt: "1747411079122",
    refundedAt: "<value>",
    paidAt: "<value>",
    failedAt: "<value>",
    disputedAt: "<value>",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `success`                                                                                | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `data`                                                                                   | [operations.PatchTransactionsIdData](../../models/operations/patchtransactionsiddata.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |