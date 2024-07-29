"use client"
import React, { useEffect, useState, useRef } from 'react'
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { useToast } from '@/components/ui/use-toast';


const OutputSection = ({ output }: { output: string }) => {
  const editorRef = useRef<Editor>(null);
  const { toast } = useToast()

  const copyResponse = () => {
    navigator.clipboard.writeText(output);
    toast({
      description: 'Copied to clipboard!',
    })
  }

  useEffect(() => {
    editorRef.current?.getInstance().setMarkdown(output);
  }, [output])

  return (
    <div>
      <div className='h-[520px] w-full bg-white shadow-lg border rounded-lg relative'>
        <Editor
          ref={editorRef}
          initialValue=""
          previewStyle="vertical"
          height="100%"
          initialEditType="wysiwyg"
          useCommandShortcut={true}
        />
      </div>
      <Button className='float-right mt-4 py-4 text-white bg-blue-600 rounded-lg font-bold hover:scale-105 transition-all duration-300 hover:bg-blue-700' onClick={copyResponse}>
        <Copy className='w-5 h-5' />
        <span className='ml-2'>Copy</span>
      </Button>
    </div>
  )
}

export default OutputSection