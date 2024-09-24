import Image from "next/image";
import styles from "./page.module.css";
import tshirt from "../../public/assets/tshirt.png";
import getin from "../../public/assets/getin.svg";
import getup from "../../public/assets/signup.svg";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className={styles.merchTitle}>MERCH.JS</h1>

      <div className={styles.page}>
        <main className={styles.main}>
          <Image
            className={styles.logo}
            src={tshirt}
            alt="tshirt"
            width={190}
            height={200}
            priority
          />

          <div className={styles.ctas}>
            <Link href="/LogInPage" className={styles.primary}>
              <Image
                className={styles.logo}
                src={getin}
                alt="login"
                width={20}
                height={20}
              />
              Log In
            </Link>
            <Link href="/SignUpPage" className={styles.secondary}>
              <Image
                className={styles.logo}
                src={getup}
                alt="login"
                width={20}
                height={20}
              />
              Sign Up
            </Link>
          </div>
        </main>
        
      </div>
    </>
  );
}
