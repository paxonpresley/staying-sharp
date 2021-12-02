import React from 'react';

function Posts() {

    let profilePic = 'https://st2.depositphotos.com/1009634/7235/v/950/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg';
    let creatorHandle = 'ondrababy';
    let content = 'https://i1.sndcdn.com/artworks-000139136266-wj85p7-t500x500.jpg';
    let creatorCmt = 'leave a like plz';
    let likesNum = '17,787';

    const post = 
        <div className="Posts-Container">
            {/* handle/profile */}
            <div className="Header-Container">
                <img id="profile-picture" src={profilePic} alt=""></img>
                <h3>{creatorHandle}</h3>
            </div>
            {/* piece of content */}
            <img id="content" src={content}/>
            {/* function btns */}
            <div className="Function-Buttons">
                <button id="Like">L</button>
                <button id="Comment">C</button>
                <button id="Share">S</button>
            </div>
            {/* like info, comments, etc info */}
            <div className="Comments">
                {/* the thing that says "17,455 Likes" */}
                <div className="Likes-Num-Container">
                    <p id="likes-num">{likesNum}</p>
                    <p className="likes">Likes</p>
                </div>
                {/* the creators description */}
                <div className="Creator-Cmt-Container">
                    <p className="gHandle" id="Creator-Handle">{creatorHandle}</p>
                    <p className="gCmt" id="Creator-Cmt">{creatorCmt}</p>
                </div>
                </div>
            </div>;

    return ( 
        <div className="Posts">
           {post}
        </div>
     );
}

export default Posts;