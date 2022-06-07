// THIS FILE IS A WORK IN PROGRESS! FIGURING IT OUT

import React, { createContext, useState, useContext } from "react";

const Context = createContext();

function Nav() {
    // const [navbarUserIsLogged, setnavbarUserIsLogged] = useState(false);

    // useEffect(() => {
    //     (async () => {
    //         const loggedIn = await logic.isUserLoggedIn;
    //         if (loggedIn) setnavbarUserIsLogged(true);
    //     })();
    // }, [navbarUserIsLogged]);

    // const signedIn = () => (event) => {
    //     if(event.type === '')
    // }

    return (
        <>
        <div className="header-nav border-1px-granite-gray-3">
            <div className="flex-row">
                <div className="links">
                    {/* does the className for each individual nav selection element need it's own unqiue className? Or can they all be identical? */}
                    <div className="profile poppins-medium-licorice-16px">
                        Profile
                    </div>
                    <div className="claimed-tasks poppins-normal-granite-gray-16px">
                        Claimed Tasks
                    </div>
                    <div className="claimed-tasks poppins-normal-granite-gray-16px">
                        Completed Tasks
                    </div>
                    <div className="claimed-tasks poppins-normal-granite-gray-16px">
                        Tasks Near Me 
                    </div>
                </div>
                <Button2>Log Out</Button2>
            </div>
        </div>
        </>
    );
}

export default Nav;

function Button2(props) {
    const { children } = props;

    return (
        <div className="button border-1px-licorice">
            <div className="sign-up valign-text-middle poppins-normal-white-16px">
                {children}
            </div>

        </div>
    );
}



// useEffect(() => {
//     (async () => {
//         const loggedIn = await logic.isUserLoggedIn;
//         if (loggedIn) setnavbarUserIsLogged(true);
//     })();
// }, [navbarUserIsLogged]);


// const { isAuthenticated } = useContext(AuthContext)


// pulling this use case from a stack overflow post, here's the logic provided for the functions/methods used above. Here's the link: https://stackoverflow.com/questions/66383572/react-how-to-change-navbar-dynamically-when-you-are-logged-in

// const logic = {
//     set userToken(token) {
//       sessionStorage.userToken = token;
//     },
  
//     get userToken() {
//       if (sessionStorage.userToken === null) return null;
//       if (sessionStorage.userToken === undefined) return undefined;
//       return sessionStorage.userToken;
//     },
  
//     get isUserLoggedIn() {
//       return this.userToken;
//     },
  
//     loginUser(email, password) {
//       return (async () => {
//         try {
//           const { token } = await buscasosApi.authenticateUser(email, password);
//           this.userToken = token;
//         } catch (error) {
//           throw new Error(error.message);
//         }
//       })();
//     }
//   };