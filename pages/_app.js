import "../styles/globals.css";
import Layout from "../components/Layout";
import { UserContext } from "../context/user";

function MyApp({ Component, pageProps }) {
  return (
    <UserContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContext>
  );
}

export default MyApp;
