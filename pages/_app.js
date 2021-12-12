import "../styles/globals.css";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
