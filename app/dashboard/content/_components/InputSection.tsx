'use client'
import React, { useState } from 'react'
import { TemplateProps } from '@/app/(categoryTemplate)/templates'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Image from 'next/image'

const InputSection = ({ selectedTemplate, processFormData }: { selectedTemplate: TemplateProps, processFormData: (formData: Record<string, string>) => void }) => {
  const [formData, setFormData] = useState<Record<string, string>>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    processFormData(formData)
  }

  return (
    <div className='p-5 shadow-md border rounded-lg bg-white h-[520px] relative'>
      <div className='flex items-center gap-3 mb-2'>
        <Image
          src={selectedTemplate.icon}
          alt={selectedTemplate.name}
          width={40}
          height={40}
          className='stroke-blue-600' />
        <h2 className='font-bold text-2xl'>
          {selectedTemplate.name}
        </h2>
      </div>
      <p className='text-gray-500 text-sm'>
        {selectedTemplate.desc}
      </p>
      <form className='mt-6' onSubmit={handleSubmit}>
        {selectedTemplate.form &&
          selectedTemplate.form.map((input, index) => (
            <div
              key={index + input.name}
              className='my-2 flex flex-col gap-2 mb-7'>
              <label
                htmlFor={input.name}
                className='font-semibold'>
                {input.label}
              </label>
              {input.field === 'input' ?
                <Input
                  name={input.name}
                  required={input.required}
                  onChange={handleInputChange} /> :
                input.field === 'textarea' ?
                  <Textarea
                    name={input.name}
                    required={input.required}
                    onChange={handleInputChange}
                  /> : null}
            </div>
          ))}
        <Button
          className='w-[90%] py-6 text-white bg-blue-600 rounded-lg font-bold hover:scale-105 transition-all duration-300 hover:bg-blue-700 absolute bottom-0 right-0 left-0 my-4 mx-auto'
          type='submit'>
          Generate Content
        </Button>
      </form>
    </div>
  )
}

export default InputSection