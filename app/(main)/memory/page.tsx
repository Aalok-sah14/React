'use client'
import React, { useEffect, useState } from 'react'
import Confetti from 'react';

const Memory = () => {
    const [openSets, setOpenSets] = useState([]);
    const [scores , setScores] = useState(0)
    const [moves , setMoves] = useState(-1)
    const [hasWon, setHasWon] = useState(false)
    const [emojiGrid, setEmojiGrid] = useState([
        ['🍎', '🍌', '🍓', '🍇'],
        ['🍒', '🍍', '🥝', '🍎'],
        ['🍓', '🍒', '🥥', '🍌'],
        ['🍇', '🍍', '🥥', '🥝']
      ]);
         useEffect(() => {
            const filteredOnlyRemainingEmoji=  emojiGrid.flat().filter(item=> item!= '')
            if(filteredOnlyRemainingEmoji.length == 0){
                alert("Congratulations! You have found all the matches!")
                setHasWon(true)
            }
            setMoves(moves + 1)
            if(openSets.length < 2) return;
            if(moves > 30){
                setOpenSets([])
                setMoves(0)
                setScores(0)
         
            }
            const [[firstItemRow, firstItemCol ], [secondItemRow, secondItemCol]]= openSets
            if(emojiGrid?.[secondItemRow]?.[secondItemCol] === emojiGrid?.[firstItemRow]?.[firstItemCol]){
                setTimeout(() => {
                    const existingEmoji = [...emojiGrid] 
                    existingEmoji[secondItemRow][secondItemCol] = ''
                    existingEmoji[firstItemRow][firstItemCol] = ''
                    setEmojiGrid(existingEmoji)
                    setScores(scores + 1)
                    setOpenSets([])
                  }, 2000);
            }else{
                setTimeout(() => {
                  setOpenSets([])
                }, 1000);
                console.log("not matched")
            }
         }, [openSets]);


    const handleSelection = (row, column)=>{
        const existingSets = [...openSets] 
        existingSets.push([row, column])
        setOpenSets(existingSets)
    }
  return (
    <div>
        {JSON.stringify(emojiGrid)}
        {JSON.stringify(openSets)}
        Score is : {scores}
        Moves : {moves}
        {hasWon && <Confetti/> }
        {emojiGrid.map((item,id)=>{
            return (
                <div className='flex m-2' key={id}>
                    {item.map((emoji,idx)=>{
                        const isEmojiClicked = id == openSets?.[0]?.[0] && idx == openSets?.[0]?.[1]  || id == openSets?.[1]?.[0] && idx == openSets?.[1]?.[1]
                        return (
                            <div key={emoji} 
                            onClick={()=> handleSelection(id, idx)}
                            className={
                                emoji ? 
                                'text-4xl min-h-12 min-w-12 rounded-md border border-black shadow-lg bg-gray-100 m-2 p-2':
                                'text-4xl min-h-12 min-w-12 rounded-md  m-2 p-2'
                                }>
                              {  isEmojiClicked ? emoji : ''} 
                                </div>
                        )
                    })}
                    </div>
            )
        })}
    </div>
  )
}

export default Memory