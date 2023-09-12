import Item from "../components/Item"
import React from "react"
import items from "../app/items"

interface StoreProps {
    items: Array<{ name: string, description: string, price: string }>
}


const Store: React.FC<StoreProps> = ({ items }) => {
    return (
        <>
            <div className="navbar bg-base-100 flex justify-center">
                <a className="btn btn-ghost normal-case text-xl">General Store</a>
            </div>

            <div>
                {items.map((item, index) => (
                    <Item key={index} item={item} />
                ))}
                console.log(items);
            </div>
        </>
    )
}

export default Store;
