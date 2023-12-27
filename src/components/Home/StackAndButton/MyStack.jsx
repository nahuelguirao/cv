import { motion } from 'framer-motion';
import { HtmlDiv } from './TechnologiesDivs/HtmlDiv';
import { CssDiv } from './TechnologiesDivs/CssDiv';
import { JsDiv } from './TechnologiesDivs/JsDiv';
import { ReactDiv } from './TechnologiesDivs/ReactDiv';
import { PythonDiv } from './TechnologiesDivs/PythonDiv';
import { DjangoDiv } from './TechnologiesDivs/DjangoDiv';
import { AndMoreDiv } from './TechnologiesDivs/AndMoreDiv';


export function MyStack({ translations }) {
    return (
        <>
            <motion.h3 className='stackTitle' animate={{ scale: [0, 1] }} transition={{ delay: .7 }}>
                {translations.my}<span className='fit'>{translations.stack}</span>
            </motion.h3>
            <motion.div className='stack' animate={{ scale: [0, 1] }} transition={{ delay: .7 }}>
                <HtmlDiv />
                <CssDiv />
                <JsDiv />
                <ReactDiv />
                <PythonDiv />
                <DjangoDiv />
                <AndMoreDiv andMore={translations.more} />
            </motion.div>
        </>
    )
}