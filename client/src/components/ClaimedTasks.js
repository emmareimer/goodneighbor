import React from 'react';
import { Link } from 'react-router-dom';

const ClaimedTasks = ({
    tasks,
    title,
    showTitle = true,
    showUsername = true,
}) => {
    // if (!tasks.length) {
    //     return <h3>No Claimed Tasks Yet</h3>;
    // }

    return (
        <div>
            {showTitle && <h3>{title}</h3>}
            {tasks &&
                tasks.map((tasks) => (
                    <div key={tasks._id}>
                        <h4>
                            {tasks.created_by} <br />
                            <span>
                                requested this tasks on {tasks.created_at}
                            </span>
                        </h4>
                        <div>
                            <p>{tasks.taskDescription}</p>
                            <p>{tasks.zipcode}</p>
                        </div>
                    </div>
                ))}
        </div>
    );

};

export default ClaimedTasks;