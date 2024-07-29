import React from 'react'

const TableHeader = () => {
  return (
    <div className='grid grid-cols-9 p-5 rounded-t-md bg-gray-200 font-semibold shadow'>
      <div className='col-span-2'>Template</div>
      <div className='col-span-4'>Response</div>
      <div className='col-span-1'>Date</div>
      <div className='col-span-1 ml-2'>Words</div>
      <div className='col-span-1'></div>
    </div>
  )
}

export default TableHeader