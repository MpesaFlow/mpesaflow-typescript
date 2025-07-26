# Validation

## Example Usage

```typescript
import { Validation } from "@mpesaflow/sdk/models";

let value: Validation = {
  field: "email",
  message: "Invalid email format",
  expected: "string",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  | Example                                      |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `field`                                      | *string*                                     | :heavy_check_mark:                           | The name of the field that failed validation | email                                        |
| `message`                                    | *string*                                     | :heavy_check_mark:                           | The validation error message for the field   | Invalid email format                         |
| `expected`                                   | *string*                                     | :heavy_check_mark:                           | The expected type or format for the field    | string                                       |