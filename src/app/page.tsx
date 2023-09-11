export default function Home() {
  return (
    <>
      <div className="hero min-h-screen" style={{backgroundImage: 'url(/hero.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">D&D Store Generator</h1>
            <p className="py-6">Choose what kind of store you like and awaaaayyyy we go!</p>
            <div className="space-x-4">
              <button className="btn btn-primary">General Store</button>
              <button className="btn btn-primary">Armory</button>
              <button className="btn btn-primary">Inn/Tavern</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
