export interface Product {
  category: string;
  title: string;
  image: string;
  specs?: Spec[];
  sku: string;
  url: string;
}

export interface Spec {
  name: string;
  value: string;
}
