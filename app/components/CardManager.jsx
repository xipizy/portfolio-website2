'use client';
import MainWindow from "./Mainwindow";
import {use, useState} from 'react';

function CardManager() {

    const [mainWindowDisabled, setMainWindowDisabled] = useState(false);

    function updateMainWindow() {
        setMainWindowDisabled(prev => !prev);
    }

    return(
        <div >
            <MainWindow onToggleDisable={updateMainWindow} isDisabled={mainWindowDisabled}/>
        </div>
    )
}

export default CardManager