import { Inter } from 'next/font/google'
import MatchTable from '../components/matchTable'
import FilterBar from '../components/filterBar'
import FilterableMatchTable from '../components/filterableMatchTable'
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {  
  return (
    <div className='md:flex md:justify-center'>
      <div className='md:w-11/12'>
        <header className='h-20 flex items-center'>
          <img className='logo ml-8 mt-2' src='logo.svg' alt='POSTPLANT'/>
        </header>
        <main>
          <FilterableMatchTable />
        </main>
      </div>
    </div>
  )
}
