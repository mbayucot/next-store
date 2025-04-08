import { z } from "zod";
import type { Prisma } from "@prisma/client";

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////

/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum([
  "ReadUncommitted",
  "ReadCommitted",
  "RepeatableRead",
  "Serializable",
]);

export const StoreScalarFieldEnumSchema = z.enum([
  "id",
  "name",
  "address",
  "createdAt",
  "updatedAt",
]);

export const UserScalarFieldEnumSchema = z.enum([
  "id",
  "email",
  "password",
  "createdAt",
  "updatedAt",
]);

export const SortOrderSchema = z.enum(["asc", "desc"]);

export const QueryModeSchema = z.enum(["default", "insensitive"]);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// STORE SCHEMA
/////////////////////////////////////////

export const StoreSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().min(3, { message: "Email is required" }),
  address: z.string().min(3, { message: "Address is required" }),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export type Store = z.infer<typeof StoreSchema>;

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.number().int(),
  email: z.string(),
  password: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type User = z.infer<typeof UserSchema>;
