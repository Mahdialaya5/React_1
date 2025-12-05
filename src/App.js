import './App.css';
import Description from './components/Description';
import Image from './components/Image';
import Name from './components/Name';
import Price from './components/Price';
// bootstrap =>
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
   
  var firstName=""

  return (
    <div className="App">
      {firstName?<p>Hello</p>:<p>Hello there</p>}
      {firstName? <img src='https://sm.ign.com/ign_fr/cover/a/avatar-gen/avatar-generations_bssq.jpg' alt='photo'/>:null}
      <Card style={{ width: '18rem' }}>  
      <Image/>
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Card.Text>
        <Description/>
        </Card.Text>
        <Price/>
      </Card.Body>
    </Card>
    </div>
  );
}

export default App;
