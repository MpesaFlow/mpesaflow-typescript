# Issue

## Example Usage

```typescript
import { Issue } from "mpesaflow/models/errors";

let value: Issue = {
  code: "<value>",
  path: [
    "/home/user/dir",
  ],
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `code`                          | *string*                        | :heavy_check_mark:              | N/A                             |
| `path`                          | *errors.PatchProductsIdPath1*[] | :heavy_check_mark:              | N/A                             |
| `message`                       | *string*                        | :heavy_minus_sign:              | N/A                             |