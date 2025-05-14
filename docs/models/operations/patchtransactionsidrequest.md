# PatchTransactionsIdRequest

## Example Usage

```typescript
import { PatchTransactionsIdRequest } from "mpesaflow/models/operations";

let value: PatchTransactionsIdRequest = {
  id: "txn_12345",
  requestBody: {},
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    | txn_12345                                                                                              |
| `requestBody`                                                                                          | [operations.PatchTransactionsIdRequestBody](../../models/operations/patchtransactionsidrequestbody.md) | :heavy_check_mark:                                                                                     | The transaction update data                                                                            |                                                                                                        |