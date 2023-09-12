import Item from "../components/Item"
import React from "react"
import items from "../items"

export default function Store({ items }) {
    return (
        <>
            <div className="navbar bg-base-100 flex justify-center">
                <a className="btn btn-ghost normal-case text-xl">General Store</a>
            </div>
            {items.map((item, index) => (
                <Item key={index} item={item} />
            ))}
        </>
    )
}
