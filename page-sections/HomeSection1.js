import {Container, Row, Col, Button} from "react-bootstrap";
import CountDownClock from "../components/CountDownClock";
import CustomProgressBar from "../components/CustomProgressBar";
import styles from "../styles/HomeSection/HomeSection1.module.css"
import Image from 'next/image';

const HomeSection1 = () => {
    
    
      return (
        <>
          <Container className={styles.container} fluid>
            <Row className={styles.row}>
              <Col xl={8} xs={12} className={styles.left_col}>
                <div className={styles.group1}>
                  <h1 className={styles.h1}>
                    ORE, the <br className={styles.visibleXS} />
                    <span style={{ color: "rgba(135,205,155)" }}>
                      carbon-neutral
                    </span>{" "}
                    cryptocurrency <br className={styles.visibleXS} /> backed by{" "}
                    <br />
                    <span style={{ color: "rgba(224,199,90)" }}>
                      Gold conservation
                    </span>
                  </h1>
                  <p className={styles.p}>
                    The <strong>$500 billion</strong> industry of impact
                    investors has only one way to gain exposure to the{" "}
                    <strong>$10 trillion</strong> gold market:{" "}
                    <strong>GreenVault ORE</strong>. ORE will incentivize a
                    sustainable revolution in the mining industry by tokenizing
                    gold preserved in its <strong>natural</strong> deposit. <br /> <br /> GreenVault aims to
                    capture all future gold that would otherwise end up in ETFs and bank vaults.
                  </p>
                  <Button className={styles.joinButton} href="#bottom">
                    Enter the Vault
                  </Button>
                </div>
                <div className={styles.progressBar}>
                  <CustomProgressBar bgcolor="#3772FF" completed={20} />
                </div>
              </Col>
              <Col xl={true} xs={12} className={styles.right_col}>
                <div className={styles.imgContainer}>
                  <Image src="/GoldGif.gif" width={1920} height={1080} />
                </div>
                <div className={styles.clockContainer}>
                  <CountDownClock />
                </div>
              </Col>
            </Row>
          </Container>
        </>
      );
}
 
export default HomeSection1;