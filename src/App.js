import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expense=[
    {date:'2023 2 12',title:'Food',amount:500,locationOfExpenditure:'Mumbai'},
    {date:'2023 2 11',title:'Shopping',amount:300,locationOfExpenditure:'Delhi'},
    {date:'2023 2 10',title:'Travel',amount:5000,locationOfExpenditure:'Chennai'},
    {date:'2023 2 13',title:'Team celebration',amount:50,locationOfExpenditure:'Kerla'},
]
  return (
    <div>
      <h2>Let's get started!</h2>
      
     {expense.map((item,index)=>{
         return <ExpenseItem title={item.title} date={item.date} amount={item.amount} locationOfExpenditure={item.locationOfExpenditure}></ExpenseItem>
     })}
      </div>
  );
}

export default App;
