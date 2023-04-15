import FilterBar from './filterBar'
import MatchTable from './matchTable'
import { useState, useEffect } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#__next');

export default function FilterableMatchTable() {
    // Hard-coded default filters
    const [filterArr, setFilterArr] = useState(['Champions Tour 2023: Pacific League', 'Champions Tour 2023: Americas League', 'Champions Tour 2023: EMEA League']);
    const [matches, setMatches] = useState([])

    useEffect(() => {
        const getMatches = async () => {
            const data = await fetch('https://vlrggapi-two.vercel.app/match/upcoming').then(data => data.json())
            setMatches(data.data.segments)
        }
        getMatches()
    }, [])

    function handleFilterClick(eventName) {
        console.log(eventName)

        let nextFilter

        if (filterArr.includes(eventName)) {
            nextFilter = filterArr.filter(item => item !== eventName)
        }
        else {
            nextFilter = [...filterArr, eventName]
        }        
        setFilterArr(nextFilter)
    }

    function handleFilterReset() {
        setFilterArr([])
    }

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    
    return (
        <section className='block md:w-11/12 md:grid md:grid-cols-10'>
            <div className='block md:hidden mt-4 mb-8 flex justify-center'>
                <button
                    className='inline-block md:hidden mx-4'
                    onClick={openModal}>
                    Filters
                </button>
            </div>
            <div className='flex items-center'>
                <Modal
                    className='m-10 bg-gray-950 rounded'
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Filter modal"
                >
                    <div className='flex justify-center'>
                        <button
                            className='m-4 px-6 py-2 bg-red-700 rounded'
                            onClick={closeModal}>
                            close
                        </button>
                    </div>

                    <FilterBar
                        styleOptions='filterModalContent pb-4 px-4 bg-gray-950 overflow-scroll'
                        matches={matches}
                        filterArr={filterArr}
                        onFilterClick={(e) => handleFilterClick(e.target.textContent)}
                        onFilterReset={() => handleFilterReset} />
                </Modal>
            </div>

            <FilterBar
                styleOptions='hidden md:block m-0 md:mt-4 px-4 py-2 bg-gray-950 md:col-span-2 overflow-hidden'
                matches={matches}
                filterArr={filterArr}
                onFilterClick={(e) => handleFilterClick(e.target.textContent)}
                onFilterReset={() => handleFilterReset} />
            <MatchTable
                matches={matches}
                filterArr={filterArr} />
        </section>
    );
}