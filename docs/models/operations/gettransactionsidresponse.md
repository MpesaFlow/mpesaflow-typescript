# GetTransactionsIdResponse

Get One Transaction

## Example Usage

```typescript
import { GetTransactionsIdResponse } from "mpesaflow/models/operations";

let value: GetTransactionsIdResponse = {
  success: false,
  data: {
    id: "<id>",
    customerId: "<id>",
    object: "<value>",
    currency: "Guyana Dollar",
    fee: "<value>",
    amount: "419.78",
    provider: "<value>",
    providerReference: "<value>",
    description:
      "quicker gadzooks if statement immediately step-mother homeschool joshingly",
    status: "pending",
    type: "donation",
    metadata: [
      "<value>",
    ],
    origin: "mobile",
    declineReason: "<value>",
    createdAt: "1729776526570",
    updatedAt: "1747187031339",
    refundedAt: "<value>",
    paidAt: "<value>",
    failedAt: "<value>",
    disputedAt: "<value>",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `success`                                                                            | *boolean*                                                                            | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `data`                                                                               | [operations.GetTransactionsIdData](../../models/operations/gettransactionsiddata.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |