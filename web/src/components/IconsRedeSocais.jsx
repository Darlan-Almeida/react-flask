/* eslint-disable react/prop-types */
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi"
import { FaWhatsapp } from 'react-icons/fa'

const IconsRedeSocais = ({ flexDirection = "flex-row"}) => {
   const direction = flexDirection

   const redeSociais = [
      {
         id: 1,
         href: "https://github.com/darlan-almeida",
         ariaLabel: "GitHub",
         icon: <FiGithub 
         size={28} 
         className="text-white hover:text-primary-200" 
         />
      },
      {
         id: 2,
         href: "https://wa.me/5583999681662",
         ariaLabel: "Whatsapp",
         icon: <FaWhatsapp 
         size={28} 
         className="text-white hover:text-primary-200" 
         />
      },
      {
         id: 3,
         href: "https://www.instagram.com/darlan.almeiida/",
         ariaLabel: "Instagram",
         icon: <FiInstagram 
         size={28} 
         className="text-white hover:text-primary-200" 
         />
      },
      {
         id: 4,
         href: "https://www.linkedin.com/in/darlan-almeida-92251a232/",
         ariaLabel: "Linkedin",
         icon: <FiLinkedin 
         size={28} 
         className="text-white hover:text-primary-200" 
         />
      }
   ]
   return (
      <div className={`flex ${direction} items-center gap-5`}>
         {redeSociais.map(({ id, href, icon, ariaLabel }) => (
            <a key={id} href={href} rel="noreferrer" target="_blank" aria-label={ariaLabel} >
               {icon}
            </a>
         ))}
      </div>
   )
}

export default IconsRedeSocais