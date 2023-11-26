import "./App.css";
import Counter from "./components/Counter";
import Posts from "./components/Posts"
import PostsAddForm from "./components/PostsAddForm";

function App() {
  return (
    <main className="App">
      <header className="App-header">
        <PostsAddForm />
        {/* <Counter /> */}
        <Posts />
        
      </header>
    </main>
  );
}

export default App;
