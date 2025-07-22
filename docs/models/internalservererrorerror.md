# InternalServerErrorError

## Example Usage

```typescript
import { InternalServerErrorError } from "@mpesaflow/sdk/models";

let value: InternalServerErrorError = {
  code: "internal_server_error",
  status: 500,
  message: "An unexpected error occurred.",
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   | Example                       |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `code`                        | *string*                      | :heavy_check_mark:            | Machine-readable error name   | internal_server_error         |
| `status`                      | *number*                      | :heavy_check_mark:            | HTTP status code of the error | 500                           |
| `message`                     | *string*                      | :heavy_check_mark:            | Human-readable error message  | An unexpected error occurred. |