// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import Cur from "./Cur";
import MyState from "./MyState";
import NavBar from "./NavBar";
import NewsAPI from "./NewsAPI";

// `https://api.frankfurter.app/${yesterdayDate}?amount=${amount}&from=${fromCur}&to=${toCur}`,
// `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`,

// const date = new Date().toLocaleDateString("tr-TR").replaceAll(".", "-");

//  GÜNCEL TARİH

// const date = new Date();
// const year = date.getFullYear();
// const month = (date.getMonth() + 1 < 10 ? "0" : "") + (date.getMonth() + 1);
// const day = (date.getDate() < 10 ? "0" : "") + date.getDate();

// const currentDate = `${year}-${month}-${day}`;
// console.log("current", currentDate);

// console.log("yesterday", yesterdayDate);

// const dayOfYesterday = date.slice(0, IndexOfDate) - 1;

export default function App() {
  return (
    <div className="main">
      <NavBar />
      <Cur />
      <MyState />
      <NewsAPI />
    </div>
  );
}
