import './ExpenseItem.css'
function ExpenseItem(props){
    return (<div className='expense-item'>
    <h2>Expense Items</h2>
    <div className='expense-item__description'>{props.date}</div>
    <div className='expense-item__description'>{props.locationOfExpenditure}</div>
    <div className='expense-item__description'>{props.title}</div>
    <div className='expense-item__price'>Rs. {props.amount}</div>
	</div>)
}

export default ExpenseItem;