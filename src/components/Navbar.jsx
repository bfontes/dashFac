import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import styled from 'styled-components';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../datas/avatar.jpg';
import { Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';


const StyledButton = styled.button`
  color: ${(props) => props.color};
  font-size: 1.25rem;
  line-height: 1.75rem;
  border-radius: 50%px;
  padding: 0.75rem;
  position: relative;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #f3f4f6;
  }
`;

const StyledDot = styled.span`
  background-color: ${(props) => props.dotColor};
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  position: relative;
  @media (min-width: 768px) { 
    margin-right: 1.5rem; 
    margin-left: 1.5rem; 
  }
`;

const UserProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 8px;
  &:hover {
    background-color: #f3f3f3;
  }
  border-radius: 5px;
`;

const UserProfileImage = styled.img`
  border-radius: 50%;
  width: 30px;
  height: 30px;
`;

const UserProfileText = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  color: #ccc;
`;

const UserProfileBoldText = styled.span`
  font-weight: bold;
  margin-left: 1px;
`;

const UserProfileArrowIcon = styled(MdKeyboardArrowDown)`
  font-size: 14px;
  color: #ccc;
`;

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <StyledButton color={color} onClick={() => customFunc()}>
      <StyledDot dotColor={dotColor} />
      {icon}
    </StyledButton>
  </TooltipComponent>
);

//the const values are passed as property for the component when he is rendered  in another component, passed from father to son
const Navbar = () => {
  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    //handleResize é usada como listener para o evento de resize da janela 
    window.addEventListener('resize', handleResize);
    //define o estado inicial do tamanho da janela
    handleResize();
    //garante que o codigo seja executado de forma limpa qnd o comp for desmontado(disassembled)
    return () => window.removeEventListener('resize', handleResize);
    //[] garante q a função seja executada somente uma vez e que não seja chamada desnecessariamente
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <NavWrapper data-testid="navbar">
      <NavButton title="Menu" customFunc={handleActiveMenu} color={currentColor} icon={<AiOutlineMenu />} />
      <div className="flex">
        <NavButton title="Chat" dotColor="#03C9D7" customFunc={() => handleClick('chat')} color={currentColor} icon={<BsChatLeft />} />
        <NavButton title="Notification" dotColor="rgb(254, 201, 15)" customFunc={() => handleClick('notification')} color={currentColor} icon={<RiNotification3Line />} />
        <TooltipComponent content="Profile" position="BottomCenter">
          <UserProfileContainer onClick={() => handleClick('userProfile')}>
            <UserProfileImage src={avatar} alt="user-profile" />
              <UserProfileText>
                  <span>Hi,</span>
                  <UserProfileBoldText>Ana</UserProfileBoldText>
              </UserProfileText>
            <UserProfileArrowIcon />
          </UserProfileContainer>
        </TooltipComponent>

        {isClicked.chat && (<Chat />)}
        {isClicked.notification && (<Notification />)}
        {isClicked.userProfile && (<UserProfile />)}
      </div>
   </NavWrapper>
  );
};
export default Navbar;
