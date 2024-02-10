import { motion } from 'framer-motion';
import { HtmlDiv } from './TechnologiesDivs/HtmlDiv';
import { CssDiv } from './TechnologiesDivs/CssDiv';
import { JsDiv } from './TechnologiesDivs/JsDiv';
import { ReactDiv } from './TechnologiesDivs/ReactDiv';
import { GitDiv } from './TechnologiesDivs/GitDiv';
import { AndMoreDiv } from './TechnologiesDivs/AndMoreDiv';
import { TypeScriptDiv } from './TechnologiesDivs/TsDiv';

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
                <GitDiv />
                <TypeScriptDiv />
                <AndMoreDiv andMore={translations.more} />
            </motion.div>
        </>
    )
}