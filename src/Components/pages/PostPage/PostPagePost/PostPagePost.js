import React, { useEffect, useState } from 'react';
import '../../Home/Post/Post.css';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import moment from 'moment';
import './PostPagePost.css';

function Post({ postInfo, comments }) {
    const [author, setAuthor] = useState({});

    async function fetchUser(user) {
        const URL = `https://www.reddit.com/user/${user}/about.json`;
        const fetchResult = fetch(URL)
        const response = await fetchResult;
        const jsonData = await response.json();
        setAuthor(jsonData.data);
      }

    useEffect(() => {
        fetchUser(postInfo.author);
        console.log(comments);
    }, []);

    function roundToThousand(number) {
        if(number >= 1000) {
            let reduced = number / 1000
            return Math.round(reduced * 10) / 10 + 'K';
        } else {
            return number
        }
    };

    return (
        <>
        <div className="post-container">
            <div className="post-votes">
                <ArrowUpwardIcon />
                <p>{roundToThousand(postInfo.ups)}</p>
                <ArrowDownwardIcon />
            </div>
            <div className="post-content">
                <p><i>/{postInfo.subreddit}</i></p><h2>{postInfo.title}</h2>
                <div className="post-image">
                    {postInfo.hasOwnProperty('preview') && <img src={postInfo?.preview?.images[0].source?.url?.replaceAll('amp;', '')} alt="post"></img>}
                </div>
                <hr />
                <div className="post-details">
                    <div className="user">
                        <img src={author?.icon_img?.replaceAll('amp;', '')} alt="user"></img>
                        <p>{postInfo.author}</p>
                    </div>
                    <div className="date-comments-container">
                        <div className="date">
                            <p>{moment.unix(postInfo.created_utc).fromNow()}</p>
                        </div>
                        <div className="comments">
                            <ChatBubbleOutlineIcon />
                            <p>{roundToThousand(postInfo.num_comments)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {comments.map(comment => {
                return (
                    <div className="comment">
                        <div className="comment-head">
                            <p className="comment-author"><strong>{comment.data.author}</strong></p>
                            <p className="comment-score">+{comment.data.score}</p>
                        </div>
                        <p>{comment.data.body}</p>
                        <i><p className="timestamp">{moment.unix(comment.data.created_utc).fromNow()}</p></i>
                    </div>
                )
            })}
        </>
    )
}

export default Post
