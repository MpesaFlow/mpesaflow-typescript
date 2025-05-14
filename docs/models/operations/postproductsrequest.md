# PostProductsRequest

The product to create

## Example Usage

```typescript
import { PostProductsRequest } from "mpesaflow/models/operations";

let value: PostProductsRequest = {
  name: "<value>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `name`                | *string*              | :heavy_check_mark:    | N/A                   |
| `description`         | *string*              | :heavy_minus_sign:    | N/A                   |
| `active`              | *boolean*             | :heavy_minus_sign:    | N/A                   |
| `defaultPrice`        | *string*              | :heavy_minus_sign:    | N/A                   |
| `images`              | *string*[]            | :heavy_minus_sign:    | N/A                   |
| `metadata`            | Record<string, *any*> | :heavy_minus_sign:    | N/A                   |
| `url`                 | *string*              | :heavy_minus_sign:    | N/A                   |