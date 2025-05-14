# GetTransactionsResponse

List of all transactions

## Example Usage

```typescript
import { GetTransactionsResponse } from "mpesaflow/models/operations";

let value: GetTransactionsResponse = {
  data: [
    {
      id: "<id>",
      customerId: "<id>",
      object: "<value>",
      currency: "Belize Dollar",
      fee: "<value>",
      amount: "272.19",
      provider: "<value>",
      providerReference: "<value>",
      description: "drat limply stratify a wholly complicated as",
      status: "refunded",
      type: "payment",
      metadata: "<value>",
      origin: "web",
      declineReason: "<value>",
      createdAt: "1725885043009",
      updatedAt: "1747204373173",
      refundedAt: "<value>",
      paidAt: "<value>",
      failedAt: "<value>",
      disputedAt: "<value>",
    },
  ],
  pagination: {
    totalCount: 4464.34,
    maxPage: 8569.59,
    currentPage: 173.77,
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `data`                                                                                       | [operations.GetTransactionsData](../../models/operations/gettransactionsdata.md)[]           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `pagination`                                                                                 | [operations.GetTransactionsPagination](../../models/operations/gettransactionspagination.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |