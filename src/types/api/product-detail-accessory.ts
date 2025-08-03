import type {
  Availability,
  ImageData,
  ImageNavSlider,
  PriceGross,
  PriceNet,
  ProductAccordion,
  ProductHighlight,
} from "./shared.ts";

export interface ProductDetailAccessory {
  data: ProductDetailAccessoryData;
  type: "product-detail-accessory";
}

/**
 * - note: partial, only relevant properties
 */
interface ProductDetailAccessoryData {
  productAccordion: ProductAccordion;
  productDetailBox: ProductDetailBox;
}

interface ProductDetailBox {
  productDescription: ProductDescription;
  imageNavSlider: ImageNavSlider;
  productHighlight: ProductHighlight[];
  cta: Cta;
  product: Product;
  variantLink: VariantLink;
  bookmarksAriaLabel: string;
}

interface ProductDescription {
  text: string;
  headline: string;
}

interface Cta {
  label: string;
  disabled: boolean;
  openContact: boolean;
  text: string;
  newTab: boolean;
  icon: string;
  modifier: string;
}

interface Product {
  availability: Availability;
  type: string;
  title: string;
  image: ImageData;
  // todo: might be more on there for other requests?
  specification: never[];
  priceNet: PriceNet;
  priceGross: PriceGross;
  link: Link;
  sku: string;
  skuLabel: string;
  variantCount: number;
}

interface Link {
  rel: string;
  openContact: boolean;
  url: string;
  newTab: boolean;
  icon: string;
  text: string;
}

interface VariantLink {
  openContact: boolean;
  url: string;
  newTab: boolean;
  icon: string;
}
