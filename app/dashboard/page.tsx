"use client";

import { useState } from 'react'
import SearchSection from './_components/SearchSection';
import TemplateList from './_components/TemplateList';

function Dashboard() {
  const [templateSearchInput, setTemplateSearchInput] = useState<string>('');
  return (
    <div>
      <SearchSection templateSearch={
        (value: string) => setTemplateSearchInput(value)
      } />
      <TemplateList templateSearchInput={templateSearchInput} />
    </div>
  )
}

export default Dashboard;