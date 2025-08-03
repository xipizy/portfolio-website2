'use client';
import Image from 'next/image';

function Projects({onToggleDisable, onToggleProjects}) {
    return(
        <button className="cursor-pointer" onClick={() => {
            onToggleDisable();
            onToggleProjects();
        }}>
            <Image src='/folder_filled.png' draggable='false' alt="folderImage" width={120} height={120}/>
            <span className='text-2xl'>Projects</span>
        </button>
    )
}
export default Projects