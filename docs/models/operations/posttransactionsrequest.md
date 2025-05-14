# PostTransactionsRequest

The transaction to create

## Example Usage

```typescript
import { PostTransactionsRequest } from "mpesaflow/models/operations";

let value: PostTransactionsRequest = {
  customerId: "<id>",
  amount: "686.67",
  providerReference: "<value>",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `customerId`                                                                                             | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `amount`                                                                                                 | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `currency`                                                                                               | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `provider`                                                                                               | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `providerReference`                                                                                      | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `description`                                                                                            | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `status`                                                                                                 | [operations.PostTransactionsStatusRequest](../../models/operations/posttransactionsstatusrequest.md)     | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `type`                                                                                                   | [operations.PostTransactionsTypeRequest](../../models/operations/posttransactionstyperequest.md)         | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `origin`                                                                                                 | [operations.PostTransactionsOriginRequest](../../models/operations/posttransactionsoriginrequest.md)     | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `metadata`                                                                                               | [operations.PostTransactionsMetadataRequest](../../models/operations/posttransactionsmetadatarequest.md) | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |