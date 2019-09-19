import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({
    user: {
        name,
        avatar,
        email,
    }
}) => {
    return (
    <div className='PostItem'>
        <br/>
        <div className='post bg-light'>
            <img src={avatar} alt='' className='round-img' />
            <div>
                <h2>{name}</h2>
                <h4>{email}</h4>
            </div>
        </div>
    </div>
    );
};

UserItem.propTypes = {
    user: PropTypes.object.isRequired
};

export default UserItem;