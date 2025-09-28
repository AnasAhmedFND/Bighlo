import Link from 'next/link'
import React from 'react'

const Nevbar = () => {
  return (
    <section>
        <nav >
            <ul className='border flex justify-between py-2 px-5 text-white  '>
                <li><Link href={'/'}>Home</Link> </li>
                <li><Link href={'/about'} > Company</Link> </li>
                <li>Services</li>
                <li>Works</li>
                <li>Blog</li>
            </ul>
        </nav>
    </section>
  )
}

export default Nevbar
