'use client'

import React from "react";
import {DebugEvents} from "@/app/debug/eventsdebug";
import Navigation from "@/app/components/Navigation";
import AddItemTests from "@/app/slices/additem/AddItemTests";
import CartItemsTests from "@/app/slices/cartitems/CartItemsTests";
import RemoveItemTests from "@/app/slices/removeitem/RemoveItemTests";
import InventoriesTest from "@/app/slices/inventory/InventoriesTest";

export default function SpecPage() {

    return (<>
        <Navigation/>
        <section className="section main-container">
        <div className="">
            <div className="columns">
               <AddItemTests/>
               <CartItemsTests/>
               <RemoveItemTests/>
                <InventoriesTest/>
            </div>
        </div>
        <DebugEvents/>

    </section></>)
}