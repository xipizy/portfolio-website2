'use client';
import Image from 'next/image';

function AboutMe({onToggleDisable, onToggleAbout}) {
    return(
        <button className="cursor-pointer" onClick={() => {
            onToggleAbout();
            onToggleDisable();
        }}>
            <Image src='/account_circle.png' draggable='false' alt='avatarIamge' width={120} height={120}/>
            <span className='text-2xl'>About</span>
        </button>
    )
}
export default AboutMe