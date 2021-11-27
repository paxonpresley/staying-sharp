import React from 'react';

function Posts() {
    return ( 
        <div className="Posts">
            <div className="Posts-Container">
                {/* handle/profile */}
                <div className="Header-Container">
                    <img id="profile-picture" src="./IMG_2220.JPG" alt=""></img>
                    <h3>thisisahumanbeing69</h3>
                </div>
                {/* piece of content */}
                <img id="content" src='./IMG_2220.JPG'></img>
                {/* function btns */}
                <div className="Function-Buttons">
                    <button id="Like">L</button>
                    <button id="Comment">C</button>
                    <button id="Share">S</button>
                    <button id="Save">S</button>
                </div>
                {/* like info, comments, etc info */}
                <div className="Comments">
                    <div className="Likes-Num">
                        <p>17,548</p>
                        <p>Likes</p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Posts;