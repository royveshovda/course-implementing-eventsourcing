import {CartEvents} from "@/app/api/events/CartEvents";
import {findEventStore} from "@/app/infrastructure/inmemoryEventstore";
import {cartsWithProductsStateView} from "@/app/slices/changeprice/cartsWithProductsStateView";
import {PriceChangedEvent} from "@/app/api/events/PriceChanged";
import {RequestToArchiveItem} from "@/app/api/commands/RequestToArchiveItem";
import {Streams} from "@/app/api/Streams";
import {ArchiveItemCommand} from "@/app/api/commands/ArchiveItemCommand";
import {CART_SESSION} from "@/app/cart/CartSession";

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

export const requestItemArchiveTodoListProcessor = async (events: RequestToArchiveItem[]) => {

    for (const event of events) {
        let result:CartEvents[] = archiveItemCommandHandler([], {
            type: 'ArchiveItem',
            data: {
                aggregateId: event.data.aggregateId,
                productId: event.data.productId,
                itemId: event.data.itemId
            }
        })
        await findEventStore().appendToStream(Streams.Cart, result)
    }


}