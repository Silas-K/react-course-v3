import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: "John Smith" });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <>
      {user ? (
        <div>
          <h4>Hello there, {user.name}</h4>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h4>Please Login</h4>
          <button className="btn" onClick={login}>
            Login
          </button>
        </div>
      )}

      {user ? (
        <Logout logout={logout} name={user.name} />
      ) : (
        <Login login={login} />
      )}
    </>

    // <>
    //   {user ? (
    //     <Logout logout={logout} name={user.name} />
    //   ) : (
    //     <Login login={login} />
    //   )}
    // </>
  );
};

const Logout = ({ logout, name }) => {
  return (
    <div>
      <h4>Hello there, {name}</h4>
      <button className="btn" onClick={() => logout()}>
        Logout
      </button>
    </div>
  );
};

const Login = ({ login }) => {
  return (
    <div>
      <h4>Please Login</h4>
      <button className="btn" onClick={() => login()}>
        Login
      </button>
    </div>
  );
};

export default UserChallenge;
