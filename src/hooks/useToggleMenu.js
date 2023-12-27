import { useState } from "react"

export function useToggleMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => { setIsMenuOpen(!isMenuOpen) }

    return { isMenuOpen, toggleMenu }
}