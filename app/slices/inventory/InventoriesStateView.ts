import {InventoryUpdatedEvent} from "@/app/api/events/InventoryChanged";


export const inventoriesStateView =
    (state: number, events: InventoryUpdatedEvent[], query: { productId: string} ): number => {
    let result:number = 0

    // TODO iterate over all events and get the latest inventory
    return result
}