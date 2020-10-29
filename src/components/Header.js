import React from 'react'
import { ReactSVG } from 'react-svg'


export default function Header() {
    return (
        <div className='wrapper'>
            <header className="header">
                <h1>ho</h1>
                <ReactSVG className="header__logo" src={"logo.svg"}/>
            </header>
        </div>
    )
}