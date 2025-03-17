import {CartEvents} from "@/app/api/events/CartEvents";

export type CartItem = {
    name: string,
    price: number,
    itemId: string,
    productId: string,
    aggregateId: string
}

export const cartItemsStateView = (state: CartItem[], event: CartEvents[]): CartItem[] => {
    let result: CartItem[] = [...state]

    event.forEach(event => {
        switch (event.type) {
            case "ItemAdded":
                result.push({
                    name: event.data.name,
                    price: event.data.price,
                    itemId: event.data.itemId,
                    productId: event.data.productId,
                    aggregateId: event.data.aggregateId
                })
                break
            case "ItemRemoved":
                result = result.filter(item => item.itemId !== event.data.itemId)
                break
            case "CartCleared":
                result = []
                break
            case "ItemArchived":
                result = result.filter(item => item.itemId !== event.data.itemId)
                break
        }
    })


    return result
}