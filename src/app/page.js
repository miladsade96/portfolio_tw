import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillLinkedin,
  AiFillMail,
  AiFillTwitterSquare,
} from "react-icons/ai";
import Image from "next/image";
import profileImage from "../../public/profile-removedBackground.png";
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
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <Image
              src={profileImage}
              alt="Milad Sadeghi Profile Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
