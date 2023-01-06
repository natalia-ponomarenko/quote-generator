import { useState } from "react";
import { Container } from "./components/Container";
import { QuoteBox } from "./components/QuoteBox";

function App() {
  const [quotation, setQuotation] = useState("");
  return (
    <div className="App">
      <Container>
      <QuoteBox quotation={quotation} setQuotation={setQuotation} />
      </Container>
      </div>
  );
}

export default App;
