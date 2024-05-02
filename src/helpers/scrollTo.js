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
        } else if (window.innerWidth < 768) {
            window.scrollTo({
                top: 754,
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
        if (window.innerWidth <= 320) {
            window.scrollTo({
                top: 2095,
                behavior: 'smooth'
            })
        } else if (window.innerWidth <= 390) {
            window.scrollTo({
                top: 2031,
                behavior: 'smooth'
            })
        } else if (window.innerWidth <= 520) {
            window.scrollTo({
                top: 1901,
                behavior: 'smooth'
            })
        } else if (window.innerWidth < 768) {
            window.scrollTo({
                top: 1748,
                behavior: 'smooth'
            })
        } else if (window.innerWidth <= 950) {
            window.scrollTo({
                top: 2077,
                behavior: 'smooth'
            })
        } else if (window.innerWidth < 1087) {
            window.scrollTo({
                top: 1944,
                behavior: 'smooth'
            })
        } else {
            window.scrollTo({
                top: 1748,
                behavior: 'smooth'
            })
        }
    }

    const scrollToContact = () => {
        window.scrollTo({
            top: 6000,
            behavior: 'smooth'
        })
    }

    return { scrollToHome, scrollToAbout, scrollToProjects, scrollToContact }
}