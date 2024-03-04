import { useGlobalAppContext } from "./AppContext";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const { appState, setAppState } = useGlobalAppContext();

  return (
    <nav className="navbar">
      <h5>CONTEXT API</h5>
      <NavLinks />
      <p>Count is {appState?.count}</p>
    </nav>
  );
};
export default Navbar;
