# PostTransactionsResponse

Create a Transaction

## Example Usage

```typescript
import { PostTransactionsResponse } from "mpesaflow/models/operations";

let value: PostTransactionsResponse = {
  success: false,
  data: {
    amount: "750.34",
    providerReference: "<value>",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `success`                                                                          | *boolean*                                                                          | :heavy_check_mark:                                                                 | N/A                                                                                |
| `data`                                                                             | [operations.PostTransactionsData](../../models/operations/posttransactionsdata.md) | :heavy_check_mark:                                                                 | N/A                                                                                |