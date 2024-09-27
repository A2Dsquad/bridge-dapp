import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ImageUploader } from "@/components/ui/image-uploader";
import {
  IconGradientBox,
  IconMagicWand,
  IconTelegram,
  IconWebsite,
  IconX,
} from "@/components/icons";

const formSchema = z.object({
  tokenAddress: z.string().min(1, "Token address is required"),
  logo: z.string().optional(),
  banner: z.string().optional(),
  description: z.string().optional(),
  website: z.string().url("Invalid URL").optional(),
  telegram: z.string().url("Invalid URL").optional(),
  twitter: z.string().url("Invalid URL").optional(),
});

export function EditTokenForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tokenAddress: "",
      logo: "",
      banner: "",
      description: "",
      website: "",
      telegram: "",
      twitter: "",
    },
  });

  const logo = form.watch("logo");
  const banner = form.watch("banner");

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Card className="max-w-[960px] mx-auto mix-blend-normal my-10 bg-[#18181b]/50 backdrop-blur-[20px] isolate border-white/[0.05] p-10">
      <CardHeader className="p-0 mb-6">
        <div className="relative flex w-fit mb-6">
          <IconGradientBox className="w-20 h-20 text-primary" />
          <IconMagicWand className="w-10 h-10 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        <CardTitle className="text-app-white text-[48px] font-semibold mt-0 mb-2 leading-[1.2]">
          Token Support
        </CardTitle>
        <p className="text-app-gray text-base">
          Fill in the details and launch your token into the Sentra Bridge!
        </p>
      </CardHeader>
      <CardContent className="p-0">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="tokenAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter the Token Contract Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ex: 0xbC7193fc1b6072e1d5049f2C7a3Ff1E949284AFF"
                      {...field}
                      className="text-app-white placeholder:text-app-gray py-[10px] px-4 border border-solid border-white/[0.05] bg-neutral-900 rounded-[12px] h-11 focus-visible:ring-0 focus:border-primary-light"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormItem>
              <FormLabel>Token Symbol</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ex: SHIB"
                  disabled
                  value="SHIB"
                  className="text-app-white placeholder:text-app-gray py-[10px] px-4 border border-solid border-white/[0.05] bg-neutral-900 rounded-[12px] h-11 focus-visible:ring-0 focus:border-primary-light"
                />
              </FormControl>
              <FormMessage />
            </FormItem>

            <FormItem>
              <FormLabel>Token Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ex: SHIB"
                  value="SHIBA"
                  disabled
                  className="text-app-white placeholder:text-app-gray py-[10px] px-4 border border-solid border-white/[0.05] bg-neutral-900 rounded-[12px] h-11 focus-visible:ring-0 focus:border-primary-light"
                />
              </FormControl>
              <FormMessage />
            </FormItem>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Description <span className="text-white/60">(Optional)</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your token"
                      {...field}
                      className="text-app-white placeholder:text-app-gray py-[10px] px-4 border border-solid border-white/[0.05] bg-neutral-900 rounded-[12px] h-11 focus-visible:ring-0 focus:border-primary-light"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col">
              <h3 className="text-[24px] text-app-white font-semibold mb-2">Upload</h3>
              <p className="text-app-gray text-base mb-6">
                Define your token's identity with a custom logo and banner.
              </p>
              <div className="flex gap-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="logo" className="text-sm text-app-white font-normal">
                      Token Logo
                    </Label>
                    {logo && (
                      <button
                        type="button"
                        className="text-sm font-medium text-primary"
                        onClick={() => form.setValue("logo", "")}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  {logo ? (
                    <img
                      src={logo}
                      alt="logo"
                      crossOrigin="anonymous"
                      className="w-[200px] h-[200px] rounded-[16px] object-cover"
                    />
                  ) : (
                    <ImageUploader
                      dropZoneClassName="w-[192px]"
                      maxSize={2 * 1024 * 1024}
                      buttonText="Upload Logo"
                      onUploadSuccess={(fileUrl) => form.setValue("logo", fileUrl)}
                    />
                  )}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="banner" className="text-sm text-app-white font-normal">
                      Add a Banner to Stand Out
                    </Label>
                    {banner && (
                      <button
                        type="button"
                        className="text-sm font-medium text-primary"
                        onClick={() => form.setValue("banner", "")}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  {banner ? (
                    <img
                      src={banner}
                      alt="banner"
                      crossOrigin="anonymous"
                      className="w-[442px] h-[200px] rounded-[16px] object-cover"
                    />
                  ) : (
                    <ImageUploader
                      maxSize={5 * 1024 * 1024}
                      dropZoneClassName="w-[442px]"
                      buttonText="Upload Banner"
                      onUploadSuccess={(fileUrl) => form.setValue("banner", fileUrl)}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="border-b border-white/[0.05] my-8 w-full h-[1px]" />
            <div className="flex flex-col">
              <h3 className="text-[24px] text-app-white font-semibold mb-2">Social Links</h3>
              <p className="text-app-gray text-base mb-6">
                Connect your token to the world through your social platforms.
              </p>
              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>
                      Website <span className="text-white/60">(Optional)</span>
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <IconWebsite className="absolute left-3 top-3 h-5 w-5 text-zinc-400" />
                        <Input
                          placeholder="Ex: https://shibatoken.com"
                          {...field}
                          className="text-app-white placeholder:text-app-gray py-[10px] px-4 pl-10 border border-solid border-white/[0.05] bg-neutral-900 rounded-[12px] h-11 focus-visible:ring-0 focus:border-primary-light"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="telegram"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>
                      Telegram <span className="text-white/60">(Optional)</span>
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <IconTelegram className="absolute left-3 top-3 h-5 w-5 text-zinc-400" />
                        <Input
                          placeholder="Ex: https://t.me/shibtoken"
                          {...field}
                          className="text-app-white placeholder:text-app-gray py-[10px] px-4 pl-10 border border-solid border-white/[0.05] bg-neutral-900 rounded-[12px] h-11 focus-visible:ring-0 focus:border-primary-light"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="twitter"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Twitter <span className="text-white/60">(Optional)</span>
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <IconX className="absolute left-3 top-3 h-5 w-5 text-zinc-400" />
                        <Input
                          placeholder="Ex: https://twitter.com/shibtoken"
                          {...field}
                          className="text-app-white placeholder:text-app-gray py-[10px] px-4 pl-10 border border-solid border-white/[0.05] bg-neutral-900 rounded-[12px] h-11 focus-visible:ring-0 focus:border-primary-light"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="text-base text-app-white">
              If your token isn’t visible on the website after 5min, you can manually setup your
              token page.
            </div>
            <Button
              type="submit"
              className="w-full bg-primary-light text-primary-dark font-semibold text-[18px] py-4 h-[56px] rounded-[16px]"
            >
              Deploy Token
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
