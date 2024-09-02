import { Helmet, HelmetProvider } from "react-helmet-async";
import PropType from "prop-types";

import Header from "./Header";
import Footer from "./Footer";

const Main = function (props) {
  return (
    <HelmetProvider>
      <Helmet
        titleTemplate="%s | Webs Youtube"
        defaultTitle="Webs Youtube"
        defer={false}
      >
        {props.title && <title>{props.title}</title>}
        <meta name="description" content={props.description} />
      </Helmet>

      <Header />
      <main id="main" role="main">
        {props.children}
      </main>
      <Footer />
    </HelmetProvider>
  );
};

Main.propTypes = {
  title: PropType.string,
  description: PropType.string.isRequired,
};

export default Main;
