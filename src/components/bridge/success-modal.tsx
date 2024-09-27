import NiceModal, { useModal } from "@ebay/nice-modal-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { CheckCircle } from "lucide-react";

interface Props {
  onViewInHistory: () => void;
  amount: number;
}

export const SuccessModal = NiceModal.create(({ onViewInHistory, amount }: Props) => {
  const modal = useModal();

  return (
    <Dialog open={modal.visible} onOpenChange={modal.hide}>
      <DialogContent className="flex flex-col items-center justify-center">
        <CheckCircle className="w-16 h-16 text-success" />
        <h2 className="text-2xl">Bridging Successful</h2>
        <span className="text-gray-400 text-center font-normal">
          You have successfully bridged <span className="text-primary">{amount}</span> ETH on
          Ethereum to <span className="text-primary">{amount * 0.99}</span> zkETH on Aptos
        </span>
        <Button onClick={onViewInHistory}>View in History</Button>
      </DialogContent>
    </Dialog>
  );
});
