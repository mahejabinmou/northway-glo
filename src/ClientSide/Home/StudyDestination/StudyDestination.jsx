import { gsap } from "gsap"
import { useEffect, useRef } from "react"
import { MdArrowRightAlt } from "react-icons/md"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { Link } from "react-router-dom"

const StudyDestination = () => {
    const boxRefs = [
        useRef(),
        useRef(),
        useRef(),
        useRef(),
        useRef(),
        useRef(),
        useRef(),
        useRef(),
        useRef(),
        useRef(),
        useRef(),
        useRef(),
        useRef(),
        useRef(),
    ]
    const sectionRef = useRef()

    const animateBox = (ref, x, y, delay, duration = 3) => {
        gsap.from(ref.current, {
            x: x || 0,
            y: y || 0,
            opacity: 1,
            duration,
            delay,
            ease: "power2.out",
        })
    }

    const handleIntersection = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Triggers animations whenever the section comes in the viewport
                animateBox(boxRefs[0], -200, undefined, 1)
                animateBox(boxRefs[1], -200, undefined, 1)
                animateBox(boxRefs[2], 200, undefined, 1)
                animateBox(boxRefs[3], 200, undefined, 1)
                animateBox(boxRefs[4], undefined, 200, 0.3)
                animateBox(boxRefs[5], undefined, -200, 0.3)
                animateBox(boxRefs[6], -200, undefined, 1)
                animateBox(boxRefs[7], -200, undefined, 1)
                animateBox(boxRefs[8], 200, undefined, 1)
                animateBox(boxRefs[9], 200, undefined, 1)
                animateBox(boxRefs[10], undefined, 200, 0.3)
                animateBox(boxRefs[11], undefined, -200, 0.3)
                animateBox(boxRefs[12], -200, undefined, 1)
                animateBox(boxRefs[13], undefined, -200, 0.3)
            }
        })
    }

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.1,
        })

        const currentSection = sectionRef.current

        if (currentSection) {
            observer.observe(currentSection)
        }

        return () => {
            if (currentSection) {
                observer.unobserve(currentSection)
            }
        }
    }, [])

    return (
        <div className="sectionGap overflow-hidden" ref={sectionRef}>
            {/* header for mobile */}
            <div className="md:hidden block ">
                <h1 className="text-[#1E1E1E] chooseUsSamll xs:pb-[20px]  text-center">
                    <span className="text-[#F6941E] ">Study </span> Destination
                </h1>
                <p className="homePara text-[#1E1E1E]/[.8] xs:pb-[30px] text-center ">
                    Discover your ideal study destination with our expert
                    guidance. We help you navigate the best global educational
                    opportunities, tailored to your goals and ambitions. Start
                    your journey towards academic success today!
                </p>
            </div>

            {/* header for large */}
            <div className="hidden md:block text-center">
                <h1 className=" chooseUsSamll lg:pb-[20px] md:pb-[20px] xl:pb-[20px] pb-[20px] xs:pb-[20px] text-[#1E1E1E]">
                    <span className="text-[#F6941E] ">Study </span> Destination
                </h1>

                <p className=" text-[#1E1E1E]/[.8] max-w-[750px] mx-auto xl:pb-[30px] pb-[30px] xs:pb-[30px] homePara">
                    Discover your ideal study destination with our expert
                    guidance. We help you navigate the best global educational
                    opportunities, tailored to your goals and ambitions. Start
                    your journey towards academic success today!
                </p>

                <p className="md:hidden block homePara text-[#1E1E1E]/[.8] xl:mr-[563px] 2xl:mr-[563px] lg:mr-[320px] md:mr-[120px] xl:pb-[30px] 2xl:pb-[30px] pb-[30px] xs:pb-[30px]">
                    Discover your ideal study destination with our expert
                    guidance. We help you navigate the best global educational
                    opportunities, tailored to your goals and ambitions. Start
                    your journey towards academic success today!
                </p>
            </div>

            {/* boxes for large */}
            <div className="hidden md:block">
                <div
                    className="grid md:grid-cols-3 grid-cols-1 md:gap-[25px]"
                    // ref={sectionRef}
                >
                    {/* usa */}
                    <div
                        ref={boxRefs[6]}
                        className="relative group w-full h-[267px] "
                    >
                        <LazyLoadImage
                            src="https://i.ibb.co.com/JkjRg9s/frame-18-2-66e0a3febd983.webp"
                            alt="United States"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h1 className="united">United States</h1>
                            <Link to="/studyDistention?country=USA">
                                <button className="flex items-center justify-center readMore ">
                                    Read more{" "}
                                    <MdArrowRightAlt className="ml-2" />
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* uk */}

                    <div
                        ref={boxRefs[7]}
                        className="relative group w-full h-[267px] "
                    >
                        <LazyLoadImage
                            src="/tower-bridge-london-uk.jpg"
                            alt="United States"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h1 className="united">Uk</h1>
                            <Link to="/studyDistention?country=UK">
                                <button className="flex items-center justify-center readMore ">
                                    Read more{" "}
                                    <MdArrowRightAlt className="ml-2" />
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Canada */}
                    <div
                        ref={boxRefs[13]}
                        className="relative group w-full h-[267px] "
                    >
                        <LazyLoadImage
                            src="/canadaStudy.jpg"
                            alt="United States"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h1 className="united">Canada</h1>
                            <Link to="/studyDistention?country=Canada">
                                <button className="flex items-center justify-center readMore ">
                                    Read more{" "}
                                    <MdArrowRightAlt className="ml-2" />
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Australia */}
                    <div
                        ref={boxRefs[8]}
                        className="relative group w-full h-[267px] "
                    >
                        <LazyLoadImage
                            src="https://i.ibb.co.com/6sLjbDZ/image-8-2-66e0a5ce77b18.webp"
                            alt="United States"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h1 className="united">Australia</h1>
                            <Link to="/studyDistention?country=Australia">
                                <button className="flex items-center justify-center readMore ">
                                    Read more{" "}
                                    <MdArrowRightAlt className="ml-2" />
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Europe */}
                    <div
                        ref={boxRefs[11]}
                        className="relative group w-full h-[267px]"
                    >
                        <LazyLoadImage
                            src="https://i.ibb.co.com/GPmQbs2/ireland-6717714b87c95.webp"
                            alt="United States"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h1 className="united">Europe</h1>
                            <Link to="/studyDistention?country=UK">
                                <button className="flex items-center justify-center readMore ">
                                    Read more{" "}
                                    <MdArrowRightAlt className="ml-2" />
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Malaisia */}

                    <div
                        ref={boxRefs[12]}
                        className="relative group w-full h-[267px] "
                    >
                        <LazyLoadImage
                            src="/malaysiaStudy.webp"
                            alt="United States"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h1 className="united">Malaysia</h1>
                            <Link to="/studyDistention?country=Malaysia">
                                <button className="flex items-center justify-center readMore ">
                                    Read more{" "}
                                    <MdArrowRightAlt className="ml-2" />
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div
                        ref={boxRefs[10]}
                        className=" relative group w-full h-[267px] "
                    >
                        <LazyLoadImage
                            src="/chinaGreatWall.jpg"
                            alt="United States"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h1 className="united">China</h1>
                            <Link to="/studyDistention?country=China">
                                <button className="flex items-center justify-center readMore ">
                                    Read more{" "}
                                    <MdArrowRightAlt className="ml-2" />
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div
                        ref={boxRefs[9]}
                        className="relative group w-full h-[267px] "
                    >
                        <LazyLoadImage
                            src="https://i.ibb.co.com/DzDqDPW/europ-671771c9cc68d.webp"
                            alt="United States"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h1 className="united">Germany</h1>
                            <Link to="/studyDistention?country=Germany">
                                <button className="flex items-center justify-center readMore ">
                                    Read more{" "}
                                    <MdArrowRightAlt className="ml-2" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* boxes for mobile */}
            <div className="md:hidden block">
                <div
                    // ref={sectionRef}
                    className="grid 
 grid-cols-1 xs:grid-cols-1 "
                >
                    {/* usa */}
                    <div>
                        <div
                            ref={boxRefs[5]}
                            className="relative group w-full h-[267px] pb-[20px]"
                        >
                            <LazyLoadImage
                                src="https://i.ibb.co.com/JkjRg9s/frame-18-2-66e0a3febd983.webp"
                                alt="United States"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>

                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h1 className="united">United States</h1>
                                <Link to="/studyDistention?country=USA">
                                    <button className="flex items-center justify-center readMore gap-x-[10px]">
                                        Read more <MdArrowRightAlt />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* uk */}
                    <div>
                        <div
                            ref={boxRefs[2]}
                            className="relative group w-full h-[267px] pb-[20px]"
                        >
                            <LazyLoadImage
                                src="/tower-bridge-london-uk.jpg"
                                alt="Australia"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>

                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h1 className="united">Uk</h1>
                                <Link to="/studyDistention?country=Australia">
                                    <button className="flex items-center justify-center readMore gap-x-[10px]">
                                        Read more <MdArrowRightAlt />
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* canada */}

                        <div
                            ref={boxRefs[4]}
                            className=" relative group w-full h-[267px] pb-[20px]"
                        >
                            <LazyLoadImage
                                src="/canadaStudy.jpg"
                                alt="Canada"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>

                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h1 className="united">Canada</h1>
                                <Link to="/studyDistention?country=Canada">
                                    <button className="flex items-center justify-center readMore gap-x-[10px]">
                                        Read more <MdArrowRightAlt />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Australia */}

                    <div>
                        <div
                            ref={boxRefs[2]}
                            className="relative group w-full h-[267px] pb-[20px]"
                        >
                            <LazyLoadImage
                                src="https://i.ibb.co.com/6sLjbDZ/image-8-2-66e0a5ce77b18.webp"
                                alt="Australia"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>

                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h1 className="united">Australia</h1>
                                <Link to="/studyDistention?country=Australia">
                                    <button className="flex items-center justify-center readMore gap-x-[10px]">
                                        Read more <MdArrowRightAlt />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Europe */}
                    <div>
                        <div
                            ref={boxRefs[3]}
                            className="relative group w-full h-[267px] pb-[20px]"
                        >
                            <LazyLoadImage
                                src="https://i.ibb.co.com/GPmQbs2/ireland-6717714b87c95.webp"
                                alt="Ireland"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>

                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h1 className="united">Europe</h1>
                                <Link to="/studyDistention?country=Ireland">
                                    <button className="flex items-center justify-center readMore gap-x-[10px]">
                                        Read more <MdArrowRightAlt />
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div
                            ref={boxRefs[1]}
                            className="relative group w-full h-[267px] pb-[20px]"
                        >
                            <LazyLoadImage
                                src="/malaysiaStudy.webp"
                                alt="UAE"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>

                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h1 className="united">Malaysia</h1>
                                <Link to="/studyDistention?country=China">
                                    <button className="flex items-center justify-center readMore gap-x-[10px]">
                                        Read more <MdArrowRightAlt />
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* china */}
                        <div
                            ref={boxRefs[1]}
                            className="relative group w-full h-[267px] pb-[20px]"
                        >
                            <LazyLoadImage
                                src="/chinaGreatWall.jpg"
                                alt="UAE"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>

                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h1 className="united">China</h1>
                                <Link to="/studyDistention?country=China">
                                    <button className="flex items-center justify-center readMore gap-x-[10px]">
                                        Read more <MdArrowRightAlt />
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Germany */}
                        <div
                            ref={boxRefs[0]}
                            className="relative group w-full h-[267px] pb-[20px]"
                        >
                            <LazyLoadImage
                                src="https://i.ibb.co.com/DzDqDPW/europ-671771c9cc68d.webp"
                                alt="United States"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>

                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h1 className="united">Germany</h1>
                                <Link to="/studyDistention?country=Germany">
                                    <button className="flex items-center justify-center readMore gap-x-[10px]">
                                        Read more <MdArrowRightAlt />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudyDestination
