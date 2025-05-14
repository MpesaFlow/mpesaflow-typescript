# PostPayMpesaResponse

Payment initiated

## Example Usage

```typescript
import { PostPayMpesaResponse } from "mpesaflow/models/operations";

let value: PostPayMpesaResponse = {
  success: false,
  data: {
    checkoutRequestID: "<id>",
    customerMessage: "<value>",
    merchantRequestID: "<id>",
    responseCode: "<value>",
    responseDescription: "<value>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `success`                                                                  | *boolean*                                                                  | :heavy_check_mark:                                                         | N/A                                                                        |
| `data`                                                                     | [operations.PostPayMpesaData](../../models/operations/postpaympesadata.md) | :heavy_check_mark:                                                         | N/A                                                                        |