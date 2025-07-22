# ListCustomersResponseBody

List of all customers

## Example Usage

```typescript
import { ListCustomersResponseBody } from "@mpesaflow/sdk/models/operations";

let value: ListCustomersResponseBody = {
  data: [
    {
      id: "cus_GqfKXLmg61LURZhB",
      object: "customer",
      name: "John Doe",
      phoneNumber: "254712345678",
      createdAt: "2021-01-01T00:00:00Z",
      lastActiveAt: "2021-01-01T00:00:00Z",
    },
  ],
  nextCursor: "eyJpZCI6IjEyMyJ9",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `data`                                                                   | [models.CustomerResponse](../../models/customerresponse.md)[]            | :heavy_check_mark:                                                       | N/A                                                                      |                                                                          |
| `nextCursor`                                                             | *string*                                                                 | :heavy_check_mark:                                                       | Cursor for pagination, representing the last item from the previous page | eyJpZCI6IjEyMyJ9                                                         |
| `limit`                                                                  | *number*                                                                 | :heavy_minus_sign:                                                       | The number of data to return (1-100)                                     | 10                                                                       |