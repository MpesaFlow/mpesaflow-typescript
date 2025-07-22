<!-- Start SDK Example Usage [usage] -->
```typescript
import { MpesaFlow } from "@mpesaflow/sdk";

const mpesaFlow = new MpesaFlow({
  token: "MPESAFLOW_API_KEY",
});

async function run() {
  const result = await mpesaFlow.express.pay({
    phoneNumber: "254712345678",
    amount: "100.00",
    transactionDesc: "mpesaflow",
    customerName: "John Doe",
    accountReference: "mpesaflow",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->