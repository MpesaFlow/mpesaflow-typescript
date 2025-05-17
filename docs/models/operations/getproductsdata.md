# GetProductsData

## Example Usage

```typescript
import { GetProductsData } from "mpesaflow/models/operations";

let value: GetProductsData = {
  id: "<id>",
  active: false,
  defaultPrice: "<value>",
  name: "<value>",
  description: "ugly devil politely",
  images: {
    "key": "<value>",
  },
  metadata: 6012.5,
  livemode: false,
  url: "https://dual-premier.com/",
  createdAt: "1747205045838",
  updatedAt: "1747359703187",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `id`                             | *string*                         | :heavy_check_mark:               | N/A                              |
| `active`                         | *boolean*                        | :heavy_check_mark:               | N/A                              |
| `defaultPrice`                   | *string*                         | :heavy_check_mark:               | N/A                              |
| `name`                           | *string*                         | :heavy_check_mark:               | N/A                              |
| `description`                    | *string*                         | :heavy_check_mark:               | N/A                              |
| `images`                         | *operations.GetProductsImages*   | :heavy_check_mark:               | N/A                              |
| `metadata`                       | *operations.GetProductsMetadata* | :heavy_check_mark:               | N/A                              |
| `livemode`                       | *boolean*                        | :heavy_check_mark:               | N/A                              |
| `url`                            | *string*                         | :heavy_check_mark:               | N/A                              |
| `createdAt`                      | *string*                         | :heavy_check_mark:               | N/A                              |
| `updatedAt`                      | *string*                         | :heavy_check_mark:               | N/A                              |