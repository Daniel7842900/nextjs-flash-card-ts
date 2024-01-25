import useData from "./useData";

export interface Quiz {
  question: string;
  answers: {
    answer_a: string | null;
    answer_b: string | null;
    answer_c: string | null;
    answer_d: string | null;
    answer_e: string | null;
    answer_f: string | null;
  };
  correct_answers: {
    answer_a_correct: string | null;
    answer_b_correct: string | null;
    answer_c_correct: string | null;
    answer_d_correct: string | null;
    answer_e_correct: string | null;
    answer_f_correct: string | null;
  };
}

const useQuiz = () => {
  console.log("useQuiz called");
  const BASE_URL = "https://quizapi.io/api/v1/questions";
  const limit = 10;
  const API_KEY = process.env.NEXT_PUBLIC_QUIZ_API_KEY;
  const URL = BASE_URL + "?apiKey=" + API_KEY + "&limit=" + limit;
  return useData<Quiz>(URL);
};

export default useQuiz;
