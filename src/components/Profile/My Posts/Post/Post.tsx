import React from 'react';
import s from './Post.module.css'

const Post = (props: any) => {
    return (
        <div className={s.item}>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMiinNAiM1Q9Nzs8B0edlsZuMIiI7vl-Z93w&usqp=CAU"
                    alt="ava"/>
                post 1
            </div>
        </div>
    );
};

export default Post;