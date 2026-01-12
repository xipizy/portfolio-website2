'use client';
import Background from "../components/Background";
import AboutMeWindow from "./AboutMeWindow";
import MainWindow from "./Mainwindow";
import ProjectsWindow from "./ProjectsWindow";
import LinksWindow from "./LinksWindow";
import {use, useState} from 'react';

function CardManager() {

    const [mainWindowDisabled, setMainWindowDisabled] = useState(false);
    const [aboutMeWindowDisabled, setAboutMeWindowDisabled] = useState(true);
    const [projectsWindowDisabled, setProjectsWindowDisabled] = useState(true);
    const [linksWindowDisabled, setLinksWindowDisabled] = useState(true);

    function updateMainWindow() {
        setMainWindowDisabled(prev => !prev);
    }

    function updateAboutMeWindow() {
        setAboutMeWindowDisabled(prev => !prev);
    }

    function updateProjects() {
        setProjectsWindowDisabled(prev => !prev);
    }

    function updateLinks() {
        setLinksWindowDisabled(prev => !prev);
    }


    return(
        <div >
            <div className="absolute inset-0 z-1">
                <Background/>
            </div>
            {mainWindowDisabled ? null : <MainWindow
                                            onToggleDisable={updateMainWindow}
                                            onToggleAbout={updateAboutMeWindow}
                                            onToggleProjects={updateProjects}
                                            onToggleLinks={updateLinks}
                                            />}
            {aboutMeWindowDisabled ? null : <AboutMeWindow onToggleDisable={updateAboutMeWindow} onToggleAbout={updateMainWindow}/>}
            {projectsWindowDisabled ? null : <ProjectsWindow onToggleDisable={updateProjects} onToggleAbout={updateMainWindow}/>}
            {linksWindowDisabled ? null : <LinksWindow onToggleDisable={updateLinks} onToggleAbout={updateMainWindow}/>}
        </div>
    )
}

export default CardManager