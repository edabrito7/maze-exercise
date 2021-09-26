import './App.css'

// components
import Square from './components/square/square'
import Modal from './components/modal/modal'

// hooks
import { useActions } from './hooks/useActions'
import { useModal } from './hooks/useModal'

function App() {
  const { maze, count, changePosition, autoMove, restart } = useActions()
  const { modal, openModal, closeModal } = useModal()

  const handleMove = (event) => {
    event.preventDefault()
    const newPosition = Number(event.target.id)
    const steps = changePosition(newPosition)
    if(newPosition === 131) openModal(steps)
  }
  return (
    <main className='App'>
      {
        modal ? <Modal closeModal={closeModal} restartGame={restart} /> : null
      }
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
