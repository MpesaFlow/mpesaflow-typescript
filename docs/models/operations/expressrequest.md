# ExpressRequest

The payment body details

## Example Usage

```typescript
import { ExpressRequest } from "@mpesaflow/sdk/models/operations";

let value: ExpressRequest = {
  phoneNumber: "254712345678",
  amount: "100.00",
  transactionDesc: "mpesaflow",
  customerName: "John Doe",
  accountReference: "mpesaflow",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `phoneNumber`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | The customer's phone number                                              | 254712345678                                                             |
| `amount`                                                                 | *string*                                                                 | :heavy_check_mark:                                                       | The amount being paid. Must be a number (e.g., 100 or 100.50)            | 100.00                                                                   |
| `transactionDesc`                                                        | *string*                                                                 | :heavy_check_mark:                                                       | The description of the transaction                                       | mpesaflow                                                                |
| `type`                                                                   | [models.TransactionType](../../models/transactiontype.md)                | :heavy_minus_sign:                                                       | The type of transaction                                                  | payment                                                                  |
| `customerName`                                                           | *string*                                                                 | :heavy_minus_sign:                                                       | The name of the customer                                                 | John Doe                                                                 |
| `accountReference`                                                       | *string*                                                                 | :heavy_minus_sign:                                                       | The account refernce of the business. it can be the name of the business | mpesaflow                                                                |
| `metadata`                                                               | Record<string, *any*>                                                    | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |