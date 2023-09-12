'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation'

function AddItems() {

    const router = useRouter();
    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [itemPrice, setItemPrice] = useState('');

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const item = {itemName, itemDescription, itemPrice}
        console.log(item);
        const res = await fetch('http://localhost:4000/items', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(item),
        })
        console.log(res);
        if (res.status === 201) {
            router.refresh()
        }
    }

    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Add an item!</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="py-1">
                            <input
                                placeholder="Item name"
                                className="input input-bordered w-full max-w-xs"
                                onChange={e => setItemName(e.target.value)}
                            />
                        </div>
                        <div className="py-1">
                            <input
                                placeholder="Item description"
                                className="input input-bordered w-full max-w-xs"
                                onChange={e => setItemDescription(e.target.value)}
                            />
                        </div>
                        <div className="py-1">
                            <input
                                placeholder="price"
                                className="input input-bordered w-full max-w-xs"
                                onChange={e => setItemPrice(e.target.value)}
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

        </>
    )
}
export default AddItems;
