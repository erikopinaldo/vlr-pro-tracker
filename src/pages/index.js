import { Inter } from 'next/font/google'
import MatchTable from '../components/matchTable'
import FilterBar from '../components/filterBar'
import FilterableMatchTable from '../components/filterableMatchTable'
import NavBar from '../components/navbar'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

// https://stackoverflow.com/questions/66539699/fontawesome-icons-not-working-properly-in-react-next-app
import '@fortawesome/fontawesome-svg-core/styles.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {  
  // Query params has this shape: /?filters=Champions+Tour+2023%3A+Americas+League,Champions+Tour+2023%3A+EMEA+League,Champions+Tour+2023%3A+Pacific+League,Challengers+League%3A+North+America
  const router = useRouter();
  const { filters, view } = router.query

  const [matchView, setMatchView] = useState('upcoming')
  const [vlrData, setVlrData] = useState([])
  const [filterArr, setFilterArr] = useState([]);
  const [isCopied, setIsCopied] = useState(false);

  // Get VLR data from API
  const getVlrData = async () => {
    const upcomingData = await fetch('https://vlrggapi2.vercel.app/match/upcoming').then(data => data.json())
    const completedData = await fetch('https://vlrggapi2.vercel.app/match/results').then(data => data.json())

    const newVlrData = [upcomingData.data.segments, completedData.data.segments]
    setVlrData(newVlrData)
  }

  // Only set filterArr when router fields (i.e. query string) are updated client-side
  // https://nextjs.org/docs/api-reference/next/router#router-object
  useEffect(() => {
    if (!router.isReady) return;
    if (filters) setFilterArr(filters.split(','))
    if (view) setMatchView(view)
  }, [router.isReady])

  useEffect(() => {
    getVlrData()
  }, [])

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
    setIsCopied(false)
  }

  function handleCopyClick() {
    navigator.clipboard.writeText(filterArr.length > 0 ? 'https://www.post-plant.com?filters=' + encodeURI(filterArr.join(',')) + '&view=' + matchView : 'https://www.post-plant.com')
    setIsCopied(true)
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
            setFilterArr={setFilterArr}
            isCopied={isCopied}
            handleCopyClick={handleCopyClick}
            setIsCopied={setIsCopied} />
          <Tooltip id="event-name-tooltip" />
        </main>
      </div>
    </div>
  )
}
