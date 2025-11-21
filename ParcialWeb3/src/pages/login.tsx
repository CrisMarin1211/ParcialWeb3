import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/userAuth";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("customer");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login({ name, role }));
    navigate("/store");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Nombre" value={name} onChange={e => setName(e.target.value)} />
      <select value={role} onChange={e => setRole(e.target.value)}>
        <option value="manager">Manager</option>
        <option value="customer">Customer</option>
      </select>
      <button>Ingresar</button>
    </form>
  );
}

export default LoginPage;
