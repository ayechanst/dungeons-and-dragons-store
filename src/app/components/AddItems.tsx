'use client'
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase"

function AddItems() {

    const [addItem, setAddItem] = useState(false);
    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [itemPrice, setItemPrice] = useState('');

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log("its doing something")
        await addDoc(collection(db, 'items'), {
            name: itemName,
            description: itemDescription,
            price: itemPrice
        })
    }

    return (
        <>
            <button
        className="btn"
        onClick={() => setAddItem(!addItem)}>
        Add Item
        </button>

            {addItem && (

            <div className="card bg-neutral text-neutral-content m-10 w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Add an item!</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="py-1">
                            <input
                                placeholder="Item name"
                                className="input input-bordered w-full max-w-xs"
                                onChange={e => setItemName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="py-1">
                            <input
                                placeholder="Item description"
                                className="input input-bordered w-full max-w-xs"
                                onChange={e => setItemDescription(e.target.value)}
                                required
                            />
                        </div>
                        <div className="py-1">
                            <input
                                placeholder="price"
                                className="input input-bordered w-full max-w-xs"
                                onChange={e => setItemPrice(e.target.value)}
                                required
                            />
                        </div>
                        <div className="py-5">
                            <button type="submit" className="btn">
                                Add
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            )}

        </>
    )
}
export default AddItems;
