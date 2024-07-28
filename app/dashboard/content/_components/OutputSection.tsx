"use client"
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const OutputSection = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <div className='h-[520px] w-full bg-white shadow-lg border rounded-lg relative'>
        <ReactQuill theme="snow" value={value} onChange={setValue}
          placeholder='Your AI generated content will appear here...'
          style={{ height: '90%', width: '100%', border: 'none !important', borderRadius: '0.5rem' }}
        />
      </div>
      <Button className='float-right mt-4 py-4 text-white bg-blue-600 rounded-lg font-bold hover:scale-105 transition-all duration-300 hover:bg-blue-700'>
        <Copy className='w-5 h-5' />
        <span className='ml-2'>Copy</span>
      </Button>
    </div>
  )
}

export default OutputSection