import React from 'react';

const Profile = () => {
    return <ProfileInfo {...profileInfoData} />;
}

export default Profile;

function ProfileInfo(props) {
    const { featuredImage, fullname, username, zipcode, bio, buttonProps } = props;

    return (
        <div className="profile-info">
            <img className="featured-image" src={featuredImage} />
            <h1 className="title apercupro-medium-black-24px">
                {fullname}
            </h1>
            <div className="username apercupro-regular-normal-manatee-16px">
                {username}
            </div>
            <div className="zip-code-78573 poppins-normal-licorice-16px">
                <span className="poppins-normal-licorice-16px">
                    Zip Code: {zipcode}</span>
            </div>
            <div>
                <p className="poppins-normal-licorice-16px">{bio}</p>
            </div>
            <Button>{buttonProps.children}</Button>
        </div>
    );
}

function Button(props) {
    const { children } = props;

    return (
        <div className="button border-1px-licorice">
            <div className="edit-profile valign-text-middle poppins-normal-licorice-16px">
                {children}
            </div>
        </div>
    );
}

const buttonData = {
    children: "Edit Profile",
};

const profileInfoData = {
    featuredImage: "featured-imag.png",
    fullname: "",
    username: "",
    zipcode: "",
    bio: "",
    buttonProps: buttonData,
};