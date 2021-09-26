import './App.css'

// components
import Square from './components/square/square';

// hooks
import { useActions } from './hooks/useActions';

function App() {
  const { maze, count, changePosition, autoMove } = useActions()

  const handleMove = (event) => {
    event.preventDefault()
    const newPosition = Number(event.target.id)
    changePosition(newPosition)
    if(newPosition === 131) console.log('You Won')
  }
  return (
    <main className='App'>
      <header>
        <h1>Maze Game!</h1> 
        <button onClick={autoMove} >Auto solve</button>
        <span>moves: {count}</span>
      </header>
      <section className='container'>
        {
          maze.map((element, index) => {
            return <Square handleClick={handleMove} key={index} index={index} type={element} />
          })
        }
      </section>
      <footer>Made with &#128147; by <a href='https://github.com/edabrito7'>edabrito7</a> </footer>
    </main>
  );
}

export default App;
