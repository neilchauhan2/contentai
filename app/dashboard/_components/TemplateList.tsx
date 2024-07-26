import { useEffect, useState } from 'react'
import { TemplateProps, templates } from '@/app/(categoryTemplate)/templates'
import TemplateCard from './TemplateCard'

function TemplateList({ templateSearchInput }: { templateSearchInput: string }) {
  const [templateList, setTemplateList] = useState<TemplateProps[]>(templates);
  useEffect(() => {
    if (templateSearchInput) {
      const filteredTemplates = templates.filter((template) => template.name.toLowerCase().includes(templateSearchInput.toLowerCase()));
      setTemplateList(filteredTemplates)
    } else {
      setTemplateList(templates)
    }
  }, [templateSearchInput])

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5'>
      {templateList.map((template) => {
        return (
          <TemplateCard {...template} />
        )
      })}
    </div>
  )
}

export default TemplateList