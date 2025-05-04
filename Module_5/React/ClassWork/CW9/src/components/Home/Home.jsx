import { useState, useEffect } from 'react';
import Exercise from '../Exercise/Exercise';

function Home() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedExercise, setSelectedExercise] = useState(null);
    const itemsPerPage = 4;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://exercisedb.p.rapidapi.com/exercises?limit=10&offset=0",
                    {
                        method: 'GET',
                        headers: {
                            "X-RapidAPI-Key":
                                "24df94ac86msh6db44f4594001cdp184391jsn1016c7423984",
                            "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
                        },
                    }
                );
                console.log('Response Headers:', response.headers);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const json = await response.json();
                console.log('API response:', json);
                setData(json);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleSearch = (e) => {
        setSearch(e.target.value);
        setCurrentPage(1);
    };

    const lowerSearch = search.trim().toLowerCase();

    const filteredData = data.filter((item) => {
        const lowerSearch = search.trim().toLowerCase();
        const categoryMatches = activeCategory === 'all' || item.bodyPart.toLowerCase() === activeCategory;
        const searchMatches = !lowerSearch || item.name.toLowerCase().includes(lowerSearch) ||
            item.equipment.toLowerCase().includes(lowerSearch) ||
            (item.target && item.target.toLowerCase().includes(lowerSearch)) ||
            item.bodyPart.toLowerCase().includes(lowerSearch);

        return categoryMatches && searchMatches;
    });

    console.log(`Filtered count for "${activeCategory}" with search "${search}":`,
        filteredData.length);

    const totalPage = Math.ceil(filteredData.length / itemsPerPage);
    const currentItems = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className='home-container'>
            <div className="heading">
                <h2>
                    <span className='hustle'>Hustle</span>
                    <span className='hub'>Hub</span>
                </h2>
            </div>
            <div className="search-container">
                <input type="text" placeholder='Search exercises...' value={search} onChange={handleSearch} />
            </div>
            <div className="filter-container">
                <button onClick={() => {
                    setActiveCategory('all');
                    setCurrentPage(1);
                }}>All</button>

                <button onClick={() => {
                    setActiveCategory('back');
                    setCurrentPage(1);
                }}>Back</button>

                <button onClick={() => {
                    setActiveCategory('waist');
                    setCurrentPage(1);
                }}>Waist</button>

                <button onClick={() => {
                    setActiveCategory('chest');
                    setCurrentPage(1);
                }}>Chest</button>
            </div>

            <div className="data-list">
                {currentItems.length > 0 ? (currentItems.map((item) => (
                    <div
                        key={item.id}
                        className="data-item"
                        onClick={() => setSelectedExercise(item)}>
                        <img src={item.gifUrl} alt={item.name} className='exercise-img' />
                        <h3>{item.name}</h3>
                        <p>
                            <strong>Body Part:</strong>{item.bodyPart}
                        </p>
                        <div className="secondary-muscles">
                            {item.secondaryMuscles && item.secondaryMuscles.map((muscle, index) => (
                                <p className="muscle" key={index}>{muscle}</p>
                            ))}
                        </div>
                    </div>
                ))
                ) : (
                    <p>No exercise found.</p>
                )}
            </div>

            <div className="pagination">
                <button disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => prev - 1)}>Prev</button>
                <span>{currentPage}/{totalPage || 1}</span>
                <button
                    disabled={currentPage === totalPage || totalPage === 0}
                    onClick={() => setCurrentPage((prev) => prev + 1)}>Next</button>
            </div>

            {selectedExercise && (
                <Exercise
                    exercise={selectedExercise}
                    onClose={() => setSelectedExercise(null)}
                />
            )}
        </div>
    );
}

export default Home;