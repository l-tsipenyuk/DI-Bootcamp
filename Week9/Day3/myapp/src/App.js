import logo from './logo.svg';
import './App.css';
import User from './components/User.js'
import Hello from './Hello.js'
import 'tachyons'

import users from './users.json'

// const users = [
//   { id: 1, name: 'Alla', email: 'alla@gmail.com', username: 'alo4ka' },
//   { id: 2, name: 'Dan', email: 'dan@gmail.com', username: 'danchik' },
//   { id: 3, name: 'David', email: 'david@gmail.com', username: 'daVid15' },
//   { id: 4, name: 'Alex', email: 'alex@gmail.com', username: 'aleXandra' },
// ];


function App() {
  return (
    <div className="App">
      <header className="App-header-">
        {/* <User name={users[0].name} email={users[0].email} username={users[0].username} />
        <User name={users[1].name} email={users[1].email} username={users[1].username} />
        <User name={users[2].name} email={users[2].email} username={users[2].username} /> */}
        {
          users.map(item => {
            return (
              // <User name={item.name} email={item.email} username={item.username} />
              <User info = {item} key = {item.id} />
            )
          })}
      </header>
    </div>
  );
}

export default App;
