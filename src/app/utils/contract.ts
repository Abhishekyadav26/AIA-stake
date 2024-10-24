import { defineChain, getContract } from "thirdweb";
import { client } from "../client";
import { Staking_CONTRACT_ABI } from "./stakingContractAbi";

const StakeTokenContractAddress= "0xA6e179c556655aF47136e0266fbbC2eD3043A7B4";

const RewardTokenContractAddress= "0x0245d078385eDD5717c4ac434441983B4681B69b";

const StakingContractAddress= "0x8c1e23dF10B6fF5Bb286d382678058dBb883f49F";

export const STAKE_TOKEN_CONTRACT = getContract({
    client: client,
    chain: defineChain(1320),
    address : StakeTokenContractAddress,
});

export const Reward_TOKEN_CONTRACT = getContract({
    client: client,
    chain: defineChain(1320),
    address : RewardTokenContractAddress,
});

export const Staking_CONTRACT = getContract({
    client: client,
    chain: defineChain(1320),
    address : StakingContractAddress,
    abi: Staking_CONTRACT_ABI,
});
