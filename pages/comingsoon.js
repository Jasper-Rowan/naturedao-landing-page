import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import CustomNavbar from "../components/CustomNavbar";
import styles from '../styles/ComingSoon.module.css'




export default function ComingSoon() {

    return (
      <>
        <Head>
          <title>NatureDAO - Landing Page</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossOrigin="anonymous"
          />
        </Head>

        {/* <div className={styles.bgWrap}>
          <Image src="/img.jpg" layout="fill" objectFit="cover" quality={100} />
        </div> */}

        <CustomNavbar />
        <div className="styles.container1">
          <h1>
            <strong className="styles.inner">COMING SOON</strong>
          </h1>
        </div>
      </>
    );
}