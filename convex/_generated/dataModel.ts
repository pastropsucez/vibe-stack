/* eslint-disable */
/**
 * Generated data model types.
 *
 * THIS FILE IS AUTO-GENERATED. Run `npx convex dev` to regenerate.
 */

import type { AnyDataModel } from "convex/server"

export type DataModel = AnyDataModel
export type Id<TableName extends string> = string & { __tableName: TableName }
export type Doc<TableName extends string> = {
  _id: Id<TableName>
  _creationTime: number
  [key: string]: unknown
}
