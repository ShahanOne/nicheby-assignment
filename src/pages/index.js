import Image from 'next/image';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [companyName, setCompanyName] = useState(''); // State to store the input value
  const [allCompanies, setAllCompanies] = useState([]);

  const [searchResults, setSearchResults] = useState([]); // State to store the filtered search results
  const [isActive, setActive] = useState(false); // State to track if the input field is active
  const [searchActive, setSearchActive] = useState(false);

  useEffect(() => {
    async function getCompanies() {
      const res = await fetch('/api/companies');
      const companies = await res.json();
      setAllCompanies(companies);

      setSearchResults(companies);
    }
    getCompanies();
  }, []);

  function handleChange(e) {
    const { value } = e.target;
    setCompanyName(value);
  }

  function getCompany() {}
  useEffect(() => {
    // Debounce the search functionality using a timer
    const debounceTimer = setTimeout(() => {
      if (companyName) {
        // Filter search results based on the company name input
        const filteredResults = allCompanies.filter((company) =>
          company.name.toLowerCase().includes(companyName.toLowerCase())
        );
        setSearchResults(filteredResults);
      } else {
        // If the input is empty, show all companies
        setSearchResults(allCompanies);
      }
    }, 500); // Delay of 500ms

    // Clear the timer if the component unmounts or the input value changes
    return () => {
      clearTimeout(debounceTimer);
    };
  }, [companyName, allCompanies]);

  return (
    <div className="mainDiv p-24">
      <div className=" px-8 py-24 h-[40rem] bg-orange-400 rounded-lg shadow-lg">
        <p className="text-4xl text-white font-bold">
          Find your dream company ...
        </p>
        <div className="grid grid-cols-3">
          <div className="col-span-2 py-12">
            <input
              onFocus={() => setActive(true)}
              // onBlur={() => setActive(false)}
              className="border-gray-500 shadow-lg w-full px-1 py-2 border-2 rounded-full"
              type="text"
              onChange={handleChange}
              value={companyName}
              name="companyName"
            />
            {isActive && searchResults.length > 0 && (
              <div className="results">
                {searchResults.map((company, key) => (
                  <Link
                    className="bg-orange-50 hover:bg-white border-orange-600 block px-1 my-1 py-2 border-2 rounded-full shadow"
                    key={key}
                    href={`/companies/${company.name}`}
                  >
                    {company.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className="py-12">
            <button
              onClick={getCompany}
              className="bg-indigo-500 text-xl hover:bg-indigo-600 text-white mx-2 rounded-2xl px-4 py-2"
            >
              Search
            </button>
            <div className=" py-4 px-2">
              <Link
                href="/companies"
                className="bg-indigo-500 hover:bg-indigo-600 px-6 py-2 rounded-2xl text-white my-2"
              >
                Get All Companies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// useEffect(() => {
//   if (companyName) {
//     // Filter search results based on the company name input
//     const filteredResults = searchResults.filter((company) =>
//       company.name.toLowerCase().includes(companyName.toLowerCase())
//     );
//     setSearchResults(filteredResults);
//   } else {
//     setSearchResults(allCompanies); // Reset search results if the input is empty
//   }
// }, [companyName]);
