import AboutMe from '../buttons/AboutMe'
import Projects from '../buttons/Projects'
import Links from '../buttons/Links'
function Mainwindow({onToggleDisable, onToggleAbout, onToggleProjects, onToggleLinks}) {
    return(
            <div className="mockup-browser bg-base-200 border border-white outline-2 rounded-xl w-175 h-150 mx-auto top-[27vh]">
                <div className="flex items-center px-4 py-2 border-b border-white relative bg-black">
                    <div className="flex space-x-2">
                        <button className="w-3 h-3 rounded-full bg-gray-500"/>
                        <button className="w-3 h-3 rounded-full bg-gray-500"/>
                        <button className="w-3 h-3 rounded-full bg-gray-500"/>
                    </div>
                    <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-lg font-mono">home</h1>
                </div>

                <div className="flex flex-col items-center border-t border-white outline h-150 font-sans">
                    <div>
                        <h1 className="text-7xl pt-40 font-bold">ELOON ING</h1>
                        <h1 className="pl-1 text-lg">Software Engineer</h1>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='flex flex-row pt-12 gap-5'>
                            <div className='flex flex-col items-center'>
                                <AboutMe onToggleDisable={onToggleDisable} onToggleAbout={onToggleAbout}/>
                            </div>
                            <div className='flex flex-col items-center'>
                                <Projects onToggleDisable={onToggleDisable} onToggleProjects={onToggleProjects}/>
                            </div>
                            <div className='flex flex-col items-center'>
                                <Links onToggleDisable={onToggleDisable} onToggleLinks={onToggleLinks}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Mainwindow