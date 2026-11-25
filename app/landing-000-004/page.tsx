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

    return (
        <div className="min-h-screen w-full relative">
            <Header1 />
            <div className="flex justify-between min-h-screen items-center">
                <div>
                    <span className="fixed left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 w-[70.7107dvh] h-[70.7107dvh] border-2 border-dotted border-[#A0A4AB]" />
                    <div className="flex items-center gap-5">
                        <BackButton />
                        <p>DISCOVER A.I.</p>
                    </div>
                </div>
                <div>
                    <span className="fixed right-0 top-1/2 translate-x-1/2 -translate-y-1/2 rotate-45 w-[70.7107dvh] h-[70.7107dvh] border-2 border-dotted border-[#A0A4AB]"/>
                    <div className="flex items-center gap-5">
                        <p>TAKE TEST</p>
                        <ForwardButton />
                    </div>
                </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative w-max">
                    <h1 className="text-center text-9xl font-light tracking-tighter">Sophisticated <br />Skincare</h1>
                    <div className="absolute right-0 bottom-[-80%]">
                        <StartButton />
                    </div>
                </div>
            </div>
            <Footer1 />
        </div>
    )
}