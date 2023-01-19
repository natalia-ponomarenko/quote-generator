import { useState } from "react";
import { Container } from "./components/Container";
import { QuoteBox } from "./components/QuoteBox";

function App() {
  const [quotation, setQuotation] = useState("");
  return (
    <Container>
      <QuoteBox quotation={quotation} setQuotation={setQuotation} />
    </Container>
  );
}

export default App;
