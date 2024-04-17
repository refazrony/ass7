"use client"


import { usePathname } from 'next/navigation'

export default function NotFound() {
    const param = usePathname();
    return (
        <div className='bg-red-200 h-4/2 border border-gray-950 rounded-lg'>
            <center>
                <h2>Not Found</h2>
                <p>Could not find requested resource {param}</p>

            </center>
        </div>
    )
}