import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function CompanyPage() {
  const router = useRouter();
  const [companyData, setCompanyData] = useState('');
  const { companyname } = router.query;

  // Fetching the company data based on the query parameter
  async function getData() {
    const company = await getCompany(companyname);
    setCompanyData(company);
    console.log(company);
  }
  // Triggering the getData function whenever the companyname changes

  useEffect(() => {
    getData();
  }, [companyname]);

  return (
    <div className="grid grid-cols-2 mx-20 my-12 p-12 rounded-lg shadow-lg bg-indigo-600 text-white text-center">
      {companyData ? (
        <>
          <div>
            <p className="text-2xl font-bold">{companyData.name}</p>{' '}
          </div>
          <div>
            <img src={companyData.image} />
          </div>
        </>
      ) : (
        <div>Loading ...</div>
      )}
    </div>
  );
}
export async function getCompany(company) {
  // Fetching the company data from the API

  const res = await fetch(`http://localhost:3000/api/companies/${company}`);

  const companyName = await res.json();
  console.log(companyName);
  return companyName;
}
