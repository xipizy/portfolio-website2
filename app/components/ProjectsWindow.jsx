import Return from "../buttons/Return"
import DevelopmentIcon from "./DevelopmentIcon"

function ProjectsWindow({onToggleDisable, onToggleAbout}) {
    return(
            <div className="mockup-browser bg-base-200 border border-white outline-2 rounded-xl w-175 h-150 mx-auto top-90 overflow-auto scrollbar-hide ">
                <div className="flex items-center px-4 py-2 border-b-3 border-white sticky top-0 z-10 bg-black">
                    <div className="flex space-x-2">
                        <Return onToggleDisable={onToggleDisable} onToggleUniversal={onToggleAbout}/>
                        <button className="w-3 h-3 rounded-full bg-gray-500"/>
                        <button className="w-3 h-3 rounded-full bg-gray-500"/>
                    </div>
                    <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-lg font-mono">projects</h1>
                </div>

                <div className="flex flex-col items-center border-th-150 font-sans">
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
                                <DevelopmentIcon name="Tailwind CSS"/>
                                <DevelopmentIcon name="Git"/>
                                <DevelopmentIcon name="Github"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="flex text-5xl font-bold pt-10 justify-center pb-5">PROJECTS</h2>
                        <div className="flex flex-row gap-x-7.5">
                            <div className="card bg-base-100 w-75 shadow-sm">
                            <figure>
                                <img src="/website2.png" alt="Portfolio Website" />
                            </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Portfolio Website</h2>
                                    <div className="badge badge-secondary">July - August 2025</div>
                                        <p>The website you're looking at right now!</p>
                                        <div className="card-actions justify-end">
                                        <div className="badge badge-outline">React</div>
                                        <div className="badge badge-outline">Next.js</div>
                                        <div className="badge badge-outline">Daisy UI</div>
                                        <div className="badge badge-outline">Tailwind CSS</div>
                                        <div className="badge badge-outline">HTML/CSS</div>
                                    </div>
                                </div>
                            </div>
                            <div className="card bg-base-100 w-75 shadow-sm">
                                <figure>
                                    <img
                                    src="/wageCalculator.png"
                                    alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Wage Calculator</h2>
                                    <div className="badge badge-secondary">July 2025</div>
                                    <p>Designed an application to calculate wages of employees for Ings Trading LTD. Improved time to complete from 20 minutes (manual) to 10 seconds</p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline">Java</div>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
    )
}

export default ProjectsWindow