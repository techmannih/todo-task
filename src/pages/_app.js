import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store"; 
import Layout from "./layout";
import "./style/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default MyApp;
