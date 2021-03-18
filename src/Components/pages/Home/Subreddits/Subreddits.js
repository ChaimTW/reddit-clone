import React, { useState } from 'react';
import './Subreddits.css';

function Subreddits({ setTopic }) {
    const [selected, setSelected] = useState(null);

    function changeTopic(e) {
        setTopic(`r/${e.currentTarget.getAttribute("value")}.json`);
        if(window.location.pathname !== "/") {
            window.history.back();
        }   
    }

    return (
        <div className="subreddits-container">
            <h1>Subreddits</h1>
            <ul>
                <li className="subreddit" value="rocketleague" onClick={changeTopic}>
                    <img src="https://rocketleague.media.zestyio.com/rl_home_f2p-launch_shop_square_10515.jpg" alt="subreddit"></img>
                    <h4>RocketLeague</h4>
                </li>
                <li className="subreddit" value="askreddit" onClick={changeTopic}>
                    <img src="https://b.thumbs.redditmedia.com/EndDxMGB-FTZ2MGtjepQ06cQEkZw_YQAsOUudpb9nSQ.png" alt="subreddit"></img>
                    <h4>AskReddit</h4>
                </li>
                <li className="subreddit" value="showerthoughts" onClick={changeTopic}>
                    <img src="https://images.victorianplumbing.co.uk/images/PRIM005_np.jpg" alt="subreddit"></img>
                    <h4>ShowerThoughts</h4>
                </li>
                <li className="subreddit" value="pics" onClick={changeTopic}>
                    <img src="https://yt3.ggpht.com/ytc/AAUvwnj52PGQw0qg3IL_Eu_wAkWHE7GY7eNG8W8qrgtcwA=s900-c-k-c0x00ffffff-no-rj" alt="subreddit"></img>
                    <h4>Pics</h4>
                </li>
                <li className="subreddit" value="nature" onClick={changeTopic}>
                    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/meadow-in-rocky-mountain-national-park-royalty-free-image-1592402262.jpg?crop=0.668xw:1.00xh;0.160xw,0&resize=640:*" alt="subreddit"></img>
                    <h4>Nature</h4>
                </li>
                <li className="subreddit" value="gaming" onClick={changeTopic}>
                    <img src="https://cdn.vox-cdn.com/thumbor/mzLxakOdU-zxagxZHNgUiEkpe6M=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19173830/acastro_190904_3643_gaming_gear_package_centered.jpg" alt="subreddit"></img>
                    <h4>Gaming</h4>
                </li>
                <li className="subreddit" value="perfecttiming" onClick={changeTopic}>
                    <img src="https://previews.123rf.com/images/ngaga35/ngaga351508/ngaga35150800223/43689359-perfect-timing-vector.jpg" alt="subreddit"></img>
                    <h4>PerfectTiming</h4>
                </li>
            </ul>
        </div>
    )
}

export default Subreddits
