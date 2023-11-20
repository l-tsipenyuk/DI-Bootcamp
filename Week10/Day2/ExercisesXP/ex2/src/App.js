import posts from './Components/PostList'
import './App.css';


function App() {

  return (
    <div className="App">
      <h2>Hi! This is a Title.</h2>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  )
}

export default App;
