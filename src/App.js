import './App.css';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import statisticalData from './statistical-data.json';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

function App() {
  return (
    <div className="App">
      <Profile />
      <Statistics title="Upload stats" stats={statisticalData} />;
      <FriendList />
      <TransactionHistory />
    </div>
  );
}

export default App;
