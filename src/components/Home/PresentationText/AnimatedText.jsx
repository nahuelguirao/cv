import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

export function AnimatedText({ words }) {
    return (
        <p className='animatedText'>
            <Typewriter
                words={words}
                loop={0}
                typeSpeed={50}
                cursor={true}
            />
        </p>
    )
}
