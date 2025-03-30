import {findEventStore, subscribeStream, unsubscribeStream} from "@/app/infrastructure/inmemoryEventstore";
import {useEffect, useState} from "react";
import {Streams} from "@/app/api/Streams";
import {CartItem, cartItemsStateView} from "@/app/slices/cartitems/CartItemsStateView";
import {CartEvents} from "@/app/api/events/CartEvents";
import RemoveItem from "../removeitem/RemoveItem";

export default function CartItems(props: { aggregateId: string }) {
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    useEffect(() => {
        let subscription = subscribeStream(Streams.Cart, (nextExpectedStreamVersion, events: CartEvents[],) => {
            setCartItems((prevState) => {
                return cartItemsStateView(prevState, events)
            })
        })
        return () => {
            unsubscribeStream(Streams.Cart, subscription)
        }
    }, []);

    return (
        <div className="box">
            <h3 className="title is-4">Shopping Cart</h3>

            {cartItems.length === 0 ? (
                <div className="notification is-light">
                    Your cart is empty
                </div>
            ) : (
                <>
                    <div className="table-container">
                        <table className="table is-fullwidth is-striped">
                            <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                            </tr>
                            </thead>
                            <tbody>
                            {cartItems.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>${item.price.toFixed(2)}</td>
                                    <td><RemoveItem aggregateId={item.aggregateId} itemId={item.itemId}/></td>
                                </tr>
                            ))}
                            </tbody>
                            <tfoot>
                            <tr>
                                <th colSpan={3} className="has-text-right">Total:</th>
                                <th>${cartItems.reduce((acc, data) => acc += data.price, 0)}</th>
                            </tr>
                            </tfoot>
                        </table>
                    </div>

                    <div className="buttons is-right mt-4">
                        <button className="button is-primary">
                            <span className="icon">
                                <i className="fas fa-shopping-cart"></i>
                            </span>
                            <span>Checkout</span>
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}
