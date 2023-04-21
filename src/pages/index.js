import { Inter } from 'next/font/google'
import MatchTable from '../components/matchTable'
import FilterBar from '../components/filterBar'
import FilterableMatchTable from '../components/filterableMatchTable'
import NavBar from '../components/navbar'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {  
  const [matchView, setMatchView] = useState('upcoming')
  const [vlrData, setVlrData] = useState([])
  const [matches, setMatches] = useState([])
  const [filterArr, setFilterArr] = useState([]);

  const getVlrData = async () => {
    const upcomingData = await fetch('https://vlrggapi2.vercel.app/match/upcoming').then(data => data.json())
    const completedData = await fetch('https://vlrggapi2.vercel.app/match/results').then(data => data.json())

    const newVlrData = [upcomingData.data.segments, completedData.data.segments]
    setVlrData(newVlrData)
  }

  useEffect(() => {
    setTimeout(() => {
      getVlrData()
    }, "1000")
  }, [])

  useEffect(() => {
    if (vlrData.length > 0) {
      if (matchView === 'upcoming') setMatches(vlrData[0])
      else if (matchView === 'completed') setMatches(vlrData[1])
    }
  })

  function handleViewClick(viewName) {
    if (viewName.toLowerCase() === 'upcoming') setMatches(vlrData[0])
    else if (viewName.toLowerCase() === 'completed') setMatches(vlrData[1])

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
