# PostTransactionsMetadataRequest

## Example Usage

```typescript
import { PostTransactionsMetadataRequest } from "mpesaflow/models/operations";

let value: PostTransactionsMetadataRequest = {
  provider: "mpesa",
  initialRequest: {
    merchantRequestId: "<id>",
    checkoutRequestId: "<id>",
    responseCode: "<value>",
    responseDescription: "<value>",
    customerMessage: "<value>",
  },
  callbackResult: {
    resultCode: 1398.16,
    resultDescription: "<value>",
    receiptNumber: "<value>",
    amount: 610.24,
    transactionDate: "<value>",
    phoneNumber: "988-552-6679 x640",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `provider`                                                                                             | [operations.PostTransactionsProvider](../../models/operations/posttransactionsprovider.md)             | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `initialRequest`                                                                                       | [operations.PostTransactionsInitialRequest](../../models/operations/posttransactionsinitialrequest.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `callbackResult`                                                                                       | [operations.PostTransactionsCallbackResult](../../models/operations/posttransactionscallbackresult.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |