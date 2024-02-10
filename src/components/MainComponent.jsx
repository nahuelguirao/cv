import { Main } from "./Home/Main"
import { About } from "./About/About"
import { PrincipalProjects } from "./Projects/PrincipalProjects"
import { SecondaryProjects } from "./SecondaryProjects/SecondaryProjects"
import { Contact } from "./Contact/Contact"
import { Footer } from "./Footer/Footer"
import { Header } from "./Header/Header"

export function MainComponent() {
    return (
        <>
            <Header />
            <Main />
            <About />
            <PrincipalProjects />
            <SecondaryProjects />
            <Contact />
            <Footer />
        </>
    )
}