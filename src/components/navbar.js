import NavItem from "./navItem";
import logo from '../../public/logo.svg'
import Image from 'next/image'

export default function NavBar({ matchView, onViewClick }) {
    return (
        <header className='pt-4 md:pt-0 flex flex-col md:flex-row m-6 items-center'>
            <Image className='my-2 md:my-0'
                priority={true}
                src={logo}
                width={200}
                height={34.6666666}
                alt='POSTPLANT' />
            <nav className="w-full md:ml-6 my-2 md:my-0">
                <ul className="grid grid-cols-2 md:flex">
                    <NavItem
                        matchView={matchView}
                        onViewClick={() => onViewClick}
                    >
                        Upcoming
                    </NavItem>
                    <NavItem
                        matchView={matchView}
                        onViewClick={() => onViewClick}
                    >
                        Completed
                    </NavItem>
                </ul>
            </nav>
        </header>
    );
}