import './App.css';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './utils/statistical-data.json';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

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
