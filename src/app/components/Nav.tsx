

interface StoreProps {
    storeType: string;
}

function Nav({storeType}: StoreProps) {

    return (
        <>
            <div className="navbar bg-base-100 p-10 flex items-center justify-between">
                <a className="uppercase text-6xl">{storeType}</a>
            </div>
        </>
    )
}

export default Nav;
