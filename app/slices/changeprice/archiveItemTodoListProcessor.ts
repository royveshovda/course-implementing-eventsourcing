import {CartEvents} from "@/app/api/events/CartEvents";
import {findEventStore} from "@/app/infrastructure/inmemoryEventstore";
import {cartsWithProductsStateView} from "@/app/slices/changeprice/cartsWithProductsStateView";
import {PriceChangedEvent} from "@/app/api/events/PriceChanged";
import {RequestToArchiveItem} from "@/app/api/commands/RequestToArchiveItem";
import {Streams} from "@/app/api/Streams";
import {ArchiveItemCommand} from "@/app/api/commands/ArchiveItemCommand";
import {CART_SESSION} from "@/app/cart/CartSession";
import {ItemArchiveRequestedEvent} from "@/app/api/events/ItemArchiveRequestedEvent";

const archiveItemCommandHandler = (events: Event[], command: ArchiveItemCommand): CartEvents[] => {
    return [{
        type: 'ItemArchived',
        data: {
            aggregateId: command.data.aggregateId,
            productId: command.data.productId,
            itemId: command.data.itemId
        }
    }]

}

export const archiveItemTodoListProcessor = async (events: CartEvents[]) => {

    let todos: ArchiveItemCommand[] = events.reduce((acc:ArchiveItemCommand[], event:CartEvents):ArchiveItemCommand[] => {
        switch (event.type) {
            // TODO build a command for each TODO
        }
        return acc
    }, [])
    todos.forEach((command)=>{
        let result = []
        // TODO for each TODO - fire the command
        findEventStore().appendToStream(Streams.Cart, result)
    })

}