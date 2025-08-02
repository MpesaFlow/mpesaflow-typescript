# TooManyRequestsErrorError

## Example Usage

```typescript
import { TooManyRequestsErrorError } from "@mpesaflow/sdk/models";

let value: TooManyRequestsErrorError = {
  status: 429,
  code: "too_many_requests",
  message: "Too many requests, please try again later.",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                | Example                                    |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `status`                                   | *number*                                   | :heavy_check_mark:                         | HTTP status code of the error              | 429                                        |
| `code`                                     | *string*                                   | :heavy_check_mark:                         | Machine-readable error name                | too_many_requests                          |
| `message`                                  | *string*                                   | :heavy_check_mark:                         | Human-readable error message               | Too many requests, please try again later. |