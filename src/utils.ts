import type { ProductDetailMachine } from "./types/api/product-detail-machine.ts";
import type { Row, TableElement } from "./types/api/shared.ts";

export function isProductDetailMachine(
  obj: unknown,
): obj is ProductDetailMachine {
  return typeof obj === "object" && obj !== null && "type" in obj &&
    obj.type === "product-detail-machine";
}

export function isTable(obj: unknown): obj is TableElement {
  return typeof obj === "object" && obj !== null && "type" in obj &&
    obj.type === "metabo-table";
}

export function isList(rows: string[] | Row[]): rows is string[] {
  return rows.length > 0 && typeof rows[0] === "string";
}
