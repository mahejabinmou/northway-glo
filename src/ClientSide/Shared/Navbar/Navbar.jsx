// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { MdArrowRightAlt, MdClose } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "./Navbar.css";
import Form from "./Form/Form";
import { AppContext } from "../../../store/AppContext";
import StudyTenDestention from "./StudyDestentionFlag/StudyTenDestention";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsDropdown2Open(false);
  };

  const toggleDropdown2 = () => {
    setIsDropdown2Open(!isDropdown2Open);
  };

  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isAboutPage = location.pathname === "/About";
  const isBlogsPage = location.pathname === "/blogs";
  const isContactPage = location.pathname === "/ContactUs";
  const isPhotoGallery = location.pathname === "/photo-gallery";
  const isVideoGallery = location.pathname === "/video-gallery";
  const isServicePage = location.pathname === "/service";
  const isBlog = location.pathname === "/blog/:blogId";
  const { isDropdown2Open, setIsDropdown2Open } = useContext(AppContext);

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const handleMenu = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [onGalarryEnter, setOnGalarryEnter] = useState(false);

  // useEffect(() => {
  //     const handleScroll = () => {
  //         if (window.scrollY > 0) {
  //             setScrolled(true)
  //         } else {
  //             setScrolled(false)
  //         }
  //     }

  //     window.addEventListener("scroll", handleScroll)

  //     return () => {
  //         window.removeEventListener("scroll", handleScroll)
  //     }
  // }, [])

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setIsDropdown2Open(false);
  };

  return (
    <div>
      {/* Fixed Navbar */}
      {/* mobile */}
      <nav
        className={`lg:hidden relative fix  ${scrolled ? "hidden" : ""} 
        `}

        // ${
        //   isHomePage ? "fixed-navbar" : "fixed-navbar"
        // }
      >
        <div className="navbarLeftRightSpace flex justify-between items-center bg-transparent font-helvetica font-normal">
          <div className="headerLogo ">
            <Link to="/" onClick={() => setIsDropdown2Open(false)}>
              <LazyLoadImage
                className="h-full w-full "
                src="https://i.ibb.co/7R7kn56/logo-66ced2cb8a688.webp"
                // style={{
                //   filter: "contrast(2.5) brightness(1.2)",
                // }}
                alt="brand logo"
              />
            </Link>
          </div>
          {/* <div className="h-[30px] -translate-x-[16px]"> */}
          <div className="h-[30px] ">
            <IoMenu
              className={`h-full w-full ${
                isHomePage ? "text-black" : "text-black"
              }`}
              onClick={handleMenu}
            ></IoMenu>
          </div>
          {open && (
            <ul className="px-[32px] py-[12px] absolute top-0 right-0 bg-white w-[100%] z-50 transition-transform duration-1000 ease-in-out">
              <div className="pb-[30px] flex justify-between items-center border-b-2 border-gray-200">
                <div className="headerLogo">
                  <Link to="/">
                    <LazyLoadImage
                      className="h-full w-full object-cover"
                      src="https://i.ibb.co/7R7kn56/logo-66ced2cb8a688.webp"
                      alt="brand logo"
                    />
                  </Link>
                </div>
                <div
                  className="md:text-[38px] text-[35px] font-title"
                  onClick={handleClose}
                >
                  <MdClose className="text-[#7EA254]" />
                </div>
              </div>
              <div className="mobileMenuParent23">
                <Link to="/">
                  <li
                    className={` ${
                      isHomePage
                        ? "text-[#F6941E] hover:text-[#F6941E]"
                        : "text-black hover:text-[#F6941E]"
                    }`}
                  >
                    Home
                  </li>
                </Link>
                <Link to="/About">
                  <li
                    className={` ${
                      isAboutPage ? "text-[#f6941e]" : "text-black"
                    }`}
                  >
                    About Us
                  </li>
                </Link>

                <li className="relative">
                  <button
                    onClick={toggleDropdown2}
                    className="flex items-center w-full text-left px-0 xs:0 text-black hover:text-[#f6941e] focus:outline-none"
                  >
                    Study Destination
                    {isDropdown2Open ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </button>
                  {isDropdown2Open && (
                    <div>
                      <StudyTenDestention
                        setIsDropdown2Open={setIsDropdown2Open}
                        setOpen={setOpen}
                        isMobile={true}
                      />
                    </div>
                  )}
                </li>
                <li className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center w-full text-left px-0 xs:pb-0 text-black hover:text-[#f6941e] focus:outline-none"
                  >
                    Gallery
                    {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </button>
                  {isDropdownOpen && (
                    <ul className=" mt-2 mb-2 min-w-[150px] bg-[#F6941E]/[.2] text-black rounded shadow-lg">
                      <Link to="/photo-gallery">
                        <li
                          className={`px-4 py-[5px] ${
                            isPhotoGallery ? "text-[#F6941E]" : "text-black"
                          }`}
                        >
                          Photo Gallery
                        </li>
                      </Link>
                      <Link to="/video-gallery">
                        <li
                          className={`px-4 pb-[5px] ${
                            isVideoGallery ? "text-[#F6941E]" : "text-black"
                          }`}
                        >
                          Video Gallery
                        </li>
                      </Link>
                    </ul>
                  )}
                </li>

                <Link to="/service">
                  <li
                    className={` ${
                      isServicePage ? "text-[#f6941e]" : "text-black"
                    }`}
                  >
                    Service
                  </li>
                </Link>

                <Link to="/blogs">
                  <li
                    className={` ${
                      isBlogsPage ? "text-[#f6941e]" : "text-black"
                    }`}
                  >
                    Blogs
                  </li>
                </Link>

                <Link to="/contactUs">
                  <li
                    className={` ${
                      isContactPage ? "text-[#f6941e]" : "text-black"
                    }`}
                  >
                    Contact us
                  </li>
                </Link>
              </div>
            </ul>
          )}
        </div>
      </nav>

      {/* large screen nav */}
      <div className="">
        <div
          className={`hidden  lg:block w-full z-50  GlobalBg  shadow-[0_-4px_15px_rgba(50,50,50,0.5),0_4px_15px_rgba(50,50,50,0.5)]`}
        >
          <div className="largeScreenMenu !py-0 h-[50px] bg-transparent font-helvetica font-normal">
            <div className="headerLogo">
              <Link to="/" onClick={() => setIsDropdown2Open(false)}>
                <LazyLoadImage
                  className="h-full w-full object-cover"
                  src="https://i.ibb.co/7R7kn56/logo-66ced2cb8a688.webp"
                  alt="brand logo"
                />
              </Link>
            </div>

            <div className="h-full">
              <div className="mobileMenuParent h-full">
                <Link to="/" className="h-full flex items-center">
                  <li
                    className={` ${
                      isHomePage
                        ? "text-[#F6941E] hover:text-[#F6941E]"
                        : "text-black hover:text-[#F6941E]"
                    }`}
                  >
                    Home
                  </li>
                </Link>

                <Link to="/About" className="h-full flex items-center">
                  <li
                    className={` ${
                      isHomePage
                        ? "text-black"
                        : isAboutPage
                        ? "text-[#f6941e]"
                        : "text-black"
                    }`}
                  >
                    About Us
                  </li>
                </Link>
                <Link className="h-full flex items-center group">
                  <li
                    className=""
                    onMouseEnter={() => setIsDropdown2Open(true)}
                    onMouseLeave={() => setIsDropdown2Open(false)}
                  >
                    {/* Study Menu Item */}
                    <button
                      className={`flex items-center lg:gap-x-[4px] ${
                        isHomePage
                          ? "text-black hover:text-[#f6941e]"
                          : "text-black hover:text-[#f6941e]"
                      }`}
                    >
                      Study Destination
                      {isDropdown2Open ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </button>

                    {/* Dropdown Menu */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 flex invisible justify-center transform transition-all duration-300 ease-in-out ${
                        isDropdown2Open
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      } group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible`}
                      style={{ zIndex: 20 }}
                    >
                      <div className="max-w-[1140px] w-screen shadow-lg rounded-[10px] mt-[42px] bg-white mx-auto py-[50px] px-[50px]">
                        <StudyTenDestention
                          toggleDropdown2={() => setIsDropdown2Open(false)}
                          setIsDropdown2Open={setIsDropdown2Open}
                        />
                      </div>
                    </div>
                  </li>
                </Link>

                {/* Other Menu Items */}
                <div className="h-full flex items-center group">
                  <li className="relative">
                    {/* Gallery Menu Item */}
                    <button
                      onMouseEnter={() => setOnGalarryEnter(true)}
                      onMouseLeave={() => setOnGalarryEnter(false)}
                      // } // Toggle dropdown on click
                      className={`flex items-center gap-x-[4px] ${
                        isHomePage
                          ? "text-black hover:text-[#f6941e]"
                          : "text-black hover:text-[#f6941e]"
                      }`}
                    >
                      Gallery
                      {onGalarryEnter ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </button>

                    {/* Dropdown Menu */}
                    <div>
                      <div
                        className={`absolute opacity-0 invisible none top-full left-0 w-[200px] bg-[#f6941e] rounded shadow-lg transition-all duration-300 ease-in-out transform mt-[42px] ${
                          isDropdown2Open
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4"
                        } group-hover:opacity-100 group-hover:translate-y-0 z-10 group-hover:visible`}
                      >
                        <ul className="text-black">
                          <li className="px-4 py-2 hover:bg-white hover:text-[#f6941e]">
                            <Link to="/photo-gallery">Photo Gallery</Link>
                          </li>
                          <li className="px-4 py-2 hover:bg-white hover:text-[#f6941e]">
                            <Link to="/video-gallery">Video Gallery</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </div>
                {/* Other Menu Items */}
                <Link
                  to="/service"
                  className={`flex items-center ${
                    isHomePage
                      ? "text-black"
                      : isServicePage
                      ? "text-orange-500"
                      : "text-black"
                  }`}
                  onClick={() => setIsDropdown2Open(false)}
                >
                  <li>Service</li>
                </Link>
                <Link
                  to="/blogs"
                  className={` flex items-center ${
                    isHomePage
                      ? "text-black"
                      : isBlogsPage
                      ? "text-orange-500"
                      : "text-black"
                  }`}
                  onClick={() => setIsDropdown2Open(false)}
                >
                  {/* Other Menu Items */}
                  <li>Blogs</li>
                </Link>

                <Link to="/ContactUs" className="h-full flex items-center">
                  <li
                    className={` ${
                      isHomePage
                        ? "text-black"
                        : isContactPage
                        ? "text-orange-500"
                        : "text-black"
                    }`}
                    onClick={() => setIsDropdown2Open(false)}
                  >
                    Contact us
                  </li>
                </Link>
              </div>
            </div>

            {/* Enquire Now Button */}
            <button
              className="navLargeAppoinMent hover:bg-[#F6941E] hover:text-black border border-[#F6941E] flex items-center justify-between text-[#F6941E] bg-white font-bold px-2 rounded"
              onClick={openModal}
            >
              Enquire Now <MdArrowRightAlt />
            </button>

            {/* Modal */}
            {isModalOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                onClick={() => setIsModalOpen(false)}
              >
                <div
                  className="bg-white max-w-3xl max-h-[100vh] w-full p-[50px] top-2 2xl:p-[50px]
                                  shadow-lg relative overflow-y-auto hide-scrollbar"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h2 className="text-center  text-[#1E1E1E] xl:text-[36px] xl:leading-[43.2px] xl:mb-[30px] font-bold  font-helvetica  ">
                    Enquiry Form
                  </h2>
                  <Form
                    setIsModalOpen={isModalOpen}
                    isModalOpen={isModalOpen}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
