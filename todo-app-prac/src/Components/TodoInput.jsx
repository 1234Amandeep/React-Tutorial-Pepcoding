import React, { useState } from "react";

export default function TodoInput() {
  const [input, setInput] = useState("dfsdf");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <>
      <form
        className="d-flex justify-content-center mt-5"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="text"
          className="form-control input-feild"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
