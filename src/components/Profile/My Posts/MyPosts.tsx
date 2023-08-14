import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props: any) => {

    let postsData = [
        {id: 1, message: 'Hello!', likesCount: 12},
        {id: 2, message: 'I like my pines!', likesCount: 99},
        {id: 3, message: 'I am Muzzy?', likesCount: 4},
    ]
    const postsElements = postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
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

                {postsElements}

            </div>
        </div>
    );
};

export default MyPosts;