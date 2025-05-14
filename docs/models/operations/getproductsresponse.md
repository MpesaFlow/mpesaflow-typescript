# GetProductsResponse

List of all products

## Example Usage

```typescript
import { GetProductsResponse } from "mpesaflow/models/operations";

let value: GetProductsResponse = {
  data: [
    {
      id: "<id>",
      active: false,
      defaultPrice: "<value>",
      name: "<value>",
      description:
        "mid terrible pants than apropos substantial store task zealous",
      images: 9657.85,
      metadata: 2345.63,
      livemode: false,
      url: "https://vivacious-stump.info/",
      createdAt: "1724959087339",
      updatedAt: "1747191791677",
    },
  ],
  pagination: {
    totalCount: 6094.81,
    maxPage: 1598.37,
    currentPage: 3995.01,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `data`                                                                               | [operations.GetProductsData](../../models/operations/getproductsdata.md)[]           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `pagination`                                                                         | [operations.GetProductsPagination](../../models/operations/getproductspagination.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |