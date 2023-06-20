import Link from 'next/link';

export async function getStaticProps() {
  // Fetching companies data from the API

  const res = await fetch('http://localhost:3000/api/companies');
  const companies = await res.json();
  return { props: { companies } }; // Returning the fetched data as props
}

export default function Companies({ companies }) {
  return (
    <div className="companiesDiv p-12 m-16 bg-indigo-500 text-white rounded-lg shadow-lg">
      {/* Rendering each company and linking to its details page */}
      {companies.map((company, index) => {
        return (
          <Link key={index} href={`/companies/${company.name}`}>
            <div className="grid grid-cols-2 my-4">
              <p className="text-lg font-bold py-2"> o {company.name}</p>
              <img alt="company-img" src={company.image} />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
