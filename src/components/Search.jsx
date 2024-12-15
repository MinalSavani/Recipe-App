import { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (input) {
      navigate("/searched/" + input);
    }
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
          placeholder="Search..."
        />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: 0 auto;
  width: 50%; /* Adjust width */
  position: relative;

  div {
    width: 100%;
    position: relative;
  }

  input {
    width: 100%;
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    outline: none;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translate(0, -50%);
    color: white;
  }
`;

export default Search;
