import React, { useEffect, useState } from 'react'
import "../styles/General.css"
import "../styles/Home.css"
import "../styles/Tracker.css"

const Tracker: React.FC = () => {
    return (
        <div>
            <div className="title-box">
                <p className="title-name">
                    Straight Pool - Score Tracker
                </p>
            </div>

            <div className="remaining-balls-container">
                <p className="remaining-balls-style remaining-balls">
                    15
                </p>
                <p className="remaining-balls-style">
                    remaining balls
                </p>
                <p className="rack-number">
                    (Rack 1)
                </p>
            </div>
            
            <div className="player-boxes">
                <div className="player1-box">
                    <p id = "player1" className="player1-name"></p>
                        <div className="score-box">
                            <button className="decrement-button">-</button>
                            <p className="player1-score">0</p>
                            <div className="increment-box">
                                <button className="increment-button">+</button>
                                <button className="increment-button">+2</button>
                                <button className="increment-button">CR</button>
                            </div>
                        </div>
        
                    <div className="high-style player1-high-run">
                        High Run: 0
                    </div>
                    <div className="high-style player1-curr-high-run">
                        Current High Run: 0
                    </div>
                </div>
        
                <div>
                    <div>
                        <img src="/images/leftArrow.png" className="image-style" id="player-turn"></img>
                        <div className="player-turn-text-style" id="player-turn-text">
                        </div>
                        <div className="player-swap-text-style">
                            (Press spacebar to swap turn)
                        </div>
                    </div>
                </div>
        
                <div className="player2-box">
                    <p id = "player2" className="player2-name"></p>
                    <div className="score-box">
                        <button className="decrement-button">-</button>
                        <p className="player2-score">0</p>
                        <div className="increment-box">
                            <button className="increment-button">+</button>
                            <button className="increment-button">+2</button>
                            <button className="increment-button">CR</button>
                        </div>     
                    </div>

                    <div className="high-style player2-high-run">
                        High Run: 0
                    </div>
                    <div className="high-style player2-curr-high-run">
                        Current High Run: 0
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Tracker