import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import ClaimedTasks from '../components/ClaimedTasks';
import TaskForm from '../components/TaskForm';

import { GET_USER, QUERY_ME, GET_USER_CLAIMED_TASKS } from '../utils/queries';

import Auth from '../utils/auth';


const Profile = () => {
    const { email: userParam } = useParams();
    console.log(userParam);
    const { loading, data } = useQuery(QUERY_ME, {
        variables: { email: Auth.getProfile().data.email },
        skip: !Auth.loggedIn(),
    });
    console.log('profile: ', Auth.getProfile().data);

    if (loading) {
        return <div>Loading...</div>;
    }

    // guard
    if (!Auth.loggedIn()) {
        console.log('Not logged in');
        return (
            <h4>
                Please sign in.
            </h4>
        );
    }
    console.log('logged in');

    const user = data?.me;

    console.log('data: ', data);

    return (
        // the profile card is naturally going to be pretty dry. Do we want to add a default stock image as a stand in for profile pics?
        <>
            <div>
                <h2>{user.username}</h2>
                {/* <h3>{user.name}</h3> */}
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

            {!userParam && (
                <div
                    className="col-12 col-md-10 mb-3 p-3"
                    style={{ border: '1px dotted #1a1a1a' }}
                >
                    <TaskForm />
                </div>
            )}
        </>
    );
}

export default Profile;