import {useEffect, useState} from "react";
import {findEventStore, subscribeStream} from "@/app/infrastructure/inmemoryEventstore";
import {addItemCommandHandler} from "@/app/slices/additem/commandHandler";
import {v4} from "uuid";
import { Streams } from "@/app/api/Streams";
import {CartEvents} from "@/app/api/events/CartEvents";
import {useRouter} from "next/navigation";
import {removeItemCommandHandler} from "@/app/slices/removeitem/commandHandler";
import {clearCartCommandHandler} from "@/app/slices/clearcart/commandHandler";
import {submitCartCommandHandler} from "@/app/slices/submitcart/commandHandler";
import {InventoryUpdatedEvent} from "@/app/api/events/InventoryChanged";
import {cartSubmissionInventoryStateView} from "@/app/slices/submitcart/InventoriesStateView";

export default function SubmitCart(props:{aggregateId: string, productIds: string[]}) {

    return <div>
        <div className={"control"}>
            <button onClick={async () => {

                let result = await findEventStore().readStream<CartEvents>(Streams.Cart)
                let events = result?.events || []

                let inventoryEvents = await findEventStore().readStream<InventoryUpdatedEvent>(Streams.Inventory)
                let inventories = cartSubmissionInventoryStateView([], inventoryEvents?.events || [])

                let resultEvents = submitCartCommandHandler(events, {
                    type: 'SubmitCart',
                    data: {
                        aggregateId: props.aggregateId,
                        inventories: props.productIds.map(productId => {
                            return {
                                productId: productId,
                                quantity: inventories.find(item => item.productId == productId)?.inventory || 0
                            }
                        })
                    }
                })
                await findEventStore().appendToStream(Streams.Cart, resultEvents,
                    {expectedStreamVersion: result?.currentStreamVersion})
            }

            } className={"button is-info m-2"}><i className="fas fa-shopping-cart"></i>
        </button>
    </div>
</div>
}