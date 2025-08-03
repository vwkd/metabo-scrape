import type { Product } from "./types/main.ts";

/**
 * Create product markdown
 *
 * @param productsByCategory products grouped by category
 * @returns markdown string
 */
export function render(
  productsByCategory: Record<string, Product[]>,
): string {
  let res = "# Metabo Produkte";

  for (const category in productsByCategory) {
    res += `\n\n\n\n## ${category}`;

    const products = productsByCategory[category];

    for (const product of products) {
      res += `\n\n### ${product.title}`;

      res += `\n\n![](${product.image})\n`;

      if (product.specs) {
        for (const spec of product.specs) {
          res += `\n- ${spec.name}: ${spec.value}`;
        }
      }

      res += `\n- Bestell-Nr.: ${product.sku}`;
      res += `\n- Link: ${product.url}`;
    }
  }

  res += "\n";

  return res;
}
