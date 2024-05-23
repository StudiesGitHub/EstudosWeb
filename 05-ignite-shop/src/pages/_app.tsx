import { Roboto } from "next/font/google";
import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"

import logoImg from "../assets/logo.svg"
import { Container, Header } from "../styles/pages/app"

import Image from "next/image";

globalStyles()

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400','700']
})

export default function App({ Component, pageProps }: AppProps) {
  return (<main className={roboto.className}>
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container>
  </main>)
}
