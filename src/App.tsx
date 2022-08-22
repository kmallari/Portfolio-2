import "./App.css";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";

function App() {
  return (
    <body className='bg-neutral-dark-300 text-neutral-light-100 bg-dark-pattern bg-repeat font-switzer'>
      <Navbar />
      <Header />
    </body>
  );
}

export default App;
