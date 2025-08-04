'use client';
import Image from 'next/image';

function Links({onToggleDisable, onToggleLinks}) {
    return(
        <button className="cursor-pointer transition-transform duration-200 hover:scale-105" onClick={() => {
            onToggleDisable();
            onToggleLinks();
        }}>
            <Image src='/link.png' draggable='false' alt="linksImage" width={120} height={120}/>
            <span className='text-2xl'>Links</span>
        </button>
    )
}
export default Links