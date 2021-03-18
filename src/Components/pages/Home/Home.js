import React, { useEffect, useState } from 'react';
import Post from './Post/Post';
import Subreddits from './Subreddits/Subreddits';
import './Home.css';
import ClipLoader from "react-spinners/ClipLoader";
import Skeleton from 'react-loading-skeleton'

function Home({ topic, setTopic }) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    async function fetchPosts() {
        setLoading(true);
        const URL = `https://www.reddit.com/${topic}`;
        const fetchResult = fetch(URL)
        const response = await fetchResult;
        const jsonData = await response.json();
        console.log(jsonData.data.children);
        setPosts(jsonData.data.children);
        setLoading(false);
      }

    useEffect(() => {
        fetchPosts();
    }, [topic])

    if(loading) {
        return (
            <div className="spinner">
                <ClipLoader /> 
            </div> 
        )
    }

    return (
        <div className="home">
            <div className="feed">
                {posts.map(post => {
                    return <Post postInfo={post.data}/>
                })}
            </div>
            <div className="subreddits">
                <Subreddits setTopic={setTopic} />
            </div>
        </div>
    )
}

export default Home