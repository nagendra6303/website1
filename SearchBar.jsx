import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const term = searchTerm.trim().toLowerCase();
    if (!term) return;

    if (term === "men") {
      navigate("/Men");
    } else if (term === "women") {
      navigate("/Women");
    } else if (term === "kids" || term === "kid") {
      navigate("/Kids");
    } else if (
      term === "traditional" ||
      term === "ethnic" ||
      term.includes("wear")
    ) {
      navigate("/TraditionalWear");
    } else if (term === "home") {
      navigate("/");
    } else {
      alert("No matching category found!");
    }

    setSearchTerm("");
  };

  return (
    <form
      onSubmit={handleSearch}
      className="w-full sm:w-64"
    >
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-4 py-2 border border-gray-400 rounded text-black outline-none focus:ring-2 focus:ring-red-400 transition"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </form>
  );
}
