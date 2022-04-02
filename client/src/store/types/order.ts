export type TOrderState = {
    orders: Array<TOrder> | null;
    isLoading: boolean;
    hasError: boolean;
    message: string;
}

export type TCart = {
    id: string;
    count: number;
}

export type TOrder = {
    orderId: string;
    userId: string;
    created_at: number;
    order: Array<TCart>;
    completed: boolean;
}