import Head from 'next/dist/shared/lib/head';
import { Box } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';
// import { defaultConfig } from "next/dist/server/config-shared";
 function Layout({ children }) {
    return (
      <>
        <Head>
          <title>Real Estate</title>
        </Head>
        <Box maxWidth='1280px' m='auto'>
          <header>
            <Navbar />
          </header>
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </Box>
      </>
    );
  }
  
export default Layout;