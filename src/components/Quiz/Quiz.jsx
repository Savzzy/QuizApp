import React from "react";
import { connect } from "react-redux";
import equal from "fast-deep-equal";
import Question from "../Question/Question";
import { fetchQuestions } from "../../actionCreators";


import "./quiz.scss";

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: props.question
    };
  }

  componentWillMount() {
    this.props.fetchQuestions(this.props.match.params.difficulty);
  }

  componentDidUpdate(prevProps) {
    if (!equal(this.props.questions, prevProps.questions)) {
      this.setState({
        questions: this.props.questions
      });
    }
  }

  render() {
    return (
      <div className="quizContainer">
        {this.displayQuestions(this.state.questions)}
      </div>
    );
  }

  displayQuestions = (questions = []) => {
    let questionsUI = [];

    questionsUI = questions.map((question, i) => {
      return <Question q={question} key={i} />;
    });

    return questionsUI;
  };
}

const mapStateToProps = store => {
  return {
    questions: store.questions
  };
};

export default connect(
  mapStateToProps,
  { fetchQuestions: fetchQuestions }
)(Quiz);
