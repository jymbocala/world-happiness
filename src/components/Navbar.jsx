import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-300 rounded-box">
      <div className="flex-1 px-2 lg:flex-none">
        <a className="text-lg font-bold">Word Happiness</a>
      </div>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">
          Dropdown
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
        >
          <li>
            <Link to="rankings">Rankings</Link>
          </li>
          <li>
          <Link to="search">Search</Link>
          </li>
          <li>
          <Link to="factors">Factors</Link>
          </li>
        </ul>
      </div>
      <div className="flex justify-end flex-1 px-2">
        <div className="flex items-stretch">
          <a className="btn btn-ghost rounded-btn">Login</a>
          <a className="btn btn-ghost rounded-btn">Register</a>
          <a className="btn btn-ghost rounded-btn">Logout</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
