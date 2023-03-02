import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import landscape from './landscape.jpg'
import './App.css';
import { Button ,Form,Navbar,Container,Image,Row,Col,Card,Dropdown } from 'react-bootstrap';
import { Lorem } from 'react-lorem-generator';

function App() {
  return (
    <div className="App">
      <Navbar id = "nav" className="navbar-text">
        <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
                Home
            </li>
            
            <li className='nav-item'>
                Models
            </li>

            <li className='nav-item'>
                Order
            </li>
        </ul>
      </Navbar>
      <br></br>
      <br></br>
      <br></br>
      
      <Container id="container">
        <Row className='px-4 my-5'>
          <Col sm={6}>
            <Image id="image" src="https://placehold.jp/800x533.png"/>
          </Col>
          <Col sm={6}>
            <h1> Lorem Ipsum</h1>
            <p id="Text"class="mt-4">
              <Lorem/>
            </p>
          </Col>
        </Row>
        <Row className='px-4 my-5'>
          <Col sm={6}> 
          <h1> Lorem Ipsum</h1>
            <p id="Text"class="mt-4">
              <Lorem/>
            </p>
          </Col>
          <Col sm={6}> <Image id="image" src="https://placehold.jp/800x533.png"/> </Col>
        </Row>
      </Container>
      
      <h1> Check Other Models</h1>
      <br/>
      <br/>
      <Container id="models">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://placehold.jp/286x180.png" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
       </Card>

       <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://placehold.jp/286x180.png" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
       </Card>

       <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://placehold.jp/286x180.png" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
       </Card>
      </Container>
      


      <header className="App-header">
        <Form id="form" className='form-group'>
        <h1>Order it Now !</h1>
            <div className="form-group">
              <label for="exampleInputEmail1">Full Name</label>
              <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Name"/>
              <small id="emailError" class="form-text text-muted"></small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Email Address</label>
              <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Your Email"/>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Phone Number</label>
              <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter Your Phone Number"/>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Country</label>
              <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter Your Country"/>
            </div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Model 1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Model 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Model 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button type="submit" class="btn btn-primary">Submit</Button>
        </Form>

      </header>
      
    </div>
  );
}

export default App;
