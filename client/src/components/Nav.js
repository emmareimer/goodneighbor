import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';

import Auth from '../utils/auth';

const AppNavbar = () => {
    return (
        <>
            <Nav>
                {Auth.loggedIn() ? (
                    <div className="header-nav border-1px-granite-gray-3">
                        <div className="flex-row">
                            <div className="logo"></div>
                            <div className="links">
                                <div className="profile poppins-medium-gunsmoke-16px">
                                    <span className="claimed-tasks poppins-normal-granite-gray-16px2">Profile</span>
                                </div>
                                <div className="claimed-tasks poppins-normal-granite-gray-16px2">
                                    <span className="claimed-tasks poppins-normal-granite-gray-16px2">Claimed Tasks</span>
                                </div>
                                <div className="claimed-tasks poppins-normal-granite-gray-16px2">
                                    <span className="claimed-tasks poppins-normal-granite-gray-16px2">Completed Tasks</span>
                                </div>
                                <div className="claimed-tasks poppins-normal-granite-gray-16px2">
                                    <span className="claimed-tasks poppins-normal-granite-gray-16px2">Tasks Near Me</span>
                                </div>
                            </div>
                            <div className="button border-1px-licorice">
                                <div className="log-out valign-text-middle poppins-normal-white-16px">
                                    <span>
                                        <span className="poppins-normal-whitw-16px">Log Out</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="divider"></div>
                    </div>
                ) : (
                    <div className="header-nav border-1px-granite-gray-3">
                        <div className="flex-row">
                            <div className="logo"></div>
                            <div className="links">
                                <div className="button border-1px-licorice">
                                    <div className="log-out valign-text-middle poppins-normal-white-16px">
                                        <span>
                                            <span className="poppins-normal-whitw-16px">Log In</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Nav>
        </>
    );
};

export default AppNavbar;