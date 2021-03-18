import React, { useEffect, useState } from 'react';
import Subreddits from '../Home/Subreddits/Subreddits';
import PostPagePost from './PostPagePost/PostPagePost';
import ClipLoader from "react-spinners/ClipLoader";
import './PostPage.css';

function PostPage({ setTopic }) {
    const [postInfo, setPostInfo] = useState({});
    const [comments , setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getPostData() {  
        setLoading(true)
        const paths = window.location.pathname.split('/');
        const postId = paths[paths.length-1];
        const URL = `https://www.reddit.com/comments/${postId}.json`
        const fetchResult = fetch(URL)
        const response = await fetchResult;
        const jsonData = await response.json();
        console.log(jsonData);
        setPostInfo(jsonData[0].data.children[0].data);
        setComments(jsonData[1].data.children);
        setLoading(false)
    };

    useEffect(() => {
        getPostData();
        console.log(postInfo);
    }, []);

    return (
        <div className="post-page-container">
            {loading ?
            <div className="post-page-spinner">
                <ClipLoader />
            </div>
            :
            <div className="post-page-content">
                <PostPagePost postInfo={postInfo} comments={comments} />
            </div>}
            <div className="post-page-subreddits">
                <Subreddits setTopic={setTopic} />
            </div>
        </div>
    )
}

export default PostPage
