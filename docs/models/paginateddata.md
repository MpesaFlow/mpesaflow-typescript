# PaginatedData

## Example Usage

```typescript
import { PaginatedData } from "@mpesaflow/sdk/models";

let value: PaginatedData = {
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
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `data`                                                     | [models.CustomerResponse](../models/customerresponse.md)[] | :heavy_check_mark:                                         | N/A                                                        |
| `meta`                                                     | [models.Meta](../models/meta.md)                           | :heavy_check_mark:                                         | N/A                                                        |