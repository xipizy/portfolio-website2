import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)

import AboutMe from '../buttons/AboutMe'
import Projects from '../buttons/Projects'
import Links from '../buttons/Links'
function Mainwindow() {
    return(
        <div className="mockup-browser bg-base-200 border border-white outline-2 rounded-xl w-175 h-150 mx-auto top-90">
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
                            <AboutMe/>
                        </div>
                        <div className='flex flex-col items-center'>
                            <Projects/>
                        </div>
                        <div className='flex flex-col items-center'>
                            <Links/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mainwindow