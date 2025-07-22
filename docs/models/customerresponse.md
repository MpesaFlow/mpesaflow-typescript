# CustomerResponse

## Example Usage

```typescript
import { CustomerResponse } from "@mpesaflow/sdk/models";

let value: CustomerResponse = {
  id: "cus_GqfKXLmg61LURZhB",
  object: "customer",
  name: "John Doe",
  phoneNumber: "254712345678",
  createdAt: "2021-01-01T00:00:00Z",
  lastActiveAt: "2021-01-01T00:00:00Z",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `id`                                                                 | *string*                                                             | :heavy_check_mark:                                                   | The customer id                                                      | cus_GqfKXLmg61LURZhB                                                 |
| `object`                                                             | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  | customer                                                             |
| `environment`                                                        | [models.Environment](../models/environment.md)                       | :heavy_minus_sign:                                                   | The environment of the business                                      | development                                                          |
| `name`                                                               | *string*                                                             | :heavy_check_mark:                                                   | The name of the customer                                             | John Doe                                                             |
| `phoneNumber`                                                        | *string*                                                             | :heavy_check_mark:                                                   | The customer's phone number                                          | 254712345678                                                         |
| `createdAt`                                                          | *string*                                                             | :heavy_check_mark:                                                   | The date and time the customer was created in ISO 8601 format        | 2021-01-01T00:00:00Z                                                 |
| `lastActiveAt`                                                       | *string*                                                             | :heavy_check_mark:                                                   | The date and time the customer was last active at in ISO 8601 format | 2021-01-01T00:00:00Z                                                 |