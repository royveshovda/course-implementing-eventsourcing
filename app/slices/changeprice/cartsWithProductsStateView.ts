import {InventoryUpdatedEvent} from "@/app/api/events/InventoryChanged";
import {CartEvents} from "@/app/api/events/CartEvents";

export type CartItem = {
    productId: string,
    cartItemId: string
}
export type CartWithProducts = {
    cartId: string,
    cartItems: CartItem[]
}
export const cartsWithProductsStateView =
    (state: CartWithProducts[], events: CartEvents[]): CartWithProducts[] => {
        return events.reduce((acc: CartWithProducts[], event: CartEvents) => {
            let cart;
            // TODO build the cart with products projection
            return acc
        }, state)
    }