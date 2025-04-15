import AudioPlayer from "@/components/layout/AudioPlayer";
import Layout from "@/components/layout/layout";
import "@/styles/globals.css";
import "@/styles/preloader.css";

import { AnimatePresence, motion } from "framer-motion";
export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <AnimatePresence exitBeforeEnter> */}
      {/* <motion.div
          key="layout"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.5 }}
        > */}
      <Layout>
        <AudioPlayer />
        <Component {...pageProps} />
      </Layout>
      {/* </motion.div> */}
      {/* </AnimatePresence> */}
    </>
  );
}
