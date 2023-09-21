/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FiGithub } from 'react-icons/fi'
import { HiOutlineExternalLink } from 'react-icons/hi'

import tech_vocacional from '../../assets/projetosPessoaisImg/tech_vocacional.png'
import nuca from '../../assets/projetosPessoaisImg/nuca.png'
import carteira from '../../assets/projetosPessoaisImg/carteira.jpg'
import gestao_rh from '../../assets/projetosPessoaisImg/gestao_rh.jpg'


const ProjetosPessoais = ({ OnOff = true }) => {
  const { t } = useTranslation()
  const [on, setOn] = useState(true)

  useEffect(() => {
    setOn(OnOff)
  },[OnOff])


  const listProjetcs = [
    {
      id: 1,
      href: "https://test.vocacionaltech.repl.co",
      github: "https://github.com/darlan-almeida/tech-vocacional",
      img: tech_vocacional,
      title: t("projects.1.tech_vocacional.title"),
      tecnologias: "Python - Flask - sklearn  - Postgreesql",
      descrition: t("projects.1.tech_vocacional.descrition")
    },
    {
      id: 2,
      href: "https://nucapicui.vercel.app/",
      github: "https://github.com/Darlan-Almeida/nucapicui",
      img: nuca,
      title: t("projects.1.nuca.title"),
      tecnologias: "Python - dialogflow - Api",
      descrition: t("projects.1.nuca.descrition")
    },
    {
      id: 3,
      href: "https://replit.com/@Darlandos/Carteira-Administradora",
      github: "https://github.com/Darlan-Almeida/controle_de_gastos",
      img: carteira,
      title: t("projects.1.carteira.title"),
      tecnologias: "python - Postgreesql",
      descrition: t("projects.1.carteira.descrition")
    },
    {
      id: 4,
      href: "https://replit.com/@Darlandos/EDD-projeto-gp",
      github: "https://github.com/Darlan-Almeida/Controle-de-recursos-humanos-e-financeiros",
      img: gestao_rh,
      title: t("projects.1.gestao_rh.title"),
      tecnologias: "Python - POO - Estrutura de dados - Planilhas",
      descrition: t("projects.1.gestao_rh.descrition")
    },
  ]


  const titleHover = "font-bold text-3xl text-white group-hover:text-transparent bg-clip-text bg-gradient-to-r from-gradient-100 via-primary-200 to-gradient-200"
  const tecnologiasHover = 'text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gradient-100 via-primary-200 to-gradient-200'
  const descritionHover = 'font-light text-lg text-start'
  const iconsHover = 'hover:text-primary-200 '
  const boxsProjects = "flex flex-row max-md:flex-col min-h-[270px] max-h-[510px] w-full max-w-[735px] rounded-3xl relative bg-black border-[2px] border-secondary-300 cursor-pointer group"

  return (
    <div
      className={`w-[95%] ${on ? "flex" : "hidden"} flex-row flex-wrap gap-12 justify-center mx-auto`}>

      {listProjetcs.map(({ id, img, title, descrition, github, href, tecnologias }) => (
        <div
          data-aos="zoom-in"
          key={id} className={boxsProjects}>
          <img
            className="object-cover object-center h-full w-1/2 rounded-3xl max-md:w-full max-md:h-72 "
            loading='lazy'
            src={img}
            alt={title} 
          />

          <span className="flex flex-col justify-evenly gap-3 items-center
            w-full h-full px-2 pb-2 mt-1">
            <h2 className={titleHover}>
              {title}</h2>

            <p className={descritionHover}>
              {descrition}</p>

            <h3 className={tecnologiasHover}>
              {tecnologias}</h3>

            <div className='flex flex-row gap-4 mt-8'>
              <a href={github} rel="noreferrer" target="_blank">
                <FiGithub size={28}
                  className={iconsHover} />
              </a>

              <a href={href} rel="noreferrer" target="_blank" >
                <HiOutlineExternalLink size={28}
                  className={iconsHover} />
              </a>
            </div>
          </span>

        </div>
      ))}

    </div>
  )
}

export default ProjetosPessoais