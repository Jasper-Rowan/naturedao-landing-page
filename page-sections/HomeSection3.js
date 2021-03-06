import { Container, Row, Col } from "react-bootstrap";
import Tile from "../components/Tile";
import styles from "../styles/HomeSection/HomeSection3.module.css";


const HomeSection3 = () => {
    return ( 
        <Container fluid className={styles.main_window}>
            <Row className={styles.row1}> 
                <div> -------- WHY CHOOSE GREENVAULT </div> 
            </Row>

            <Row className={styles.row2}>
                <Col lg={3} md={6} className={styles.col}> 
                    <Tile image_link={"/BlueIcon.svg"} heading={"Liquidating Unmined Gold"} body={"Unmined gold has never had a simple investment vehicle until now"}/> 
                        
                </Col> 
                <Col lg={3} md={6} className={styles.col}> 
                    <Tile image_link={"/GreenIcon.svg"} heading={"Low transaction fees"} body={"Utilizing cutting edge Proof of Stake blockchain technologies keeps fees low. "}/> 
                </Col> 
                <Col lg={3} md={6} className={styles.col}> 
                    <Tile image_link={"/GrayIcon.svg"} heading={"Protect the environment"} body={"GreenVault has the infrastructure to protect millions of hectares of land"}/> 
                </Col> 
                <Col lg={3} md={6} className={styles.col}> 
                    <Tile image_link={"/GoldIcon.svg"} heading={"Security & Control"} body={"Maximum security allows users to sleep easy knowing their assets are safe"}/>
                </Col> 
            </Row> 
        </Container>
     );
}
 
export default HomeSection3;