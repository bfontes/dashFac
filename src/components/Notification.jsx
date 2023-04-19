import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import styled from 'styled-components';

import { Button } from '.';
import { chatData } from '../datas/data';
import { useStateContext } from '../contexts/ContextProvider';

const Notification = () => {
  const { currentColor } = useStateContext();

  const BoldText = styled.p`
  font-weight: bold;
  color: #000000;
`;

const SmallText = styled.p`
  color: #6B7280;
  font-size: 0.875rem;
  line-height: 1.25rem; 
`;
const Image = styled.img`
  border-radius: 50%;
  height: 40px;
  width: 40px;
`;
const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  line-height: 2rem;
  gap: 1.25rem;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  padding: 0.75rem;
`;
const StyledDiv = styled.div`
  margin-top: 1.25rem;
`;

const NewButton = styled.button`
  color: white;
  font-size: 12px;
  line-height: 16px;
  font-weight: bold;
  padding: 4px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 5px;
  background-color: orange;
`;
const NotificationsTitle = styled.p`
  font-weight: bold;
  font-size: 18px;
  color: #000000;
  line-height: 28px;
`;
const FlexContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const NotificationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavItem = styled.div`
  position: absolute;
  right: 20px;
  top: 64px;
  background-color: white;
  color: #42464D;
  padding: 32px;
  border-radius: 8px;
  width: 24rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  z-index: 1;

  @media (min-width: 768px) {
    right: 10rem;
  }

  &.dark {
    background-color: #42464D;
    color: #FFF;
  }
`;

  return (
    <NavItem>
      <NotificationContainer>
        <FlexContainer>
          <NotificationsTitle>Notifications</NotificationsTitle>
          <NewButton>5 New</NewButton>
        </FlexContainer>
        <Button icon={<MdOutlineCancel />} color="rgb(153, 171, 180)" bgHoverColor="light-gray" size="2xl" borderRadius="50%" />
      </NotificationContainer>
      <StyledDiv>
        {chatData?.map((item, index) => (
          <ItemContainer key={index}>
           <Image src={item.image} alt={item.message} />
            <div>
              <BoldText>{item.message}</BoldText>
              <SmallText>{item.desc}</SmallText>
            </div>
          </ItemContainer>
        ))}
        <StyledDiv>
          <Button color="white" bgColor={currentColor} text="See all notifications" borderRadius="10px" width="full" />
        </StyledDiv>
      </StyledDiv>
    </NavItem>
  );
};

export default Notification;
