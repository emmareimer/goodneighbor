import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth';
// import queries 

// import mutations 

const Profile = () => {
    const { username: userParam } = useParams();

    // INSERT QUERIES HERE
    // const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    //     variables: { username: userParam },
    // });

    const user = data?.me || data?.user || {};


    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
        return <Navigate to="/me" />;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user?.username) {
        return (
            <h4>Redirect to login page </h4>
        );
    }

    return (
        <div>
            <div className="profile-info">
                <img className="featured-image" src={featuredImage} />
                <h1 className="title apercupro-medium-black-24px">
                    Placeholder namme
                </h1>
                <div className="username apercupro-regular-normal-manatee-16px">
                    {userParam ? `${user.username}'s` : 'your'} profile.                </div>
                <div className="zip-code-78573 poppins-normal-licorice-16px">
                    <span className="poppins-normal-licorice-16px">
                        Zip Code: </span>
                </div>
                <div>
                    <p className="poppins-normal-licorice-16px">{bio}</p>
                </div>
                <Button>
                    {/* {buttonProps.children} */}
                </Button>
            </div>

            <div className="rectangle-2">
                <div className="flex-row justify-center mb-3">
                    <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
                        Viewing {userParam ? `${user.username}'s` : 'your'} profile.
                    </h2>

                    <div className="col-12 col-md-10 mb-5">
                        {/* <TaskList
                            tasks={user.tasks}
                            title={`${user.username}'s Task...`}
                            showTitle={false}
                            showUsername={false}
                        /> */}
                    </div>
                    {!userParam && (
                        <div>
                            {/* //     className="col-12 col-md-10 mb-3 p-3"
                        //     style={{ border: '1px dotted #1a1a1a' }}
                        // >
                        //     <TaskForm /> */}
                        </div>
                    )}
                </div>
            </div>
        </div>


    );
}

export default Profile;


{/* The code below is closer to the figma design. I want to */ }
{/* <div className="rectangle-2">
                <div className="articles">
                    <p>Water Tiffany's mango tree</p>
                    <div className="date apercupro-regular-normal-gray-16px">January 13, 2022 (place holder date)</div>
                </div>

                <div className="articles">
                    <p>Text 10 of your friends about Martha's Kitchen</p>
                    <div className="date apercupro-regular-normal-gray-16px">January 13, 2022 (place holder date)</div>
                </div>



                <div className="articles">
                    <p>Dog Rescue Street P</p>
                    <div className="date apercupro-regular-normal-gray-16px">January 13, 2022 (place holder date)</div>
                </div>



                <div className="articles">
                    <p>Water Tiffany's mango tree</p>
                    <div className="date apercupro-regular-normal-gray-16px">January 13, 2022 (place holder date)</div>
                </div> */}

// function Button(props) {
//     const { children } = props;

//     return (
//         <div className="button border-1px-licorice">
//             <div className="edit-profile valign-text-middle poppins-normal-licorice-16px">
//                 {children}
//             </div>
//         </div>
//     );
// }