import Cur from "./Cur";
import Weather from "./Weather";
import NavBar from "./NavBar";
import NewsAPI from "./NewsAPI";

export default function App() {
  return (
    <div className="main">
      <NavBar />
      <Cur />
      <Weather />
      <NewsAPI />
    </div>
  );
}
