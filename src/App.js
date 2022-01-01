import React from 'react'
import './assets/main.scss';
import './assets/responsive.scss'
import { Route, Routes } from 'react-router';
import LandingPage from './layout/LandingPage';
import TodoAppLanding from './layout/TodoAppLanding';
import MovieAppLanding from './layout/MovieAppLanding';
import BudgetAppLanding from './layout/BudgetAppLanding';
import FlashCardLanding from './layout/FlashCardAppLanding';
import FlashCardApp from './components/Flash-Card-App/Add-Question/FlashCardApp';
import Quiz from './components/Flash-Card-App/Quiz/Quiz';
import QuestionsPreview from './components/Flash-Card-App/Questions/QuestionsPreview';
import FactorAppLanding from './layout/FactorAppLanding';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/todo-app' element={<TodoAppLanding />} />
        <Route path='/movie-app' element={<MovieAppLanding />} />
        <Route path='/budget-app' element={<BudgetAppLanding />} />
        <Route path='/flash-card-app' element={<FlashCardLanding />}>
          <Route path='/flash-card-app/add-question' element={<FlashCardApp />} />
          <Route path='/flash-card-app/quiz' element={<Quiz />} />
          <Route path='/flash-card-app/questions' element={<QuestionsPreview />} />
        </Route>
        <Route path='/factor-app' element={<FactorAppLanding />} />
      </Routes>
    </>
  );
}

export default App;