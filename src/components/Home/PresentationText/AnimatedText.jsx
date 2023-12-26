import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

export function AnimatedText() {
    return (
        <p className='animatedText'>
            <Typewriter
                words={['Junior Developer.', 'React Developer.', 'Student.', 'Django Developer.', 'Argentinian.']}
                loop={0}
                typeSpeed={50}
                cursor={true}
            />
        </p>
    )
}
