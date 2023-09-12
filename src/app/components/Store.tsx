import React from "react"
import ItemList from "../store/ItemList"

function Store() {
    return (
        <>
            <div className="navbar bg-base-100 flex justify-center">
                <a className="btn btn-ghost normal-case text-xl">General Store</a>
            </div>
            <ItemList />
        </>
    )
}

export default Store;
