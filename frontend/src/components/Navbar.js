import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };
  return (
    <header className="bg-white">
      <div className="max-w-[1400px] m-auto p-5 pr-5 flex items-center justify-between text-gray-700">
        <Link to="/">
          <h1 className="text-3xl font-bold ">Trim Check</h1>
        </Link>
        
        <nav className="flex items-center text-slate-700">
        <Link className={"ml-3"} to="/ratebarber">Rate Barber</Link>
          {user && (
            <div>
              <span className="ml-3">{user.email}</span>
              <button className="ml-3 border-2 p-1 rounded cursor-pointer border-red-500 " onClick={handleClick}>Logout</button>
            </div>
          )}
           

          {!user && (<div>
            <Link className={"ml-3"} to="/login">Login</Link>
            <Link className={"ml-3"} to="/signup">Signup</Link>
           
          </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
