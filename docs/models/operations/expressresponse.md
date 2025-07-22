# ExpressResponse

Payment Response

## Example Usage

```typescript
import { ExpressResponse } from "@mpesaflow/sdk/models/operations";

let value: ExpressResponse = {
  status: "completed",
  message: "Transaction completed successfully",
  amount: "100.00",
  phoneNumber: "254712345678",
  transactionId: "trxn_YGZBY32PBBavYbhL",
  timestamp: "2025-07-13T18:10:00Z",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `status`                                                                        | [operations.ExpressStatus](../../models/operations/expressstatus.md)            | :heavy_check_mark:                                                              | The status of the transaction                                                   | completed                                                                       |
| `message`                                                                       | *string*                                                                        | :heavy_check_mark:                                                              | The response message of the payment                                             | Transaction completed successfully                                              |
| `amount`                                                                        | *string*                                                                        | :heavy_check_mark:                                                              | The amount being paid. Must be a number (e.g., 100 or 100.50)                   | 100.00                                                                          |
| `phoneNumber`                                                                   | *string*                                                                        | :heavy_check_mark:                                                              | The customer's phone number                                                     | 254712345678                                                                    |
| `transactionId`                                                                 | *string*                                                                        | :heavy_check_mark:                                                              | The transaction id                                                              | trxn_YGZBY32PBBavYbhL                                                           |
| `type`                                                                          | [models.TransactionType](../../models/transactiontype.md)                       | :heavy_minus_sign:                                                              | The type of transaction                                                         | payment                                                                         |
| `timestamp`                                                                     | *string*                                                                        | :heavy_check_mark:                                                              | The date and time at with the payment was paidAt or failedAt in ISO 8601 format | 2025-07-13T18:10:00Z                                                            |