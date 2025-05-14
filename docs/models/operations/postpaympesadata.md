# PostPayMpesaData

## Example Usage

```typescript
import { PostPayMpesaData } from "mpesaflow/models/operations";

let value: PostPayMpesaData = {
  checkoutRequestID: "<id>",
  customerMessage: "<value>",
  merchantRequestID: "<id>",
  responseCode: "<value>",
  responseDescription: "<value>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `checkoutRequestID`   | *string*              | :heavy_check_mark:    | N/A                   |
| `customerMessage`     | *string*              | :heavy_check_mark:    | N/A                   |
| `merchantRequestID`   | *string*              | :heavy_check_mark:    | N/A                   |
| `responseCode`        | *string*              | :heavy_check_mark:    | N/A                   |
| `responseDescription` | *string*              | :heavy_check_mark:    | N/A                   |