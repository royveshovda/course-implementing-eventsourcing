'use client'

import React, {useEffect} from "react";
import {DebugEvents} from "@/app/debug/eventsdebug";
import Navigation from "@/app/components/Navigation";
import AddItemTests from "@/app/slices/additem/AddItemTests";
import CartItems from "@/app/slices/cartitems/CartItems";
import CartItemsTests from "@/app/slices/cartitems/CartItemsTests";

export default function SpecPage() {

    return (<>
        <Navigation/>
        <section className="section main-container">
        <div className="">
            <div className="columns">
               <AddItemTests/>
               <CartItemsTests/>
            </div>
        </div>
        <DebugEvents/>

    </section></>)
}