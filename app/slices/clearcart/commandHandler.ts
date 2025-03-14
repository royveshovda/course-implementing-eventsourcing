import {CartEvents} from "@/app/api/events/CartEvents";
import {AddItemCommand} from "@/app/api/commands/AddItemCommand";
import {ItemAddedEvent} from "@/app/api/events/ItemAddedEvent";
import {findEventStore} from "@/app/infrastructure/inmemoryEventstore";
import {ClearCartCommand} from "@/app/api/commands/ClearCartCommand";

export const clearCartCommandHandler = async (events: CartEvents[], command: ClearCartCommand): Promise<CartEvents[]> => {

    return [{
        type: 'CartCleared',
        data: {
            aggregateId: command.data.aggregateId,
        }
    }]

}