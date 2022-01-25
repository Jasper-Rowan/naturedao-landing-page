import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import CustomNavbar from '../components/CustomNavbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>NatureDAO - Landing Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/Gold Ore.png" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
      </Head>
      <div className={styles.bgWrap}>
        <Image src="/img.jpg" layout="fill" objectFit="cover" quality={100} />
      </div>

      <Container className={styles.main_window} fluid>
        <Row className={styles.row1}>
          <CustomNavbar />
        </Row>
        <Row className={styles.row2}>
          <h1 className={styles.title}>
            <strong>GOLD X CRYPTO</strong>
          </h1>
        </Row>
        <Row className={styles.row3}>
          <Col className={styles.col1} xs={12} sm={true}>
            <h2>
              Merging the <strong>security</strong> and flexibility of cryptocurrency with 
              the <strong>trust</strong> and legacy of gold.{" "}
            </h2>
          </Col>
          <Col className={styles.col2} xs={12} sm={true}>
            <p className={styles.paragraph}>
              Monetize your gold reserves in a fraction of the time, at a
              fraction of the cost. Learn
              how the Eco-vault is democratizing access to gold-backed reserves.

            </p>
          </Col>
        </Row>
      </Container>

      <Container  fluid>
        <Row className={styles.row1}>
          <CustomNavbar />
        </Row>
        <Row className={styles.row2}>
          <h1 className={styles.title}>
            <strong>GOLD X CRYPTO</strong>
          </h1>
        </Row>
        <Row className={styles.row3}>
          <Col className={styles.col1} xs={12} sm={true}>
            <h2>
              Merging the <strong>security</strong> and flexibility of cryptocurrency with 
              the <strong>trust</strong> and legacy of gold.{" "}
            </h2>
          </Col>
          <Col className={styles.col2} xs={12} sm={true}>
            <p className={styles.paragraph}>
              Monetize your gold reserves in a fraction of the time, at a
              fraction of the cost, all with zero environmental impact. Learn
              how the Eco-vault is democratizing access to gold-backed reserves.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
