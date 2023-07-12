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
        <p className="mt-8 pt-6 text-white text-center text-2xl"  >
        Find your table for any occasion
        </p>
      </div>
      {/* HEADER */}
    </main>
  );
}
