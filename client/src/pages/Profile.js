import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import ClaimedTasks from '../components/ClaimedTasks';

import { GET_USER, QUERY_ME, GET_USER_CLAIMED_TASKS } from '../utils/queries';

import Auth from '../utils/auth';


const Profile = () => {
    const { email: userParam } = useParams();
    console.log(userParam);

    // NEED HELP, how do we get the current user's data??? the code block below should tell our page what user to pull info from 
    const { data } = useQuery(userParam ? GET_USER : QUERY_ME, {
        variables: { email: userParam },
    }
    );

    console.log(data);

    const user = data?.me || data?.email || {};
    // navigate to personal profile page if username is yours
    if (Auth.loggedIn() && Auth.getProfile().data.email === userParam) {
        return <Navigate to="/profile" />;
    }

    // we could re-direct to the login page 
    if (!user?.email) {
        return (
            <h4>
                Please sign in.
            </h4>
        );
    }

    return (
        // the profile card is naturally going to be pretty dry. Do we want to add a default stock image as a stand in for profile pics?
        <>
            <div>
                <h2>{user.username}</h2>
                <h3>{user.name}</h3>
                <h3>{user.email}</h3>
                <h3>Current location: {user.zipcode}</h3>
            </div>

            <div>
                <ClaimedTasks
                    tasks={user.claimed_tasks}
                    title={`Your tasks...`}
                    showTitle={false}
                    showUsername={false}
                />
            </div>
        </>
    );
}

export default Profile;