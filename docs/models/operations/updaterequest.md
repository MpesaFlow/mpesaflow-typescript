# UpdateRequest

## Example Usage

```typescript
import { UpdateRequest } from "@mpesaflow/sdk/models/operations";

let value: UpdateRequest = {
  id: "cus_GqfKXLmg61LURZhB",
  requestBody: {
    name: "John Doe",
    phoneNumber: "254712345678",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | The customer id                                                              | cus_GqfKXLmg61LURZhB                                                         |
| `requestBody`                                                                | [operations.UpdateRequestBody](../../models/operations/updaterequestbody.md) | :heavy_check_mark:                                                           | Update a customer                                                            |                                                                              |