import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { FaCheckCircle, FaPlus, FaSearch, FaPen, FaTrashAlt } from 'react-icons/fa';
const Home = ()=>{
    const navigate = useNavigate();
return(
    <>
    <Container className="mt-5 text-center">
      {/* Welcome Section */}
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="display-3 fw-bold text-dark">Welcome to My Redux-Toolkit CRUD Application!</h1>
          <p className="lead text-muted">
            My Redux-Toolkit CRUD (Create, Read, Update, Delete, Search) Application is a powerful and user-friendly tool that allows you to manage and manipulate data effortlessly. Built with React and powered by Bootstrap 5.
          </p>

          <p className="lead">
            This application provides a seamless and intuitive experience for performing CRUD operations on your data.
          </p>

          <div className="mt-5 d-flex justify-content-center gap-4">
            <Button
              variant="primary"
              size="lg"
              className="px-4 d-flex align-items-center gap-2"
              onClick={() => navigate('/user-create')}
            >
              <FaPlus /> Create New User
            </Button>
            <Button
              variant="outline-dark"
              size="lg"
              className="px-4 d-flex align-items-center gap-2"
              onClick={() => navigate('/users')}
            >
              <FaSearch /> Manage Users
            </Button>
          </div>
        </Col>
      </Row>

      {/* Key Features */}
      <Row className="mt-5">
        <Col md={12}>
          <h2 className="display-4 mb-4 text-dark">Key Features</h2>
        </Col>

        {/* Feature Cards */}
        <Col md={4}>
          <Card className="shadow-lg rounded-4 border-0" style={{ backgroundColor: '#f9f9f9' }}>
            <Card.Body className="py-5">
              <FaCheckCircle size={50} color="#007bff" />
              <Card.Title className="mt-3">User-Friendly Interface</Card.Title>
              <Card.Text>
                Our application offers a clean and modern user interface, designed to enhance usability and streamline your workflow.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow-lg rounded-4 border-0" style={{ backgroundColor: '#f9f9f9' }}>
            <Card.Body className="py-5">
              <FaPlus size={50} color="#28a745" />
              <Card.Title className="mt-3">Create</Card.Title>
              <Card.Text>
                Easily create new data entries with our intuitive application.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow-lg rounded-4 border-0" style={{ backgroundColor: '#f9f9f9' }}>
            <Card.Body className="py-5">
              <FaSearch size={50} color="#ffc107" />
              <Card.Title className="mt-3">Read</Card.Title>
              <Card.Text>
                View and retrieve your data with ease in an organized, user-friendly layout.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={4}>
          <Card className="shadow-lg rounded-4 border-0" style={{ backgroundColor: '#f9f9f9' }}>
            <Card.Body className="py-5">
              <FaPen size={50} color="#17a2b8" />
              <Card.Title className="mt-3">Update</Card.Title>
              <Card.Text>
                Update and edit your data entries whenever necessary.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow-lg rounded-4 border-0" style={{ backgroundColor: '#f9f9f9' }}>
            <Card.Body className="py-5">
              <FaTrashAlt size={50} color="#dc3545" />
              <Card.Title className="mt-3">Delete</Card.Title>
              <Card.Text>
                Remove unwanted or outdated data entries effortlessly.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow-lg rounded-4 border-0" style={{ backgroundColor: '#f9f9f9' }}>
            <Card.Body className="py-5">
              <FaSearch size={50} color="#6c757d" />
              <Card.Title className="mt-3">Search</Card.Title>
              <Card.Text>
                Effortlessly search for data entries with powerful search functionality.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Final Call-to-Action */}
      <Row className="mt-5">
        <Col>
          <Button variant="success" size="lg" className="px-5 py-3" onClick={() => navigate('/user-create')}>
            Start Now
          </Button>
        </Col>
      </Row>
    </Container>
    </>
)
}

export default Home