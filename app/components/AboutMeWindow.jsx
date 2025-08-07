import Return from "../buttons/Return"

function AboutMeWindow({onToggleDisable, onToggleAbout}) {
    return(
            <div className="mockup-browser bg-base-200 border border-white outline-2 rounded-xl w-175 h-150 mx-auto top-90">
                <div className="flex items-center px-4 py-2 border-b border-white relative bg-black">
                    <div className="flex space-x-2">
                        <Return onToggleDisable={onToggleDisable} onToggleUniversal={onToggleAbout}/>
                        <button className="w-3 h-3 rounded-full bg-gray-500"/>
                        <button className="w-3 h-3 rounded-full bg-gray-500"/>
                    </div>
                    <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-lg font-mono">about</h1>
                </div>

                <div className="flex flex-col items-center border-t border-white outline h-150 font-sans">
                    <div>
                        <h1 className="text-7xl pt-10 font-bold">ABOUT ME</h1>
                    </div>
                    <div className="flex pl-7.5 pr-7.5 pt-5 flex-col gap-y-5">
                        <p className="text-center">Hi! I'm Eloon, a full-time Software Engineering student at the University of Auckland. In my spare time, 
                            I love working on small personal projects — like this website! I'm into sports, a bit introverted, and I enjoy playing video games. 
                            Scroll down to check out some of my other interests!
                        </p>
                        <h2 className="text-3xl font-bold">EDUCATION</h2>
                        <div className="flex text-white px-2 gap-x-4 items-start">
                            <div className="w-1 h-full bg-white rounded-sm"></div>
                            <div>
                                <h3 className="text-lg font-semibold">BE(Hons) - Software Engineering</h3>
                                <p className="text-sm text-gray-400 uppercase tracking-wide">(AUCKLAND 2024-2027)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default AboutMeWindow