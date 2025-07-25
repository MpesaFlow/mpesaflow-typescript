/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

export const ListTransactionsStatus = {
  Completed: "completed",
  Failed: "failed",
  Pending: "pending",
} as const;
export type ListTransactionsStatus = ClosedEnum<typeof ListTransactionsStatus>;

export const ListTransactionsSortEnum2 = {
  Asc: "asc",
  Desc: "desc",
} as const;
export type ListTransactionsSortEnum2 = ClosedEnum<
  typeof ListTransactionsSortEnum2
>;

export const ListTransactionsSortEnum1 = {
  Id: "id",
  CustomerId: "customerId",
  Type: "type",
  Amount: "amount",
  Currency: "currency",
  Status: "status",
  PhoneNumber: "phoneNumber",
  FailureReason: "failureReason",
  CreatedAt: "createdAt",
  PaidAt: "paidAt",
  FailedAt: "failedAt",
} as const;
export type ListTransactionsSortEnum1 = ClosedEnum<
  typeof ListTransactionsSortEnum1
>;

export type ListTransactionsSortUnion =
  | ListTransactionsSortEnum1
  | ListTransactionsSortEnum2;

export type ListTransactionsRequest = {
  q?: string | undefined;
  cursor?: string | undefined;
  customerId?: string | undefined;
  statuses?: Array<ListTransactionsStatus> | undefined;
  amountRange?: Array<number | null> | null | undefined;
  amount?: Array<string> | null | undefined;
  limit?: number | undefined;
  start?: string | null | undefined;
  end?: string | null | undefined;
  sort?:
    | Array<ListTransactionsSortEnum1 | ListTransactionsSortEnum2>
    | undefined;
};

/**
 * List of all transactions
 */
export type ListTransactionsResponseBody = {
  data: Array<models.TransactionResponse>;
  /**
   * Cursor for pagination, representing the last item from the previous page
   */
  nextCursor: string | null;
  /**
   * The number of data to return (1-100)
   */
  limit?: number | undefined;
};

export type ListTransactionsResponse = {
  result: ListTransactionsResponseBody;
};

/** @internal */
export const ListTransactionsStatus$inboundSchema: z.ZodNativeEnum<
  typeof ListTransactionsStatus
> = z.nativeEnum(ListTransactionsStatus);

/** @internal */
export const ListTransactionsStatus$outboundSchema: z.ZodNativeEnum<
  typeof ListTransactionsStatus
> = ListTransactionsStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListTransactionsStatus$ {
  /** @deprecated use `ListTransactionsStatus$inboundSchema` instead. */
  export const inboundSchema = ListTransactionsStatus$inboundSchema;
  /** @deprecated use `ListTransactionsStatus$outboundSchema` instead. */
  export const outboundSchema = ListTransactionsStatus$outboundSchema;
}

/** @internal */
export const ListTransactionsSortEnum2$inboundSchema: z.ZodNativeEnum<
  typeof ListTransactionsSortEnum2
> = z.nativeEnum(ListTransactionsSortEnum2);

/** @internal */
export const ListTransactionsSortEnum2$outboundSchema: z.ZodNativeEnum<
  typeof ListTransactionsSortEnum2
> = ListTransactionsSortEnum2$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListTransactionsSortEnum2$ {
  /** @deprecated use `ListTransactionsSortEnum2$inboundSchema` instead. */
  export const inboundSchema = ListTransactionsSortEnum2$inboundSchema;
  /** @deprecated use `ListTransactionsSortEnum2$outboundSchema` instead. */
  export const outboundSchema = ListTransactionsSortEnum2$outboundSchema;
}

/** @internal */
export const ListTransactionsSortEnum1$inboundSchema: z.ZodNativeEnum<
  typeof ListTransactionsSortEnum1
> = z.nativeEnum(ListTransactionsSortEnum1);

/** @internal */
export const ListTransactionsSortEnum1$outboundSchema: z.ZodNativeEnum<
  typeof ListTransactionsSortEnum1
> = ListTransactionsSortEnum1$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListTransactionsSortEnum1$ {
  /** @deprecated use `ListTransactionsSortEnum1$inboundSchema` instead. */
  export const inboundSchema = ListTransactionsSortEnum1$inboundSchema;
  /** @deprecated use `ListTransactionsSortEnum1$outboundSchema` instead. */
  export const outboundSchema = ListTransactionsSortEnum1$outboundSchema;
}

/** @internal */
export const ListTransactionsSortUnion$inboundSchema: z.ZodType<
  ListTransactionsSortUnion,
  z.ZodTypeDef,
  unknown
> = z.union([
  ListTransactionsSortEnum1$inboundSchema,
  ListTransactionsSortEnum2$inboundSchema,
]);

/** @internal */
export type ListTransactionsSortUnion$Outbound = string | string;

/** @internal */
export const ListTransactionsSortUnion$outboundSchema: z.ZodType<
  ListTransactionsSortUnion$Outbound,
  z.ZodTypeDef,
  ListTransactionsSortUnion
> = z.union([
  ListTransactionsSortEnum1$outboundSchema,
  ListTransactionsSortEnum2$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListTransactionsSortUnion$ {
  /** @deprecated use `ListTransactionsSortUnion$inboundSchema` instead. */
  export const inboundSchema = ListTransactionsSortUnion$inboundSchema;
  /** @deprecated use `ListTransactionsSortUnion$outboundSchema` instead. */
  export const outboundSchema = ListTransactionsSortUnion$outboundSchema;
  /** @deprecated use `ListTransactionsSortUnion$Outbound` instead. */
  export type Outbound = ListTransactionsSortUnion$Outbound;
}

export function listTransactionsSortUnionToJSON(
  listTransactionsSortUnion: ListTransactionsSortUnion,
): string {
  return JSON.stringify(
    ListTransactionsSortUnion$outboundSchema.parse(listTransactionsSortUnion),
  );
}

export function listTransactionsSortUnionFromJSON(
  jsonString: string,
): SafeParseResult<ListTransactionsSortUnion, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListTransactionsSortUnion$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListTransactionsSortUnion' from JSON`,
  );
}

/** @internal */
export const ListTransactionsRequest$inboundSchema: z.ZodType<
  ListTransactionsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  q: z.string().optional(),
  cursor: z.string().optional(),
  customerId: z.string().optional(),
  statuses: z.array(ListTransactionsStatus$inboundSchema).optional(),
  amountRange: z.nullable(z.array(z.nullable(z.number()))).optional(),
  amount: z.nullable(z.array(z.string())).optional(),
  limit: z.number().default(10),
  start: z.nullable(z.string()).optional(),
  end: z.nullable(z.string()).optional(),
  sort: z.array(
    z.union([
      ListTransactionsSortEnum1$inboundSchema,
      ListTransactionsSortEnum2$inboundSchema,
    ]),
  ).optional(),
});

/** @internal */
export type ListTransactionsRequest$Outbound = {
  q?: string | undefined;
  cursor?: string | undefined;
  customerId?: string | undefined;
  statuses?: Array<string> | undefined;
  amountRange?: Array<number | null> | null | undefined;
  amount?: Array<string> | null | undefined;
  limit: number;
  start?: string | null | undefined;
  end?: string | null | undefined;
  sort?: Array<string | string> | undefined;
};

/** @internal */
export const ListTransactionsRequest$outboundSchema: z.ZodType<
  ListTransactionsRequest$Outbound,
  z.ZodTypeDef,
  ListTransactionsRequest
> = z.object({
  q: z.string().optional(),
  cursor: z.string().optional(),
  customerId: z.string().optional(),
  statuses: z.array(ListTransactionsStatus$outboundSchema).optional(),
  amountRange: z.nullable(z.array(z.nullable(z.number()))).optional(),
  amount: z.nullable(z.array(z.string())).optional(),
  limit: z.number().default(10),
  start: z.nullable(z.string()).optional(),
  end: z.nullable(z.string()).optional(),
  sort: z.array(
    z.union([
      ListTransactionsSortEnum1$outboundSchema,
      ListTransactionsSortEnum2$outboundSchema,
    ]),
  ).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListTransactionsRequest$ {
  /** @deprecated use `ListTransactionsRequest$inboundSchema` instead. */
  export const inboundSchema = ListTransactionsRequest$inboundSchema;
  /** @deprecated use `ListTransactionsRequest$outboundSchema` instead. */
  export const outboundSchema = ListTransactionsRequest$outboundSchema;
  /** @deprecated use `ListTransactionsRequest$Outbound` instead. */
  export type Outbound = ListTransactionsRequest$Outbound;
}

export function listTransactionsRequestToJSON(
  listTransactionsRequest: ListTransactionsRequest,
): string {
  return JSON.stringify(
    ListTransactionsRequest$outboundSchema.parse(listTransactionsRequest),
  );
}

export function listTransactionsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListTransactionsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListTransactionsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListTransactionsRequest' from JSON`,
  );
}

/** @internal */
export const ListTransactionsResponseBody$inboundSchema: z.ZodType<
  ListTransactionsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(models.TransactionResponse$inboundSchema),
  next_cursor: z.nullable(z.string()),
  limit: z.number().default(10),
}).transform((v) => {
  return remap$(v, {
    "next_cursor": "nextCursor",
  });
});

/** @internal */
export type ListTransactionsResponseBody$Outbound = {
  data: Array<models.TransactionResponse$Outbound>;
  next_cursor: string | null;
  limit: number;
};

/** @internal */
export const ListTransactionsResponseBody$outboundSchema: z.ZodType<
  ListTransactionsResponseBody$Outbound,
  z.ZodTypeDef,
  ListTransactionsResponseBody
> = z.object({
  data: z.array(models.TransactionResponse$outboundSchema),
  nextCursor: z.nullable(z.string()),
  limit: z.number().default(10),
}).transform((v) => {
  return remap$(v, {
    nextCursor: "next_cursor",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListTransactionsResponseBody$ {
  /** @deprecated use `ListTransactionsResponseBody$inboundSchema` instead. */
  export const inboundSchema = ListTransactionsResponseBody$inboundSchema;
  /** @deprecated use `ListTransactionsResponseBody$outboundSchema` instead. */
  export const outboundSchema = ListTransactionsResponseBody$outboundSchema;
  /** @deprecated use `ListTransactionsResponseBody$Outbound` instead. */
  export type Outbound = ListTransactionsResponseBody$Outbound;
}

export function listTransactionsResponseBodyToJSON(
  listTransactionsResponseBody: ListTransactionsResponseBody,
): string {
  return JSON.stringify(
    ListTransactionsResponseBody$outboundSchema.parse(
      listTransactionsResponseBody,
    ),
  );
}

export function listTransactionsResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<ListTransactionsResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListTransactionsResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListTransactionsResponseBody' from JSON`,
  );
}

/** @internal */
export const ListTransactionsResponse$inboundSchema: z.ZodType<
  ListTransactionsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: z.lazy(() => ListTransactionsResponseBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type ListTransactionsResponse$Outbound = {
  Result: ListTransactionsResponseBody$Outbound;
};

/** @internal */
export const ListTransactionsResponse$outboundSchema: z.ZodType<
  ListTransactionsResponse$Outbound,
  z.ZodTypeDef,
  ListTransactionsResponse
> = z.object({
  result: z.lazy(() => ListTransactionsResponseBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListTransactionsResponse$ {
  /** @deprecated use `ListTransactionsResponse$inboundSchema` instead. */
  export const inboundSchema = ListTransactionsResponse$inboundSchema;
  /** @deprecated use `ListTransactionsResponse$outboundSchema` instead. */
  export const outboundSchema = ListTransactionsResponse$outboundSchema;
  /** @deprecated use `ListTransactionsResponse$Outbound` instead. */
  export type Outbound = ListTransactionsResponse$Outbound;
}

export function listTransactionsResponseToJSON(
  listTransactionsResponse: ListTransactionsResponse,
): string {
  return JSON.stringify(
    ListTransactionsResponse$outboundSchema.parse(listTransactionsResponse),
  );
}

export function listTransactionsResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListTransactionsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListTransactionsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListTransactionsResponse' from JSON`,
  );
}
