import { Card } from "./components/Card";

function App() {
  const noticias = [
    {
      id: 1,
      title: "React 19 Lançado",
      headline: "Nova versão com melhorias de performance",
      text: "A equipe React anunciou o lançamento da versão 19 com otimizações significativas de performance e novas features."
    },
    {
      id: 2,
      title: "JavaScript Moderno",
      headline: "ES2024 traz novidades incríveis",
      text: "A especificação ECMAScript 2024 foi finalizada com novos métodos de array e melhorias na manipulação de tipos."
    },
    {
      id: 3,
      title: "Web Components",
      headline: "Futuro do desenvolvimento web",
      text: "Web Components continuam ganhando adoção e são agora suportados por todos os navegadores modernos."
    },
  ];

  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 mt-8">Notícias Tech</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {noticias.map((noticia) => (
            <Card
              key={noticia.id}
              title={noticia.title}
              headline={noticia.headline}
              text={noticia.text}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
