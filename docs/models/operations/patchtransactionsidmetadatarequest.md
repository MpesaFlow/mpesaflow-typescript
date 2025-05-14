# PatchTransactionsIdMetadataRequest

## Example Usage

```typescript
import { PatchTransactionsIdMetadataRequest } from "mpesaflow/models/operations";

let value: PatchTransactionsIdMetadataRequest = {
  provider: "mpesa",
  initialRequest: {
    merchantRequestId: "<id>",
    checkoutRequestId: "<id>",
    responseCode: "<value>",
    responseDescription: "<value>",
    customerMessage: "<value>",
  },
  callbackResult: {
    resultCode: 1184.77,
    resultDescription: "<value>",
    receiptNumber: "<value>",
    amount: 8773.23,
    transactionDate: "<value>",
    phoneNumber: "225-751-6212",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `provider`                                                                                                   | [operations.PatchTransactionsIdProvider](../../models/operations/patchtransactionsidprovider.md)             | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `initialRequest`                                                                                             | [operations.PatchTransactionsIdInitialRequest](../../models/operations/patchtransactionsidinitialrequest.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `callbackResult`                                                                                             | [operations.PatchTransactionsIdCallbackResult](../../models/operations/patchtransactionsidcallbackresult.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |