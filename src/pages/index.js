import { Inter } from 'next/font/google'
import MatchTable from '../components/matchTable'
import FilterBar from '../components/filterBar'
import FilterableMatchTable from '../components/filterableMatchTable'
import NavBar from '../components/navbar'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export async function getServerSideProps() {
  const upcomingData = await fetch('https://vlrggapi2-iu7oufw4y-erikopinaldo.vercel.app/match/upcoming').then(data => data.json())
  const completedData = await fetch('https://vlrggapi2-iu7oufw4y-erikopinaldo.vercel.app/match/results').then(data => data.json())

  const newVlrData = [upcomingData.data.segments, completedData.data.segments]

  return {
    props: {
      vlrData: newVlrData
    }
  }
}

export default function Home({ vlrData }) {
  const [matchView, setMatchView] = useState('upcoming')
  const [filterArr, setFilterArr] = useState([]);

  // Set matches data once VLR data is fetched
  let matches = []

  if (vlrData.length > 0) {
    if (matchView === 'upcoming') matches = vlrData[0]
    else if (matchView === 'completed') matches = vlrData[1]
  }

  // Change matches data based on the tab that user clicks
  // Reset selected filters when user switches tabs
  function handleViewClick(viewName) {
    if (viewName.toLowerCase() === 'upcoming') matches = vlrData[0]
    else if (viewName.toLowerCase() === 'completed') matches = vlrData[1]

    setFilterArr([])
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
          <FilterableMatchTable
            matchView={matchView}
            vlrData={vlrData}
            matches={matches}
            filterArr={filterArr}
            setFilterArr={setFilterArr} />
          <Tooltip id="event-name-tooltip" />
        </main>
      </div>
    </div>
  )
}
