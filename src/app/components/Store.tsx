import React from "react"
import ItemList from "../store/ItemList"
import Nav from "./Nav"
import AddItems from "./AddItems"

function Store() {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <AddItems />
                <div className="col-span-1 sm:col-span-3 md:col-span-3 lg:col-span-3">
                    <Nav />
                    <ItemList />
                </div>
            </div>
        </>
    )
}

export default Store;
