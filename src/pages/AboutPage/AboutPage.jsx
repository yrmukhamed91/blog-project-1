import React, { useState } from 'react';

const AboutPage = () => {
    const [clicks, setClicks] = useState({
        left : 0,
        right : 0
    })
    const [allClicks, setAllClicks] = useState([]) // если allClicks пустой

    const handleLeftClick = () => {
        const newClicks = {
            ...clicks,
            left : clicks.left + 1
        }
        setClicks(newClicks)
        setAllClicks(allClicks.concat('L')) // ['L']
    }

    const handleRightClick = () => {
        const newClicks = {
            ...clicks,
            right : clicks.right + 1
        }
        setClicks(newClicks) 
        setAllClicks(allClicks.concat('R'))
    }

    return (
        <div>
            { allClicks.length !== 0 ? (
            <div>
                <h1> Left: {clicks.left} </h1>
                <h1> Right: {clicks.right} </h1>
                <h1> All Clicks: {allClicks.join(' ')}  </h1>
            </div>
            ) : (
                <h1>Пока не нажали ни по одной из кнопок</h1>
            ) }
            <button onClick={handleLeftClick}>Left</button>
            <button onClick={handleRightClick}>Right</button>
        </div>
    );
};

export default AboutPage;