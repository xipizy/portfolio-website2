'use client';
import Image from 'next/image';

function Links() {
    return(
        <button className="cursor-pointer">
            <Image src='/link.png' draggable='false' alt="linksImage" width={120} height={120}/>
            <span className='text-2xl'>Links</span>
        </button>
    )
}
export default Links