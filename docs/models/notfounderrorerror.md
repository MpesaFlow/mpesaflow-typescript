# NotFoundErrorError

## Example Usage

```typescript
import { NotFoundErrorError } from "@mpesaflow/sdk/models";

let value: NotFoundErrorError = {
  code: "not_found",
  status: 404,
  message: "The requested endpoint does not exist.",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            | Example                                |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `code`                                 | *string*                               | :heavy_check_mark:                     | Machine-readable error name            | not_found                              |
| `status`                               | *number*                               | :heavy_check_mark:                     | HTTP status code of the error          | 404                                    |
| `message`                              | *string*                               | :heavy_check_mark:                     | Human-readable error message           | The requested endpoint does not exist. |