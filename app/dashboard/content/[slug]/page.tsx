"use client"
import React from 'react'
import InputSection from '../_components/InputSection'
import OutputSection from '../_components/OutputSection'
import { templates } from '@/app/(categoryTemplate)/templates'
import Link from 'next/link'
import { MoveLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface CreateContentPageProps {
  params: {
    slug: string
  }
}

function CreateContentPage({ params: { slug } }: CreateContentPageProps) {
  const selectedTemplate = templates.find(template => template.slug === slug)

  const generateAIContent = (formData: Record<string, string>) => {
    console.log(formData)
  }

  return (
    <div className='p-5'>
      <Link href={'/dashboard'}>
        <Button className='bg-white text-blue-600 hover:scale-105 rounded-lg shadow-md gap-2 px-4 py-1 border border-blue-600 hover:bg-white transition-all duration-300'>
          <MoveLeft className='text-blue-600' />
          <span>Back</span>
        </Button>
      </Link>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-4'>
        {selectedTemplate &&
          <InputSection
            selectedTemplate={selectedTemplate}
            processFormData={(formData) => generateAIContent(formData)} />}
        <div className='col-span-2'>
          <OutputSection />
        </div>
      </div>
    </div>
  )
}

export default CreateContentPage