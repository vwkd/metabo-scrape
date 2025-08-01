import { isList, isProductDetailMachine } from "./utils.ts";
import type { Product } from "./types/main.ts";
import type { ApiResponse } from "./types/api.ts";

const BASE_URL = "https://www.metabo.com";

/**
 * Parse product
 *
 * @param json API response for product page
 * @returns product
 */
export function parse(json: ApiResponse): Product {
  const productDetailMachine = json.elements.main.data.find(
    isProductDetailMachine,
  );

  if (!productDetailMachine) {
    throw new Error("Unexpected API response data.");
  }

  const category = productDetailMachine.data.productDetailBox.product.type;
  const image = productDetailMachine.data.productDetailBox.product.image.src;
  const sku = productDetailMachine.data.productDetailBox.product.sku;

  const titleStr = productDetailMachine.data.productDetailBox.product.title;
  const titleRegex = new RegExp(`^(.+) \\(${sku}\\) ${category}$`);
  const titleMatch = titleStr.match(titleRegex);
  if (!titleMatch) {
    throw new Error(`Unexpected title format: ${titleStr}`);
  }
  const title = titleMatch[1];

  const urlRelative =
    productDetailMachine.data.productDetailBox.product.link.url;
  const urlObj = new URL(urlRelative, BASE_URL);
  urlObj.search = "";
  const url = urlObj.href;

  const details = productDetailMachine.data.productAccordion.items.find((
    item,
  ) => item.title == "Technische Details");

  if (!details) {
    throw new Error("No technical details found.");
  }

  const table = details.data.find((d) => d.type == "metabo-table");

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

  return {
    category,
    title,
    image,
    specs: rows.map((row) => ({
      name: row.subline,
      value: row.usp,
    })),
    sku,
    url,
  };
}
