export function scrollToSomewhere() {

    const scrollToHome = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const scrollToAbout = () => {
        if (window.innerWidth >= 768 && window.innerWidth <= 1000) {
            window.scrollTo({
                top: 743,
                behavior: 'smooth'
            })
        } else {
            window.scrollTo({
                top: 850,
                behavior: 'smooth'
            })
        }
    }

    const scrollToProjects = () => {
        if (window.innerWidth >= 768 && window.innerWidth <= 1000) {
            window.scrollTo({
                top: 2090,
                behavior: 'smooth'
            })
        } else if (window.innerWidth < 768) {
            window.scrollTo({
                top: 1996,
                behavior: 'smooth'
            })
        }
        else {
            window.scrollTo({
                top: 1700,
                behavior: 'smooth'
            })
        }
    }

    const scrollToContact = () => {
        if (window.innerWidth >= 768 && window.innerWidth <= 1000) {
            window.scrollTo({
                top: 2890,
                behavior: 'smooth'
            })
        } else if (window.innerWidth < 768) {
            window.scrollTo({
                top: 2725,
                behavior: 'smooth'
            })
        } else {
            window.scrollTo({
                top: 2375,
                behavior: 'smooth'
            })
        }
    }

    return { scrollToHome, scrollToAbout, scrollToProjects, scrollToContact }
}