# ListCustomersRequest

## Example Usage

```typescript
import { ListCustomersRequest } from "@mpesaflow/sdk/models/operations";

let value: ListCustomersRequest = {
  q: "John Doe",
  cursor: "eyJpZCI6IjEyMyJ9",
  start: "2024-04-01T00:00:00.000Z",
  end: "2024-04-30T23:59:59.999Z",
  sort: [
    "createdAt",
    "desc",
  ],
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           | Example                               |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `q`                                   | *string*                              | :heavy_minus_sign:                    | N/A                                   | John Doe                              |
| `cursor`                              | *string*                              | :heavy_minus_sign:                    | N/A                                   | eyJpZCI6IjEyMyJ9                      |
| `limit`                               | *number*                              | :heavy_minus_sign:                    | N/A                                   | 10                                    |
| `start`                               | *string*                              | :heavy_minus_sign:                    | N/A                                   | 2024-04-01T00:00:00.000Z              |
| `end`                                 | *string*                              | :heavy_minus_sign:                    | N/A                                   | 2024-04-30T23:59:59.999Z              |
| `sort`                                | *operations.ListCustomersSortUnion*[] | :heavy_minus_sign:                    | N/A                                   | [<br/>"createdAt",<br/>"desc"<br/>]   |