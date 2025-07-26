function Mainwindow() {
    return(
        <div className="mockup-browser bg-base-200 border border-white outline-2 rounded-xl w-200 h-150 mx-auto top-90">
            <div className="flex items-center px-4 py-2 border-b border-white relative">
                <div className="flex space-x-2">
                    <button className="w-3 h-3 rounded-full bg-red-500"/>
                    <button className="w-3 h-3 rounded-full bg-yellow-400"/>
                    <button className="w-3 h-3 rounded-full bg-green-500"/>
                </div>
                <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-sm">Home</h1>
            </div>

            <div className="flex flex-col items-center border-t border-white outline h-150">
                <h1>Name</h1>
                <h1>hi</h1>
            </div>
        </div>
    )
}

export default Mainwindow