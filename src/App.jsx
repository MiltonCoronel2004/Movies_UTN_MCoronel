import Card from "./components/Card";
import Container from "./components/Container";

function App() {
  return (
    <main className="min-h-screen bg-gray-950 py-8 px-4">
      <Container>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Container>
    </main>
  );
}

export default App;
