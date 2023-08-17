import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import{ uuid as gid} from "react-uuid";

function App() {
  const dispatch = useDispatch();
  // селектор для получения данных со state. Альтернатива прямому достованию со state
  const cash = useSelector(state => state.cashReducer.cash);
  const customers = useSelector(state => state.customerReducer.customers);

  function addCash(cash) {
    dispatch({ type: "ADD_CASH", payload: cash });
  }
  function getCash(cash) {
    dispatch({ type: "GET_CASH", payload: cash });
  }

  const addCustomer = (name)=>{
    const customer = {
      name,
      id: gid()
    }
    dispatch({type: "ADD_CUSTOMER", payload: customer})
  }

  return (
    <div className="App">
      <div style={{ fontSize: "3rem" }}>{cash}</div>
      <div style={{ display: "flex" }}>
        <button onClick={() => addCash(+prompt())}>Пополнить счет</button>
        <button onClick={() => getCash(+prompt())}>Снять со счета</button>
        <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        // * 3-05
        <button onClick={() => getCash(+prompt())}>Удалить клиента</button>
      </div>
      {customers.length > 0 ?
      <div>
        {customers.map(customer => 
        <div>{customer.name}</div>
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
