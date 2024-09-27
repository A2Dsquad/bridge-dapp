import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useAccount, useBalance } from "wagmi";
import * as z from "zod";
import { Button as MovingBorder } from "../aceternity/moving-border";
import { IconAptos, IconArrow, IconEthereum } from "../icons";
import { Input } from "../ui/input";

const formSchema = z.object({
  amount: z.coerce
    .number({ message: "Amount must be a number" })
    .min(1, "Amount is required")
    .optional(),
  recipient_address: z.string().min(1, "Recipient address is required"),
});

export function TransferForm() {
  const { isConnected, address } = useAccount();
  const { data: ethBalance } = useBalance({ address });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: 0,
      recipient_address: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="container px-6 z-10 pb-20">
      <div className="bg-background relative max-w-xl mx-auto bg-[rga(18, 18, 17, 1)] border-[1px] border-white/10 rounded-[40px] overflow-hidden">
        <CardHeader className="gap-10 items-center md:items-start">
          <CardTitle className="text-3xl font-bold text-white">Token</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <MovingBorder
                as="div"
                containerClassName="w-full h-auto"
                duration={6_000}
                className="grid grid-cols-7 gap-4"
              >
                <div className="col-span-3 py-4 px-6 flex flex-col gap-2 items-start">
                  <p className="text-gray-500">From</p>
                  <span className="flex flex-row items-center gap-2">
                    <IconEthereum className="w-8 h-8" /> Ethereum
                  </span>
                </div>
                <IconArrow className="w-8 h-8 m-auto -rotate-90" />
                <div className="col-span-3 py-4 px-6 flex  flex-col gap-2 items-start">
                  <p className="text-gray-500">To</p>
                  <span className="flex flex-row items-center gap-2">
                    <IconAptos className="w-8 h-8" /> Aptos
                  </span>
                </div>
              </MovingBorder>
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount</FormLabel>
                    <FormDescription>
                      Balance: {ethBalance?.formatted || 0} {ethBalance?.symbol || ""}
                    </FormDescription>
                    <FormControl>
                      <Input
                        placeholder="0"
                        {...field}
                        className="text-app-white placeholder:text-app-gray py-[10px] px-4 border border-solid border-white/[0.05] bg-neutral-900 rounded-[12px] h-11 focus-visible:ring-0 focus:border-primary-light"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="recipient_address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Recipient Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter the recipient address"
                        {...field}
                        className="text-app-white placeholder:text-app-gray py-[10px] px-4 border border-solid border-white/[0.05] bg-neutral-900 rounded-[12px] h-11 focus-visible:ring-0 focus:border-primary-light"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-primary font-semibold text-[18px] py-4 h-[56px] rounded-[16px]"
                disabled={!isConnected}
              >
                Transfer
              </Button>
            </form>
          </Form>
        </CardContent>
      </div>
    </div>
  );
}