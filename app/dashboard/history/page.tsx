'use client'
import React, { useEffect, useState } from 'react'
import TableHeader from './_components/TableHeader';
import TableItem from './_components/TableItem';
import { useUser } from '@clerk/nextjs';
import { db } from '@/db';
import { Output } from '@/db/schema';
import { eq } from 'drizzle-orm';

function History() {
  const { user } = useUser();
  const [data, setData] = useState<any[]>([]);

  const fetchFromDB = async () => {
    try {
      const email = user?.primaryEmailAddress?.emailAddress;
      if (email) {
        const result = await db.query.Output.findMany({
          where: eq(Output.createdBy, email),
        })
        setData(result);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchFromDB();
  }, [user]);

  return (
    <div className='p-5'>
      <div className='bg-white m-5 h-[750px] rounded-md shadow'>
        <TableHeader />
        <div className='overflow-y-auto h-[90%] rounded-md'>
          {data.map((item, index) => (
            <TableItem key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default History;