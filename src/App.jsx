import { Outlet } from "react-router-dom";
import Footer from "./component/footer";
import Header from "./component/header";
import FetchItems from "./component/fetchitem";

function App() {
  return (
    <>
      <Header />
      <FetchItems />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
