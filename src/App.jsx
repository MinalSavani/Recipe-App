import Pages from "./pages/Pages"
import Category from "./components/Category"
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";


function App() {
  return (
    <>
      <div className='App'>
        <Nav>
          <GiKnifeFork/>
          <Logo to={"/"}>deliciousss</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </div>

      <nav></nav>
    </>
  )
}

const  Logo=styled(Link)`
        text-decoration:none;
        font-size:1.5rem;
        font-family:'Lobster Two',cursive;
        font-weight:400;


`
const Nav=styled.div`
    padding:4rem 0rem;
    display:flex;
    justify-content:flex-start;
    align-items:center;


    svg{
    font-size:2rem;

    }

`

fetch(`spoonacular.com/api&key="${import.meta.env.VITE_API_KEY}"`)

export default App
