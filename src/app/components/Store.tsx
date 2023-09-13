import React from "react"
import ItemList from "../store/ItemList"
import Nav from "./Nav"
import AddItems from "./AddItems"

function Store() {
    return (
        <>
            <Nav />
            <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="md:col-span-1">
                    <AddItems />
                </div>
                <div className="md:col-span-3">
                    <ItemList />
                </div>
            </div>
        </>
    )
}

export default Store;
