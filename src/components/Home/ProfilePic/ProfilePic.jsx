import { motion } from 'framer-motion';
import { LinkedinLink } from './LinkedinLink';
import { GitHubLink } from "./GitHubLink";

export function ProfilePic() {
    return (
        <motion.div className='profilePicContainer' animate={{ x: [-500, 0] }} transition={{ delay: .7 }}>
            <img className='profilePic' src='/profilePic.jpg' alt='Nahuel Guirao animated profile photo' />
            <div className='socialMedia'>
                <LinkedinLink />
                <GitHubLink />
            </div>
        </motion.div>
    )
}