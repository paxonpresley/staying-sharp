import React from 'react';

function Navbar() {
    return (
        <div className="Navbar">
            <h1 className="Title">Extangagram</h1>
            <input className="Search-Bar" 
            placeholder="Search"></input>
                <div className="Btn-Container">
                <button className="Home">H</button>
                <button className="Create">C</button>
                <button className="Explore">E</button>
            </div>
        </div>
    );
}

export default Navbar;