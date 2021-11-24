import React from 'react';
import Posts from './components/Posts';
import Stories from './components/Stories'

function Home() {
    return ( 
        <div className="Home">
            <div className="Centering-Container">
                <Stories />
                <Home />
            </div>
        </div>
     );
}

export default Home;