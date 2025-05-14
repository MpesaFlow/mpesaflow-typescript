# PostTransactionsCallbackResult

## Example Usage

```typescript
import { PostTransactionsCallbackResult } from "mpesaflow/models/operations";

let value: PostTransactionsCallbackResult = {
  resultCode: 8355.81,
  resultDescription: "<value>",
  receiptNumber: "<value>",
  amount: 7933.19,
  transactionDate: "<value>",
  phoneNumber: "(730) 728-3814",
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `resultCode`        | *number*            | :heavy_check_mark:  | N/A                 |
| `resultDescription` | *string*            | :heavy_check_mark:  | N/A                 |
| `receiptNumber`     | *string*            | :heavy_check_mark:  | N/A                 |
| `amount`            | *number*            | :heavy_check_mark:  | N/A                 |
| `transactionDate`   | *string*            | :heavy_check_mark:  | N/A                 |
| `phoneNumber`       | *string*            | :heavy_check_mark:  | N/A                 |