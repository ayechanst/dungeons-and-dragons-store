import Item from "../components/Item"

export default function Store() {
    return (
        <>
            <div className="navbar bg-base-100 flex justify-center">
                <a className="btn btn-ghost normal-case text-xl">General Store</a>
            </div>
            <Item />
        </>
    )
}
