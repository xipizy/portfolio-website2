'use client';
import AboutMeWindow from "./AboutMeWindow";
import MainWindow from "./Mainwindow";
import ProjectsWindow from "./ProjectsWindow";
import {use, useState} from 'react';

function CardManager() {

    const [mainWindowDisabled, setMainWindowDisabled] = useState(false);
    const [aboutMeWindowDisabled, setAboutMeWindowDisabled] = useState(true);
    const [projectsWindowDisabled, setProjectsWindowDisabled] = useState(true);

    function updateMainWindow() {
        setMainWindowDisabled(prev => !prev);
    }

    function updateAboutMeWindow() {
        setAboutMeWindowDisabled(prev => !prev);
    }

    function updateProjects() {
        setProjectsWindowDisabled(prev => !prev);
    }

    return(
        <div >
            {mainWindowDisabled ? null : <MainWindow
                                            onToggleDisable={updateMainWindow}
                                            onToggleAbout={updateAboutMeWindow}
                                            onToggleProjects={updateProjects}
                                            />}
            {aboutMeWindowDisabled ? null : <AboutMeWindow onToggleDisable={updateAboutMeWindow} onToggleAbout={updateMainWindow}/>}
            {projectsWindowDisabled ? null : <ProjectsWindow onToggleDisable={updateProjects} onToggleAbout={updateMainWindow}/>}
        </div>
    )
}

export default CardManager