import Foot from "./componenets/Footer/Foot";
import Head from "./componenets/header/Head";
import { ItemContexProvider } from "./componenets/ProductContex/ItemsContex";
import Router from "./componenets/Main/paging/Router";

function App() {
  return (
    <>
      <ItemContexProvider>
        <Head />
        <Router />
        <Foot />
      </ItemContexProvider>
    </>
  );
}

export default App;
