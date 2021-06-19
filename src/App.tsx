import { FC } from 'react';

import './App.css';
import Calendar from './components/Calendar';

const App: FC = () => {
  return (
    <>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title has-text-centered">Calendar</h1>
          </div>
        </div>
      </section>
      <div className="container has-text-centered">
        <Calendar />
      </div>
    </>
  );
};

export default App;
