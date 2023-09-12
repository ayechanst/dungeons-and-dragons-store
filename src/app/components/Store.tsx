import React from "react"
import ItemList from "../store/ItemList"
import Nav from "./Nav"
import AddItems from "./AddItems"

function Store() {
    return (
        <>
            <Nav />
            <ItemList />
            <AddItems />
        </>
    )
}

export default Store;
