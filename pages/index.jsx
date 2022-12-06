import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import Image from "next/image";
import developer from "../public/developer.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-9 mb12 flex justify-between">
            <h1 className="text-xl font-burtons">dakshayahuja</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className=" cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
              Dakshay Ahuja
            </h2>
            <h3 className="text-2xl py-2">Front End Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-700">
              Freelancer providing services for programming and design content
              need. Join me down below and let's get cracking!
            </p>
          </div>

          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href="http://twitter.com/dakshayahuja" target="_blank"><AiFillTwitterCircle /></a> 
			<a href="http://linkedin.com/in/dakshayahuja/" target="_blank"><AiFillLinkedin /></a> 
			<a href="http://github.com/dakshayahuja" target="_blank"><AiFillGithub /></a> 
          </div>

          <div className="relative mx-auto w-80 h-80 mt-16 overflow-hidden">
            <Image src={developer}/>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-700">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
			<p className="text-md py-2 leading-8 text-gray-800">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>

		  <div>
			<div></div>
		  </div>
        </section>
      </main>
    </div>
  );
}
