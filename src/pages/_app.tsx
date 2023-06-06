import { Roboto } from 'next/font/google';
import type { AppProps } from 'next/app';
import { globalStyles } from '../styles/global';
import logoImg from "../assets/logo.svg"
import { Container, Header } from "../styles/pages/app"

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
});

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html, body, input, textarea, button {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      <Container>
        <Header>
          <img src={logoImg.src} alt="" />
        </Header>

        <Component {...pageProps} />
      </Container>
    </>
  );
}