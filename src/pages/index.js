import { Inter } from 'next/font/google'
import MatchTable from '../components/matchTable'
import FilterBar from '../components/filterBar'
import FilterableMatchTable from '../components/filterableMatchTable'

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
  {
    "team_one_name": "Galatasaray Esports",
    "team_two_name": "Fenerbahçe Esports",
    "match_url": "www.vlr.gg/165591/galatasaray-esports-vs-fenerbah-e-esports-challengers-league-turkey-birlik-split-1-w7",
    "event_name": "Challengers League Turkey Birlik: Split 1",
    "event_icon_url": "//owcdn.net/img/63a1b2d391745.png",
    "match_time": "1:30 AM",
    "eta": "10h 31m"
  },
  {
    "team_one_name": "Keyd Stars",
    "team_two_name": "TBK Esports",
    "match_url": "www.vlr.gg/167050/keyd-stars-vs-tbk-esports-challengers-league-brazil-split-1-w6",
    "event_name": "Challengers League Brazil: Split 1",
    "event_icon_url": "//owcdn.net/img/6009f963577f4.png",
    "match_time": "4:00 AM",
    "eta": "13h 1m"
  },
  {
    "team_one_name": "Disguised",
    "team_two_name": "OREsports",
    "match_url": "www.vlr.gg/169000/disguised-vs-oresports-challengers-league-north-america-w3",
    "event_name": "Challengers League: North America",
    "event_icon_url": "//owcdn.net/img/63bc56190e38e.png",
    "match_time": "5:00 AM",
    "eta": "14h 1m"
  },
  {
    "team_one_name": "E-Xolos LAZER",
    "team_two_name": "RETA Esports",
    "match_url": "www.vlr.gg/179492/e-xolos-lazer-vs-reta-esports-challengers-league-latam-north-ace-split-1-w1",
    "event_name": "Challengers League LATAM North ACE: Split 1",
    "event_icon_url": "//owcdn.net/img/63cbac52cf906.png",
    "match_time": "5:00 AM",
    "eta": "14h 1m"
  },
  {
    "team_one_name": "RED Canids",
    "team_two_name": "TropiCaos",
    "match_url": "www.vlr.gg/167051/red-canids-vs-tropicaos-challengers-league-brazil-split-1-w6",
    "event_name": "Challengers League Brazil: Split 1",
    "event_icon_url": "//owcdn.net/img/6009f963577f4.png",
    "match_time": "7:00 AM",
    "eta": "16h 1m"
  },
  {
    "team_one_name": "Skull Cracker",
    "team_two_name": "19esports",
    "match_url": "www.vlr.gg/179493/skull-cracker-vs-19esports-challengers-league-latam-north-ace-split-1-w1",
    "event_name": "Challengers League LATAM North ACE: Split 1",
    "event_icon_url": "//owcdn.net/img/63cbac52cf906.png",
    "match_time": "7:00 AM",
    "eta": "16h 1m"
  },
  {
    "team_one_name": "M80",
    "team_two_name": "MAD Lions",
    "match_url": "www.vlr.gg/169001/m80-vs-mad-lions-challengers-league-north-america-w3",
    "event_name": "Challengers League: North America",
    "event_icon_url": "//owcdn.net/img/63bc56190e38e.png",
    "match_time": "8:00 AM",
    "eta": "17h 1m"
  },
  {
    "team_one_name": "FUSION",
    "team_two_name": "Six Karma",
    "match_url": "www.vlr.gg/179494/fusion-vs-six-karma-challengers-league-latam-north-ace-split-1-w1",
    "event_name": "Challengers League LATAM North ACE: Split 1",
    "event_icon_url": "//owcdn.net/img/63cbac52cf906.png",
    "match_time": "9:00 AM",
    "eta": "18h 1m"
  },
  {
    "team_one_name": "Number One Player",
    "team_two_name": "Kingzone",
    "match_url": "www.vlr.gg/179453/number-one-player-vs-kingzone-fgc-valorant-invitational-2023-act-1-qualifiers-ro16",
    "event_name": "FGC VALORANT Invitational 2023: Act 1 Qualifiers",
    "event_icon_url": "//owcdn.net/img/637335516b953.png",
    "match_time": "11:00 AM",
    "eta": "20h 1m"
  },
  {
    "team_one_name": "Rare Atom",
    "team_two_name": "NOVA Esports",
    "match_url": "www.vlr.gg/179454/rare-atom-vs-nova-esports-fgc-valorant-invitational-2023-act-1-qualifiers-ro16",
    "event_name": "FGC VALORANT Invitational 2023: Act 1 Qualifiers",
    "event_icon_url": "//owcdn.net/img/637335516b953.png",
    "match_time": "2:00 PM",
    "eta": "23h 1m"
  },
  {
    "team_one_name": "TwoKay",
    "team_two_name": "Team Big BAAM",
    "match_url": "www.vlr.gg/170406/twokay-vs-team-big-baam-challengers-league-vietnam-split-1-w4",
    "event_name": "Challengers League Vietnam: Split 1",
    "event_icon_url": "//owcdn.net/img/6009f963577f4.png",
    "match_time": "4:00 PM",
    "eta": "1d 1h"
  },
  {
    "team_one_name": "Royal Never Give Up",
    "team_two_name": "Invictus Gaming",
    "match_url": "www.vlr.gg/179455/royal-never-give-up-vs-invictus-gaming-fgc-valorant-invitational-2023-act-1-qualifiers-ro16",
    "event_name": "FGC VALORANT Invitational 2023: Act 1 Qualifiers",
    "event_icon_url": "//owcdn.net/img/637335516b953.png",
    "match_time": "5:00 PM",
    "eta": "1d 2h"
  },
  {
    "team_one_name": "Lazybutwannawin",
    "team_two_name": "Fancy United Esports",
    "match_url": "www.vlr.gg/170407/lazybutwannawin-vs-fancy-united-esports-challengers-league-vietnam-split-1-w4",
    "event_name": "Challengers League Vietnam: Split 1",
    "event_icon_url": "//owcdn.net/img/6009f963577f4.png",
    "match_time": "6:00 PM",
    "eta": "1d 3h"
  },
  {
    "team_one_name": "Oxyg3niOus",
    "team_two_name": "Bilibili Gaming",
    "match_url": "www.vlr.gg/179456/oxyg3nious-vs-bilibili-gaming-fgc-valorant-invitational-2023-act-1-qualifiers-ro16",
    "event_name": "FGC VALORANT Invitational 2023: Act 1 Qualifiers",
    "event_icon_url": "//owcdn.net/img/637335516b953.png",
    "match_time": "8:00 PM",
    "eta": "1d 5h"
  },
  {
    "team_one_name": "LOUD",
    "team_two_name": "DRX",
    "match_url": "www.vlr.gg/167391/loud-vs-drx-champions-tour-2023-lock-in-s-o-paulo-sf",
    "event_name": "Champions Tour 2023: LOCK//IN São Paulo",
    "event_icon_url": "//owcdn.net/img/638e35b162881.png",
    "match_time": "1:00 AM",
    "eta": "1d 10h"
  },
  {
    "team_one_name": "Monarch Effect",
    "team_two_name": "TBD",
    "match_url": "www.vlr.gg/179458/monarch-effect-vs-tbd-fgc-valorant-invitational-2023-act-1-qualifiers-qf",
    "event_name": "FGC VALORANT Invitational 2023: Act 1 Qualifiers",
    "event_icon_url": "//owcdn.net/img/637335516b953.png",
    "match_time": "12:00 PM",
    "eta": "1d 21h"
  },
  {
    "team_one_name": "TBD",
    "team_two_name": "TBD",
    "match_url": "www.vlr.gg/179459/tbd-fgc-valorant-invitational-2023-act-1-qualifiers-qf",
    "event_name": "FGC VALORANT Invitational 2023: Act 1 Qualifiers",
    "event_icon_url": "//owcdn.net/img/637335516b953.png",
    "match_time": "3:00 PM",
    "eta": "2d 0h"
  },
  {
    "team_one_name": "TBD",
    "team_two_name": "TBD",
    "match_url": "www.vlr.gg/179460/tbd-fgc-valorant-invitational-2023-act-1-qualifiers-qf",
    "event_name": "FGC VALORANT Invitational 2023: Act 1 Qualifiers",
    "event_icon_url": "//owcdn.net/img/637335516b953.png",
    "match_time": "6:00 PM",
    "eta": "2d 3h"
  },
  {
    "team_one_name": "TBD",
    "team_two_name": "TBD",
    "match_url": "www.vlr.gg/179461/tbd-fgc-valorant-invitational-2023-act-1-qualifiers-qf",
    "event_name": "FGC VALORANT Invitational 2023: Act 1 Qualifiers",
    "event_icon_url": "//owcdn.net/img/637335516b953.png",
    "match_time": "9:00 PM",
    "eta": "2d 6h"
  },
  {
    "team_one_name": "Natus Vincere",
    "team_two_name": "FNATIC",
    "match_url": "www.vlr.gg/167392/natus-vincere-vs-fnatic-champions-tour-2023-lock-in-s-o-paulo-sf",
    "event_name": "Champions Tour 2023: LOCK//IN São Paulo",
    "event_icon_url": "//owcdn.net/img/638e35b162881.png",
    "match_time": "1:00 AM",
    "eta": "2d 10h"
  },
  {
    "team_one_name": "TBD",
    "team_two_name": "TBD",
    "match_url": "www.vlr.gg/179462/tbd-fgc-valorant-invitational-2023-act-1-qualifiers-ubsf",
    "event_name": "FGC VALORANT Invitational 2023: Act 1 Qualifiers",
    "event_icon_url": "//owcdn.net/img/637335516b953.png",
    "match_time": "6:00 PM",
    "eta": "3d 3h"
  },
  {
    "team_one_name": "TBD",
    "team_two_name": "TBD",
    "match_url": "www.vlr.gg/179463/tbd-fgc-valorant-invitational-2023-act-1-qualifiers-ubsf",
    "event_name": "FGC VALORANT Invitational 2023: Act 1 Qualifiers",
    "event_icon_url": "//owcdn.net/img/637335516b953.png",
    "match_time": "9:00 PM",
    "eta": "3d 6h"
  },
  {
    "team_one_name": "TBD",
    "team_two_name": "TBD",
    "match_url": "www.vlr.gg/167393/tbd-champions-tour-2023-lock-in-s-o-paulo-gf",
    "event_name": "Champions Tour 2023: LOCK//IN São Paulo",
    "event_icon_url": "//owcdn.net/img/638e35b162881.png",
    "match_time": "1:00 AM",
    "eta": "3d 10h"
  },
  {
    "team_one_name": "TBD",
    "team_two_name": "TBD",
    "match_url": "www.vlr.gg/179465/tbd-fgc-valorant-invitational-2023-act-1-qualifiers-uf",
    "event_name": "FGC VALORANT Invitational 2023: Act 1 Qualifiers",
    "event_icon_url": "//owcdn.net/img/637335516b953.png",
    "match_time": "3:00 PM",
    "eta": "4d 0h"
  },
  {
    "team_one_name": "TBD",
    "team_two_name": "TBD",
    "match_url": "www.vlr.gg/179466/tbd-fgc-valorant-invitational-2023-act-1-qualifiers-lr1",
    "event_name": "FGC VALORANT Invitational 2023: Act 1 Qualifiers",
    "event_icon_url": "//owcdn.net/img/637335516b953.png",
    "match_time": "6:00 PM",
    "eta": "4d 3h"
  },
  {
    "team_one_name": "TBD",
    "team_two_name": "TBD",
    "match_url": "www.vlr.gg/179467/tbd-fgc-valorant-invitational-2023-act-1-qualifiers-lf",
    "event_name": "FGC VALORANT Invitational 2023: Act 1 Qualifiers",
    "event_icon_url": "//owcdn.net/img/637335516b953.png",
    "match_time": "9:00 PM",
    "eta": "4d 6h"
  },
  {
    "team_one_name": "GTZ Esports",
    "team_two_name": "EGN Esports",
    "match_url": "www.vlr.gg/175210/gtz-esports-vs-egn-esports-challengers-league-portugal-tempest-split-1-lbf",
    "event_name": "Challengers League Portugal Tempest: Split 1",
    "event_icon_url": "//owcdn.net/img/63a1a7a233486.png",
    "match_time": "10:00 PM",
    "eta": "4d 7h"
  },
  {
    "team_one_name": "B8 Esports",
    "team_two_name": "Diamant Esports",
    "match_url": "www.vlr.gg/164495/b8-esports-vs-diamant-esports-challengers-league-east-surge-split-1-w6",
    "event_name": "Challengers League East Surge: Split 1",
    "event_icon_url": "//owcdn.net/img/63a1b49fcf14b.png",
    "match_time": "12:00 AM",
    "eta": "4d 9h"
  },
  {
    "team_one_name": "Zero Tenacity",
    "team_two_name": "Anorthosis Famagusta Esports",
    "match_url": "www.vlr.gg/164492/zero-tenacity-vs-anorthosis-famagusta-esports-challengers-league-east-surge-split-1-w6",
    "event_name": "Challengers League East Surge: Split 1",
    "event_icon_url": "//owcdn.net/img/63a1b49fcf14b.png",
    "match_time": "1:00 AM",
    "eta": "4d 10h"
  },
  {
    "team_one_name": "Acend",
    "team_two_name": "Enterprise Esports",
    "match_url": "www.vlr.gg/164493/acend-vs-enterprise-esports-challengers-league-east-surge-split-1-w6",
    "event_name": "Challengers League East Surge: Split 1",
    "event_icon_url": "//owcdn.net/img/63a1b49fcf14b.png",
    "match_time": "2:00 AM",
    "eta": "4d 11h"
  },
  {
    "team_one_name": "NOM Esports",
    "team_two_name": "Cyber Wolves Esports",
    "match_url": "www.vlr.gg/164494/nom-esports-vs-cyber-wolves-esports-challengers-league-east-surge-split-1-w6",
    "event_name": "Challengers League East Surge: Split 1",
    "event_icon_url": "//owcdn.net/img/63a1b49fcf14b.png",
    "match_time": "3:00 AM",
    "eta": "4d 12h"
  },
  {
    "team_one_name": "Anonymo Esports",
    "team_two_name": "Rapid Ninjas",
    "match_url": "www.vlr.gg/164491/anonymo-esports-vs-rapid-ninjas-challengers-league-east-surge-split-1-w6",
    "event_name": "Challengers League East Surge: Split 1",
    "event_icon_url": "//owcdn.net/img/63a1b49fcf14b.png",
    "match_time": "4:00 AM",
    "eta": "4d 13h"
  },
  {
    "team_one_name": "Acend",
    "team_two_name": "NOM Esports",
    "match_url": "www.vlr.gg/164496/acend-vs-nom-esports-challengers-league-east-surge-split-1-w6",
    "event_name": "Challengers League East Surge: Split 1",
    "event_icon_url": "//owcdn.net/img/63a1b49fcf14b.png",
    "match_time": "12:00 AM",
    "eta": "5d 9h"
  },
  {
    "team_one_name": "Team Queso",
    "team_two_name": "UCAM Tokiers",
    "match_url": "www.vlr.gg/180384/team-queso-vs-ucam-tokiers-challengers-league-spain-rising-split-1-sf",
    "event_name": "Challengers League Spain Rising: Split 1",
    "event_icon_url": "//owcdn.net/img/63a1b03f5f599.png",
    "match_time": "12:00 AM",
    "eta": "5d 9h"
  },
  {
    "team_one_name": "Cyber Wolves Esports",
    "team_two_name": "Diamant Esports",
    "match_url": "www.vlr.gg/164497/cyber-wolves-esports-vs-diamant-esports-challengers-league-east-surge-split-1-w6",
    "event_name": "Challengers League East Surge: Split 1",
    "event_icon_url": "//owcdn.net/img/63a1b49fcf14b.png",
    "match_time": "1:00 AM",
    "eta": "5d 10h"
  },
  {
    "team_one_name": "B8 Esports",
    "team_two_name": "Rapid Ninjas",
    "match_url": "www.vlr.gg/164498/b8-esports-vs-rapid-ninjas-challengers-league-east-surge-split-1-w6",
    "event_name": "Challengers League East Surge: Split 1",
    "event_icon_url": "//owcdn.net/img/63a1b49fcf14b.png",
    "match_time": "2:00 AM",
    "eta": "5d 11h"
  },
  {
    "team_one_name": "Anonymo Esports",
    "team_two_name": "Anorthosis Famagusta Esports",
    "match_url": "www.vlr.gg/164499/anonymo-esports-vs-anorthosis-famagusta-esports-challengers-league-east-surge-split-1-w6",
    "event_name": "Challengers League East Surge: Split 1",
    "event_icon_url": "//owcdn.net/img/63a1b49fcf14b.png",
    "match_time": "3:00 AM",
    "eta": "5d 12h"
  },
  {
    "team_one_name": "Zero Tenacity",
    "team_two_name": "Enterprise Esports",
    "match_url": "www.vlr.gg/164500/zero-tenacity-vs-enterprise-esports-challengers-league-east-surge-split-1-w6",
    "event_name": "Challengers League East Surge: Split 1",
    "event_icon_url": "//owcdn.net/img/63a1b49fcf14b.png",
    "match_time": "4:00 AM",
    "eta": "5d 13h"
  },
  {
    "team_one_name": "ONE Team Esports",
    "team_two_name": "LP33",
    "match_url": "www.vlr.gg/179372/one-team-esports-vs-lp33-challengers-league-taiwan-hong-kong-split-1-ubr1",
    "event_name": "Challengers League Taiwan/Hong Kong: Split 1",
    "event_icon_url": "//owcdn.net/img/6009f963577f4.png",
    "match_time": "6:00 PM",
    "eta": "6d 3h"
  },
  {
    "team_one_name": "AxX",
    "team_two_name": "Griffin E-Sports",
    "match_url": "www.vlr.gg/179373/axx-vs-griffin-e-sports-challengers-league-taiwan-hong-kong-split-1-ubr1",
    "event_name": "Challengers League Taiwan/Hong Kong: Split 1",
    "event_icon_url": "//owcdn.net/img/6009f963577f4.png",
    "match_time": "8:00 PM",
    "eta": "6d 5h"
  },
  {
    "team_one_name": "Case Esports",
    "team_two_name": "Falcons",
    "match_url": "www.vlr.gg/180385/case-esports-vs-falcons-challengers-league-spain-rising-split-1-sf",
    "event_name": "Challengers League Spain Rising: Split 1",
    "event_icon_url": "//owcdn.net/img/63a1b03f5f599.png",
    "match_time": "12:00 AM",
    "eta": "6d 9h"
  },
  {
    "team_one_name": "Optix",
    "team_two_name": "Furious Gaming",
    "match_url": "www.vlr.gg/179408/optix-vs-furious-gaming-challengers-league-latam-south-fire-split-1-w2",
    "event_name": "Challengers League LATAM South FiRe: Split 1",
    "event_icon_url": "//owcdn.net/img/63cbac632c104.png",
    "match_time": "4:00 AM",
    "eta": "6d 13h"
  },
  {
    "team_one_name": "All Knights",
    "team_two_name": "INFINITY",
    "match_url": "www.vlr.gg/179409/all-knights-vs-infinity-challengers-league-latam-south-fire-split-1-w2",
    "event_name": "Challengers League LATAM South FiRe: Split 1",
    "event_icon_url": "//owcdn.net/img/63cbac632c104.png",
    "match_time": "7:00 AM",
    "eta": "6d 16h"
  },
  {
    "team_one_name": "Alter Ego",
    "team_two_name": "ARF TEAM",
    "match_url": "www.vlr.gg/178658/alter-ego-vs-arf-team-challengers-league-indonesia-split-1-ubr1",
    "event_name": "Challengers League Indonesia: Split 1",
    "event_icon_url": "//owcdn.net/img/6009f963577f4.png",
    "match_time": "12:00 PM",
    "eta": "6d 21h"
  }
]

export default function Home() {
  return (
    <div className='md:flex md:justify-center'>
      <div className='md:w-11/12'>
        <header className='h-20 flex items-center'>
          <h1 className='m-8 text-lg'>
            VLR ESPORTS TRACKER
          </h1>
        </header>
        <main>
          <FilterableMatchTable matches={matches} />
        </main>
      </div>
    </div>
  )
}
