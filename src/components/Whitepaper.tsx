import { Globe } from "lucide-react";
import { WindowFrame } from "./WindowFrame";

interface WhitepaperProps {
  onClose: () => void;
}

export function Whitepaper({ onClose }: WhitepaperProps) {
  return (
    <WindowFrame
      title="Whitepaper"
      Icon={Globe}
      onClose={onClose}
      className="lg:w-1/2 w-96"
    >
      <div className="p-4 max-h-[700px] overflow-scroll">
        <h1 className="font-bold text-lg">Introducing:</h1>
        <p>$START - A Tokenized Community.</p>
        <br />
        <h1 className="font-bold text-lg">Abstract:</h1>
        <p>
          $START is an innovative tokenized community that seeks to blend the
          charm of retro aesthetics with the cutting-edge technology of
          blockchain. This white paper outlines the vision, structure, and
          tokenomics focusing on two key initiatives designed to enhance member
          participation and rewards through the $START token.
        </p>
        <br />
        <h1 className="font-bold text-lg">1. Introduction</h1>
        <p>
          $START embodies the essence of starting anew with a nostalgic twist,
          offering a platform for trading, sharing, and celebrating retro-themed
          digital assets. Utilizing the $START cryptocurrency, aims to forge a
          community where past inspirations fuel future innovations.
        </p>
        <br />
        <h1 className="font-bold text-lg">2. Background</h1>
        <p>
          Blockchain technology has revolutionized how communities can interact,
          transact, and grow. ReStart taps into this revolution by creating a
          digital space where retro enthusiasts can converge, engage, and
          prosper.
        </p>
        <br />
        <h1 className="font-bold text-lg">3. Vision and Objectives</h1>
        <ul className="list-disc list-inside">
          <li>
            Foster a Retro Renaissance: Cultivate a community where every member
            actively contributes to and benefits from a revival of retro
            culture.
          </li>
          <li>
            Promote Engagement through Innovation: Use blockchain to introduce
            unique engagement mechanisms.
          </li>
          <li>
            Reward Insightful Participation: Develop a system to reward members
            for valuable contributions, especially market insights.
          </li>
        </ul>
        <br />
        <h1 className="font-bold text-lg">4. Insight Rewards System</h1>
        <p>
          <strong>Concept:</strong> Motivate members to share their market
          predictions or 'calls' with rewards for accuracy.
        </p>
        <p>
          <strong>Mechanism:</strong>
        </p>
        <ul className="list-disc list-inside">
          <li>
            A tax on transactions contributes to a community insights fund.
          </li>
          <li>
            Accurate predictions are rewarded from this fund through $START
            token buybacks or direct rewards, enhancing token value for
            predictors.
          </li>
          <li>
            Implementation of a 'Prediction Leaderboard' to gamify and highlight
            top community analysts.
          </li>
        </ul>
        <br />
        <h1 className="font-bold text-lg">5. Governance</h1>
        <p>
          Start will adopt a DAO (Decentralized Autonomous Organization)
          structure, empowering $START holders with voting rights on pivotal
          community decisions, ensuring democratic and community-driven
          development.
        </p>
        <br />
      </div>
    </WindowFrame>
  );
}
