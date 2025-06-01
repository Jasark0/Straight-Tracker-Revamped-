import React, { useEffect, useState } from 'react'
import "../styles/General.css"
import "../styles/Home.css"
const Home: React.FC = () => {
    const [name1, setName1] = useState('');
    const [name2, setName2] = useState('');

    const changeName1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName1(e.target.value);
    }

    const changeName2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName2(e.target.value);
    }

    const enter_nextPage = () => {

    }
    
    return (
        <div>
            <div className="title-box">
                <p className="title-name">
                    Straight Pool - Score Tracker
                </p>
            </div>

            <div className="names-selection-message">
                <p className="names-message">
                    Players, Type Your Names.
                </p>
            </div>

            <div className="input-names-box">
                <input placeholder="Player 1 Name" className="input-names-box1" onChange={changeName1}> 
                </input>
                <input placeholder="Player 2 Name" className="input-names-box2" onChange={changeName2} onKeyDown={enter_nextPage}>
                </input>

                <p className="input-names">Player 1: <span className="changed-name1"></span></p>
                <p className="input-names">Player 2: <span className="changed-name2"></span></p>
            </div>
        </div>
    )
}

export default Home