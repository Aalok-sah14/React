'use client'
import React, { useState } from 'react'

const Mine = () => {
    const [mines, setMines] = useState(
        [
            [{"id":1,"value":1,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":2,"value":1,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":3,"value":0,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":4,"value":1,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":5,"value":"💣","isRevealed":false,"hasBomb":true,"isFlagged":false},{"id":6,"value":1,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":7,"value":0,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":8,"value":0,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":9,"value":0,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":10,"value":0,"isRevealed":false,"hasBomb":false,"isFlagged":false}],
            [{"id":11,"value":"💣","isRevealed":false,"hasBomb":true,"isFlagged":false},{"id":12,"value":1,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":13,"value":0,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":14,"value":1,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":15,"value":1,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":16,"value":1,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":17,"value":0,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":18,"value":0,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":19,"value":0,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":20,"value":0,"isRevealed":false,"hasBomb":false,"isFlagged":false}],
            [{"id":21,"value":1,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":22,"value":1,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":23,"value":0,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":24,"value":0,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":25,"value":0,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":26,"value":0,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":27,"value":0,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":28,"value":0,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":29,"value":1,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":30,"value":1,"isRevealed":false,"hasBomb":false,"isFlagged":false}],
            [{"id":31,"value":1,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":32,"value":1,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":33,"value":1,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":34,"value":1,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":35,"value":1,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":36,"value":0,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":37,"value":0,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":38,"value":1,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":39,"value":2,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":40,"value":"💣","isRevealed":false,"hasBomb":true,"isFlagged":false}],
            [{"id":41,"value":1,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":42,"value":"💣","isRevealed":false,"hasBomb":true,"isFlagged":false},{"id":43,"value":1,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":44,"value":"💣","isRevealed":false,"hasBomb":true,"isFlagged":false},{"id":45,"value":1,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":46,"value":0,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":47,"value":0,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":48,"value":1,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":49,"value":"💣","isRevealed":false,"hasBomb":true,"isFlagged":false},{"id":50,"value":2,"isRevealed":false,"hasBomb":false,"isFlagged":false}],
            [{"id":51,"value":2,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":52,"value":2,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":53,"value":2,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":54,"value":1,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":55,"value":1,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":56,"value":0,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":57,"value":0,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":58,"value":1,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":59,"value":1,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":60,"value":1,"isRevealed":false,"hasBomb":false,"isFlagged":false}],
            [{"id":61,"value":1,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":62,"value":"💣","isRevealed":false,"hasBomb":true,"isFlagged":false},{"id":63,"value":1,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":64,"value":0,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":65,"value":0,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":66,"value":0,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":67,"value":0,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":68,"value":0,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":69,"value":0,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":70,"value":0,"isRevealed":false,"hasBomb":false,"isFlagged":false}],
            [{"id":71,"value":1,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":72,"value":1,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":73,"value":1,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":74,"value":1,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":75,"value":1,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":76,"value":0,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":77,"value":1,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":78,"value":1,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":79,"value":1,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":80,"value":0,"isRevealed":false,"hasBomb":false,"isFlagged":false}],
            [{"id":81,"value":0,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":82,"value":0,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":83,"value":0,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":84,"value":1,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":85,"value":"💣","isRevealed":false,"hasBomb":true,"isFlagged":false},{"id":86,"value":1,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":87,"value":1,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":88,"value":"💣","isRevealed":false,"hasBomb":true,"isFlagged":false},{"id":89,"value":1,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":90,"value":0,"isRevealed":false,"hasBomb":false,"isFlagged":false}],
            [{"id":91,"value":0,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":92,"value":0,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":93,"value":0,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":94,"value":1,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":95,"value":1,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":96,"value":1,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":97,"value":1,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":98,"value":1,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":99,"value":1,"isRevealed":false,"hasBomb":false,"isFlagged":false},{"id":100,"value":0,"isRevealed":false,"hasBomb":false,"isFlagged":false}]
          ]
)

const handleClick = (row, col)=>{

    const existingMines = [...mines]
    if(existingMines[row][col].hasBomb){
        alert("you have been blasted!")
    }
    existingMines[row][col].isRevealed = true
    setMines(existingMines)

}


  return (
    <div className=' flex flex-col items-center justify-center'>
        <div className='flex shadow-md p-4 rounded-md w-fit'>
                <div className='shadow-lg bg-gray-200 m-2 p-2'>010</div>
                <div className='shadow-lg bg-gray-200 m-2 p-2'>😃 </div>
                <div className='shadow-lg bg-gray-200 m-2 p-2'>120</div>
        </div>
        <div>
        {mines.map((item ,id)=>{
            return (
                <div key={id} className='flex rounded-md w-fit'> 
                        {item.map((val, idx)=>{
                            return(
                                <div onClick={()=> handleClick(id,idx)}  className='w-12 border border-black-200 h-12 shadow-lg p-2' key={idx}>
                                    {val.isRevealed && val.value}
                                    </div>
                            )
                        }
                        )}
                    </div>
            )
        })}
        </div>
    </div>
  )
}

export default Mine