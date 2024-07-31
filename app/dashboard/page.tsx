"use client";

import { useState, Suspense } from 'react'
import SearchSection from './_components/SearchSection';
import TemplateList from './_components/TemplateList';

function Dashboard() {
  const [templateSearchInput, setTemplateSearchInput] = useState<string>('');
  return (
    <Suspense fallback={<p>Loading feed...</p>}>
      <div>
        <SearchSection templateSearch={
          (value: string) => setTemplateSearchInput(value)
        } />
        <TemplateList templateSearchInput={templateSearchInput} />
      </div>
    </Suspense>
  )
}

export default Dashboard;