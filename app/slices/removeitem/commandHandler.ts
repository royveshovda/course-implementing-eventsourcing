import {CartEvents} from "@/app/api/events/CartEvents";
import {AddItemCommand} from "@/app/api/commands/AddItemCommand";
import {ItemAddedEvent} from "@/app/api/events/ItemAddedEvent";
import {findEventStore} from "@/app/infrastructure/inmemoryEventstore";
import {RemoveItemCommand} from "@/app/api/commands/RemoveItemCommand";

export const removeItemCommandHandler =
    async (events: CartEvents[], command: RemoveItemCommand): Promise<CartEvents[]> => {

    var itemsInCart = []

    // TODO rebuild cart state from events
    // TODO throw error if item to be removed is not in cart

    /*if (itemsInCart.indexOf(command.data.itemId) == -1) {
        throw new Error("Item is not in cart");
    }*/

    return [{
        type: 'ItemRemoved',
        data: {
            aggregateId: command.data.aggregateId,
            itemId: command.data.itemId,
        }
    }]

}