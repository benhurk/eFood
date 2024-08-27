type OrderProducts = {
    id: number;
    price: number;
}

export type OrderResponse = {
    orderId: string;
}

type Order = {
    products: OrderProducts[];

    delivery: {
        receiver: string;

        address: {
            description: string;
            city: string;
            zipCode: string;
            number: number;
            complement?: string;
        }
    }

    payment: {
        card: {
            name: string;
            number: string;
            code: number;

            expires: {
                month: number;
                year: number;
            }
        }
    }
}

export default Order;