import { Inter } from 'next/font/google'
import MatchTable from '../components/matchTable'
import FilterBar from '../components/filterBar'
import FilterableMatchTable from '../components/filterableMatchTable'
import NavBar from '../components/navbar'
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {  
  const [matchView, setMatchView] = useState('upcoming')

  function handleViewClick(viewName) {
    setMatchView(viewName.toLowerCase())
  }

  return (
    <div className='md:flex md:justify-center'>
      <div className='md:w-11/12'>
        {/* <header className='h-20 flex items-center'>
          <img className='logo ml-8 mt-2' src='logo.svg' alt='POSTPLANT'/>
        </header> */}
        <NavBar
          matchView={matchView}
          onViewClick={(e) => handleViewClick(e.target.textContent)} />
        <main>
          <FilterableMatchTable />
        </main>
      </div>
    </div>
  )
}
