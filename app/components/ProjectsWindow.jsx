import Return from "../buttons/Return"
import DevelopmentIcon from "./DevelopmentIcon"

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
                        <div className="flex pl-7.5 pr-7.5 pt-5 flex-col gap-y-3">
                            <h2 className="text-5xl font-bold">DEVELOPMENT TOOLS</h2>
                            <div className="flex flex-row text-white px-1 gap-x-2.5 justify-center">
                                <DevelopmentIcon name="C"/>
                                <DevelopmentIcon name="HTML/CSS"/>
                                <DevelopmentIcon name="Java"/>
                                <DevelopmentIcon name="JavaScript"/>
                                <DevelopmentIcon name="Matlab"/>
                            </div>
                            <div className="flex flex-row text-white px-1 gap-x-2.5 justify-center">
                                <DevelopmentIcon name="React"/>
                                <DevelopmentIcon name="Next.js"/>
                                <DevelopmentIcon name="Tailwind Css"/>
                                <DevelopmentIcon name="Git"/>
                                <DevelopmentIcon name="Github"/>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
    )
}

export default ProjectsWindow