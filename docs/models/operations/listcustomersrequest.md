# ListCustomersRequest

## Example Usage

```typescript
import { ListCustomersRequest } from "@mpesaflow/sdk/models/operations";

let value: ListCustomersRequest = {
  q: "John Doe",
  cursor: "eyJpZCI6IjEyMyJ9",
  start: "2024-04-01T00:00:00.000Z",
  end: "2024-04-30T23:59:59.999Z",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `q`                                                                      | *string*                                                                 | :heavy_minus_sign:                                                       | Search for a customer by name or phone number                            | John Doe                                                                 |
| `cursor`                                                                 | *string*                                                                 | :heavy_minus_sign:                                                       | Cursor for pagination, representing the last item from the previous page | eyJpZCI6IjEyMyJ9                                                         |
| `limit`                                                                  | *number*                                                                 | :heavy_minus_sign:                                                       | The number of customers to return (1-100)                                | 10                                                                       |
| `start`                                                                  | *string*                                                                 | :heavy_minus_sign:                                                       | Start date (inclusive) for filtering customers in ISO 8601 format        | 2024-04-01T00:00:00.000Z                                                 |
| `end`                                                                    | *string*                                                                 | :heavy_minus_sign:                                                       | End date (inclusive) for filtering customers in ISO 8601 format          | 2024-04-30T23:59:59.999Z                                                 |
| `sortOrder`                                                              | [operations.SortOrder](../../models/operations/sortorder.md)             | :heavy_minus_sign:                                                       | N/A                                                                      | desc                                                                     |
| `sortField`                                                              | [operations.SortField](../../models/operations/sortfield.md)             | :heavy_minus_sign:                                                       | N/A                                                                      | createdAt                                                                |