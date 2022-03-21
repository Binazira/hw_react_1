import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";

function App() {
  const getArr = (arr) => {
    console.log(arr);
  };
  return (
    <div>
      <Header />,
      <Section />,
      <Footer getArr={getArr} />
    </div>
  );
}

export default App;
