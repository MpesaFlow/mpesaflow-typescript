# GetCustomersResponse

List of all customers

## Example Usage

```typescript
import { GetCustomersResponse } from "mpesaflow/models/operations";

let value: GetCustomersResponse = {
  data: [
    {
      id: "<id>",
      name: "<value>",
      description: "at airmail to roughly past banish nicely before jumbo an",
      balance: "<value>",
      livemode: false,
      metadata: "<value>",
      currency: "Afghani",
      email: "Abigale30@hotmail.com",
      createdAt: "1745128690417",
      updatedAt: "1747195890486",
      lastActiveAt: "<value>",
    },
  ],
  pagination: {
    totalCount: 1586.41,
    maxPage: 9508.11,
    currentPage: 8749.17,
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `data`                                                                                 | [operations.GetCustomersData](../../models/operations/getcustomersdata.md)[]           | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `pagination`                                                                           | [operations.GetCustomersPagination](../../models/operations/getcustomerspagination.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |