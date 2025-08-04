import Image from 'next/image';

function IconCard({name, src, externalLink}) {

    function handleClick() {
        window.window.open(externalLink, '_blank');
    }
    return(
        <div className="rounded-sm flex flex-col items-center p-2 drop-shadow-2xl shadow-black transition-transform duration-200 hover:scale-105">
            <button className='cursor-pointer' onClick={handleClick}>
                <Image src={src} draggable='false' alt="linksImage" width={75} height={75} />
                <h2 className="text-xl pt-2">{name}</h2>
            </button>
        </div>
    );
}

export default IconCard