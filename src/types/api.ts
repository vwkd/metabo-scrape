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
  data: (ProductDetailMachine | unknown)[];
}

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

interface ImageNavSlider {
  media: Media;
}

interface Media {
  data: Image[];
}

interface Image {
  data: ImageData;
  type: "base-image";
}

interface ImageData {
  src: string;
  srcDesktop: string;
  srcTablet: string;
  srcMobile: string;
  alt: string;
  title: string;
  copyright: string;
  variant: string;
}

interface ProductHighlight {
  image: ImageData;
}

interface Btn {
  label: string;
  disabled: boolean;
  openContact: boolean;
  text: string;
  newTab: boolean;
  icon: string;
  modifier: string;
}

interface Product {
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

interface DeliveryScope {
  headline: string;
  items: string[];
  btn: Btn;
}

interface Availability {
  onlineSuppliers: OnlineSupplier[];
  offlineSuppliers: OfflineSupplier[];
}

interface OnlineSupplier {
  data: OnlineSupplierData;
  type: string;
}

interface OnlineSupplierData {
  name: string;
  logo: ImageData;
  availabilityStatus: string;
  cta: Cta;
}

interface Cta {
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

interface OfflineSupplier {
  data: OfflineSupplierData;
  type: string;
}

interface OfflineSupplierData {
  text: string;
  empty: boolean;
  modifier: string;
}

interface PriceNet {
  price: PriceNetPrice;
  taxInfo: string;
}

interface PriceNetPrice {
  label?: string;
  value: number;
  currency: Currency;
  modifier: string;
}

interface Currency {
  code: string;
}

interface PriceGross {
  price: PriceGrossPrice;
  taxInfo: string;
}

interface PriceGrossPrice {
  value: number;
  currency: Currency;
}

interface Link {
  rel: string;
  openContact: boolean;
  url: string;
  newTab: boolean;
  icon: string;
}

interface Service {
  available: boolean;
  icon: ImageData;
}

interface ProductAccordion {
  items: ProductAccordionItem[];
}

interface ProductAccordionItem {
  title: string;
  data: (
    | TextElement
    | LinkElement
    | HighlightElement
    | TableElement
    | DownloadElement
    | FullServiceElement
  )[];
}

interface TextElement {
  data: TextData;
  type: "base-text";
}

interface TextData {
  text: string;
  empty: boolean;
}

interface LinkElement {
  data: LinkData;
  type: "base-link";
}

interface LinkData {
  openContact: boolean;
  newTab: boolean;
  icon: string;
}

interface HighlightElement {
  data: HighlightData;
  type: "product-highlight-panel";
}

interface HighlightData {
  cards: HighlighDataCard[];
}

interface HighlighDataCard {
  title: string;
  image: ImageData;
  text: string;
  link: null;
}

interface TableElement {
  data: TableData;
  type: "metabo-table";
}

interface TableData {
  tables: Table[];
}

interface Table {
  title: string;
  rows: string[] | Row[];
}

export interface Row {
  subline: string;
  usp: string;
}

interface DownloadElement {
  data: DownloadData;
  type: "metabo-download";
}

interface DownloadData {
  downloadItems: DownloadItem[];
  modifier: string;
}

interface DownloadItem {
  fileSize: string;
  fileType: string;
  fileSizeUnit: string;
  fileSizeUnitShort: string;
  headline: string;
  fileName: string;
  fileUrl: string;
  isDownload: boolean;
}

interface FullServiceElement {
  data: FullServiceData;
  type: "metabo-full-service";
}

interface FullServiceData {
  fullService: FullService;
  description: string;
  registrationLabel: string;
  registrationLink: FullServiceDataLink;
  infoLabel: string;
  infoLink: FullServiceDataLink;
  advantagesLabel: string;
  advantages: string[];
}

interface FullService {
  identifier: string;
  title: string;
  groupLabel: string;
  priceLabel: string;
  price: number;
  currency: string;
}

interface FullServiceDataLink {
  text: string;
  url: string;
  newTab: boolean;
}

interface Usps {
  items: Row[];
}
