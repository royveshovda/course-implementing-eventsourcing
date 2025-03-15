import {CartEvents} from "@/app/api/events/CartEvents";

export type CartItem = {
    name: string,
    price: number,
    itemId: string,
    aggregateId: string
}

export const cartItemsStateView =
    async (state: CartItem[], event: CartEvents[]): Promise<CartItem[]> => {
    let result: CartItem[] = [...state]

    event.forEach(event => {
        switch (event.type) {
            case "ItemAdded":
                //TODO implement logic
                break
            case "ItemRemoved":
                //TODO implement logic
                break
            case "CartCleared":
                //TODO implement logic
                break
            case "ItemArchived":
                //TODO implement logic
                break
        }
    })
    return result
}