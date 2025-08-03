import type { ProductDetailMachine } from "./product-detail-machine.ts";
import type { ProductDetailAccessory } from "./product-detail-accessory.ts";

/**
 * Client-side routing API response for product page
 *
 * - note: partial, only relevant properties
 */
export interface ApiResponse {
  elements: Elements;
}

interface Elements {
  main: Main;
}

interface Main {
  data: (ProductDetailMachine | ProductDetailAccessory | unknown)[];
}
