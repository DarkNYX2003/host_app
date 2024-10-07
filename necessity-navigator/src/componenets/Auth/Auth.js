import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';
import { useAuth0 } from "@auth0/auth0-react";
import serviceimage from './image.png';

function Auth() {
    const navigate = useNavigate();
    const { loginWithRedirect } = useAuth0();
    const [hoveredSection, setHoveredSection] = useState(null);

    const handleJoinUsClick = () => {
        navigate('/service_provider/auth');
    };

    return (
        <div className="auth-container">
            <div className='header_text'>
                <h1 className="split-lines">Find and Register</h1>
            </div>

            {/* Main Content Section */}
            <div className={`main-content ${hoveredSection}`}>
                <div className="left-section"
                    onMouseEnter={() => setHoveredSection('left-hovered')}
                    onMouseLeave={() => setHoveredSection(null)}>
                    <div className="join-us">
                        <h2>Want to enlist your services with us?</h2>
                        {hoveredSection === 'left-hovered' && (
                            <button onClick={handleJoinUsClick}>Join Now</button>
                        )}
                    </div>
                </div>
                <div className="right-section"
                    onMouseEnter={() => setHoveredSection('right-hovered')}
                    onMouseLeave={() => setHoveredSection(null)}>
                    <div className="header">
                        <h1>Searching for services near you?</h1>
                    </div>
                    {hoveredSection === 'right-hovered' && (
                        <div className="get-started">
                            <h2>Get Started</h2>
                            <button onClick={() => loginWithRedirect()}>Log in</button>
                            <button onClick={() => loginWithRedirect({ screen_hint: 'signup' })}>Sign up</button>
                        </div>
                    )}
                </div>
            </div>


            <div className="background-image-container">

            </div>
        </div>
    );
}

export default Auth;
