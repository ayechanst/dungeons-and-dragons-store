'use client'
import React from "react"
import ItemList from "../store/ItemList"
import Nav from "./Nav"
import AddItems from "./AddItems"

interface StoreProps {
    storeType: string;
}

function Store({storeType}: StoreProps) {

    return (
        <>
            <Nav storeType={storeType}/>
            <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="md:col-span-1">
                    <AddItems storeType={storeType}/>
                </div>
                <div className="md:col-span-3">
                    <ItemList storeType={storeType}/>
                    // send params here
                </div>
            </div>
        </>
    )
}

export default Store;
