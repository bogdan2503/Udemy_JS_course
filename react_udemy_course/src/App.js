import CostItem from "./components/CostItem";

function App() {
  let costs = [
    {
      date: new Date(2020, 1, 12),
      description: "Refrigeratos",
      amount: 3000,
    },
    {
      date: new Date(2021, 2, 11),
      description: "Trousers",
      amount: 10,
    },
    {
      date: new Date(2021, 3, 10),
      description: "Headphone",
      amount: 200,
    },
    {
      date: new Date(2010, 3, 10),
      description: "Iphone",
      amount: 600,
    },
  ];

  return (
    <div>
      <h1>Почнем вивчення React!!!</h1>
      <CostItem
        date={costs[0].date}
        description={costs[0].description}
        amount={costs[0].amount}
      />
      <CostItem
        date={costs[1].date}
        description={costs[1].description}
        amount={costs[1].amount}
      />
      <CostItem
        date={costs[2].date}
        description={costs[2].description}
        amount={costs[2].amount}
      />
      <CostItem
        date={costs[3].date}
        description={costs[3].description}
        amount={costs[3].amount}
      />
    </div>
  );
}

export default App;
