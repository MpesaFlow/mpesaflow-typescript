# CreateRequest

Create a customer

## Example Usage

```typescript
import { CreateRequest } from "@mpesaflow/sdk/models/operations";

let value: CreateRequest = {
  name: "John Doe",
  phoneNumber: "254712345678",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 | Example                     |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `name`                      | *string*                    | :heavy_check_mark:          | The name of the customer    | John Doe                    |
| `phoneNumber`               | *string*                    | :heavy_check_mark:          | The customer's phone number | 254712345678                |