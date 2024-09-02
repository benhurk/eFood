import { ProductType } from "../models/restaurant";

const getTotalPrice = (cartItems: ProductType[]) => {
    return cartItems.reduce((acumulator: number, item: { preco: number, quantity: number }) => {
        return acumulator += item.preco * item.quantity;
    }, 0)
}

export default getTotalPrice;