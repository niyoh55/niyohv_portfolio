import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Head from "next/head";
import Typed from "typed.js";
import { AiOutlinePhone, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
export default function Home() {
  const [activeScreen, setActiveScreen] = useState("Home");

  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Software Developer",
        "Front End Developer",
        "Mobile Developer",
        "Problem Solver",
        "Gamer",
      ],
      typeSpeed: 25,
      backSpeed: 50,
      loop: true,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const skillsArr = [
    {
      title: "React",
      img_url: "https://i.ibb.co/ZTbd8XP/react.png",
    },
    {
      title: "React Native",
      img_url: "https://i.ibb.co/ZTbd8XP/react.png",
    },
    {
      title: "Next.js",
      img_url: "https://i.ibb.co/cr9YMGw/nextjs.png",
    },
    {
      title: "Tailwind CSS",
      img_url: "https://i.ibb.co/d5qdjs8/tailwindcss.png",
    },
    {
      title: "Redux",
      img_url: "https://i.ibb.co/TPm5q2q/redux.png",
    },
    {
      title: "Javascript",
      img_url: "https://i.ibb.co/QpJXg0d/javascript.png",
    },
    {
      title: "HTML",
      img_url: "https://i.ibb.co/56ghCdX/html.png",
    },
    {
      title: "CSS",
      img_url: "https://i.ibb.co/7WJ1P1j/css.png",
    },
    {
      title: "Framer",
      img_url: "https://i.ibb.co/zZ1bXc6/framer.png",
    },
  ];

  return (
    <div className="h-full min-h-screen w-full">
      <Head>
        <title>Portfolio</title>
      </Head>

      <motion.header
        className={`flex flex-row justify-center items-center fixed top-0 left-0 w-full text-black py-1 z-[100] bg-white`}
      >
        <div className="flex flex-row justify-center items-center px-10">
          <h1 className="font-oswald font-medium tracking-wider text-3xl">
            niyoh.
          </h1>
        </div>
        <div className="px-10 hidden md:flex flex-row gap-x-5 font-oswald text-xl">
          <motion.button
            className={` ${
              activeScreen == "Home" && "border-primary_bg border-b-2"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.1 }}
            onClick={() => {
              setActiveScreen("Home");
              homeRef.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Home
          </motion.button>
          <motion.button
            className={` ${
              activeScreen == "About" && "border-primary_bg border-b-2"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.1 }}
            onClick={() => {
              setActiveScreen("About");
              aboutRef.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            About
          </motion.button>
          <motion.button
            className={` ${
              activeScreen == "Skills" && "border-primary_bg border-b-2"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.1 }}
            onClick={() => {
              setActiveScreen("Skills");
              skillsRef.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Skills
          </motion.button>
          <motion.button
            className={` ${
              activeScreen == "Projects" && "border-primary_bg border-b-2"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.1 }}
            onClick={() => {
              setActiveScreen("Projects");
              projectRef.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Projects
          </motion.button>
          <motion.button
            className={`${
              activeScreen == "Contact" && "border-primary_bg border-b-2"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.1 }}
            onClick={() => {
              setActiveScreen("Contact");
              contactRef.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact
          </motion.button>
        </div>
      </motion.header>

      <div className="h-screen w-full snap-y snap-mandatory scroll-smooth overflow-y-scroll">
        {/* Home */}
        <div
          ref={homeRef}
          className="h-screen w-full bg-white snap-start flex justify-center items-center font-oswald"
          style={{
            backgroundImage: 'url("https://i.ibb.co/2KWTcz0/6728670.webp")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col justify-center items-center gap-y-5">
            <h1 className="2xl:text-8xl xl:text-6xl lg:text-5xl md:text-5xl sm:text-4xl text-4xl ">
              Hi! I&apos;m <span className="font-semibold">Niyoh</span> a{" "}
            </h1>
            <div className="type-wrap 2xl:text-8xl xl:text-6xl lg:text-5xl md:text-5xl sm:text-4xl text-4xl">
              <span
                style={{ whiteSpace: "pre" }}
                className="tracking-wide font-semibold text-primary_bg"
                ref={el}
              />
            </div>
            <div className="flex flex-row gap-x-5 gap-y-5">
              <motion.button
                className="px-2 py-2 border-b-2 border-primary_bg md:text-3xl sm:text-2xl text-xl sm:my-5"
                whileHover={{ scale: 1.1, color: "#1e3891" }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.1 }}
                onClick={() =>
                  aboutRef.current.scrollIntoView({ behavior: "smooth" })
                }
              >
                Know more about me
              </motion.button>

              <motion.button
                className="px-2 py-2 border-b-2 border-primary_bg md:text-3xl sm:text-2xl text-xl sm:my-5"
                whileHover={{ scale: 1.1, color: "#1e3891" }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.1 }}
                onClick={() =>
                  contactRef.current.scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact Me
              </motion.button>
            </div>
          </div>
        </div>

        {/* About */}
        <div
          ref={aboutRef}
          className="h-screen max-h-screen w-full bg-mint_pastel snap-start flex flex-col xl:flex-row justify-center items-center sm:px-10 md:px-10 2xl:px-20"
        >
          <motion.div
            className="w-full h-full hidden xl:flex justify-center items-center"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src="https://i.ibb.co/k1BZXHv/undraw-Profile-details-re-ch9r.png"
              alt="undraw-Profile-details-re-ch9r"
            />
          </motion.div>

          <motion.div
            className="px-10 flex flex-col justify-center items-center gap-y-5 w-full font-oswald "
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="2xl:text-5xl md:text-4xl sm:text-4xl text-4xl self-start">
              About Me
            </h1>
            <p className="2xl:text-3xl md:text-2xl sm:text-2xl text-xl leading-relaxed text-justify">
              Hi, my name is{" "}
              <span className="text-primary_bg font-semibold">
                Niyoh Edwyn A. Villanueva
              </span>
              . I&apos;m 23 years old and currently living in Rosario, Cavite. I
              graduated in Cavite State University - CCAT Campus with a
              Bachelor&apos;s Degree in Computer Engineering. I have almost 2
              years of experience in the IT industry. Currently, I want to only
              focus on Front End Development specially with Javascript Libraries
              and Frameworks like React, React Native and Next.js.
            </p>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          ref={skillsRef}
          className="h-screen w-full bg-pink_pastel snap-start flex flex-col justify-center items-center py-5 md:py-10 2xl:py-20"
        >
          <h1 className="text-4xl md:text-6xl font-oswald 2xl:my-10">
            My Skills
          </h1>

          <div className="grid grid-cols-3 md:grid-cols-5 w-full md:px-10">
            {skillsArr.map((item, index) => (
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="bg-white rounded-md shadow-2xl aspect-square m-5 p-3 md:p-3 2xl:p-10 flex flex-col justify-center items-center gap-y-2"
              >
                <img
                  className="aspect-square h-10 md:h-16 xl:h-20 2xl:h-32"
                  src={item.img_url}
                />
                <span className="text-xs md:text-lg font-oswald text-center">
                  {item.title}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projects */}
        <div
          ref={projectRef}
          className="h-screen w-full bg-whitish_pastel snap-start flex py-20 font-oswald"
        >
          <div className="flex flex-col w-full h-full">
            <div className="flex justify-center my-5">
              <p className="text-6xl md:text-6xl text-black">Projects</p>
            </div>

            <motion.div
              // initial={{ scale: 0 }}
              // animate={{ scale: 1 }}
              // transition={{ duration: 0.6, delay: 0.3 }}
              className="carousel w-full"
            >
              <div
                id="slide1"
                className="aspect-video carousel-item relative min-w-[30%] w-full bg-contain bg-no-repeat h-auto bg-center bg-whitish_pastel group shadow-2xl"
                style={{
                  backgroundImage: `url("https://i.ibb.co/k9H0GNS/socmed-next.png")`,
                }}
              >
                <div className="flex flex-col justify-center items-center h-full w-full bg-opacity-50 bg-black transition-all duration-300">
                  <p className="text-xl md:text-6xl text-white text-center opacity-100 group-hover:opacity-0 group-hover:hidden transition-all duration-300">
                    Simple Social Media Website
                  </p>
                  <p className="texl-lg md:text-4xl text-white hidden opacity-0 group-hover:opacity-100 group-hover:flex transition-all duration-300 px-20">
                    Create an account and post what you want. (NextJS +
                    TailwindCSS)
                  </p>
                  <a href="https://socmed-next.vercel.app/">
                    <button className="mt-5 py-2 px-5 hidden opacity-0 group-hover:opacity-100 group-hover:flex rounded-sm bg-white text-black ">
                      Visit
                    </button>
                  </a>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>

              <motion.div
                id="slide2"
                className="aspect-video carousel-item relative w-full min-w-[30%] bg-contain bg-no-repeat h-auto  bg-center bg-whitish_pastel group shadow-2xl"
                style={{
                  backgroundImage: `url("https://i.ibb.co/tMQktM7/1657532466504.png")`,
                }}
              >
                <div className="flex flex-col justify-center items-center h-full w-full bg-opacity-50 bg-black transition-all duration-300">
                  <p className="text-xl md:text-6xl text-white text-center opacity-100 group-hover:opacity-0 group-hover:hidden transition-all duration-300">
                    3D Printing Shop(E-Commerce Sample)
                  </p>
                  <p className="texl-lg md:text-4xl text-white hidden opacity-0 group-hover:opacity-100 group-hover:flex transition-all duration-300 px-20">
                    {/* Create your own posts. Like or comment on posts from other
                users. Still adding new features. */}
                    {/* Made with NextJS + TailwindCSS. Still under development. */}
                    3D Printing E-Commerce Shop Concept. (NextJS + TailwindCSS)
                  </p>
                  <a href="https://we-printz.vercel.app/">
                    <button className="mt-5 py-2 px-5 hidden opacity-0 group-hover:opacity-100 group-hover:flex rounded-sm bg-white text-black ">
                      Visit
                    </button>
                  </a>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </motion.div>

              <motion.div
                id="slide3"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="aspect-video carousel-item relative w-full min-w-[30%] bg-contain bg-no-repeat h-auto  bg-center bg-whitish_pastel group shadow-2xl"
                style={{
                  backgroundImage: `url("https://i.ibb.co/ftTpgs0/netflix-clone.png")`,
                }}
              >
                <div className="flex flex-col justify-center items-center h-full w-full bg-opacity-50 bg-black transition-all duration-300">
                  <p className="text-xl md:text-6xl text-white text-center opacity-100 group-hover:opacity-0 group-hover:hidden transition-all duration-300">
                    Netflix Clone
                  </p>
                  <p className="texl-lg md:text-4xl text-white hidden opacity-0 group-hover:opacity-100 group-hover:flex transition-all duration-300 px-20">
                    Browse the latest and trending movies/shows. (NextJS +
                    TailwindCSS)
                  </p>
                  <a href="https://netflix-clone-iota-nine.vercel.app/">
                    <button className="mt-5 py-2 px-5 hidden opacity-0 group-hover:opacity-100 group-hover:flex rounded-sm bg-white text-black ">
                      Visit
                    </button>
                  </a>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide1" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Contact */}
        <div
          ref={contactRef}
          className="h-screen w-full bg-yellow_pastel snap-start flex flex-row-reverse justify-center items-center py-20 font-oswald gap-y-10"
        >
          {/* https://i.ibb.co/RYds9QN/undraw-Contact-us-re-4qqt.png */}

          <motion.div
            className="w-full h-full hidden xl:flex justify-center items-center"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src="https://i.ibb.co/RYds9QN/undraw-Contact-us-re-4qqt.png"
              alt="undraw-Profile-details-re-ch9r"
            />
          </motion.div>

          <motion.div
            className="px-10 flex flex-col justify-center items-center gap-y-10 w-full font-oswald"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h1 className="text-6xl">Contact Me</h1>
            </div>

            <div className="flex flex-col items-start">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-row gap-x-5"
              >
                <MdAlternateEmail className="text-5xl" />
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1.1 }}
                  href="mailto: niyohedwyn21@gmail.com"
                >
                  <h1 className="text-3xl underline">niyohedwyn21@gmail.com</h1>
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex flex-row gap-x-5"
              >
                <AiOutlinePhone className="text-5xl" />
                <h1 className="text-3xl">+639959223380</h1>
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="flex flex-row gap-x-5"
              >
                <AiFillLinkedin className="text-5xl text-[#0A66C2]" />
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1.1 }}
                  href="https://www.linkedin.com/in/niyoh-edwyn-villanueva-5b2524113/"
                >
                  <h1 className="text-3xl underline">LinkedIn Profile</h1>
                </motion.a>
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="flex flex-row gap-x-5"
              >
                <AiFillFacebook className="text-5xl text-[#4267B2]" />
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1.1 }}
                  href="https://www.facebook.com/niyohedwyn.villanueva/"
                >
                  <h1 className="text-3xl underline">Facebook Profile</h1>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
