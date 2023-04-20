import FilterBar from './filterBar'
import MatchTable from './matchTable'
import { useState, useEffect } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#__next');

export default function FilterableMatchTable({ matchView, matches, filterArr, setFilterArr }) {
    // Remove hard-coded filters from state if no matches exist in current API fetch
    useEffect(() => {
        if (matches.length > 0) {
            const matchTournaments = matches.map(match => match.tournament_name)

            let nextFilter

            filterArr.forEach(filter => {
                if (!matchTournaments.includes(filter)) {
                    nextFilter = filterArr.filter(item => item !== filter)
                    setFilterArr(nextFilter)
                }
            })
        }
    })

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
        <section className='block my-6 md:my-0 md:w-11/12 md:grid md:grid-cols-10'>
            {matches.length === 0 ? (
                // Loading skeleton
                <>
                    <div className="hidden md:block mt-8 px-4 py-2 bg-gray-950 md:col-span-2 rounded-full animate-pulse">
                        <div className='h-8 my-4 rounded-full bg-gray-800 rounded-full'></div>
                        <div className='h-8 my-4 rounded-full bg-gray-800 rounded-full'></div>
                        <div className='h-8 my-4 rounded-full bg-gray-800 rounded-full'></div>
                    </div>
                    <div className='mt-24 md:mt-12 px-4 py-0 md:py-2 md:col-span-7 animate-pulse'>
                        <div className='h-24 md:h-16 mb-4 rounded bg-sky-950'></div>
                        <div className='h-24 md:h-16 my-4 rounded bg-sky-950'></div>
                        <div className='h-24 md:h-16 my-4 rounded bg-sky-950'></div>
                    </div>
                </>
            ) : (
                    // Actual content
                    <>
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
                        <FilterBar
                            styleOptions='hidden md:block m-0 md:mt-4 px-4 py-2 bg-gray-950 md:col-span-2 overflow-hidden'
                            matches={matches}
                            filterArr={filterArr}
                            onFilterClick={(e) => handleFilterClick(e.target.textContent)}
                            onFilterReset={() => handleFilterReset} />
                        <MatchTable
                            matchView={matchView}
                            matches={matches}
                            filterArr={filterArr} />
                    </>
            )}
        </section>
    );
}