# MissingApiKeyErrorError

## Example Usage

```typescript
import { MissingApiKeyErrorError } from "@mpesaflow/sdk/models";

let value: MissingApiKeyErrorError = {
  code: "missing_api_key",
  status: 401,
  message: "Missing API key in the authorization header.",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  | Example                                      |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `code`                                       | *string*                                     | :heavy_check_mark:                           | Machine-readable error name                  | missing_api_key                              |
| `status`                                     | *number*                                     | :heavy_check_mark:                           | HTTP status code of the error                | 401                                          |
| `message`                                    | *string*                                     | :heavy_check_mark:                           | Human-readable error message                 | Missing API key in the authorization header. |