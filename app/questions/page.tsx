'use client';

import Header1 from '../components/header-1';
import Link from 'next/link';
import { useState } from 'react';
import BackButton from '../components/backButton';

export default function Questions() {

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [step, setStep] = useState<'name' | 'location'>('name');
    const [validationError, setValidationError] = useState('');

    const cleanName = name.trim().replace(/\s+/g, ' ');
    const cleanLocation = location.trim().replace(/\s+/g, ' ');

    const namePattern = /^[\p{L}\p{M}][\p{L}\p{M} .'\u2019-]{0,99}$/u;
    const locationPattern = /^[\p{L}\p{M}][\p{L}\p{M} .'\u2019-]{0,99}$/u;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (step === 'name') {
            if (!namePattern.test(cleanName)) {
                setValidationError('Enter a valid name using letters only.');
                return;
            }

            setValidationError('');
            setStep('location');
            return;
        }

        if (!locationPattern.test(cleanLocation)) {
            setValidationError('Enter a valid location using letters only.');
            return;
        }

        setValidationError('');

        const response = await fetch('https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseOne', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: cleanName, location: cleanLocation }),
        });

        const data = await response.json();
        console.log(data);
    };

    return (
        <div className="min-h-screen w-full relative">
            <Header1 />
            <div className="flex min-h-screen items-center relative">
                <h3 className="absolute left-0 top-8 uppercase font-bold text-md">To start analysis</h3>
                <div className="absolute left-1/2 top-1/2 z-0 h-[762px] w-[762px] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <span className="absolute inset-0 h-full w-full rotate-45 border-2 border-dotted border-[#A0A4AB] opacity-15" />
                    <span className="absolute inset-0 h-full w-full rotate-45 border-2 border-dotted border-[#A0A4AB] scale-90 opacity-25" />
                    <span className="absolute inset-0 h-full w-full rotate-45 border-2 border-dotted border-[#A0A4AB] scale-80 opacity-50" />
                </div>
                <form 
                    className="flex flex-col w-max mx-auto text-center z-10"
                    onSubmit={handleSubmit}
                >
                    <label className="opacity-50">CLICK TO TYPE</label>
                    <input 
                        type="text"
                        className="max-w-105 text-5xl font-light tracking-tighter text-center border-b text-black focus"
                        placeholder={step === 'name' ? "Introduce yourself" : "Where are you from?"}
                        value={step === 'name' ? name : location}
                        required
                        onChange={(e) => 
                            {
                                setValidationError('');
                                step === 'name'
                                    ? setName(e.target.value)
                                    : setLocation(e.target.value);
                            }
                        }
                    />
                    {validationError && <p role="alert" className="mt-3 text-sm text-red-600">{validationError}</p>}
                </form>
            </div>
            <div className="absolute bottom-0 left-0">
                <Link href="/landing-000-004">
                    <div className="flex items-center gap-5">
                        <BackButton />
                        <p>BACK</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}