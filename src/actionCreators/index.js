import trivia from "../apis/trivia";

export const fetchQuestions = difficultyLevel => {
  return async (dispatch, getState) => {
    const response = await trivia.get("/", {
      params: {
        amount: "10",
        category: "9",
        type: "multiple",
        difficultyLevel: difficultyLevel
      }
    });
    console.log(response);
    dispatch({ type: "GET_TRIVIA", payload: response.data.results });
  };
};
