'use client';

function Return({onToggleDisable, onToggleUniversal}) {
    return(
        <button className="w-3 h-3 rounded-full bg-red-500 cursor-pointer" onClick={() => {
            onToggleDisable();
            onToggleUniversal();
        }}/>
    )
}
export default Return