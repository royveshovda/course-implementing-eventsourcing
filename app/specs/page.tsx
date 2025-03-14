'use client'

import React, {useEffect} from "react";
import {DebugEvents} from "@/app/debug/eventsdebug";
import Navigation from "@/app/components/Navigation";
import AddItemTests from "@/app/slices/additem/AddItemTests";

export default function SpecPage() {

    return (<>
        <Navigation/>
        <section className="section main-container">
        <div className="">
            <div className="columns">
               <AddItemTests/>
            </div>
        </div>
        <DebugEvents/>

    </section></>)
}