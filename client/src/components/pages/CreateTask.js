import React from 'react';

function TextField2(props) {
    const { children } = props;
}

function CreateTask() {
    return (





        <>
            <h1 className="title valign-text-middle poppins-medium-mine-shaft-32px">
                <span>
                    <span className="poppins-medium-mine-shaft-32px">Create a new task</span>
                </span>
            </h1>

            <div className="already-have-an-ccount-log-in poppins-normal-licorice-16pX">
                <span className="poppins-normal-licorice-16px">Subtitle blah blah blah></span>
            </div>

            <p className="label-1 poppins-normal-granite-gray-16px-22">
                <span className="poppins-normal-granite-gray-16px-22">What should we call this task?</span>
            </p>

            <div className="text-field border-1px-granite-gray-5">
                <div className="x123456 poppins-normal-granite-gray-16px-3">
                    <span className="poppins-normal-granite-gray-16px-3">{children}</span>
                </div>
            </div>

            <p className="label-1 poppins-normal-granite-gray-16px-22">
                <span className="poppins-normal-granite-gray-16px-22">How would you describe it?</span>
            </p>

            <div className="text-field border-1px-granite-gray-5">
                <p className="x123456 poppins-normal-granite-gray-16px-3">
                    <span className="poppins-normal-granite-gray-16px-3">{chilren}</span>
                </p>
            </div>
        </>
    )
}

export default CreateTask;