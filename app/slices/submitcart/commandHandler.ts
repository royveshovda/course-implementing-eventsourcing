import {CartEvents} from "@/app/api/events/CartEvents";
import {AddItemCommand} from "@/app/api/commands/AddItemCommand";
import {ItemAddedEvent} from "@/app/api/events/ItemAddedEvent";
import {findEventStore} from "@/app/infrastructure/inmemoryEventstore";
import {RemoveItemCommand} from "@/app/api/commands/RemoveItemCommand";
import {ClearCartCommand} from "@/app/api/commands/ClearCartCommand";
import {SubmitCartCommand} from "@/app/api/commands/SubmitCartCommand";

export const submitCartCommandHandler =
    (events: CartEvents[], command: SubmitCartCommand): CartEvents[] => {

    // TODO build the list of product Ids in Cart
        let productIdsInCart = []

        productIdsInCart.forEach(productId => {
            // TODO make sure an exception is thrown if the product has no quantity
        })

        // TODO return cart submitted
        return []

    }