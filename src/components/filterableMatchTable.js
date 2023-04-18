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
            const data = await fetch('https://vlrggapi2.vercel.app/match/upcoming').then(data => data.json())
            setMatches(data.data.segments)
        }
        setTimeout(() => {
            getMatches()
        }, "4000")
        
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
        document.querySelector('body').classList.add('overflow-hidden');
    }

    function closeModal() {
        setIsOpen(false);
        document.querySelector('body').classList.remove('overflow-hidden')
    }
    
    return (
        <section className='block md:w-11/12 md:grid md:grid-cols-10'>
            <div className='block md:hidden my-4 flex justify-center'>
                <button
                    className='inline-block md:hidden mx-4'
                    onClick={openModal}>
                    Filters
                </button>
            </div>
            <div className='block md:hidden flex items-center'>
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

            {matches.length === 0 ? (
                // Loading skeleton
                <>
                    <div className="hidden md:block m-0 md:mt-4 px-4 py-2 bg-gray-950 md:col-span-2 rounded-full animate-pulse">
                        <div className='h-8 mt-8 mb-4 p-10 py-2 md:px-6 rounded-full bg-gray-800 rounded-full'></div>
                        <div className='h-8 my-4 p-8 py-2 md:px-6 rounded-full bg-gray-800 rounded-full'></div>
                        <div className='h-8 my-4 p-8 py-2 md:px-6 rounded-full bg-gray-800 rounded-full'></div>
                    </div>
                    <div className='px-4 py-0 md:py-2 md:col-span-7 animate-pulse'>
                        <div className='h-16 flex justify-between items-center mt-12 mb-4 p-6 md:px-16 rounded bg-sky-950'></div>
                        <div className='h-16 flex justify-between items-center my-4 p-6 md:px-16 rounded bg-sky-950'></div>
                        <div className='h-16 flex justify-between items-center my-4 p-6 md:px-16 rounded bg-sky-950'></div>
                    </div>
                </>
            ) : (
                    // Actual content
                    <>
                        <FilterBar
                            styleOptions='hidden md:block m-0 md:mt-4 px-4 py-2 bg-gray-950 md:col-span-2 overflow-hidden'
                            matches={matches}
                            filterArr={filterArr}
                            onFilterClick={(e) => handleFilterClick(e.target.textContent)}
                            onFilterReset={() => handleFilterReset} />
                        <MatchTable
                            matches={matches}
                            filterArr={filterArr} />
                    </>
            )}
        </section>
    );
}