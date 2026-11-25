'use client';

import { useState, } from 'react';
import Header1 from '../components/header-1';
import Footer1 from '../components/footer';
import BackButton from '../components/backButton';
import ForwardButton from '../components/forwardButton';
import StartButton from '../components/startButton';

export default function Landing() {

    const nextClickHandler = () => {
        // useState change of frame here
    }

    const [ isForwardActive, setIsForwardActive ] = useState(false);

    return (
        <div className="min-h-screen w-full relative">
            <Header1 />
            <div className="flex justify-between min-h-screen items-center">
                <div
                    className={`transition-all duration-700 ease-in-out ${
                        isForwardActive
                            ? "opacity-0 -translate-x-10 pointer-events-none"
                            : "opacity-100 translate-x-0"
                    }`}
                >
                    <span className="fixed left-[-75] top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 w-[70.7107dvh] h-[70.7107dvh] border-2 border-dotted border-[#A0A4AB]" />
                    <div className="flex items-center gap-5">
                        <BackButton />
                        <p>DISCOVER A.I.</p>
                    </div>
                </div>
                <div className="relative">
                    <span className="fixed right-[-75] top-1/2 translate-x-1/2 -translate-y-1/2 rotate-45 w-[70.7107dvh] h-[70.7107dvh] border-2 border-dotted border-[#A0A4AB] pointer-events-none"/>
                    <span className={`fixed right-[-75] top-1/2 translate-x-1/2 -translate-y-1/2 rotate-45 w-[70.7107dvh] h-[70.7107dvh] border-2 border-dotted border-[#A0A4AB] pointer-events-none transition-all duration-700 ease-out ${
                        isForwardActive ? "scale-[1.15] opacity-50" : "scale-100 opacity-0"
                    }`} />
                    <span className={`fixed right-[-75] top-1/2 translate-x-1/2 -translate-y-1/2 rotate-45 w-[70.7107dvh] h-[70.7107dvh] border-2 border-dotted border-[#A0A4AB] pointer-events-none transition-all duration-700 ease-out ${
                        isForwardActive ? "scale-[1.30] opacity-25" : "scale-100 opacity-0"
                    }`} />
                    <div 
                        onClick={() => setIsForwardActive(true)}
                        className="flex items-center gap-5 cursor-pointer relative z-10"
                    >
                        <p>TAKE TEST</p>
                        <ForwardButton />
                    </div>
                </div>
            </div>
            <div 
                className={`absolute top-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out ${
                    isForwardActive
                        ? "left-0 translate-x-0"
                        : "left-1/2 -translate-x-1/2"
                }`}
            >
                <div className="relative w-max">
                    <h1 
                        className={`text-9xl font-light tracking-tighter transition-all duration-700 ${
                            isForwardActive ? "text-left" : "text-center"
                        }`}
                    >
                        Sophisticated <br />Skincare
                    </h1>
                    <div 
                        className={`absolute right-0 bottom-[-80%] transition-opacity duration-500 ${
                            isForwardActive ? "opacity-0 pointer-events-none" : "opacity-100"
                        }`}
                    >
                        <StartButton />
                    </div>
                </div>
            </div>
            <Footer1 />
        </div>
    )
}