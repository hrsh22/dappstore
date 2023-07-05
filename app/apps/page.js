"use client"
import { useEffect, useState } from 'react';

const CardPage = () => {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1); // track the current page
  const [pageCount, setPageCount] = useState(0);

  const loadMoreCards = async () => {
    const nextPage = page + 1;
    const response = await fetch(`https://api.meroku.store/api/v1/dapp?page=${nextPage}`);
    const data = await response.json();
    const newCards = data.response || [];

    setPage(nextPage);
    setCards((prevCards) => [...prevCards, ...newCards]);
  };

  const truncDesc =  (desc) =>{
    const truncatedDescription = desc.length > 100
    ? desc.substring(0, 100) + '...'  // Truncate description if it exceeds 100 characters
    : desc;  // Use the full description if it's shorter

    return truncatedDescription
  }

  useEffect(() => {
    const fetchData = async () => {
      console.log(1)
      const response = await fetch('https://api.meroku.store/api/v1/dapp?page=0');
      console.log(2)
      const data = await response.json();
      const initialCards = data.response || [];
      const pageCount = data.pageCount || 0;
      console.log(initialCards);
      console.log("name: ",initialCards[0].name)
      console.log("images: ",initialCards[0].images.logo)
      setCards(initialCards);
      setPageCount(pageCount);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {cards && cards.length > 0 ? (
          cards.map((card) => (
            <div key={card.dappId} className="bg-white rounded-lg shadow-lg">
              <img src={card.images.logo} alt="" className="rounded-t-lg" />
              <div className="p-6">
                <h2 className="font-bold mb-2 text-2xl text-purple-800">{card.name}</h2>
                <p className="text-purple-700 mb-2">{truncDesc(card.description)}</p>
                {/* <p className="text-purple-700 mb-2 overflow-hidden overflow-ellipsis">{card.description}</p> */}
                <a href={card.appUrl} className="text-purple-600 hover:text-purple-500 underline text-sm">
                  Read More 👉
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white">Loading...</p>
        )}
      </div>
      {page < pageCount - 1 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={loadMoreCards}
            className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Load more...
          </button>
        </div>
      )}
    </div>
  );
};

export default CardPage;
