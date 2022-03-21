// 액션 정의
const ADD_QUESTION = "ADD_QUESTION";

// 액션 생성
export const addQuestion = (payload) => {
  return {
    type: ADD_QUESTION,
    payload,
  };
};

const initialState = {
  questions: [],
};

// 리듀서 생성
export default function questionReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_QUESTION: {
      const currentId = state.questions.length + 1 || 1;
      const today = new Date();
      const mm = today.getMonth();
      const dd = today.getDate();
      console.log(today);
      const question = [
        ...state.questions,
        {
          id: currentId,
          writer: action.payload.newWriter,
          password: action.payload.newPassword,
          phone: action.payload.newPhone,
          email: action.payload.newEmail,
          title: action.payload.newTitle,
          content: action.payload.newContent,
          date: `${mm + 1}.${dd}`,
        },
      ];
      question.sort((a, b) => b.id - a.id);
      return {
        ...state,
        questions: question,
      };
    }
    default: {
      return state;
    }
  }
}
