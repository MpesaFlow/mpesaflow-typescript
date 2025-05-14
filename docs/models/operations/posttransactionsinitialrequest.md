# PostTransactionsInitialRequest

## Example Usage

```typescript
import { PostTransactionsInitialRequest } from "mpesaflow/models/operations";

let value: PostTransactionsInitialRequest = {
  merchantRequestId: "<id>",
  checkoutRequestId: "<id>",
  responseCode: "<value>",
  responseDescription: "<value>",
  customerMessage: "<value>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `merchantRequestId`   | *string*              | :heavy_check_mark:    | N/A                   |
| `checkoutRequestId`   | *string*              | :heavy_check_mark:    | N/A                   |
| `responseCode`        | *string*              | :heavy_check_mark:    | N/A                   |
| `responseDescription` | *string*              | :heavy_check_mark:    | N/A                   |
| `customerMessage`     | *string*              | :heavy_check_mark:    | N/A                   |