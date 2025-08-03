import {
  isList,
  isProductDetailAccessory,
  isProductDetailMachine,
  isTable,
} from "./utils.ts";
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
  const data = json.elements.main.data.find((d) =>
    isProductDetailMachine(d) || isProductDetailAccessory(d)
  );

  if (!data) {
    throw new Error("Unexpected API response data.");
  }

  const category = data.data.productDetailBox.product.type;
  const image = data.data.productDetailBox.product.image.src;
  const sku = data.data.productDetailBox.product.sku;

  const titleStr = data.data.productDetailBox.product.title;
  const titleRegex = new RegExp(
    isProductDetailMachine(data)
      ? `^(.+) \\(${sku}\\) ${category}$`
      : `^(.+) \\(${sku}\\)$`,
  );
  const titleMatch = titleStr.match(titleRegex);
  if (!titleMatch) {
    throw new Error(`Unexpected title format: ${titleStr}`);
  }
  const title = titleMatch[1];

  const urlRelative = data.data.productDetailBox.product.link.url;
  const urlObj = new URL(urlRelative, BASE_URL);
  urlObj.search = "";
  const url = urlObj.href;

  let specs: Product["specs"] = undefined;
  const details = data.data.productAccordion.items.find((
    item,
  ) => item.title == "Technische Details");

  if (details) {
    const table = details.data.find(isTable);

    if (table) {
      const specsTable = table.data.tables.find((t) => t.title == "KENNWERTE");

      if (specsTable) {
        const rows = specsTable.rows;

        if (!isList(rows)) {
          specs = rows.map((row) => ({
            name: row.subline,
            value: row.usp,
          }));
        } else if (isProductDetailMachine(data)) {
          throw new Error("No table rows found in specs.");
        }
      } else if (isProductDetailMachine(data)) {
        throw new Error("No specs found in table.");
      }
    } else if (isProductDetailMachine(data)) {
      throw new Error("No table found in technical details.");
    }
  } else if (isProductDetailMachine(data)) {
    throw new Error("No technical details found.");
  }

  return {
    category,
    title,
    image,
    specs,
    sku,
    url,
  };
}
