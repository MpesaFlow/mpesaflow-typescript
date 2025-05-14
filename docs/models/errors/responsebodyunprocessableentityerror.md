# ResponseBodyUnprocessableEntityError

## Example Usage

```typescript
import { ResponseBodyUnprocessableEntityError } from "mpesaflow/models/errors";

let value: ResponseBodyUnprocessableEntityError = {
  issues: [
    {
      code: "<value>",
      path: [
        "/lib",
      ],
    },
  ],
  name: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `issues`                                       | [errors.Issue](../../models/errors/issue.md)[] | :heavy_check_mark:                             | N/A                                            |
| `name`                                         | *string*                                       | :heavy_check_mark:                             | N/A                                            |