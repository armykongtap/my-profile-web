import React from "react";
import {
  Col,
  Row,
  Card,
  Container,
  Tabs,
  Tab,
  Image,
  Button,
  ListGroup,
  Modal,
  Form
} from "react-bootstrap";
import userImg from "./Material/user.png";
import "./Profile.css";

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModalEdit: false };
  }

  handleCloseModalEdit = () => this.setState({ showModalEdit: false });
  handleShowModalEdit = () => this.setState({ showModalEdit: true });
  handleSubmit = () => console.log("submit");

  render() {
    return (
      <div className="info">
        <Card>
          <Card.Body>
            <Container>
              <Row>
                <Col lg="auto">
                  <Image src={userImg} roundedCircle />
                </Col>
                <Col id="margin-top-10">
                  <div id="name">
                    <b>Kongtap Aurnlakvilart</b>
                  </div>
                  <div id="about">1 9 9 9 | CP44 | CU101 | BD45</div>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    id="edit-profile"
                    onClick={this.handleShowModalEdit}
                  >
                    Edit Profile
                  </Button>
                </Col>
              </Row>
              <Row id="margin-top-20">
                <Col>
                  <Tabs defaultActiveKey="follower">
                    <Tab eventKey="follower" title="Follower">
                      <UsersList n="5" />
                    </Tab>
                    <Tab eventKey="following" title="Following">
                      <UsersList n="3" />
                    </Tab>
                  </Tabs>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>

        <Modal
          show={this.state.showModalEdit}
          onHide={this.handleCloseModalEdit}
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control placeholder="First Name" />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control placeholder="Last Name" />
                </Form.Group>
              </Form.Row>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>About Me</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
              <Button variant="primary" type="submit" id="right">
                Save
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  tmpcreate() {
    let out = [];
    for (let i = 0; i < this.props.n; i++) {
      out.push(
        <ListGroup.Item key={i}>
          <UserRow />
        </ListGroup.Item>
      );
    }
    return out;
  }
  render() {
    return <ListGroup variant="flush">{this.tmpcreate()}</ListGroup>;
  }
}

class UserRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container className="userrow">
        <Row>
          <Col lg="auto">
            <Image src={userImg} roundedCircle />
          </Col>
          <Col>
            <div>
              <b>Firstname LastName</b>
            </div>
            <div>about me</div>
          </Col>
          <Col lg="auto">
            <Button variant="primary" size="sm">
              Follow
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

class SuggestUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Card>
        <Card.Header>Suggest</Card.Header>
        <Card.Body id="no-padding">
          <UsersList n="4" />
        </Card.Body>
      </Card>
    );
  }
}

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="profile">
        <Container>
          <Row>
            <Col lg="7">
              <Info />
            </Col>
            <Col>
              <SuggestUser />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Profile;
