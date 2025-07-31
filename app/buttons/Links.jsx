'use client';
import Image from 'next/image';

function Links({onToggleDisable}) {
    return(
        <button className="cursor-pointer" onClick={onToggleDisable}>
            <Image src='/link.png' draggable='false' alt="linksImage" width={120} height={120}/>
            <span className='text-2xl'>Links</span>
        </button>
    )
}
export default Links