import React from "react";
import { Button, ListGroup, Container, Jumbotron } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "./welcome.scss";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      difficulty: "",
      colorEasy: "",
      colorMedium: "",
      colorDifficulty:""
    };
  }

  render() {
    return (
      <Jumbotron>
        <Container>
          <h1>Welcome To Quiz App </h1>
          <h3>Please Select the Level of Difficulty to Go Ahead </h3>
          <ListGroup as="ul" className="tabs">
            <ListGroup.Item
              as="li"
              className="easy"
              style={{ backgroundColor: this.state.colorEasy }}
              onClick={() => {
                //this.showQuiz("easy");
                this.setState({ difficulty: "easy", colorEasy: "#337ab7",colorMedium:"#FFF",colorDifficulty:"#FFF" });
              }}
            >
              Easy
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="easy"
              style={{ backgroundColor: this.state.colorMedium }}
              onClick={() => {
                this.setState({ difficulty: "medium", colorEasy: "#FFF",colorMedium:"#337ab7",colorDifficulty:"#FFF" });
              }}
            >
              Medium
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="easy"
              style={{ backgroundColor: this.state.colorDifficulty }}
              onClick={() => {
                this.setState({ difficulty: "difficult", colorEasy: "#FFF",colorMedium:"#FFF",colorDifficulty:"#337ab7" });
              }}
            >
              {" "}
              Difficult
            </ListGroup.Item>
          </ListGroup>
          ;
          <p>
            <Button variant="primary" onClick={this.handleSubmit}>
              Start Quiz
            </Button>
          </p>
        </Container>
      </Jumbotron>
    );
  }
  handleSubmit = () => {
    console.log({ log: this.state.difficulty });
    this.props.history.push(`/${this.state.difficulty}`);
  };

  showQuiz = Difficulty => {
    this.props.history.push(`/${Difficulty}`);
  };
}

export default withRouter(Welcome);
