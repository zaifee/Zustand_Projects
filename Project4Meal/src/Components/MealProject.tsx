import { useEffect } from 'react';
import { useStore } from '../store'

const MealProject = () => {
  const { meals, searchQuery, setSearchQuery, setMeals } = useStore();

  // ✅ Load searchQuery from localStorage when component mounts
  useEffect(() => {
    const savedQuery = localStorage.getItem("searchQuery");
    if (savedQuery) {
      setSearchQuery(savedQuery);
    }
  }, [setSearchQuery]);

  // ✅ Save searchQuery to localStorage whenever it changes
  useEffect(() => {
    if (searchQuery !== "") {
      localStorage.setItem("searchQuery", searchQuery);
    }
  }, [searchQuery]);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
        const data = await response.json();
        setMeals(data.meals || []); // guard against null
      } catch (error) {
        console.log(error);    
      }
    }
    fetchMeal();
  }, [setMeals]);

  const filteredMeals = searchQuery
    ? meals.filter((meal) =>
        meal.strMeal.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : meals;

  return (
    <div className='min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100'>
      <h1 className='text-4xl font-semibold mt-2 text-teal-600'>
        Sea Food Recipe
      </h1>
      <input 
        type="text"
        placeholder='Enter your Meal...'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className='border border-teal-400 p-3 mt-2 w-96 rounded-lg shadow-lg text-center focus:outline-none focus:ring-2 focus:ring-teal-600'
      />

      <div className='grid grid-cols-3 gap-6 mt-6'>
        {filteredMeals.length > 0 ? (
          filteredMeals.map((meal) => (
            <div key={meal.idMeal} className='bg-white shadow-md rounded-lg p-4 flex flex-col items-center'>
              <img 
                src={meal.strMealThumb} 
                alt={meal.strMeal}
                className='w-full h-48 object-cover rounded-lg mb-4'
              />
              <h2 className="text-lg font-semibold">{meal.strMeal}</h2>
            </div>
          ))
        ) : (
          <p>No meals found</p>
        )}
      </div>
    </div>
  )
}

export default MealProject;
