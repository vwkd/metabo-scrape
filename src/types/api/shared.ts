export interface ImageNavSlider {
  media: Media;
}

export interface Media {
  data: Image[];
}

export interface Image {
  data: ImageData;
  type: "base-image";
}

export interface ImageData {
  src: string;
  srcDesktop: string;
  srcTablet: string;
  srcMobile: string;
  alt: string;
  title: string;
  copyright: string;
  variant: string;
}

export interface ProductHighlight {
  image: ImageData;
}

export interface Btn {
  label: string;
  disabled: boolean;
  openContact: boolean;
  text: string;
  newTab: boolean;
  icon: string;
  modifier: string;
}

export interface Product {
  deliveryScope: DeliveryScope;
  availability: Availability;
  type: string;
  title: string;
  image: ImageData;
  specification: string[];
  priceNet: PriceNet;
  priceGross: PriceGross;
  link: Link;
  sku: string;
  skuLabel: string;
  variantCount: number;
}

export interface DeliveryScope {
  headline: string;
  items: string[];
  btn: Btn;
}

export interface Availability {
  onlineSuppliers: OnlineSupplier[];
  offlineSuppliers: OfflineSupplier[];
}

export interface OnlineSupplier {
  data: OnlineSupplierData;
  type: string;
}

export interface OnlineSupplierData {
  name: string;
  logo: ImageData;
  availabilityStatus: string;
  cta: Cta;
}

export interface Cta {
  label: string;
  disabled: boolean;
  title: string;
  rel: string;
  openContact: boolean;
  text: string;
  url: string;
  newTab: boolean;
  icon: string;
}

export interface OfflineSupplier {
  data: OfflineSupplierData;
  type: string;
}

export interface OfflineSupplierData {
  text: string;
  empty: boolean;
  modifier: string;
}

export interface PriceNet {
  price: PriceNetPrice;
  taxInfo: string;
}

export interface PriceNetPrice {
  label?: string;
  value: number;
  currency: Currency;
  modifier: string;
}

export interface Currency {
  code: string;
}

export interface PriceGross {
  price: PriceGrossPrice;
  taxInfo: string;
}

export interface PriceGrossPrice {
  value: number;
  currency: Currency;
}

export interface Link {
  rel: string;
  openContact: boolean;
  url: string;
  newTab: boolean;
  icon: string;
}

export interface Service {
  available: boolean;
  icon: ImageData;
}

export interface ProductAccordion {
  items: ProductAccordionItem[];
}

export interface ProductAccordionItem {
  title: string;
  data: (
    | TextElement
    | LinkElement
    | HighlightElement
    | TableElement
    | DownloadElement
    | FullServiceElement
    | unknown
  )[];
}

export interface TextElement {
  data: TextData;
  type: "base-text";
}

export interface TextData {
  text: string;
  empty: boolean;
}

export interface LinkElement {
  data: LinkData;
  type: "base-link";
}

export interface LinkData {
  openContact: boolean;
  newTab: boolean;
  icon: string;
}

export interface HighlightElement {
  data: HighlightData;
  type: "product-highlight-panel";
}

export interface HighlightData {
  cards: HighlighDataCard[];
}

export interface HighlighDataCard {
  title: string;
  image: ImageData;
  text: string;
  link: null;
}

export interface TableElement {
  data: TableData;
  type: "metabo-table";
}

export interface TableData {
  tables: Table[];
}

export interface Table {
  title: string;
  rows: string[] | Row[];
}

export interface Row {
  subline: string;
  usp: string;
}

export interface DownloadElement {
  data: DownloadData;
  type: "metabo-download";
}

export interface DownloadData {
  downloadItems: DownloadItem[];
  modifier: string;
}

export interface DownloadItem {
  fileSize: string;
  fileType: string;
  fileSizeUnit: string;
  fileSizeUnitShort: string;
  headline: string;
  fileName: string;
  fileUrl: string;
  isDownload: boolean;
}

export interface FullServiceElement {
  data: FullServiceData;
  type: "metabo-full-service";
}

export interface FullServiceData {
  fullService: FullService;
  description: string;
  registrationLabel: string;
  registrationLink: FullServiceDataLink;
  infoLabel: string;
  infoLink: FullServiceDataLink;
  advantagesLabel: string;
  advantages: string[];
}

export interface FullService {
  identifier: string;
  title: string;
  groupLabel: string;
  priceLabel: string;
  price: number;
  currency: string;
}

export interface FullServiceDataLink {
  text: string;
  url: string;
  newTab: boolean;
}
