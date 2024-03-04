import React from 'react'
import styled from 'styled-components'

import { images } from 'common'

import { Level2_1 } from 'components/Organisms/account/Level2_1';
import { Level2_2 } from 'components/Organisms/account/Level2_2';
import { BiddingHistory } from 'components/Organisms/account/BiddingHistory';

export const AccountPage = () => {
  return (
    <Container>
      <Title>My Dashboard</Title>
      
      <GridContainer>
        <Level2_1 />
        <Level2_2 />
        <BiddingHistory />
      </GridContainer>
    </Container>
  )
}

const Container = styled.div`
  justify-content: flex-start;
  align-items: flex-start;
  padding: 60px;
  overflow-y: auto;
  overflow-x: hidden;
  margin-bottom: 30px;
  height: 100%;
  transition: width 300ms ease-in-out;
  display: flex;
  flex-direction: column;

  &::before {
    background: rgba(45, 51, 65, 0.6);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    z-index: -1;
    opacity: 1;
  }
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    background: url(${images.HomePageBgImgBlur}) center center / cover no-repeat;
    z-index: -2;
    @-moz-document url-prefix() {
      background: url(${images.HomePageBgImgBlur});
      background-repeat: no-repeat;
      background-position: center center;
      background-size: auto 250%;
    }
  }

  ${({ theme }) => theme.breakPoints['600px']} {
    padding: 30px;
  }

  ${({ theme }) => theme.breakPoints['480px']} {
    padding: 30px;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 200;
  letter-spacing: -.03em;
  line-height: 100%;
  padding: 0 0 5px 0;

  @media (max-width: 480px) {
    font-size: 1.7rem;
  }
`;

const GridContainer = styled.div`
  width: 100%;
  margin: 20px 0 0 0;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  color: #fff;
  flex-wrap: wrap;

  ${({ theme }) => theme.breakPoints['1200px']} {
    flex-direction: column;
  }
`