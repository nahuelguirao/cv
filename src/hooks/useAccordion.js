import { useEffect, useState } from 'react';

export function useAccordion() {
    //Array with the paragraphs which are open
    const [paragrapshOpen, setParagraphsOpen] = useState([])

    // If device's widht is greather than 768px all the paragraphs get open
    useEffect(() => {
        if (window.innerWidth >= 768) {
            setParagraphsOpen([1, 2, 3, 4])
        }
    }, [])

    //Function to control show/hide of a paragraph
    const toggleParagraph = (index) => {
        if (paragrapshOpen.includes(index)) {
            setParagraphsOpen(paragrapshOpen.filter((item) => item !== index))
        } else {
            setParagraphsOpen([...paragrapshOpen, index])
        }
    }

    //Verifies if a paragraph is open
    const isParagraphOpen = (index) => {
        return paragrapshOpen.includes(index)
    }

    return { paragrapshOpen, toggleParagraph, isParagraphOpen }
}