import Return from "../buttons/Return"

function ProjectsWindow({onToggleDisable, onToggleAbout}) {
    return(
            <div className="mockup-browser bg-base-200 border border-white outline-2 rounded-xl w-175 h-150 mx-auto top-90">
                <div className="flex items-center px-4 py-2 border-b border-white relative bg-black">
                    <div className="flex space-x-2">
                        <Return onToggleDisable={onToggleDisable} onToggleUniversal={onToggleAbout}/>
                        <button className="w-3 h-3 rounded-full bg-gray-500"/>
                        <button className="w-3 h-3 rounded-full bg-gray-500"/>
                    </div>
                    <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-lg font-mono">projects</h1>
                </div>

                <div className="flex flex-col items-center border-t border-white outline h-150 font-sans">
                    <div>
                        <h1 className="text-7xl pt-40 font-bold">PROJECTS</h1>
                    </div>
                </div>
            </div>
    )
}

export default ProjectsWindow