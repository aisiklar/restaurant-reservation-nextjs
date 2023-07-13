import { Inter } from "next/font/google";
import styles from "../styles/home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.outerFrame}>
      <main className={styles.innerFrame}>
        {/* NAV BAR */}
        <nav className={styles.navContainer}>
          <div>OpenTable</div>
          <div>
            <button className={styles.buttonSignin}>Sign in</button>
            <button className={styles.buttonSignup}>Sign up</button>
          </div>
        </nav>
        {/* NAV BAR */}
      </main>
      {/* HEADER */}
      <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984]">
        <p className="mt-8 pt-6 text-white text-center text-2xl">
          Find your table for any occasion
        </p>
        {/* SEARCH BAR */}
        <div className="flex flex-row justify-center mt-2">
          <input
            className="rounded mr-2 py-1 px-2 w-80"
            type="text"
            placeholder="State, city or town"
          />
          <button className="bg-red-600 rounded py-1 px-3 text-reg text-white">
            Let&apos;s go..
          </button>
        </div>
      </div>
      {/* SEARCH BAR */}
      {/* HEADER */}
      {/* CARDS */}
      <div className="py-3 px-36 mt-10 flex flex-wrap">
        {/* CARD */}
        <div className="w-72 h-80 m-3 rounded overflow-hidden border cursor-pointer">
          <img src="https://resizer.otstatic.com/v2/photos/wide-huge/2/51363230.webp"></img>
          <div className="m-4">
            <h3 className="font-bold text-[1.3rem] mb-2">Arwin Cihangir</h3>
            <div className="flex items-start">
              <div className="flex mb-2">***</div>
              <p className="ml-4">xx reviews</p>
            </div>
            <div className="flex items-start capitalize">
              <p className="mr-2 text-reg font-light ">international</p>
              <div className="mr-2">.</div>
              <p className="mr-2">$$$</p>
              <div className="mr-2">.</div>
              <p>Sultanahmet</p>
            </div>
            <div>
              <p className="text-sm mt-1 font-bold">booked 3 times today</p>
            </div>
          </div>
        </div>

        {/* CARD */}
      </div>
      {/* CARDS */}
    </main>
  );
}
