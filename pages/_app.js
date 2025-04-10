import AudioPlayer from "@/components/layout/AudioPlayer";
import Layout from "@/components/layout/layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <AudioPlayer />
      <Component {...pageProps} />
    </Layout>
  );
}
