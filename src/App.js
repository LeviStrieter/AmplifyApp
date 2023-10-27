import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './navbar'
import Card from './card.js'

function App() {
  return (
    <div>
      {<Navbar />}
      <div>

      </div>
      <div class="row d-flex " padding="20px">
      {<Card {...18} />}
      {<Card {...18} />}
      {<Card {...18} />}
      </div>
    </div>

    
  );
}

export default App;
