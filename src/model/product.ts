export interface Price {
    value: number;
    shipping?: any;
    cashback?: any;
}

export interface Source {
    site: string;
    imageUrl: string;
    pageUrl: string;
}

export interface Product {
    title: string;
    specification: string;
    brand: string;
    model: string;
    description?: any;
    price: Price;
    source: Source;
}