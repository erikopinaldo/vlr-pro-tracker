import { Inter } from 'next/font/google'
import MatchTable from '../components/matchTable'
import FilterBar from '../components/filterBar'

const inter = Inter({ subsets: ['latin'] })
const matches = [
  {
    "team_one_name": "Invincible Gaming",
    "team_two_name": "DD Team",
    "match_url": "www.vlr.gg/179450/invincible-gaming-vs-dd-team-fgc-valorant-invitational-2023-act-1-qualifiers-ro16",
    "event_name": "FGC VALORANT Invitational 2023: Act 1 Qualifiers",
    "event_icon_url": "//owcdn.net/img/637335516b953.png",
    "match_time": "2:00 PM",
    "eta": ""
  },
  {
    "team_one_name": "Mekong Gaming",
    "team_two_name": "Team Lofi",
    "match_url": "www.vlr.gg/170404/mekong-gaming-vs-team-lofi-challengers-league-vietnam-split-1-w4",
    "event_name": "Challengers League Vietnam: Split 1",
    "event_icon_url": "//owcdn.net/img/6009f963577f4.png",
    "match_time": "4:00 PM",
    "eta": "1h 1m"
  },
  {
    "team_one_name": "Four Angry Men",
    "team_two_name": "KPG",
    "match_url": "www.vlr.gg/179451/four-angry-men-vs-kpg-fgc-valorant-invitational-2023-act-1-qualifiers-ro16",
    "event_name": "FGC VALORANT Invitational 2023: Act 1 Qualifiers",
    "event_icon_url": "//owcdn.net/img/637335516b953.png",
    "match_time": "5:00 PM",
    "eta": "2h 1m"
  },
  {
    "team_one_name": "VICTORY",
    "team_two_name": "Tim Tài Trơ",
    "match_url": "www.vlr.gg/170405/victory-vs-tim-t-i-tr-challengers-league-vietnam-split-1-w4",
    "event_name": "Challengers League Vietnam: Split 1",
    "event_icon_url": "//owcdn.net/img/6009f963577f4.png",
    "match_time": "6:00 PM",
    "eta": "3h 1m"
  },
  {
    "team_one_name": "Night Wings Gaming",
    "team_two_name": "DRG Esports Club",
    "match_url": "www.vlr.gg/179452/night-wings-gaming-vs-drg-esports-club-fgc-valorant-invitational-2023-act-1-qualifiers-ro16",
    "event_name": "FGC VALORANT Invitational 2023: Act 1 Qualifiers",
    "event_icon_url": "//owcdn.net/img/637335516b953.png",
    "match_time": "8:00 PM",
    "eta": "5h 1m"
  },
  {
    "team_one_name": "Thunderbolts Gaming",
    "team_two_name": "Digital Athletics",
    "match_url": "www.vlr.gg/165590/thunderbolts-gaming-vs-digital-athletics-challengers-league-turkey-birlik-split-1-w7",
    "event_name": "Challengers League Turkey Birlik: Split 1",
    "event_icon_url": "//owcdn.net/img/63a1b2d391745.png",
    "match_time": "10:30 PM",
    "eta": "7h 31m"
  },
]

export default function Home() {
  return (
    <main>
        <FilterBar matches={matches} />
        <MatchTable matches={matches} />
    </main>
  )
}
