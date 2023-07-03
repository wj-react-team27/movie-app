import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  height: 50px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.1);
  gap: 10px;
`;

const NavLink = styled.a`
  cursor: pointer;
`;

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <NavbarContainer>
      <NavLink onClick={() => navigate("/")}>홈</NavLink>
      <NavLink onClick={() => navigate("/favorit")}>즐겨찾기</NavLink>
    </NavbarContainer>
  );
};

export default Navbar;
