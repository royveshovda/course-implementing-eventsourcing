import {findEventStore, subscribeStream, unsubscribeStream} from "@/app/infrastructure/inmemoryEventstore";
import {useEffect, useState} from "react";
import {Streams} from "@/app/api/Streams";
import {CartItem, cartItemsStateView} from "@/app/slices/cartitems/CartItemsStateView";
import {CartEvents} from "@/app/api/events/CartEvents";
import RemoveItem from "@/app/slices/removeitem/RemoveItem";
import ClearCart from "@/app/slices/clearcart/ClearCart";
import {CART_SESSION} from "@/app/cart/CartSession";
import {InventoryUpdatedEvent} from "@/app/api/events/InventoryChanged";
import {inventoriesStateView} from "@/app/slices/inventory/InventoriesStateView";

export default function Inventories(props: { productId: string }) {
    const [inventory, setInventory] = useState<number>(0)


    useEffect(() => {
       // TODO subscribe to the Inventory Stream
        // TODO update the inventory for the given productId in "props.productId"
    }, []);

    return (
        <div className="tag is-light is-info">
            Available: {inventory}
        </div>
    )
}