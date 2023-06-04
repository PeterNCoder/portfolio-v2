'use client';
import React from 'react';
import { gsap } from "gsap";
import { useEffect } from 'react';

const Intro = () => {

    useEffect(() => {
        gsap.to(".info", { 
            y: 0,
            x: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 1,
         });
      }, []);

    return (
        <div className="h-screen flex items-center justify-center">
          <div>
            <h1 className="text-3xl">
                <span className="info inline-block translate-y-4 translate-x-4 opacity-0">P</span>
                <span className="info inline-block translate-y-4 translate-x-4 opacity-0">e</span>
                <span className="info inline-block translate-y-4 translate-x-4 opacity-0">t</span>
                <span className="info inline-block translate-y-4 translate-x-4 opacity-0">e</span>
                <span className="info inline-block translate-y-4 translate-x-4 opacity-0">r&nbsp;</span>
                <span className="info inline-block translate-y-4 translate-x-4 opacity-0">N</span>
                <span className="info inline-block translate-y-4 translate-x-4 opacity-0">g</span>
                <span className="info inline-block translate-y-4 translate-x-4 opacity-0">u</span>
                <span className="info inline-block translate-y-4 translate-x-4 opacity-0">y</span>
                <span className="info inline-block translate-y-4 translate-x-4 opacity-0">e</span>
                <span className="info inline-block translate-y-4 translate-x-4 opacity-0">n</span>
            </h1>

            <hr className="info translate-y-4 opacity-0 h-1 bg-sky-300"/>

            <h2 className="info translate-y-4 opacity-0">Front-End Web Developer</h2>
            <h2 className="info translate-y-4 opacity-0">Graphic Designer</h2>
            <h2 className="info translate-y-4 opacity-0">UI/UX Designer</h2>
            <h2 className="info translate-y-4 opacity-0">WordPress Developer</h2>
          </div>
        </div>
    );
};

export default Intro;