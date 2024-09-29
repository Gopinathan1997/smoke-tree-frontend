import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [dbAddress, setDBAddress] = useState([]);

  useEffect(() => {
    const fetchAddresses = async () => {
      const response = await fetch(
        "https://smoke-tree-backend.onrender.com/address"
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data.response);
      if (data.response.length > 0) {
        setDBAddress(data.response);
      }
    };
    fetchAddresses();
  }, []);

  const addAddress = async (e) => {
    e.preventDefault();
    setName("");
    setAddress("");
    const registerDetails = {
      name,
      address,
    };
    const response = await fetch(
      "https://smoke-tree-backend.onrender.com/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerDetails),
      }
    );
    console.log(response);
    const text = await response.text();
    alert(`${text}`);
    window.location.reload();
  };
  return (
    <div className="App">
      <form onSubmit={addAddress}>
        <h1>Add Address Form</h1>
        <label>Username:</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <label className="address">Address:</label>
        <textarea rows={5} onChange={(e) => setAddress(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <div className="database-address">
        <h1>Database Addresses</h1>
        {dbAddress.length > 0 ? (
          <ol>
            {dbAddress.map((eachData) => (
              <li>
                <th>{eachData.name}</th>
                <td>{eachData.address}</td>
              </li>
            ))}
          </ol>
        ) : (
          <p>Database is Empty</p>
        )}
      </div>
    </div>
  );
};

export default App;
