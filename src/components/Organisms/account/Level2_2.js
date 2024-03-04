import React from 'react'
import styled from 'styled-components'

import { Box, Header_1, Data_1_1, Data_1_2, DataLabel, DataLabel_2 } from './shard-comps'
import { SymbolChart } from './charts/SymbolChart'
import { accountData, cumulativeRewardsGraph } from 'datasource/account'

export const Level2_2 = () => {
    return (
        <Container>
           <Item_0></Item_0>
           <Item_1>{accountData.totalAmountBid}</Item_1>
           <Spacer_1></Spacer_1>
           <Spacer_2></Spacer_2>
           <Item_3>Rewards</Item_3>
           <Item_4><SymbolChart series={cumulativeRewardsGraph} height={330}></SymbolChart></Item_4>
           <Spacer_5></Spacer_5>
           <Item_5>{accountData.totalRewardsEarned}</Item_5>
           <Item_6>Total amount bid</Item_6>
           <Spacer_3></Spacer_3>
           <Item_7>Total rewards earned</Item_7>
           <Spacer_6></Spacer_6>
           <Item_8>{accountData.totalWinnings}</Item_8>
           <Item_9>Total <br/>winnings</Item_9>
           <Item_10>{accountData.totalLosses}</Item_10>
           <Item_11>Total <br/> losses</Item_11>
           <Spacer_4></Spacer_4>
           <Spacer_7></Spacer_7>
           <Spacer_8></Spacer_8>
           <Item_12>{accountData.winningBidUp}</Item_12>
           <Item_13>Won / bid up</Item_13>
           <Item_14>{accountData.lostBidUp}</Item_14>
           <Item_15>Lost / bid up</Item_15>
           <Item_16>{accountData.winningBidDown}</Item_16>
           <Item_17>Won / bid down</Item_17>
           <Item_18>{accountData.lostBidDown}</Item_18>
           <Item_19>Lost / bid down</Item_19>
           <Item_20>{accountData.rewardsUnHarvested}</Item_20>
           <Item_21>Rewards unharvested <HarvestButton>Harvest</HarvestButton></Item_21>
        </Container>
    )
}

const Container = styled.div`
    display: grid; 
    grid-template-columns: .25fr 1fr .25fr 1fr;
    grid-template-areas: 
	'label0 label0 label0 label0'
	'label1 label6 label6 label6'
	'spacer_3 spacer_3 spacer_3 spacer_3'
	'label8 label9 label10 label11'
	'spacer_4 spacer_4 spacer_4 spacer_4'
	'label12 label13 label14 label15'
	'label16 label17 label18 label19'
	'spacer_1 spacer_1 spacer_1 spacer_1'
	'spacer_2 spacer_2 spacer_2 spacer_2'
	'label3 label3 label3 label3'
	'label4 label4 label4 label4'
	'spacer_5 spacer_5 spacer_5 spacer_5'
	'label5 label7 label7 label7'
	'spacer_6 spacer_6 spacer_6 spacer_6'
	'label20 label21 label21 label21';
    width: calc(50% - 10px);
    gap: 0px;

    ${({ theme }) => theme.breakPoints['1200px']} {
        width: 100%;
    }

    ${({ theme }) => theme.breakPoints['768px']} {
        grid-template-columns: .15fr 1fr;
	    grid-template-areas: 
		'label0 label0'
		'label1 label6'
		'spacer_3 spacer_3'
		'label8 label9'
		'spacer_7 spacer_7'
		'label12 label13'
		'label16 label17'
		'spacer_8 spacer_8'
		'label10 label11'
		'spacer_4 spacer_4'
		'label14 label15'
		'label18 label19'
		'spacer_1 spacer_1'
		'spacer_2 spacer_2'
		'label3 label3'
		'label4 label4'
		'spacer_5 spacer_5'
		'label5 label7'
		'spacer_6 spacer_6'
		'label20 label21';
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
const Item_3 = styled(Box)`
    ${Header_1}
    grid-area: label3;
`
const Item_4 = styled(Box)`
    grid-area: label4;
    border-radius: 10px;
	min-height: 330px;
    background-color: rgba(40, 58, 105, 0.9);
	justify-content: center;
    overflow: hidden;
`
const Item_5 = styled(Box)`
    ${Data_1_1}
    grid-area: label5;
    color: #2a6dff;
`
const Item_6 = styled(Box)`
    ${DataLabel}
    grid-area: label6;
`
const Item_7 = styled(Box)`
    ${DataLabel}
    grid-area: label7;
`
const Item_8 = styled(Box)`
    ${Data_1_1}
    grid-area: label8;
    border: 1px solid #2a6dff;
	border-right: 0;
	background: #213152;
`
const Item_9 = styled(Box)`
    ${DataLabel}
    grid-area: label9;
    margin-right: 2.5px;
    border: 1px solid #2a6dff;
	border-left: 0;
	background: #213152;
`
const Item_10 = styled(Box)`
    ${Data_1_1}
    grid-area: label10;
    margin-left: 2.5px;
    border: 1px solid #7A4800;
	border-right: 0;
	background: #212026;
`
const Item_11 = styled(Box)`
    ${DataLabel}
    grid-area: label11;
    border: 1px solid #7A4800;
	border-left: 0;
	background: #212026;
`
const Item_12 = styled(Box)`
    ${Data_1_2}
    grid-area: label12;
`
const Item_13 = styled(Box)`
    ${DataLabel_2}
    grid-area: label13;
`
const Item_14 = styled(Box)`
    ${Data_1_2}
    grid-area: label14;
`
const Item_15 = styled(Box)`
    ${DataLabel_2}
    grid-area: label15;
`
const Item_16 = styled(Box)`
    ${Data_1_2}
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
const Item_20 = styled(Box)`
    ${Data_1_2}
    grid-area: label20;
    color: #2a6dff;
	font-size: 1.2rem;
    ${({ theme }) => theme.breakPoints['768px']} {
        align-items: flex-start;
    }
`
const Item_21 = styled(Box)`
    ${DataLabel_2}
    grid-area: label21;
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
`
const Spacer_5 = styled(Box)`
    grid-area: spacer_5;
`
const Spacer_6 = styled(Box)`
    grid-area: spacer_6;
`
const Spacer_7 = styled(Box)`
    grid-area: spacer_7;
    display: none;
    ${({ theme }) => theme.breakPoints['768px']} {
        display: flex;
    }
`
const Spacer_8 = styled(Box)`
    grid-area: spacer_8;
    display: none;
    ${({ theme }) => theme.breakPoints['768px']} {
        display: flex;
    }
`
const HarvestButton = styled.button`
    background: #1D4BAF;
	padding: 3px 16px;
	border-radius: 10px;
	margin: 0 0 0 10px;
    color: #fff;
    ${({ theme }) => theme.breakPoints['768px']} {
        margin: 8px 0 0 0;
    }
`