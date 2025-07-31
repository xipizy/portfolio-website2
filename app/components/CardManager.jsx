'use client';
import AboutMeWindow from "./AboutMeWindow";
import MainWindow from "./Mainwindow";
import {use, useState} from 'react';

function CardManager() {

    const [mainWindowDisabled, setMainWindowDisabled] = useState(false);
    const [aboutMeWindowDisabled, setAboutMeWindowDisabled] = useState(true);

    function updateMainWindow() {
        setMainWindowDisabled(prev => !prev);
    }

    function updateAboutMeWindow() {
        setAboutMeWindowDisabled(prev => !prev);
    }

    return(
        <div >
            {mainWindowDisabled ? null : <MainWindow onToggleDisable={updateMainWindow} onToggleAbout={updateAboutMeWindow}/>}
            {aboutMeWindowDisabled ? null : <AboutMeWindow onToggleDisable={updateAboutMeWindow} onToggleAbout={updateMainWindow}/>}
        </div>
    )
}

export default CardManager