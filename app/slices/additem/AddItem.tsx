import {useEffect, useState} from "react";
import {findEventStore, subscribeStream} from "@/app/infrastructure/inmemoryEventstore";
import {addItemCommandHandler} from "@/app/slices/additem/commandHandler";
import {v4} from "uuid";
import { Streams } from "@/app/api/Streams";
import {CartEvents} from "@/app/api/events/CartEvents";
import AddItemTests from "@/app/slices/additem/AddItemTests";

export type Product = {
    name: string,
    price: number,
    description: string,
    productId: string
}

export default function AddItem(props: {aggregateId: string, selectedProduct: Product}) {

    return <div>
        <div className={"control"}>
            <button onClick={async () => {

                    let result = await findEventStore().readStream<CartEvents>(Streams.Cart)
                    let events = result?.events || []
                    let resultEvents = await addItemCommandHandler(events, {
                        type: 'AddItem', data: {
                           aggregateId: props.aggregateId,
                           description: props.selectedProduct.description,
                           itemId: v4(),
                           name: props.selectedProduct.name,
                           price: props.selectedProduct.price,
                           productId: props.selectedProduct.productId
                        }
                    })
                    await findEventStore().appendToStream(Streams.Cart, resultEvents,
                        {expectedStreamVersion: result?.currentStreamVersion})
                }

            } className={"button is-info m-2"}>Add Item</button>
        </div>
    </div>
}
