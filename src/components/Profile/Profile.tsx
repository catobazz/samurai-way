import React from 'react';
import MyPosts from "./My Posts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src="https://storage.theoryandpractice.ru/tnp/uploads/image_unit/000/156/586/image/base_87716f252d.jpg"
                    alt="main"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    );
};

export default Profile;