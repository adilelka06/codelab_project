import ListGroup from "./components/ListGroup";

function App() {
  let items = ["jan", "kees", "lonk", "cronk", "mohammed"];

  const handleSelectItem = (item: string) => {
    console.log("item selected:", item);
  }

  return <div><ListGroup items={items} heading="names" onSelectItem={handleSelectItem} /></div>;
}

export default App;