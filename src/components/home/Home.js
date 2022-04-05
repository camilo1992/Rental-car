import { Fragment } from "react/cjs/react.production.min";
import Types from "../types/Types";
import Introduction from "../Introduction";
import HowTo from "../how to/HowTo";
import Questions from "../f.a.q/Questions";
import Form from "../form/Form";
import Layout from "../layout/Layout";
import Footer from "../footer/Footer";
import { useEffect } from "react";

const Home = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <Layout onShowRent={props.onShowRent}>
        <Introduction />
        <Types />
        <HowTo />
        <Questions />
        <Form />
      </Layout>
      <Footer />
    </Fragment>
  );
};

export default Home;
