import { TitleNameApp } from './componets/TitleNameApp/TitleNameApp';
import { InputNumber } from './componets/InputNumber/InputNumber';
import './App.css';

function App() {
  let title = "Counter App Juan Sebastian"

  const handleIncrement = () => {
    console.log('Deberia sumar')
  }

  return (
    <div className="App">
      <TitleNameApp texto={title} />
      <InputNumber />
      <div className="button_option">
        <div>
          <button className="increment" onClick={handleIncrement}>Increment</button>
        </div>
        <div>
          <button className="decrement">Decrement</button>
        </div>
        <div>
          <button className="reset">Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
