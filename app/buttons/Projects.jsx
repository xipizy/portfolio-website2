'use client';
import Image from 'next/image';

function Projects() {
    return(
        <button className="cursor-pointer">
            <Image src='/folder_filled.png' draggable='false' alt="folderImage" width={120} height={120}/>
            <span className='text-2xl'>Projects</span>
        </button>
    )
}
export default Projects