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
  Form,
} from "react-bootstrap";
import userImg from "./Material/user.png";
import "./Profile.css";

class MyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModalEdit: false, userData: {} };
  }

  handleCloseModalEdit = () => this.setState({ showModalEdit: false });
  handleShowModalEdit = () => this.setState({ showModalEdit: true });

  async componentDidMount() {
    await fetch("http://localhost:8000/users/" + this.props.profileUserId + "/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let tempData = this.state.userData;
        tempData["firstName"] = data.firstName;
        tempData["lastName"] = data.lastName;
        tempData["about"] = data.about;
        this.setState({
          userData: tempData,
        });
      });
  }

  render() {
    return (
      <div className="my-profile">
        <Card>
          <Card.Body>
            <Container>
              <Row>
                <Col lg="auto">
                  <Image src={userImg} roundedCircle />
                </Col>
                <Col id="margin-top-10">
                  <div id="name">
                    <b>{this.state.userData.firstName + " " + this.state.userData.lastName}</b>
                  </div>
                  <div id="about">{this.state.userData.about}</div>
                  {parseInt(sessionStorage.getItem("id")) === this.props.profileUserId ? (
                    <Button
                      variant="outline-primary"
                      size="sm"
                      id="edit-profile"
                      onClick={this.handleShowModalEdit}
                    >
                      Edit Profile
                    </Button>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
              <Row id="margin-top-20">
                <Col>
                  <Tabs defaultActiveKey="follower">
                    <Tab eventKey="follower" title="Follower">
                      <Follower profileUserId={this.props.profileUserId} />
                    </Tab>
                    <Tab eventKey="following" title="Following">
                      <Following profileUserId={this.props.profileUserId} />
                    </Tab>
                  </Tabs>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>

        <Modal show={this.state.showModalEdit} onHide={this.handleCloseModalEdit} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Edit Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ProfileEditForm
              profileUserId={this.props.profileUserId}
              firstName={this.state.userData.firstName}
              lastName={this.state.userData.lastName}
              about={this.state.userData.about}
            />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

class ProfileEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: {
        userId: this.props.profileUserId,
        firstName: this.props.firstName,
        lastName: this.props.lastName,
        about: this.props.about,
      },
    };
    this.handleChange.bind(this);
    this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    let tempData = this.state.postData;
    tempData[e.target.name] = e.target.value;
    this.setState({
      postData: tempData,
    });
  };

  handleSubmit = async (e) => {
    await fetch("http://localhost:8000/users/" + this.state.postData.userId + "/", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state.postData),
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              name="firstName"
              value={this.state.postData.firstName}
              type="text"
              placeholder="First Name"
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name="lastName"
              value={this.state.postData.lastName}
              type="text"
              placeholder="Last Name"
              onChange={this.handleChange}
              required
            />
          </Form.Group>
        </Form.Row>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>About Me</Form.Label>
          <Form.Control
            type="text"
            name="about"
            value={this.state.postData.about}
            placeholder="About"
            onChange={this.handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" id="right">
          Save
        </Button>
      </Form>
    );
  }
}

class Follower extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  async componentDidMount() {
    await fetch("http://localhost:8000/follower/" + this.props.profileUserId + "/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ data: data });
      });
  }

  render() {
    return (
      <ListGroup variant="flush">
        {this.state.data.map((u) => {
          return <UserRow key={u.userId_A} rowId={u.userId_A} />;
        })}
      </ListGroup>
    );
  }
}

class Following extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  async componentDidMount() {
    await fetch("http://localhost:8000/following/" + this.props.profileUserId + "/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ data: data });
      });
  }

  render() {
    return (
      <ListGroup variant="flush">
        {this.state.data.map((u) => {
          return <UserRow key={u.userId_B} rowId={u.userId_B} />;
        })}
      </ListGroup>
    );
  }
}

class UserRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: { firstName: "", lastName: "", about: "" } };
  }

  async componentDidMount() {
    await fetch("http://localhost:8000/users/" + this.props.rowId + "/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ data: data });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  render() {
    console.log(this.state);
    return (
      <ListGroup.Item>
        <Container className="userrow">
          <Row>
            <Col lg="auto">
              <Image src={userImg} roundedCircle />
            </Col>
            <Col>
              <div>
                <b>{this.state.data.firstName + " " + this.state.data.lastName}</b>
              </div>
              <div>{this.state.data.about}</div>
            </Col>
            <Col lg="auto">
              <Button variant="primary" size="sm">
                Follow
              </Button>
            </Col>
          </Row>
        </Container>
      </ListGroup.Item>
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
          <ListGroup variant="flush">
            <ListGroup.Item key={1}>
              <UserRow />
            </ListGroup.Item>
          </ListGroup>
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
              <MyProfile profileUserId={parseInt(this.props.params.profileUserId)} />
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
