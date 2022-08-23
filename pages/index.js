import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { MdPersonOutline } from "react-icons/md";
import Head from "next/head";
import Typed from "typed.js";
import { AiOutlinePhone, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
export default function Home() {
  const [currYPos, setCurrYPos] = useState(0);
  const [activeScreen, setActiveScreen] = useState("Home");

  // Create reference to store the DOM element containing the animation
  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", changeNavbar);
  }, []);

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

  const changeNavbar = () => {
    console.log(window.scrollY);
    setCurrYPos(window.scrollY);
  };

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const [numOfBox, setNumOfBox] = useState(10);

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
        <div className="px-10 flex flex-row gap-x-5 font-oswald text-xl">
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
            <h1 className="text-8xl ">
              Hi! I&apos;m <span className="font-semibold">Niyoh</span> a{" "}
            </h1>
            <div className="type-wrap  text-8xl">
              <span
                style={{ whiteSpace: "pre" }}
                className="tracking-wide font-semibold text-primary_bg"
                ref={el}
              />
            </div>
            <div className="flex flex-row gap-x-5">
              <motion.button
                className="px-2 py-2 border-b-2 border-primary_bg text-3xl my-5"
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
                className="px-2 py-2 border-b-2 border-primary_bg text-3xl my-5"
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

        <div
          ref={aboutRef}
          className="h-screen max-h-screen w-full bg-mint_pastel snap-start flex flex-row justify-center items-center px-20"
        >
          <motion.div
            className="w-full h-full flex justify-center items-center"
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
            className="px-10 flex flex-col justify-center items-center gap-y-5 w-full font-oswald"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl self-start">About Me</h1>
            <p className="text-3xl leading-relaxed text-justify">
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

        <motion.div
          ref={skillsRef}
          className="h-screen w-full bg-pink_pastel snap-start flex flex-col justify-center items-center py-20"
        >
          <h1 className="text-6xl font-oswald my-10">My Skills</h1>

          <div className="grid grid-cols-5">
            {skillsArr.map((item, index) => (
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="bg-white rounded-md shadow-2xl aspect-square m-5 p-10 flex flex-col justify-center items-center gap-y-2"
              >
                <img className="aspect-square h-20" src={item.img_url} />
                <span className="text-lg font-oswald">{item.title}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div
          ref={projectRef}
          className="h-screen w-full bg-whitish_pastel snap-start flex "
        >
          <h1>wews</h1>
        </div>
        <div
          ref={contactRef}
          className="h-screen w-full bg-yellow_pastel snap-start flex flex-col justify-center items-center py-20 font-oswald gap-y-10"
        >
          <div>
            <h1 className="text-6xl">Contact</h1>
          </div>

          <div className="flex flex-row justify-center items-center gap-x-20">
            <div>
              <div className="flex flex-row gap-x-5">
                <MdAlternateEmail className="text-5xl" />
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1.1 }}
                  href="mailto: niyohedwyn21@gmail.com"
                >
                  <h1 className="text-3xl underline">niyohedwyn21@gmail.com</h1>
                </motion.a>
              </div>
              <div className="flex flex-row gap-x-5">
                <AiOutlinePhone className="text-5xl" />
                <h1 className="text-3xl">+639959223380</h1>
              </div>
            </div>
            <div>
              <div className="flex flex-row gap-x-5">
                <AiFillLinkedin className="text-5xl text-[#0A66C2]" />
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1.1 }}
                  href="https://www.linkedin.com/in/niyoh-edwyn-villanueva-5b2524113/"
                >
                  <h1 className="text-3xl underline">LinkedIn Profile</h1>
                </motion.a>
              </div>
              <div className="flex flex-row gap-x-5">
                <AiFillFacebook className="text-5xl text-[#4267B2]" />
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1.1 }}
                  href="https://www.facebook.com/niyohedwyn.villanueva/"
                >
                  <h1 className="text-3xl underline">Facebook Profile</h1>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
