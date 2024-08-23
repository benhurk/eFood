import { ProductType } from "../models/restaurant";

const getTotalPrice = (cartItems: ProductType[]) => {
    return cartItems.reduce((acumulator: number, item: { preco: number; }) => {
        return acumulator += item.preco;
    }, 0)
}

export default getTotalPrice;