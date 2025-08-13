import Image from 'next/image';

function SmallIcon({src, externalLink}) {

    function handleClick() {
        window.window.open(externalLink, '_blank');
    }
    return(
        <div className="rounded-sm flex flex-col items-center p-2 drop-shadow-2xl shadow-black transition-transform duration-200 hover:scale-105">
            <button className='cursor-pointer' onClick={handleClick}>
                <Image src={src} draggable='false' alt="linksImage" width={25} height={25} />
            </button>
        </div>
    );
}

export default SmallIcon