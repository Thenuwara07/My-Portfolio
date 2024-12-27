// import logo from "../assets/kevinRushLogo.png"
// import { FaLinkedin } from 'react-icons/fa'
// import { FaGithub } from 'react-icons/fa'
// import { FaInstagram } from 'react-icons/fa'
// import { motion } from 'framer-motion'

// const Navbar = () => {
//   return (
//     <nav className="mg-20 flex items-center justify-between py-6">
//         <div className="flex flex-shrink-0 items-center">
//             <motion.img whileInView={{ opacity: 1, x: 0}} initial={{ opacity: 0, x: -100}} transition={{duration:0.5}} src={logo} alt="logo" className="mx-2 w-10"/>
//         </div>
//         <motion.div whileInView={{ opacity: 1, x: 0}} initial={{ opacity: 0, x: 100}} transition={{duration:0.5}} className="m-8 flex items-center justify-center gap-4 text-2xl">
//             <FaLinkedin/>
//             <FaGithub/>
//             <FaInstagram/>
//         </motion.div>
//     </nav>
//   )
// }

// export default Navbar

import logo from "../assets/logo.png";
import s_logo from "../assets/s_logo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { Switch } from "../components/ui/switch";
import x3_W from "../assets/3x3logo.png";

interface NavbarProps {
  onSwitchChange: (checked: boolean) => void;
  isSwitched: boolean;
}

const Navbar = ({ onSwitchChange, isSwitched }: NavbarProps) => {
  return (
    <nav className="mg-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center justify-center">
        {isSwitched && (
          <>
            <motion.img
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              src={s_logo}
              alt="logo"
              className="mx-2 w-10"
            />
          </>
        )}
        {!isSwitched && (
          <>
            <motion.img
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              src={logo}
              alt="logo"
              className="mx-2 w-10"
            />
          </>
        )}
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="flex items-center gap-2"
        >
          <label
            htmlFor="sprot-mode"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-20"
          >
            Sport Mode
          </label>
          <Switch
            id="sport-mode"
            checked={isSwitched}
            onCheckedChange={onSwitchChange}
          />
        </motion.div>
      </div>
      <div className="flex items-center gap-6">
        {isSwitched && (
          <>
            <motion.img
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              src={x3_W}
              alt="3x3"
              className="mx-2 w-10 text-white"
            />
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-4 text-2xl"
            >
              <FaInstagram />
            </motion.div>
          </>
        )}
        {!isSwitched && (
          <>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-4 text-2xl"
            >
              <FaLinkedin />
              <FaGithub />
              <FaInstagram />
            </motion.div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
