import React, { useState } from 'react';

const AboutMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={toggleMenu}>About</button>
            {isOpen && (
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li onClick={() => setIsOpen(false)}>Our Mission</li>
                    <li onClick={() => setIsOpen(false)}>Our Team</li>
                    <li onClick={() => setIsOpen(false)}>Contact Us</li>
                </ul>
            )}
        </div>
    );
};

export default AboutMenu;