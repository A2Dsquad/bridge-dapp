import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { shortAddress } from "@/lib/utils";
import { useMinterControllerFindBySender } from "@/services/queries";
import { DateTime } from "luxon";
import { useAccount } from "wagmi";
import { IconEthereum } from "../icons";

export function TransferHistory() {
  const { isConnected, address } = useAccount();
  const { copyToClipboard } = useCopyToClipboard();

  const { data: histories } = useMinterControllerFindBySender(address || "", {
    query: { enabled: isConnected && Boolean(address) },
  });

  return (
    <div className="container px-6 z-10 pb-20 flex flex-col gap-4">
      {histories?.data?.map((history) => (
        <div
          key={history.srcTxHash + history.dstTxHash}
          className="bg-background relative w-full  max-w-lg mx-auto bg-[rga(18, 18, 17, 1)] border-[1px] border-white/10 rounded-3xl overflow-hidden p-4 flex flex-col gap-2"
        >
          <div className="flex flex-row items-center justify-between">
            <p className="flex flex-row items-center gap-1">
              {"0.001"}
              <IconEthereum className="w-8 h-8" />
              ETH
            </p>
            <div className="flex flex-col justify-end gap-2">
              <p>{"Completed"}</p>
              <span>{DateTime.fromSeconds(1620000000).toLocaleString(DateTime.DATETIME_FULL)}</span>
            </div>
          </div>
          <div className="border-[1px] border-white/10 w-full" />
          <div className="flex flex-row items-center justify-between">
            <p className="flex flex-row items-center gap-1 font-medium">
              From{" "}
              <span className="text-primary">
                {shortAddress("0x0000000000000000000000000000000000000000")}
              </span>
            </p>
            <p className="flex flex-row items-center gap-1">
              <IconEthereum className="w-8 h-8" />
              Ethereum
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
