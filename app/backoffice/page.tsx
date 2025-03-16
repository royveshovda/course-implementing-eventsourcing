'use client'

import React from "react"
import {DebugEvents} from "@/app/debug/eventsdebug"
import Navigation from "@/app/components/Navigation"
import CartItems from "@/app/slices/cartitems/CartItems"
import ProductManagementForm from "@/app/backoffice/ProductManagementForm"

export default function PrototypePage() {
    return (<>
        <Navigation/>
        <section className="section main-container">
            <div className="columns">
                <div className="column is-half">
                    <ProductManagementForm />
                </div>

            </div>
        </section>
    </>)
}