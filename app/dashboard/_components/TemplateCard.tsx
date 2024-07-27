import { TemplateProps } from '@/app/(categoryTemplate)/templates'
import Image from 'next/image'
import Link from 'next/link'

const TemplateCard = (template: TemplateProps) => {
  return (
    <Link href={`/dashboard/content/${template.slug}`} className='p-5 shadow-md rounded-md border bg-white flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all'>
      <div className='flex items-center gap-3'>
        {<Image src={template.icon} alt={template.name} width={40} height={40} />}
        <h2 className='font-medium text-lg'>{template.name}</h2>
      </div>
      <p className='text-gray-500 line-clamp-3'>{template.desc}</p>
    </Link>
  )
}

export default TemplateCard