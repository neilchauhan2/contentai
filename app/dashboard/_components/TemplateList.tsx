import { TemplateProps, templates } from '@/app/(categoryTemplate)/templates'
import React from 'react'
import TemplateCard from './TemplateCard'

function TemplateList() {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5'>
      {templates.map((template: TemplateProps) => {
        return (
          <TemplateCard {...template} />
        )
      })}
    </div>
  )
}

export default TemplateList