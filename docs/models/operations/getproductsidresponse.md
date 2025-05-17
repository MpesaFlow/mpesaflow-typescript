# GetProductsIdResponse

Get One Product

## Example Usage

```typescript
import { GetProductsIdResponse } from "mpesaflow/models/operations";

let value: GetProductsIdResponse = {
  success: false,
  data: {
    id: "<id>",
    active: false,
    defaultPrice: "<value>",
    name: "<value>",
    description: "hydrant ah but rightfully",
    images: 2542.44,
    metadata: 9462.6,
    livemode: false,
    url: "https://honorable-sunbeam.org/",
    createdAt: "1728734884688",
    updatedAt: "1747413027786",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `success`                                                                    | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |
| `data`                                                                       | [operations.GetProductsIdData](../../models/operations/getproductsiddata.md) | :heavy_check_mark:                                                           | N/A                                                                          |