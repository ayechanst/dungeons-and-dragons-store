// 'use client'
/* import { useRouter } from 'next/navigation'; */
import Link from "next/link"

export default function Hero() {
    /* const router = useRouter();

* function handleClick() {
*     router.push("./store")
* }
 */

    return (
        <>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(/hero.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">D&D Store Generator</h1>
                        <p className="py-6">Choose what kind of store you like and awaaaayyyy we go!</p>
                        <div className="space-x-4">
                            <Link href="/store"
                                className="btn btn-primary">
                                General Store
                            </Link>
                            <button className="btn btn-primary">Armory</button>
                            <button className="btn btn-primary">Inn/Tavern</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
