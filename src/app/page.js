import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillLinkedin,
  AiFillMail,
  AiFillTwitterSquare,
} from "react-icons/ai";
import Image from "next/image";
import profileImage from "../../public/profile-removedBackground.png";
import design from "../../public/design.jpg";
import code from "../../public/code.jpg";
import consulting from "../../public/consulting.jpg";

export default function Home() {
  return (
    <div>
      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">developed by Milad</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  resume file
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
              Milad Sadeghi
            </h2>
            <h3 className="text-xl py-2">Sr. Frontend Software Engineer</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              Building high-performance and reliable web applications, Stay
              tuned with me!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-6 py-3 text-gray-600">
            <AiFillMail />
            <AiFillLinkedin />
            <AiFillTwitterSquare />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-600 to-teal-100 rounded-full w-80 h-80 mt-20 overflow-hidden mb-10">
            <Image
              src={profileImage}
              alt="Milad Sadeghi Profile Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>
        <section>
          <div className="mb-12 text-center">
            <h3 className="text-3xl py-1">About me</h3>
            <p className="text-md py2 leading-8 text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Adipisci, animi beatae cumque, esse
              <span className="text-teal-500"> milad</span> ex minus
              necessitatibus nisi non odio omnis optio quasi totam ut vitae.
              Alias cum inventore quia!
            </p>
          </div>
          <div className="mb-12 text-center">
            <h3 className="text-3xl py-1">Services i offer</h3>
            <p className="text-md py2 leading-8 text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Adipisci, animi beatae cumque, esse
              <span className="text-teal-500"> milad</span> ex minus
              necessitatibus nisi non odio omnis optio quasi totam ut vitae.
              Alias cum inventore quia!
            </p>
          </div>
          <div>
            <div className="flex flex-col items-center text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                className="rounded-2xl"
                src={design}
                alt="design image"
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs
              </p>
              <h4 className="py-4 text-teal-600">Design tools i use</h4>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="flex flex-col items-center text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                className="rounded-2xl"
                src={code}
                alt="design image"
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2">Smart coding</h3>
              <p className="py-2">
                Creating elegant designs suited for your needs
              </p>
              <h4 className="py-4 text-teal-600">Design tools i use</h4>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="flex flex-col items-center text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                className="rounded-2xl"
                src={consulting}
                alt="design image"
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Detailed consulting
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs
              </p>
              <h4 className="py-4 text-teal-600">Design tools i use</h4>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
