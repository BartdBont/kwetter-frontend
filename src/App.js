import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import TrendList from './Modules/Trends/TrendList';
import TweetDetails from './Modules/Tweets/TweetDetails';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='trends' element={<TrendList />} />
        <Route path='tweets/:id' element={<TweetDetails />} />
      </Routes>
    </div>
  );
}

export default App;
