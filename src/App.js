import React, { useState } from "react";
import Counter from "./components/Counter";
import Paragraph from "./components/Paragraph";
import Salary from "./components/Salary";

const App = () => {
  let [data, setData] = useState(0);
  let [inpValue, setInpValue] = useState("");

  function increment() {
    setData(data + 1);
  }
  function decrement() {
    setData(data - 1);
  }
  let header = "";
  function inpData(e) {
    header = e.target.value;
  }
  // console.log(header);
  function saveAdd() {
    setInpValue(header);
  }

  let employees = [
    { name: "SALAMAT", surname: "BAIKE", days: 20, salaryPerDay: 80 },
    { name: "Dastan", surname: "aaa", days: 15, salaryPerDay: 40 },
    { name: "Emir", surname: "bbb", days: 22, salaryPerDay: 60 },
    { name: "Sheraman", surname: "ccc", days: 15, salaryPerDay: 55 },
    { name: "Albina", surname: "kkk", days: 18, salaryPerDay: 44 },
    { name: "Azret", surname: "hhh", days: 10, salaryPerDay: 22 },
    { name: "Mirdin", surname: "Agai", days: 20, salaryPerDay: 70 },
    { name: "Bayish", surname: "zzz", days: 16, salaryPerDay: 33 },
    { name: "Adilet", surname: "Gazybekov", days: 11, salaryPerDay: 16 },
    { name: "Aidana", surname: "pppp", days: 5, salaryPerDay: 28 },

    { name: "Ilim", surname: "ttt", days: 12, salaryPerDay: 72 },
  ];
  employees.map((item) => {
    // item.name;
  });
  // console.log(array);
  return (
    <div>
      <Counter data={data} increment={increment} decrement={decrement} />
      <Paragraph inpData={inpData} saveAdd={saveAdd} />
      <p>{inpValue}</p>
      <Salary employees={employees} />
    </div>
  );
};

export default App;
