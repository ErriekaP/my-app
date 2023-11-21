'use client'
import React from 'react'
import Button from './Button'
const Post = ({title, body, author}) => {
  return (
    <div className='border border-gray-100 p-4 flex flex-col'>
        <h1 className='font-bold text-xl'>{title}</h1>
        <span className='font-bold-text-lg'>by {author}</span>
        {/* spacing */}

        <p className='text-base'>{body}</p>
        <div className='w-full flex flex-rows-reverse'>
            <Button onClick={() => console.log(title)} text='View'></Button>
        </div>
      
    </div>
  )
}

export default Post
