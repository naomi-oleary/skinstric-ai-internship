'use client';

import { useState, } from 'react';
import Header1 from '../components/header-1';
import Footer1 from '../components/footer';
import BackButton from '../components/backButton';

export default function Landing() {
    return (
        <div className="min-h-screen w-full relative">
            <Header1 />
            <BackButton />
            <div>
                <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-9xl font-light tracking-tighter">Sophisticated <br />Skincare</h1>
            </div>
            <Footer1 />
        </div>
    )
}