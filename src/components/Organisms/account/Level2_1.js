import React from 'react'
import styled from 'styled-components'

import { Box, Header_1, Data_1_1, Data_1_2, DataLabel, DataLabel_2 } from './shard-comps'
import { PlotBandChart } from './charts/PlotBandChart'
import { accountData, winLossBidsGraph } from 'datasource/account'

export const Level2_1 = () => {
    return (
        <Container>
           <Item_0>Bids</Item_0>
           <Item_1>{accountData.totalNumberOfBids}</Item_1>
           <Item_2>Winning & losing bids</Item_2>
           <Spacer_1></Spacer_1>
           <Spacer_2></Spacer_2>
           <Item_4>{accountData.totalWinningBids}</Item_4>
           <Item_5><PlotBandChart series={winLossBidsGraph} height={330}/></Item_5>
           <Spacer_4></Spacer_4>
           <Item_6>{accountData.winningBidsUpPercent}</Item_6>
           <Item_7></Item_7>
           <Item_8>{accountData.winningBidsDownPercent}</Item_8>
           <Item_9></Item_9>
           <Item_10>Total number of bids</Item_10>
           <Spacer_3></Spacer_3>
           <Item_11>Total <br/>winning bids</Item_11>
           <Item_12>{accountData.totalLosingBids}</Item_12>
           <Item_13>Total <br/>losing bids</Item_13>
           <Item_14>Bids up</Item_14>
           <Item_15>{accountData.losingBidsUpPercent}</Item_15>
           <Item_16>Bids up</Item_16>
           <Item_17>Bids down</Item_17>
           <Spacer_5></Spacer_5>
           <Item_18>{accountData.losingBidsDownPercent}</Item_18>
           <Item_19>Bids down</Item_19>
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: .25fr 1fr .25fr 1fr;
    grid-template-areas:
    'label0 label0 label0 label0'
	'label1 label10 label10 label10'
	'spacer_3 spacer_3 spacer_3 spacer_3'
	'label7 label7 label7 label7'
	'label2 label2 label2 label2'
	'label5 label5 label5 label5'
	'spacer_1 spacer_1 spacer_1 spacer_1'
	'spacer_2 spacer_2 spacer_2 spacer_2'
	'label4 label11 label12 label13'
	'label9 label9 label9 label9'
	'label6 label14 label15 label16'
	'label8 label17 label18 label19'
	'label20 label20 label20 label20';
    width: calc(50% - 10px);
    gap: 0px;

    ${({ theme }) => theme.breakPoints['1200px']} {
        width: 100%;
    }
    ${({ theme }) => theme.breakPoints['768px']} {
        grid-template-columns: .15fr 1fr;
	    grid-template-areas: 
		'label0 label0'
		'label1 label10'
		'spacer_3 spacer_3'
		'label7 label7'
		'label2 label2'
		'label5 label5'
		'spacer_1 spacer_1'
		'spacer_2 spacer_2'
		'label4 label11'
		'spacer_4 spacer_4'	
		'label6 label14'	
		'label8 label17'
		'spacer_5 spacer_5'		
		'label12 label13'
		'label9 label9'
		'label15 label16'
		'label18 label19'
		'label20 label20';
    }
`
const Item_0 = styled(Box)`
    ${Header_1}
    grid-area: label0;
`
const Item_1 = styled(Box)`
    ${Data_1_1}
    grid-area: label1;
`
const Item_2 = styled(Box)`
    ${Header_1}
    grid-area: label2;
`
const Item_4 = styled(Box)`
    ${Data_1_1}
    grid-area: label4;
`
const Item_5 = styled(Box)`
    grid-area: label5;
    border-radius: 10px;
	min-height: 330px;
    background-color: rgba(40, 58, 105, 0.9);
	justify-content: center;
    overflow: hidden;
`
const Item_6 = styled(Box)`
    ${Data_1_2}
    grid-area: label6;
`
const Item_7 = styled(Box)`
    grid-area: label7;
`
const Item_8 = styled(Box)`
    ${Data_1_2}
    grid-area: label8;
`
const Item_9 = styled(Box)`
    grid-area: label9;
`
const Item_10 = styled(Box)`
    ${DataLabel}
    grid-area: label10;
`
const Item_11 = styled(Box)`
    ${DataLabel}
    margin-right: 2.5px;
    grid-area: label11;
`
const Item_12 = styled(Box)`
    ${Data_1_1}
    margin-left: 2.5px;
    grid-area: label12;
`
const Item_13 = styled(Box)`
    ${DataLabel}
    grid-area: label13;
`
const Item_14 = styled(Box)`
    ${DataLabel_2}
    grid-area: label14;
`
const Item_15 = styled(Box)`
    ${Data_1_2}
    grid-area: label15;
`
const Item_16 = styled(Box)`
    ${DataLabel_2}
    grid-area: label16;
`
const Item_17 = styled(Box)`
    ${DataLabel_2}
    grid-area: label17;
`
const Item_18 = styled(Box)`
    ${Data_1_2}
    grid-area: label18;
`
const Item_19 = styled(Box)`
    ${DataLabel_2}
    grid-area: label19;
`
const Spacer_1 = styled(Box)`
    grid-area: spacer_1;
`
const Spacer_2 = styled(Box)`
    grid-area: spacer_2;
`
const Spacer_3 = styled(Box)`
    grid-area: spacer_3;
`
const Spacer_4 = styled(Box)`
    grid-area: spacer_4;
    display: none;
    ${({ theme }) => theme.breakPoints['768px']} {
        display: flex;
    }
`
const Spacer_5 = styled(Box)`
    grid-area: spacer_5;
    display: none;
    ${({ theme }) => theme.breakPoints['768px']} {
        display: flex;
    }
`