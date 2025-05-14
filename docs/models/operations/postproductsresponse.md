# PostProductsResponse

Create a Product

## Example Usage

```typescript
import { PostProductsResponse } from "mpesaflow/models/operations";

let value: PostProductsResponse = {
  success: false,
  data: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `success`                                                                  | *boolean*                                                                  | :heavy_check_mark:                                                         | N/A                                                                        |
| `data`                                                                     | [operations.PostProductsData](../../models/operations/postproductsdata.md) | :heavy_check_mark:                                                         | N/A                                                                        |