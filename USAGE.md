<!-- Start SDK Example Usage [usage] -->
```typescript
import { MpesaFlow } from "mpesaflow";

const mpesaFlow = new MpesaFlow({
  bearer: process.env["MPESAFLOW_BEARER"] ?? "",
});

async function run() {
  const result = await mpesaFlow.products.list({});

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->