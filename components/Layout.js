import CustomNavbar from "./CustomNavbar";
import Footer from "./Footer";
import Head from "next/head";
import Background from "./Background";


const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>GreenVault</title>
        <meta name="description" content="The landing page for GreenVault the world leader in profitable conservation." />
        <link rel="icon" href="/GoldDAO_Ore.png" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
      </Head>
      
      <CustomNavbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
