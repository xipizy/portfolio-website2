import Return from "../buttons/Return"
import IconCard from "../icon_components/IconCard"

function LinksWindow({onToggleDisable, onToggleAbout}) {
    return(
            <div className="mockup-browser bg-base-200 border border-white outline-2 rounded-xl w-175 h-150 mx-auto top-[27vh]">
                <div className="flex items-center px-4 py-2 border-b border-white relative bg-black">
                    <div className="flex space-x-2">
                        <Return onToggleDisable={onToggleDisable} onToggleUniversal={onToggleAbout}/>
                        <button className="w-3 h-3 rounded-full bg-gray-500"/>
                        <button className="w-3 h-3 rounded-full bg-gray-500"/>
                    </div>
                    <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-lg font-mono">links</h1>
                </div>

                <div className="flex flex-col items-center border-t border-white outline h-150 font-sans">
                    <div>
                        <h1 className="text-7xl pt-10 font-bold">LINKS</h1>
                    </div>
                    <div className="flex flex-row pt-12 gap-30">
                        <IconCard name="Git Hub" src="/github_dark.png" externalLink="https://github.com/xipizy"/>
                        <IconCard name="LinkedIn" src="/linkedin_dark.png" externalLink="https://www.linkedin.com/in/eloon-ing-3b5962354"/>
                    </div>
                </div>
            </div>
    )
}

export default LinksWindow