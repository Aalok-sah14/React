import { Card } from '@/components/ui/card'
import { Angry, Frown, Heart, Laugh, ThumbsDown, ThumbsUp } from 'lucide-react'
import React from 'react'

const page = () => {
    return (
        <div>
            
            
                <Card className='felx flex-row'>
                <ThumbsUp className='text-blue-800' />
                <ThumbsDown className='text-blue-800' />
                <Angry className='text-red-600'/>
                <Frown className='text-yellow-600'/>
                <Laugh  className='text-yellow-800'/>
                <Heart  className='text-pink-600'/>

                </Card>

            
           
        </div>
    )
}

export default page