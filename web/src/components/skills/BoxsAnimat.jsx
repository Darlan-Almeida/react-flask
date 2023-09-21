import iconCss from '../../assets/iconsLinguagens/css3-original.svg'
import iconHTMl from '../../assets/iconsLinguagens/html_original.svg'
import iconJs from '../../assets/iconsLinguagens/javascript-original.svg'
import iconGit from '../../assets/iconsLinguagens/git-original.svg'
import iconPython from '../../assets/iconsLinguagens/python-original.svg'
import iconDjango from '../../assets/iconsLinguagens/django-original.svg'
import iconFlask from '../../assets/iconsLinguagens/flask-original.svg'
import iconGithub from '../../assets/iconsLinguagens/github-original.svg'



import { useTranslation } from 'react-i18next'

const BoxsAnimat = () => {
    const { t } = useTranslation()

    const boxsBorderTec = 'max-w-[356px] h-24  bg-gradient-to-tr from-gradient-100 via-primary-200 to-gradient-200 rounded-[10px] p-[1.3px] gap-x-1'
    const boxsTec = 'grid grid-cols-[52px_minmax(265px,_2fr)] grid-rows-2 items-center py-3 px-2 w-full h-full bg-secondary-300 rounded-[10px]'
    const imgTec = 'w-[54px] h-[52px] float-right'
    const titleTec = 'text-xl font-bold mb-3'


    const tecsSlideRowOne = [
        {
            id: 1,
            img: iconCss,
            title: "CSS",
            descrition: t("skills.1.tecsSlideRowOne.descritionCSS")
        },
        {
            id: 2,
            img: iconJs,
            title: "Javascript",
            descrition: t("skills.1.tecsSlideRowOne.descritionJS")
        },
        {
            id: 3,
            img: iconHTMl,
            title: "HTML5",
            descrition: t("skills.1.tecsSlideRowOne.descritionHTML")
        },
    ]

    const tecsSlideRowTwo = [
        {
            id: 1,
            img: iconGit,
            title: "Git",
            descrition: t("skills.1.tecsSlideRowTwo.descritionGit")
        },
        {
            id: 2,
            img: iconGithub,
            title: "GitHub",
            descrition: t("skills.1.tecsSlideRowTwo.descritionGithub")
        },
        {
            id: 3,
            img: iconPython,
            title: "Python",
            descrition: t("skills.1.tecsSlideRowTwo.descritionPython")
        },
        {
            id: 4,
            img: iconFlask,
            title: "Flask",
            descrition: t("skills.1.tecsSlideRowTwo.descritionFlask")
        },
        {
            id: 5,
            img: iconDjango,
            title: "Django",
            descrition: t("skills.1.tecsSlideRowTwo.descritionDjango")
        },


    ]


    return (
        <div className='flex flex-col gap-y-8 overflow-hidden w-full
    before:absolute before:h-60  before:w-[85px] before:z-10 before:bg-gradient-to-r before:from-black before:to-transparent
    after:absolute after:h-60 after:w-[85px] after:z-10 after:bg-gradient-to-r after:from-black after:to-transparent after:top-0 after:right-[-1px] after:rotate-180'>

            {/* primeira linha com as linguagens */}
            <div name="row One"
                data-aos="fade-left"
                className='flex items-center w-[calc(388px*8)] gap-8
           animate-boxLinguageAnim1 '> {/*o 388px representa a soma do 356px da box + o gap de 32px*/}

                {tecsSlideRowOne.map(({ id, img, title, descrition }) => (
                    <div className={boxsBorderTec} key={id}>
                        <div className={boxsTec}>
                            <div className='row-span-2 mr-1'>
                                <img
                                    className={imgTec}
                                    loading="lazy"
                                    src={img}
                                    alt={title}
                                />
                            </div>
                            <h2 className={titleTec}>{title}</h2>
                            <p className='font-light leading-[1.28]'>{descrition}</p>
                        </div>
                    </div>
                ))}
                {/* clone dos primeiros elementos para criar o efeito de scroll infinito */}
                {tecsSlideRowOne.map(({ id, img, title, descrition }) => (

                    <div className={boxsBorderTec} key={id}>
                        <div className={boxsTec}>
                            <div className='row-span-2 mr-1'>
                                <img
                                    className={imgTec}
                                    loading="lazy"
                                    src={img}
                                    alt={title}
                                />
                            </div>
                            <h2 className={titleTec}>{title}</h2>
                            <p className='font-light leading-[1.28]'>{descrition}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Segunda linha com as linguagens */}
            <div name="row Two"
                data-aos="fade-right"
                className='flex items-center w-[calc(388px*8)] gap-8 relative right-[1552px]
         animate-boxLinguageAnim2'> {/*o 388px representa a soma do 356px da box + o gap de 32px */}
                {tecsSlideRowTwo.map(({ id, img, title, descrition }) => (
                    <div className={boxsBorderTec} key={id}>
                        <div className={boxsTec}>
                            <div className='row-span-2 mr-1'>
                                <img
                                    className={imgTec}
                                    loading="lazy"
                                    src={img}
                                    alt={title}
                                />
                            </div>
                            <h2 className={titleTec}>{title}</h2>
                            <p className='font-light leading-[1.28]'>{descrition}</p>
                        </div>
                    </div>
                ))}

                {tecsSlideRowTwo.map(({ id, img, title, descrition }) => (
                    <div className={boxsBorderTec} key={id}>
                        <div className={boxsTec}>
                            <div className='row-span-2 mr-1'>
                                <img
                                    className={imgTec}
                                    loading="lazy"
                                    src={img}
                                    alt={title}
                                />
                            </div>
                            <h2 className={titleTec}>{title}</h2>
                            <p className='font-light leading-[1.28]'>{descrition}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BoxsAnimat