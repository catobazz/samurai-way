import React from 'react';
import s from './ProfileInfo.module.css'

const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src="https://storage.theoryandpractice.ru/tnp/uploads/image_unit/000/156/586/image/base_87716f252d.jpg"
                    alt="main"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>

        </div>
    );
};

export default Profile;