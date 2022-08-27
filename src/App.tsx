import "./App.css";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { Stack } from "./components/Stack";

function App() {
  return (
    <body className='bg-neutral-light-100 text-neutral-light-100 bg-light-pattern bg-repeat font-switzer overflow-x-hidden'>
      <Navbar />
      <Header />
      <Stack />
    </body>
  );
}

export default App;
