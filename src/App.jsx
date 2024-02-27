import "./App.css";
import { data } from "./data/cardData";
import { listData } from "./data/cardData";
import Card from "./components/Card";
import Card2 from "./components/Card2";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SignUp from "./components/SignUp";
function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <Header/>
        <div className="flex flex-col w-4/5 ">
          {listData.map((item) => (
            <Card
              key={item.num}
              tag={item.tag}
              num={item.num}
              heading1={item.heading1}
              content1={item.content1}
              content2={item.content2}
              offer={item.offer}
              ratingvalue={item.ratingvalue}
              rating={item.rating}
              stars={item.stars}
              extraContent={item.extraContent}
            />
          ))}
        </div>
        <div className="flex flex-row justify-evenly">
          {data.map((item) => (
            <Card2
              key={item.num}
              tag1={item.tag1}
              tag2={item.tag2}
              heading={item.heading}
              content={item.content}
              discPrize={item.discPrize}
              Amount={item.Amount}
              discount={item.discount}
            />
          ))}
        </div>
        <SignUp/>
      </div>
      <Footer />
    </>
  );
}

export default App;
