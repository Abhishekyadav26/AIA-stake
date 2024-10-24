import { ConnectEmbed } from "thirdweb/react";
import { client } from "./client";
import { StakeToken } from "@/app/Components/Stake";

export default function Home() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100vw"
    }}>
      <div style={{
        textAlign: "center"
      }}>
        <ConnectEmbed 
          client={client}
        />
        <StakeToken />
      </div>
    </div>
  )
}  