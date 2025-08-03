import type {
  Btn,
  ImageNavSlider,
  Product,
  ProductAccordion,
  ProductHighlight,
  Row,
  Service,
} from "./shared.ts";

export interface ProductDetailMachine {
  data: ProductDetailMachineData;
  type: "product-detail-machine";
}

/**
 * - note: partial, only relevant properties
 */
interface ProductDetailMachineData {
  productDetailBox: ProductDetailBox;
  productAccordion: ProductAccordion;
  usps: Usps;
}

interface ProductDetailBox {
  imageNavSlider: ImageNavSlider;
  productHighlight: ProductHighlight[];
  cta: Btn;
  product: Product;
  service: Service;
  bookmarksAriaLabel: string;
}

interface Usps {
  items: Row[];
}
