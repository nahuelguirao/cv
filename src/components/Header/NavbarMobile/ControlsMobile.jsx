import { IoMenuOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

export function ControlsMobile({ toggleMenu, isMenuOpen }) {

    return (
        <>
            {isMenuOpen ?
                <RxCross1 className="menuIcon" onClick={toggleMenu} />
                :
                <IoMenuOutline className="menuIcon" onClick={toggleMenu} />
            }
        </>
    )
}