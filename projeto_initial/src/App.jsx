import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { Principal } from "./components/Principal.jsx";

function App() {
  return (
    <>
      <Header />
      <main className="p-4">
        <p>Bem-vindo!</p>
        <Principal />
      </main>
      <Footer />
    </>
  );
}

export default App;
