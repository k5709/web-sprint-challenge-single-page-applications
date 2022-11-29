import React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
    return (
        <div>
            <Link to='/pizza'>
                <button id='order-pizza'>
                    Place your Order Here!
                </button>
            </Link>

        </div>
    )
}