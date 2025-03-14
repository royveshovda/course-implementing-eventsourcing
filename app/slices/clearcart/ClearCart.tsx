import {useEffect, useState} from "react";
import {findEventStore, subscribeStream} from "@/app/infrastructure/inmemoryEventstore";
import {addItemCommandHandler} from "@/app/slices/additem/commandHandler";
import {v4} from "uuid";
import { Streams } from "@/app/api/Streams";
import {clearCartCommandHandler} from "@/app/slices/clearcart/commandHandler";
import {CartEvents} from "@/app/api/events/CartEvents";


export default function ClearCart(props: {aggregateId: string}) {

    return <div className={"control"}>
            <button onClick={async () => {

                    let result = await findEventStore().readStream<CartEvents>(Streams.Cart)
                    let events = result?.events || []
                    let resultEvents = await clearCartCommandHandler(events, {
                        type: 'ClearCart',
                        data: {
                            aggregateId: props.aggregateId
                        }
                    })
                    await findEventStore().appendToStream(Streams.Cart, resultEvents, {expectedStreamVersion: result?.currentStreamVersion})
                }

            } className={"button is-info"}><i className="icon fa-solid fa-trash"></i>
            </button>
    </div>
}