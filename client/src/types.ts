export type TGoods = {
    id: string;
    type: string;
    name: string;
}

export type TProduct = {
    id: string;
    type: string;
    manufacturer: string;
    name: string;
    price: number;
    image: string;
    inStock: number;
    count?: number;
}