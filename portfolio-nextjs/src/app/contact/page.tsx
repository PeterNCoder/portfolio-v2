import React from 'react';
import Socials from '../Socials'

const About = () => {
    return (
        <main className="min-h-screen px-4">
            <div className="h-screen flex items-center justify-center">
                <div className="m-2 border-2 border-sky-300 text-center p-2">

                    <h2 className="pt-1 text-lg animate-bounce">Contact</h2>

                    <Socials/>
                    
                </div>
            </div>
        </main>
    );
};

export default About;