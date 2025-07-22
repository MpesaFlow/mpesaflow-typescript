# TransactionResponse

## Example Usage

```typescript
import { TransactionResponse } from "@mpesaflow/sdk/models";

let value: TransactionResponse = {
  id: "trxn_YGZBY32PBBavYbhL",
  customerId: "cus_GqfKXLmg61LURZhB",
  object: "transaction",
  amount: "1000",
  currency: "KES",
  status: "completed",
  phoneNumber: "254712345678",
  metadata: {},
  failureReason: null,
  createdAt: "2021-01-01T00:00:00Z",
  paidAt: "2021-01-01T00:00:00Z",
  failedAt: null,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `id`                                                   | *string*                                               | :heavy_check_mark:                                     | The transaction id                                     | trxn_YGZBY32PBBavYbhL                                  |
| `customerId`                                           | *string*                                               | :heavy_check_mark:                                     | The customer id                                        | cus_GqfKXLmg61LURZhB                                   |
| `object`                                               | *string*                                               | :heavy_check_mark:                                     | N/A                                                    | transaction                                            |
| `environment`                                          | [models.Environment](../models/environment.md)         | :heavy_minus_sign:                                     | The environment of the business                        | development                                            |
| `type`                                                 | [models.TransactionType](../models/transactiontype.md) | :heavy_minus_sign:                                     | The type of transaction                                | payment                                                |
| `amount`                                               | *string*                                               | :heavy_check_mark:                                     | The transaction amount                                 | 1000                                                   |
| `currency`                                             | *string*                                               | :heavy_check_mark:                                     | The transaction currency                               | KES                                                    |
| `status`                                               | [models.Status](../models/status.md)                   | :heavy_check_mark:                                     | The transaction status                                 | completed                                              |
| `phoneNumber`                                          | *string*                                               | :heavy_check_mark:                                     | The customer's phone number                            | 254712345678                                           |
| `metadata`                                             | Record<string, *any*>                                  | :heavy_check_mark:                                     | The transaction metadata                               | {<br/>"orderId": "abc123",<br/>"campaign": "giveback-2025"<br/>} |
| `failureReason`                                        | *string*                                               | :heavy_check_mark:                                     | The transaction decline reason                         | Insufficient balance                                   |
| `createdAt`                                            | *string*                                               | :heavy_check_mark:                                     | The transaction creation date in ISO 8601 format       | 2021-01-01T00:00:00Z                                   |
| `paidAt`                                               | *string*                                               | :heavy_check_mark:                                     | The transaction paid date in ISO 8601 format           | 2021-01-01T00:00:00Z                                   |
| `failedAt`                                             | *string*                                               | :heavy_check_mark:                                     | The transaction failed date in ISO 8601 format         | 2021-01-01T00:00:00Z                                   |