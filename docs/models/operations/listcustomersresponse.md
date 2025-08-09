# ListCustomersResponse

## Example Usage

```typescript
import { ListCustomersResponse } from "@mpesaflow/sdk/models/operations";

let value: ListCustomersResponse = {
  result: {
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
    meta: {
      cursor: "eyJpZCI6IjEyMyJ9",
      hasPreviousPage: false,
      hasNextPage: true,
    },
  },
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `result`                                              | [models.PaginatedData](../../models/paginateddata.md) | :heavy_check_mark:                                    | N/A                                                   |