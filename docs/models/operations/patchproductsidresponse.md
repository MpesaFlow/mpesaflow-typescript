# PatchProductsIdResponse

Updated Product

## Example Usage

```typescript
import { PatchProductsIdResponse } from "mpesaflow/models/operations";

let value: PatchProductsIdResponse = {
  success: false,
  data: {
    id: "<id>",
    active: false,
    defaultPrice: "<value>",
    name: "<value>",
    description: "which permafrost toward save whether yowza off",
    images: [
      "<value>",
    ],
    metadata: {
      "key": "<value>",
    },
    livemode: false,
    url: "https://huge-cop-out.org/",
    createdAt: "1743240561057",
    updatedAt: "1747208780026",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `success`                                                                        | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |
| `data`                                                                           | [operations.PatchProductsIdData](../../models/operations/patchproductsiddata.md) | :heavy_check_mark:                                                               | N/A                                                                              |