import './ExpenseItem.css'
function ExpenseDetails(props){
    return   <div className='expense-item'>
    <div className='expense-item__price'>{props.title}</div>
    <div className='expense-item__price'>Rs. {props.amount}</div>
    </div>
}
export default ExpenseDetails