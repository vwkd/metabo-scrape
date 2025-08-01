import type { ProductDetailMachine, Row } from "./types/api.ts";

export function isProductDetailMachine(
  obj: unknown,
): obj is ProductDetailMachine {
  return typeof obj === "object" && obj !== null && "type" in obj &&
    obj.type === "product-detail-machine";
}

export function isList(rows: string[] | Row[]): rows is string[] {
  return rows.length > 0 && typeof rows[0] === "string";
}
