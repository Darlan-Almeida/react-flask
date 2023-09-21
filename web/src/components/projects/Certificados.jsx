/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { HiOutlineExternalLink } from 'react-icons/hi'


import diploma from '../../assets/certificados/diploma.png'
import Pdf from '../../assets/robotica.pdf'
import expotec from '../../assets/expotec.pdf'

const Certificados = ({ OnOff = false }) => {
  const { t } = useTranslation()
  const [on, setOn] = useState(false)

  useEffect(() => {
    setOn(OnOff)
  }, [OnOff])

  const listsCertificates = [
    {
      id: 1,
      href: "https://estudante.ifpb.edu.br/cursos/124/#:~:text=TVIFPB%20-%20CAMPUS%20SANTA%20RITA%20-%20CURSOS%20T%C3%89CNICO,N%C3%ADvel%20M%C3%A9dio%2C%20com%20dura%C3%A7%C3%A3o%20m%C3%A9dia%20de%203%20anos.",
      img: diploma,
      title: t("projects.2.informatica.title"),
      descrition: t("projects.2.informatica.descrition")
    },
    {
      id: 2,
      href: Pdf,
      img: diploma,
      title: t("projects.2.robotica.title"),
      descrition: t("projects.2.robotica.descrition")
    },
    {
      id: 3,
      href: "https://www.ifpb.edu.br/ead/cursos-extensao/ingles",
      img: diploma,
      title: t("projects.2.ingles.title"),
      descrition: t("projects.2.ingles.descrition")
    },
    {
      id: 3,
      href: expotec,
      img: diploma,
      title: t("projects.2.expotec.title"),
      descrition: t("projects.2.expotec.descrition")
    }



  ]

  const titleHover = "flex items-center font-bold text-3xl text-center text-primary-200 opacity-0 group-hover:opacity-100 duration-700"
  const CertificatesHover = 'text-xl font-semibold mb-1 opacity-0 group-hover:opacity-100 duration-1000'
  const descritionHover = 'font-light text-lg text-center opacity-0 group-hover:opacity-100 duration-700'
  const iconsHover = 'text-white pl-1 opacity-0 group-hover:opacity-100 duration-1000 hover:duration-0 hover:text-primary-200 cursor-pointer'
  const boxsCertificates = "h-[270px] w-full rounded-3xl relative before:cursor-default overflow-hidden max-w-sm before:bg-[#0a1629] before:opacity-90 before:w-full before:h-0 before:absolute before:duration-[900ms] hover:before:h-full group "


  return (
    <div className={`w-[70%] ${on ? "flex" : "hidden"} flex-row flex-wrap gap-12 justify-center mx-auto`}>

      {listsCertificates.map(({ id, img, title, descrition, href, tecnologias }) => (
        <div
          data-aos="zoom-in"
          key={id} className={boxsCertificates}>
          <img
            className="object-cover object-center h-full w-full "
            loading="lazy"
            src={img}
            alt={title}
          />

          <span className="absolute top-0 left-0 flex flex-col gap-1 items-center
            w-full h-full py-[10px] px-2 mt-1">
            <h2 className={titleHover}>
               {title}
                <a href={href} rel="noreferrer" target="_blank" >
                  <HiOutlineExternalLink size={33}
                    className={iconsHover} />
                </a>
            </h2>

            <h3 className={CertificatesHover}>
              {tecnologias}</h3>

            <p className={descritionHover}>
              {descrition}</p>

          </span>
        </div>
      ))}

    </div>
  )
}

export default Certificados