export default function Navbar() {
  return (
    <div className="nav grid grid-cols-2 bg-gray-100">
      <p className="text-3xl text-gray-800 font-bold px-2 my-2">NicheBy</p>
      <div className="text-end my-2">
        <button className="text-white px-4 py-1 bg-gray-800 rounded-lg shadow mx-2">
          Sign In
        </button>
        <button className="text-white px-4 py-1 bg-gray-800 rounded-lg shadow mx-2">
          Sign Up
        </button>
      </div>
    </div>
  );
}
