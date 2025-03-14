import {CartEvents} from "@/app/api/events/CartEvents";
import {AddItemCommand} from "@/app/api/commands/AddItemCommand";
import {ItemAddedEvent} from "@/app/api/events/ItemAddedEvent";
import {findEventStore} from "@/app/infrastructure/inmemoryEventstore";

export const addItemCommandHandler = async (events: CartEvents[], command: AddItemCommand): Promise<CartEvents[]> => {

    return [
        /*{
        type: 'ItemAdded',
        data: {
             TODO apply items
        }
    }*/]

}