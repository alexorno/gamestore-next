import React from 'react';
import Layout from '../components/Layout';
import { StateContext } from '../context/StateContext';
import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';


function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Toaster />
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </StateContext>
  )
}

export default App
