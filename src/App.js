import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import uuid from "react-uuid";
import { ADD_CASH, GET_CASH } from "./store/cashReducer";
import { ADD_CUSTOMER, REMOVE_CUSTOMER, addCustomerAction, removeCustomerAction } from "./store/customerReducer";
import { fetchCustomers } from "./asyncAction/customers";

function App() {
  const dispatch = useDispatch();
  // селектор для получения данных со state. Альтернатива прямому достованию со state
  const cash = useSelector(state => state.cashReducer.cash);
  const customers = useSelector(state => state.customerReducer.customers);

  function addCash(cash) {
    dispatch({ type: ADD_CASH, payload: cash });
  }
  function getCash(cash) {
    dispatch({ type: GET_CASH, payload: cash });
  }

  const addCustomer = (name)=>{
    const customer = {
      name,
      id: uuid()
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (id)=>{
    dispatch(removeCustomerAction(id))
  }

  const addManyCustomers=()=>{
    dispatch(fetchCustomers())
  }

  return (
    <div className="App">
      <div style={{ fontSize: "3rem" }}>{cash}</div>
      <div style={{ display: "flex" }}>
        <button onClick={() => addCash(+prompt())}>Пополнить счет</button>
        <button onClick={() => getCash(+prompt())}>Снять со счета</button>
        <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        <button onClick={() => addManyCustomers()}>Получать клиентов из базы</button>
      </div>
      {customers.length > 0 ?
      <div>
        {customers.map(customer => 
        <div onClick={() => removeCustomer(customer.id)} style={{fontSize: "2rem", border: '1px solid black', padding: '10px', marginTop: 5}}>{customer.name}</div>
          )}
      </div>
:
      <div style={{fontSize: '2rem', marginTop: '50px'}}>
        Клиенты отсутствуют
      </div>
    }
    </div>
  );
}

export default App;
