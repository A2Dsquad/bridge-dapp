import { useState } from "react";
import SegmentedControl from "../ui/segmented-control";
import { TransferForm } from "./transfer-form";
import { TransferHistory } from "./transfer-history";

type Tab = "transfer" | "history";

export const BridgeForm = () => {
  const [tab, setTab] = useState<Tab>("transfer");

  return (
    <div className="flex flex-col items-center gap-6 min-h-screen">
      <SegmentedControl
        items={[
          { label: "Transfer", value: "transfer" },
          { label: "History", value: "history" },
        ]}
        value={tab}
        onChange={(value) => setTab(value as Tab)}
      />

      {tab === "transfer" && <TransferForm />}
      {tab === "history" && <TransferHistory />}
    </div>
  );
};
