# UpdateRequestBody

Update a customer

## Example Usage

```typescript
import { UpdateRequestBody } from "@mpesaflow/sdk/models/operations";

let value: UpdateRequestBody = {
  name: "John Doe",
  phoneNumber: "254712345678",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 | Example                     |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `name`                      | *string*                    | :heavy_minus_sign:          | The name of the customer    | John Doe                    |
| `phoneNumber`               | *string*                    | :heavy_minus_sign:          | The customer's phone number | 254712345678                |