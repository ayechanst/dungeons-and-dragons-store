export default function Item() {
    return (
        <>
            <div className="card w-96 bg-primary text-primary-content">
                <div className="card-body">
                    <h2 className="card-title">{item.name}</h2>
                    <p>{item.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn">Buy</button>
                    </div>
                </div>
            </div>
        </>
    )
}
