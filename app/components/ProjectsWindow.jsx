import Return from "../buttons/Return"
import SmallIcon from "../buttons/SmallIcon"
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
                            <div className="flex flex-row text-white px-1 gap-x-2.5 justify-center">
                                <DevelopmentIcon name="JavaFX"/>
                                <DevelopmentIcon name="SceneBuilder"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="flex text-5xl font-bold pt-10 justify-center pb-5 r">PROJECTS</h2>
                        <div className="flex flex-row flex-wrap gap-y-7.5 gap-x-7.5 justify-center">
                            <div className="card bg-base-100 w-75 shadow-sm border-2 rounded-2xl">
                            <figure>
                                <img src="/trialAi.png" alt="Trial AI" />
                            </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Trial AI</h2>
                                    <div className="flex flex-row items-center justify-between">
                                        <div className="badge badge-secondary">August - Present 2025</div>
                                    </div>
                                        <p>A game where the user must talk to participants in a court hearing to determine if the AI defendant was ethical. All participants are powered by LLMs.
                                            Uses API calls for LLMs and Text To Speech and prompt engineering.
                                        </p>
                                        <div className="card-actions justify-end">
                                        <div className="badge badge-outline">Java</div>
                                        <div className="badge badge-outline">SceneBuilder</div>
                                        <div className="badge badge-outline">JavaFX</div>
                                        <div className="badge badge-outline">UOA</div>
                                    </div>
                                </div>
                            </div>
                            <div className="card bg-base-100 w-75 shadow-sm border-2 rounded-2xl">
                            <figure>
                                <img src="/website2.png" alt="Portfolio Website" />
                            </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Portfolio Website 2</h2>
                                    <div className="flex flex-row items-center justify-between">
                                        <div className="badge badge-secondary">July - August 2025</div>
                                        <SmallIcon src="/smallGithub.png" externalLink="https://github.com/xipizy/portfolio-website2"/>
                                    </div>
                                        <p>The website you're looking at right now! Planning to add SFX soon!</p>
                                        <div className="card-actions justify-end">
                                        <div className="badge badge-outline">React</div>
                                        <div className="badge badge-outline">Next.js</div>
                                        <div className="badge badge-outline">Daisy UI</div>
                                        <div className="badge badge-outline">Tailwind CSS</div>
                                        <div className="badge badge-outline">HTML/CSS</div>
                                    </div>
                                </div>
                            </div>
                            <div className="card bg-base-100 w-75 shadow-sm border-2 rounded-2xl">
                                <figure>
                                    <img
                                    src="/wageCalculator.png"
                                    alt="Wage Calculator" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Wage Calculator</h2>
                                    <div className="flex flex-row items-center justify-between">
                                        <div className="badge badge-secondary">July 2025</div>
                                        <SmallIcon src="/smallGithub.png" externalLink="https://github.com/xipizy/WageCalculator"/>
                                    </div>
                                    <p>Designed an application to calculate wages of employees for Ings Trading LTD. Improved time to complete from 20 minutes (manual) to 10 seconds</p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline">Java</div>
                                    </div>
                                </div>
                            </div>
                            <div className="card bg-base-100 w-75 shadow-sm border-2 rounded-2xl">
                                <figure>
                                    <img
                                    src="/website.png"
                                    alt="Website" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Portfolio Website</h2>
                                    <div className="flex flex-row items-center justify-between">
                                        <div className="badge badge-secondary">June - July 2025</div>
                                        <SmallIcon src="/smallGithub.png" externalLink="https://github.com/xipizy/portfolio-website"/>
                                    </div>
                                    <p>Previous portfolio website.</p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline">HTML/CSS</div>
                                        <div className="badge badge-outline">JavaScript</div>
                                    </div>
                                </div>
                            </div>
                            <div className="card bg-base-100 w-75 shadow-sm border-2 rounded-2xl">
                                <figure>
                                    <img
                                    src="/school.png"
                                    alt="school" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Risk Traversal</h2>
                                    <div className="badge badge-secondary">May 2025</div>
                                    <p>Implemented a map similar to the board game Risk. The program is designed to find the shortest path between 2 countries (BFS). </p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline">UOA</div>
                                        <div className="badge badge-outline">Java</div>
                                    </div>
                                </div>
                            </div>
                            <div className="card bg-base-100 w-75 shadow-sm border-2 rounded-2xl">
                                <figure>
                                    <img
                                    src="/school.png"
                                    alt="school" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Color Mind</h2>
                                    <div className="badge badge-secondary">May 2025</div>
                                    <p>Created a game to play against an AI where you had to guess it's chosen color and it would try to guess yours. Implemented Design patterns such as Factory and Strategy</p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline">Java</div>
                                        <div className="badge badge-outline">UOA</div>
                                    </div>
                                </div>
                            </div>
                            <div className="card bg-base-100 w-75 shadow-sm border-2 rounded-2xl">
                                <figure>
                                    <img
                                    src="/school.png"
                                    alt="school" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Risk Traversal</h2>
                                    <div className="badge badge-secondary">May 2025</div>
                                    <p>Implemented a map similar to the board game Risk. The program is designed to find the shortest path between 2 countries (BFS). </p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline">Java</div>
                                        <div className="badge badge-outline">UOA</div>
                                    </div>
                                </div>
                            </div>
                            <div className="card bg-base-100 w-75 shadow-sm border-2 rounded-2xl">
                                <figure>
                                    <img
                                    src="/weather.png"
                                    alt="weather" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Weather App</h2>
                                    <div className="flex flex-row items-center justify-between">
                                        <div className="badge badge-secondary">April 2025</div>
                                        <SmallIcon src="/smallGithub.png" externalLink="https://github.com/xipizy/weather-app"/>
                                    </div>
                                    <p>Developed an interactive Weather APP. Leveraged the OpenWeatherMap API to access weather data from all over the world, allowing for accurate and real-time data</p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline">HTML/CSS</div>
                                        <div className="badge badge-outline">JavaScript</div>
                                    </div>
                                </div>
                            </div>
                            <div className="card bg-base-100 w-75 shadow-sm border-2 rounded-2xl">
                                <figure>
                                    <img
                                    src="/school.png"
                                    alt="school" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Operator Management System</h2>
                                    <div className="badge badge-secondary">March - April 2025</div>
                                    <p>Implemented methods where users can register operators, activities, collect and display reviews along with the registered operator.
                                        Created a centralized system for managing multiple Aotearoa New Zealand activity operators, using Java</p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline">Java</div>
                                        <div className="badge badge-outline">UOA</div>
                                    </div>
                                </div>
                            </div>
                            <div className="card bg-base-100 w-75 shadow-sm border-2 rounded-2xl">
                                <figure>
                                    <img
                                    src="/school.png"
                                    alt="school" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Boxed In</h2>
                                    <div className="badge badge-secondary">October 2024</div>
                                    <p>Created a similar to the classic game Sokoban. The player controls a person in a 2-dimensional space to move boxes to designated areas</p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline">C</div>
                                        <div className="badge badge-outline">UOA</div>
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