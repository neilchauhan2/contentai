import { TemplateProps } from '@/app/(categoryTemplate)/templates'

const TemplateCard = (template: TemplateProps) => {
  return (
    <div className='p-5 shadow-md rounded-md border bg-white flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all'>
      <template.icon className='w-8 h-8' />
      <h2 className='font-medium text-lg'>{template.name}</h2>
      <p className='text-gray-500 line-clamp-3'>{template.desc}</p>
    </div>
  )
}

export default TemplateCard