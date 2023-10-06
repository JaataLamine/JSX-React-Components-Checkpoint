import './App.css';
import Description from './components/Description';
import Name from './components/Name';
import Price from './components/Price';
import Image from './components/Image';
import image from './images/boat.png'
import { Alert, Card, Col } from 'react-bootstrap';

// Variables
const style = {fontSize: '1.5rem', fontWeight: 600, width: '30rem', margin: '10px auto', padding: '5px 0 0 10px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}
const firstName =  "Lamine" //prompt("Submit your first name: ")

function App() {
  return (
    <Col sm={4} style={{margin:'10px auto'}}>
      <Card style={{ width: '30rem', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
        <Image />
        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card> 
      <Alert variant='primary' style={style}>
        {firstName ? <p>Hello, <em>{firstName}</em></p> : <p>Hello, <em>there!</em></p>}
      </Alert> 
      {firstName ? <img style={{borderRadius: 7, width: '30rem', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}} src={image} alt='its a boat' /> : <></>}
    </Col>
  )
}

export default App;