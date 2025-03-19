import {CartEvents} from "@/app/api/events/CartEvents";
import {AddItemCommand} from "@/app/api/commands/AddItemCommand";
import {ItemAddedEvent} from "@/app/api/events/ItemAddedEvent";
import {findEventStore} from "@/app/infrastructure/inmemoryEventstore";
import {RemoveItemCommand} from "@/app/api/commands/RemoveItemCommand";
import {ClearCartCommand} from "@/app/api/commands/ClearCartCommand";
import {SubmitCartCommand} from "@/app/api/commands/SubmitCartCommand";

export const submitCartCommandHandler =
    (events: CartEvents[], command: SubmitCartCommand): CartEvents[] => {

        let productIds = events.reduce((acc: string[], event: CartEvents): string[] => {
            switch (event.type) {
                case "ItemAdded":
                    acc.push(event.data.productId)
                    break
                case "ItemArchived":
                case "ItemRemoved":
                    acc = acc.filter(it => it !== event.data.productId)
                    break
                case "CartCleared":
                    acc = []
                    break
            }
            return acc
        }, [])
        productIds.forEach(productId => {
            let inventory = command.data.inventories.find(it => it.productId === productId)
            if (!inventory || inventory.quantity == 0) {
                throw Error("Cannot order products without quantity")
            }
        })


        return [{
            type: 'CartSubmitted',
            data: {
                aggregateId: command.data.aggregateId,
            }
        }]

    }