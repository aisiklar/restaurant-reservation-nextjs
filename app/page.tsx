import { Inter } from "next/font/google";
import styles from "../styles/home.module.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="px-24 m-auto bg-white max-w-screen-2xl">
        {/* NAV BAR */}
        <nav className="flex w-full justify-between items-center text-reg ">
          <div>OpenTable</div>
          <div className="">
            <button className={styles.buttonSignin}>Sign in</button>
            <button className={styles.buttonSignup}>Sign up</button>
          </div>
        </nav>
        {/* NAV BAR */}
        {/* HEADER */}
        <div className="h-96 overflow-hidden">
          <div className="bg-center h-full bg-gradient-to-r from-[#0f1f47] to-[#5f6984] flex justify-center items-center">
            <h1 className="text-7xl text-shadow text-white capitalize">
              arwin cihangir
            </h1>
          </div>
        </div>
        {/* HEADER END */}
        {/* RESTAURANT CARD */}
        <div className="flex w-2/3 m-auto -mt-[39px] justify-between items-start  h-auto py-2">
          <div className="flex flex-col w-[70%] bg-white rounded p-3 shadow">
            {/* Rest Card Menu Items */}
            <nav className="flex border-b-2">
              <a href="" className="my-2 mx-4 text-reg">
                Overview
              </a>
              <a href="" className="my-2 mx-4 text-reg">
                Menu
              </a>
            </nav>
            {/* Rest Card Menu Items End */}
            {/* Rest. Title */}
            <div className="border-b-2">
              <p className="text-6xl text-bold mx-2 ">Arwin Cihangir</p>
            </div>
            {/* Rest. Title End */}

            {/* stars and reviews */}
            <div className="flex mt-2 items-center justify-start">
              <p className="mx-2">*****</p>
              <p className="ml-4">xxx reviews</p>
            </div>
            {/* stars and reviews end */}
            {/* Description */}
            <div className="mt-2">
              <p className="mx-2 text-lg font-light">
                lasasassa sasasasasa sasasa sasllasa slasasassa sasasasas
                asasasasasll asasl asasassa asasasasasasa sasasllasas lasasa
                ssasas asasa sasasasas asllasas lasasassa sasasas asasasasas asl
                las aslasas assas
              </p>
            </div>
            {/* Description end */}
            {/* IMAGES */}
            <div>
              <h1 className="font-bold text-2xl mt-10 mb-8 ml-2 pb-4 border-b-2">
                5 Photos
              </h1>
              <div className="flex flex-wrap">
                <Image
                  className="mb-1 mr-1"
                  alt="image"
                  src="https://resizer.otstatic.com/v2/photos/xlarge/2/51416250.webp"
                  height={11 * 16}
                  width={14 * 16}
                ></Image>
                <Image
                  className="mb-1 mr-1"
                  alt="image"
                  src="https://resizer.otstatic.com/v2/photos/xlarge/2/51416269.webp"
                  height={11 * 16}
                  width={14 * 16}
                ></Image>
                <Image
                  className="mb-1 mr-1"
                  alt="image"
                  src="https://resizer.otstatic.com/v2/photos/xlarge/2/51416262.webp"
                  height={11 * 16}
                  width={14 * 16}
                ></Image>
                <Image
                  className="mb-1 mr-1"
                  alt="image"
                  src="https://resizer.otstatic.com/v2/photos/xlarge/2/51416250.webp"
                  height={11 * 16}
                  width={14 * 16}
                ></Image>
                <Image
                  className="mb-1 mr-1"
                  alt="image"
                  src="https://resizer.otstatic.com/v2/photos/xlarge/2/51416255.webp"
                  height={11 * 16}
                  width={14 * 16}
                ></Image>
              </div>
            </div>
            {/* IMAGES end */}
            {/* REVIEWS */}
            <div className="border-b-2 py-2 mb-4">
              <h1 className="ml-4 mt-10 mb-10 font-bold ">
                What 100 people are saying
              </h1>
              <div className="flex flex-col">
                <div className="flex">
                  <div className="flex flex-col ml-2 mr-20 items-center justify-center">
                    <div className="rounded-full bg-blue-400 p-3  text-white">
                      MJ
                    </div>
                    <div>Michael Jordan</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="mb-2">****</div>
                    <div>
                      <p className="text-lg font-light">
                        comments comments comments comments comments comments
                        comments comments
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* REVIEWS end */}
          </div>
          <div className="w-[27%] relative text-reg">
            <div className="fixed w-[20%] bg-white rounded p-3 shadow">
              <div className="text-center border-b pb-2 font-bold">
                <h4 className="mr-7 text-lg">Make a Reservation</h4>
              </div>
              <div className="border-b-2 flex flex-col">
                <label className="my-2" htmlFor="partySize">
                  Party Size
                </label>
                <select className="py-2" name="partySize" id="partysize">
                  <option value="">Select Party Size</option>
                  <option value={1}>1 person</option>
                  <option value={2}>2 people</option>
                </select>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col mt-2 w-[48%]">
                  <label htmlFor="date">Date</label>
                  <input
                    type="text"
                    name="date"
                    placeholder="enter time"
                    className="mt-2 py-3 border-b font-light w-28 text-[14px]"
                  ></input>
                </div>
                <div className="flex flex-col mt-2 w-[48%]">
                  <label htmlFor="time">Time:</label>
                  <select className="mt-2 py-3 border-b" name="time" id="time">
                    <option value="">Select time</option>
                    <option value="">7:30 AM</option>
                    <option value="">9:30 AM</option>
                  </select>
                </div>
              </div>
              <div className="mt-5">
                <button className="bg-red-600 rounded w-full px-4 text-white font-bold h-16">
                  Find a time
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* RESTAURANT CARD END */}
        {/* RESERVATION CARD */}

        {/* RESERVATION CARD end */}
      </main>
    </main>
  );
}
