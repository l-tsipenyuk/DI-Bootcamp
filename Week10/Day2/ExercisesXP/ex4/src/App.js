
import './App.css';

const postData = async () => {

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        key1: 'myusername',
        email: 'mymail@gmail.com',
        name: 'Isaac',
        lastname: 'Doe',
        age: 27
      }),
    };

    try {
      const res = await fetch('https://webhook.site/bdecbcd1-4ade-4dc4-95a5-4b4d66238dc1', options);
      const data = await res.json();
      console.log(data)
    } catch (e) {
      console.log(e)
    }
  }

  function App() {
    return (
      <div className="App">
        <button onClick={postData}>Press me to post some data</button>
      </div>
    );
  }

  export default App;
