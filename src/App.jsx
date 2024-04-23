import { Form } from "react-bootstrap";
import "./index.css";
import { useRef } from "react";

const API_URL = "https://api.unsplash.com/search/photos";

function App() {
  const searchInput = useRef(null);

  const handleSearch = (event) => {
    event.preventDefault();
  };

  const handleSelection = (selection) => {
    searchInput.current.value = selection;
  };
  return (
    <>
      <div className="container">
        <h1>Mansi Makvana</h1>
        <div className="search-section">
          <Form onSubmit={handleSearch}>
            <Form.Control
              className="search-input"
              type="search"
              placeholder="Type Something to Search "
              ref={searchInput}
            />
          </Form>
        </div>
        <div className="filters">
          <button onClick={() => handleSelection("nature")}>Nature</button>
          <button onClick={() => handleSelection("plants")}>Plants</button>
          <button onClick={() => handleSelection("computer")}>Computer</button>
          <button onClick={() => handleSelection("human")}>Human</button>
        </div>
      </div>
    </>
  );
}

export default App;
