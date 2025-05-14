# PostPayMpesaRequest

The payment details

## Example Usage

```typescript
import { PostPayMpesaRequest } from "mpesaflow/models/operations";

let value: PostPayMpesaRequest = {
  phoneNumber: "465-787-9386 x002",
  amount: "229.53",
  transactionDesc: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `phoneNumber`      | *string*           | :heavy_check_mark: | N/A                |
| `amount`           | *string*           | :heavy_check_mark: | N/A                |
| `transactionDesc`  | *string*           | :heavy_check_mark: | N/A                |
| `accountReference` | *string*           | :heavy_minus_sign: | N/A                |