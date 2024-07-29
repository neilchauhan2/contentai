import React from 'react'
import Image from 'next/image'
import { templates } from '@/app/(categoryTemplate)/templates'
import { Copy } from 'lucide-react'
import { useToast } from '@/components/ui/use-toast'

const TableItem = ({ data }: { data: any }) => {
  const template = templates.find((item) => item.slug === data.slug);
  const { toast } = useToast()
  const copyResponse = () => {
    navigator.clipboard.writeText(data.response);
    toast({
      description: 'Copied to clipboard!',
    })
  }
  return (
    <div className='grid grid-cols-9 p-5'>
      <div className='col-span-2'>
        <div className='flex items-center gap-3'>
          {<Image src={template?.icon || ''} alt={template?.name || ''} width={20} height={20} />}
          <h2 className='font-medium'>{template?.name}</h2>
        </div>
      </div>
      <div className='col-span-4 line-clamp-3 pr-6'>
        {data.response}
      </div>
      <div className='col-span-1'>{data.createdAt}</div>
      <div className='col-span-1 ml-2'>{data.response.split(' ').length}</div>
      <div className='col-span-1 cursor-pointer' onClick={copyResponse}>
        <Copy className='w-5 h-5 text-blue-600 hover:scale-105 transition-all duration-300 hover:text-blue-700' />
      </div>
    </div>
  )
}

export default TableItem