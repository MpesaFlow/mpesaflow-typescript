# ValidationErrorError

## Example Usage

```typescript
import { ValidationErrorError } from "@mpesaflow/sdk/models";

let value: ValidationErrorError = {
  code: "validation_error",
  status: 422,
  message: "We found an error with one or more fields in the request.",
  validation: [
    {
      field: "email",
      message: "Invalid email format",
    },
    {
      field: "name",
      message: "Name is required",
    },
  ],
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     | Example                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                          | *string*                                                                                                        | :heavy_check_mark:                                                                                              | Machine-readable error name                                                                                     | validation_error                                                                                                |
| `status`                                                                                                        | *number*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP status code of the error                                                                                   | 422                                                                                                             |
| `message`                                                                                                       | *string*                                                                                                        | :heavy_check_mark:                                                                                              | Human-readable error message                                                                                    | We found an error with one or more fields in the request.                                                       |
| `validation`                                                                                                    | [models.Validation](../models/validation.md)[]                                                                  | :heavy_check_mark:                                                                                              | List of field-specific validation issues                                                                        | [<br/>{<br/>"field": "email",<br/>"message": "Invalid email format"<br/>},<br/>{<br/>"field": "name",<br/>"message": "Name is required"<br/>}<br/>] |