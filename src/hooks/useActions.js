import { useState } from 'react'
import { getPositionChanges } from '../utils/getPosition'
import { BOARD } from '../utils/utils'


export function useActions () {
    const [maze, setMaze] = useState(BOARD)
    const [count, setCount] = useState(0)
    const [lastCross, setLastCross] = useState(0)

    const changePosition = (newPosition) => {
        const changes = getPositionChanges(newPosition)
       const newMaze = maze.map((square) => {
            if (square === 'avaliable' || square === 'avatar') return 'passed'
            return square
       })
       changes.forEach((position, index) => {
            if (maze[position] === 'wall' || position > 143 || newMaze[position] === 'passed') return 
            newMaze[position] = 'avaliable'
       })
       newMaze[newPosition] = 'avatar'
       setMaze(newMaze)
       setCount(count + 1)
    }

    // need work
    const autoMove = () => {
        console.log('I am here')
        const currentPosition = maze.indexOf('avatar') 
        const nextPosition = Math.random() > 0.5 ? maze.lastIndexOf('avaliable') : maze.indexOf('avaliable') // random direction
        const changes =   getPositionChanges(nextPosition)
        const newMaze = maze.map((square) => {
            if (square === 'avaliable' || square === 'avatar') return 'passed'
            return square
       })
       let crosses = 0
        changes.forEach((position) => {
            if (maze[position] === 'wall' || position > 143 || newMaze[position] === 'passed') return 
            newMaze[position] = 'avaliable'
            crosses += 1
        })
        if (crosses > 1) {
            setLastCross(nextPosition) 
        }
        newMaze[nextPosition] = 'avatar'
        if (nextPosition !== 131) {
            const isAvaliable = newMaze.indexOf('avaliable')
            isAvaliable !== -1   ? newMaze[nextPosition] = 'avatar' : newMaze[lastCross] = 'avatar'
            if (isAvaliable === -1 && nextPosition !== 131) {
                const newChanges =   getPositionChanges(lastCross)
                newChanges.forEach((position) => {
                    if (maze[position] === 'wall' || position > 143) return 
                    newMaze[position] = 'avaliable'
                    crosses += 1
                })
            }
        }
        setMaze(newMaze)
        setCount(count + 1)
    } 

    

    return {
        maze,
        count,
        changePosition,
        autoMove
    }
}
