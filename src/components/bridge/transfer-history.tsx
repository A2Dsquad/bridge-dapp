import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { shortAddress } from "@/lib/utils";
import { useMinterControllerFindBySender } from "@/services/queries";
import { DateTime } from "luxon";
import { useAccount } from "wagmi";
import { IconAptos, IconCheckCircle, IconCopy, IconEthereum } from "../icons";
import { zeroAddress } from "viem";

export function TransferHistory() {
  const { isConnected, address = zeroAddress } = useAccount();
  const { copyToClipboard } = useCopyToClipboard();

  const { data: histories } = useMinterControllerFindBySender(address, {
    query: { enabled: isConnected && Boolean(address) },
  });

  return (
    <div className="container px-6 z-10 pb-20 flex flex-col gap-4">
      {histories?.data?.map((history) => (
        <div
          key={history.srcTxHash}
          className="bg-background relative w-full  max-w-xl mx-auto bg-[rga(18, 18, 17, 1)] border-[1px] border-white/10 rounded-3xl overflow-hidden p-4 flex flex-col gap-2"
        >
          <div className="flex flex-row items-center justify-between">
            <p className="flex flex-row items-center gap-2 text-lg font-medium">
              {Number(history.sentAmount)}
              <IconEthereum className="w-5 h-5" />
              <span className="font-normal text-base">ETH</span>
            </p>
            <div className="flex flex-col justify-end gap-2">
              <p className="flex flex-row items-center gap-1 text-white">
                <IconCheckCircle className="w-5 h-5 text-success" />
                Completed
              </p>
              <span className="text-sm text-gray-400">
                {DateTime.fromISO(history.created_at).toLocaleString(DateTime.DATETIME_FULL)}
              </span>
            </div>
          </div>
          <div className="border-[1px] border-white/10 w-full" />
          <div className="flex flex-row items-center justify-between">
            <p className="flex flex-row items-center gap-2 text-gray-400 font-medium">
              From
              <span className="text-gray-500 text-sm">{shortAddress(history.sender)}</span>
            </p>
            <p className="flex flex-row items-center gap-1">
              <IconEthereum className="w-6 h-6" />
              Ethereum
            </p>
          </div>
          <div className="flex flex-row items-center justify-between mt-4">
            <p className="flex flex-row items-center gap-2 text-gray-400 font-medium">
              To
              <span className="text-gray-500 text-sm">{shortAddress(history.recipient)}</span>
            </p>
            <p className="flex flex-row items-center gap-1">
              <IconAptos className="w-6 h-6" />
              Aptos
            </p>
          </div>
          <div className="bg-white/5 w-full p-4 rounded-2xl mt-4 flex flex-col gap-2">
            <div className="flex flex-row items-center justify-between">
              <p>Sender Transaction Hash:</p>
              <p
                className="cursor-pointer underline text-white flex flex-row gap-2 items-center active:opacity-50 transition-opacity"
                onClick={() => copyToClipboard(history.srcTxHash)}
              >
                {shortAddress(history.srcTxHash)} <IconCopy className="w-4 h-4" />
              </p>
            </div>
            <div className="flex flex-row items-center justify-between">
              <p>Receiver Transaction Hash:</p>
              <p
                className="cursor-pointer underline text-white flex flex-row gap-2 items-center active:opacity-50 transition-opacity"
                onClick={() => copyToClipboard(history.dstTxHash)}
              >
                {shortAddress(history.dstTxHash)} <IconCopy className="w-4 h-4" />
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
