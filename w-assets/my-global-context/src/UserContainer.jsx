import { useGlobalAppContext } from "./AppContext";

const UserContainer = () => {
  const { appState, setAppState } = useGlobalAppContext();

  const logout = () => {
    setAppState((state) => ({ ...state, user: null }));
  };

  const user = appState?.user;

  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello there, {user?.name?.toUpperCase()}</p>
          <button className="btn" onClick={logout} type="button">
            Logout
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
};
export default UserContainer;
