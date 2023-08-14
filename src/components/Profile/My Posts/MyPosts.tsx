import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props: any) => {

    let postsData = [
        {id: 1, message:'Hello!', likesCount: 12 },
        {id: 2, message:'I like my pines!', likesCount: 99 },
        {id: 3, message:'I am Muzzy?', likesCount: 4 },
    ]

    return (
        <div className={s.postBlock}>
           <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>
                <Post message={postsData[2].message} likesCount={postsData[2].likesCount}/>
            </div>
        </div>
    );
};

export default MyPosts;