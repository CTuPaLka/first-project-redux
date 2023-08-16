import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  // селектор для получения данных со state. Альтернатива прямому достованию со state
  const cash = useSelector(state => state.cash);

  function addCash(cash) {
    dispatch({ type: "ADD_CASH", payload: cash });
  }
  function getCash(cash) {
    dispatch({ type: "GET_CASH", payload: cash });
  }

  return (
    <div className="App">
      <div style={{ fontSize: "3rem" }}>{cash}</div>
      <div style={{ display: "flex" }}>
        <button onClick={() => addCash(+prompt())}>Пополнить счет</button>
        <button onClick={() => getCash(+prompt())}>Снять со счета</button>
      </div>
    </div>
  );
}

export default App;
