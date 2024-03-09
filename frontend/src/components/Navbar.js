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
      <div className=" max-w-[1400px] m-auto pt-3 pr-5 flex items-center justify-between text-gray-700">
        <Link to="/">
          <h1 className="text-2xl font-bold">Trim Check</h1>
        </Link>
        <nav className="flex items-center ">
          {user && (
            <div>
              <span>{user.email}</span>
              <button className="ml-2" onClick={handleClick}>Logout</button>
            </div>
          )}

          {!user && (<div>
            <Link className={"ml-2"} to="/login">Login</Link>
            <Link className={"ml-2"} to="/signup">Signup</Link>
          </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
