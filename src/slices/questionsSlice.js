import { createSlice, createEntityAdapter, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchExistedQuestions = createAsyncThunk(
  'questions/getExistedQuestionsData',
  async (user) => {
    const response = await axios({ method: 'get', url: 'someURL', headers: { Authorization: `Bearer ${user?.token}` } });
    return response.data;
  },
);

const questionsAdapter = createEntityAdapter();
const initialState = questionsAdapter.getInitialState({
  questions: [{
    id: 1,
    name: 'test question 1',
    description: 'long descr long descr long descr long descr long descr',
    isRightAnswerKnown: true,
    rightAnswer: 'hello',
    questionStatus: 'being asked', // not asked, answered right, answered wrong
  },
  {
    id: 2,
    name: 'test question 2',
    description: 'long descr 2 long descr 2 long descr 2 long descr 2 long descr',
    isRightAnswerKnown: false,
    rightAnswer: null, // need to be checked later on frontend after user's job
    questionStatus: 'not asked', // answered right, answered wrong
  }],
});

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    addQuestions: questionsAdapter.addMany,
    // checkAnswer: questionsAdapter.addOne,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExistedQuestions.fulfilled, (state, action) => {
        const { questions } = action.payload;
        questionsAdapter.setAll(state, questions);
      });
  },
});

export default questionsSlice.reducer;
export const { actions } = questionsSlice;
export { fetchExistedQuestions };
export const selectors = questionsAdapter.getSelectors((state) => state.questions);
