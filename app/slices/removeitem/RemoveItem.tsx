import {useEffect, useState} from "react";
import {findEventStore, subscribeStream} from "@/app/infrastructure/inmemoryEventstore";
import {addItemCommandHandler} from "@/app/slices/additem/commandHandler";
import {v4} from "uuid";
import { Streams } from "@/app/api/Streams";
import {removeItemCommandHandler} from "@/app/slices/removeitem/commandHandler";
import {CartEvents} from "@/app/api/events/CartEvents";

export type Product = {
    name: string,
    price: number,
    description: string,
    productId: string
}

export default function RemoveItem(props: {aggregateId: string, itemId: string}) {

    return <div className={"content"}>

        <div className={"control"}>
            <button onClick={async () => {

                let result = await findEventStore().readStream<CartEvents>(Streams.Cart)
                let events = result?.events || []
                let resultEvents = await removeItemCommandHandler(events, {
                    type: 'RemoveItem',
                    data: {
                        itemId: props.itemId,
                        aggregateId: props.aggregateId
                    }
                })
                await findEventStore().appendToStream(Streams.Cart, resultEvents, {expectedStreamVersion: result?.currentStreamVersion})
            }

            } className={"button is-info m-2"}><i className="fa-solid fa-trash"></i></button>
        </div>
    </div>
}