import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './navbar'
import Card from './card.js'

function App() {
  return (
    <div>
      {<Navbar />}

      <div class="text-center" margin="20px">
        <h1>CS 230L</h1>
          <h2>Section - 003</h2>
          <p>WVU ID: 800383874</p>
          <p>Hi I am Levi</p>
        </div>

      <div class="d-inline-flex" margin="20px">
      {<Card title="Card 1"/>}
      {<Card title="Card 2"/>}
      {<Card title="Card 3"/>}
      </div>
    </div>

    
  );
}

export default App;
