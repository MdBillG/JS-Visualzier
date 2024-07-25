'use client'

import React, { useState } from 'react';

const TemporalDeadZone = () => {
    const [phase, setPhase] = useState('declaration');

    const nextPhase = () => {
        if (phase === 'declaration') setPhase('tdz');
        else if (phase === 'tdz') setPhase('initialization');
        else setPhase('declaration');
    };

    return (
        <div>
            <h2>Temporal Dead Zone</h2>
            <button onClick={nextPhase}>Next Phase</button>
            <div style={{ border: '1px solid black', minHeight: '200px', padding: '10px' }}>
                {phase === 'declaration' && <div>let x; // Variable declared</div>}
                {phase === 'tdz' && <div style={{ color: 'red' }}>// Temporal Dead Zone (accessing x here would cause error)</div>}
                {phase === 'initialization' && <div>x = 5; // Variable initialized and can be used</div>}
            </div>
        </div>
    );
};

export default TemporalDeadZone;