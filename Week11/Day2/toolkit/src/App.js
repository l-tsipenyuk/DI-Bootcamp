import Counter from "./features/counter/Counter";
import PostsList from "./features/posts/PostsList";
import "./App.css";

function App() {
  return (
    <main className='App'>
      <Counter />
      <PostsList />
    </main>
  );
}

export default App;
