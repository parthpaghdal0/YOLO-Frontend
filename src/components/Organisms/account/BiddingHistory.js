import React, { useState } from 'react'
import styled from 'styled-components'

import { Card } from 'components/Atoms/Card'
import { Grid } from 'components/Atoms/Grid'
import { Cell } from 'components/Atoms/Grid/Cell'
import { HeaderCell } from 'components/Atoms/Grid/HeaderCell'
import { IconLib } from 'components/Atoms/IconLib'
import { Header_1 } from './shard-comps'
import { tableData } from 'datasource/account'
import { capitalizeFirst } from 'utils'

export const BiddingHistory = () => {
    return (
        <Container>
            <Title>Bidding history</Title>
            <HistoryCard>
                <GridContainer>
                    <HistoryGrid>
                        {tableData.tableHeader.map((headerText, index) => (
                            <StyledHeaderCell text={headerText} key={index} />
                        ))}
                        {tableData.tableData.map((rowData, index) => {
                            return (
                                <>
                                    <DateCell key={`a-${index}`}>{rowData[0]}</DateCell>
                                    <TotalYoloEarningsCell key={`b-${index}`}>{rowData[1]}</TotalYoloEarningsCell>
                                    <FeesEarnedCell key={`c-${index}`}>
                                        <div>{rowData[2]}</div>
                                    </FeesEarnedCell>
                                    <YoloVolumeCell key={`d-${index}`}>
                                        <div>{rowData[3]}</div>
                                    </YoloVolumeCell>
                                    <BidDirectionCell key={`e-${index}`}>
                                        <IconArrow masking rotate={rowData[4] === 'up' ? 'down' : 'up'} isUp={rowData[4] === 'up'}></IconArrow>{capitalizeFirst(rowData[4])}
                                    </BidDirectionCell>
                                    <RoundResultCell>{rowData[5]}</RoundResultCell>
                                </>
                            )
                        })}
                    </HistoryGrid>
                </GridContainer>
            </HistoryCard>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px 0 0 0;
  width: 100%;

  @media only screen and (min-width: 750px) {
    width: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    margin-top: 10px;
  }

  @media (max-width: 576px) {
    margin: 5px 0;
  }
`

const Title = styled.div`
  ${Header_1}
`

const HistoryCard = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 0;
  background: rgba(129,170,255,.06);
`

const GridContainer = styled.div`
  width: 100%;
`

const HistoryGrid = styled(Grid)`
  grid-template-columns: 1fr 2fr 1fr 1fr 2fr 1fr;

  @media only screen and (max-width: 768px),
  (min-device-width: 768px) and (max-device-width: 1024px) {
    grid-template-columns: 1fr;
  }
`

const StyledHeaderCell = styled(HeaderCell)`
  &:first-child {
    border-top-left-radius: 10px;
  }
  &:nth-child(6) {
    border-top-right-radius: 10px;
  }
  background: rgba(0,0,0,.3);
`

const DateCell = styled(Cell)`
  background: rgba(129,170,255,.15);

  @media only screen and (max-width: 768px), (min-device-width: 768px) and (max-device-width: 1024px) {
    padding-top: 5px;
    padding-bottom: 5px;
    background: rgba(0,0,0,.3);
  }
`

const TotalYoloEarningsCell = styled(Cell)`
  @media only screen and (max-width: 768px), (min-device-width: 768px) and (max-device-width: 1024px) {
    &:before {
      content: 'Round number';
    }
  }
`

const FeesEarnedCell = styled(Cell)`
  @media only screen and (max-width: 768px), (min-device-width: 768px) and (max-device-width: 1024px) {
    &:before {
      content: 'Round length';
    }
  }
`

const YoloVolumeCell = styled(Cell)`
  @media only screen and (max-width: 768px), (min-device-width: 768px) and (max-device-width: 1024px) {
    &:before {
      content: 'Bid amount';
    }
  }
`

const BidDirectionCell = styled(Cell)`
  @media only screen and (max-width: 768px), (min-device-width: 768px) and (max-device-width: 1024px) {
    &:before {
      content: 'Bid direction';
    }
  }
`

const IconArrow = styled(IconLib).attrs({ collection: 'general', name: 'arrowUp', dimension: '12px' })`
  width: 12px;
  height: 12px;
  margin-right: 10px;
  background: ${({ isUp }) => (isUp ? 'rgba(0, 194, 19, 1.0)' : 'rgba(226, 14, 85, 1.0)')};
`

const RoundResultCell = styled(Cell)`
  @media only screen and (max-width: 768px), (min-device-width: 768px) and (max-device-width: 1024px) {
    &:before {
      content: 'Round result';
    }
    margin: 0 0 10px 0;
  }
`