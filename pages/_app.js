import '../styles/globals.css'
import Container from "../components/container";
import Router from "next/router";
import {useState, useEffect} from 'react';

function App({ Component, pageProps }) {
  return (
  <Container>
    <Component {...pageProps} />
  </Container>
  )
}

export default App
