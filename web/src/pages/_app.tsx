import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { createClient, Provider } from "urql";

const client = createClient({
  url: "http://localhost:3001/graphql",
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Provider value={client}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
