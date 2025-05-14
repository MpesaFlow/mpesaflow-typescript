# PatchCustomersIdUnprocessableEntity

The validation error(s)


## Supported Types

### `errors.ResponseBodyError1`

```typescript
const value: errors.ResponseBodyError1 = {
  success: false,
  error: {
    issues: [
      {
        code: "<value>",
        path: [
          7167.76,
        ],
      },
    ],
    name: "<value>",
  },
};
```

### `errors.ResponseBodyError2`

```typescript
const value: errors.ResponseBodyError2 = {
  success: false,
  error: {
    issues: [
      {
        code: "invalid_literal",
        path: [
          "success",
        ],
        message: "Invalid literal value, expected false",
      },
      {
        code: "invalid_type",
        path: [
          "error",
        ],
        message: "Required",
      },
    ],
    name: "ZodError",
  },
};
```

