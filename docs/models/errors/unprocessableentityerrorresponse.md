# UnprocessableEntityErrorResponse

## Example Usage

```typescript
import { UnprocessableEntityErrorResponse } from "mpesaflow/models/errors";

let value: UnprocessableEntityErrorResponse = {
  issues: [
    {
      code: "invalid_literal",
      path: [
        "success",
      ],
      message: "Invalid literal value, expected false",
    },
    {
      code: "invalid_type",
      path: [
        "error",
      ],
      message: "Required",
    },
  ],
  name: "ZodError",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `issues`                                       | [errors.Issue](../../models/errors/issue.md)[] | :heavy_check_mark:                             | N/A                                            |
| `name`                                         | *string*                                       | :heavy_check_mark:                             | N/A                                            |