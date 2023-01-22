import "./App.css";
import Header from "..//src/components/Header";
import Input from "..//src/components/Input";
import Picture from "..//src/components/Picture";
import Footer from "..//src/components/Footer";
function App() {
  return (
    <div className="App flex flex-col h-screen justify-center items-center gap-[3rem] md:justify-center md:gap-10 lg:gap-4 ">
      <Header />
      <Input />
      <Picture />
      <Footer />
    </div>
  );
}

export default App;
