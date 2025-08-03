import { isList, isProductDetailMachine, isTable } from "./utils.ts";
import type { Product } from "./types/main.ts";
import type { ApiResponse } from "./types/api/main.ts";

const BASE_URL = "https://www.metabo.com";

/**
 * Parse product
 *
 * @param json API response for product page
 * @returns product
 */
export function parse(json: ApiResponse): Product {
  const data = json.elements.main.data.find(
    isProductDetailMachine,
  );

  if (!data) {
    throw new Error("Unexpected API response data.");
  }

  const category = data.data.productDetailBox.product.type;
  const image = data.data.productDetailBox.product.image.src;
  const sku = data.data.productDetailBox.product.sku;

  const titleStr = data.data.productDetailBox.product.title;
  const titleRegex = new RegExp(`^(.+) \\(${sku}\\) ${category}$`);
  const titleMatch = titleStr.match(titleRegex);
  if (!titleMatch) {
    throw new Error(`Unexpected title format: ${titleStr}`);
  }
  const title = titleMatch[1];

  const urlRelative = data.data.productDetailBox.product.link.url;
  const urlObj = new URL(urlRelative, BASE_URL);
  urlObj.search = "";
  const url = urlObj.href;

  const details = data.data.productAccordion.items.find((
    item,
  ) => item.title == "Technische Details");

  if (!details) {
    throw new Error("No technical details found.");
  }

  const table = details.data.find(isTable);

  if (!table) {
    throw new Error("No table found in technical details.");
  }

  const specs = table.data.tables.find((t) => t.title == "KENNWERTE");

  if (!specs) {
    throw new Error("No specs found in table.");
  }

  const rows = specs.rows;

  if (isList(rows)) {
    throw new Error("No table rows found in specs.");
  }

  const specs = rows.map((row) => ({
    name: row.subline,
    value: row.usp.trim(),
  }));

  return {
    category,
    title,
    image,
    specs,
    sku,
    url,
  };
}
