# InvalidApiKeyErrorError

## Example Usage

```typescript
import { InvalidApiKeyErrorError } from "@mpesaflow/sdk/models";

let value: InvalidApiKeyErrorError = {
  code: "invalid_api_key",
  status: 403,
  message: "API key is invalid.",
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   | Example                       |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `code`                        | *string*                      | :heavy_check_mark:            | Machine-readable error name   | invalid_api_key               |
| `status`                      | *number*                      | :heavy_check_mark:            | HTTP status code of the error | 403                           |
| `message`                     | *string*                      | :heavy_check_mark:            | Human-readable error message  | API key is invalid.           |