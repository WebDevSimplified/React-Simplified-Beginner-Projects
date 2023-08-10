import { useState } from "react";
import "./App.css";

function App() {
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [checkPass, setCheckPass] = useState(true);
  const [checkEmail, setCheckEmail] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.endsWith("@webdevsimplified.com")) setCheckEmail(false);
    else setCheckEmail(true);
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      {!checkEmail && "Wrong Email"}
      <br />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        required
      />
      {!checkPass && "Wrong Password"}
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default App;
