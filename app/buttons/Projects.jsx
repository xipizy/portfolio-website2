'use client';
import Image from 'next/image';

function Projects({onToggleDisable, onToggleProjects}) {
    return(
        <button className="cursor-pointer transition-transform duration-200 hover:scale-105" onClick={() => {
            onToggleDisable();
            onToggleProjects();
        }}>
            <Image src='/folder_filled.png' draggable='false' alt="folderImage" width={120} height={120}/>
            <span className='text-2xl'>Projects</span>
        </button>
    )
}
export default Projects