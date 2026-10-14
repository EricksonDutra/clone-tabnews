import "../styles/studies.css";
import "../styles/night.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return <Component key={router.asPath.split("?")[0]} {...pageProps} />;
}
