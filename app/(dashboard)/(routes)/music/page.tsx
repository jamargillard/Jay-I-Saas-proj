"use client";

import * as z from "zod";
import axios from "axios";
import { Loader } from "@/components/Loader";
import { Music } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChatCompletionRequestMessage } from "openai";

import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";

import { formSchema } from "./constants";
import { Empty } from "@/components/Empty";


import { ProModal } from "@/components/pro-modal";
import { useProModal } from "@/hooks/use-pro-modal";




const MusicPage = () => {

  const proModal = useProModal()

  const router = useRouter();
  const [music, setMusic] = useState<string>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: ""
    }
  });

  const isLoading = form.formState.isSubmitting;
  
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
    setMusic(undefined);
      
      const response = await axios.post("/api/music", values);
      
setMusic(response.data.audio);      
      form.reset();
    } catch (error: any) {
      if (error?.response?.status === 403){
        proModal.onOpen();
        }
    } finally {
      router.refresh();
    }
  }

  return ( 
    <div>
      <Heading
        title="Music Genration"
        description="Turn your prompt into music."
        icon={Music}
        iconColor="text-pink-500"
        bgColor="bg-pink-500/10 rounded-lg"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form 
              onSubmit={form.handleSubmit(onSubmit)} 
              className="
                rounded-lg 
                border 
                w-full 
                p-4 
                px-3 
                md:px-6 
                focus-within:shadow-sm
                grid
                grid-cols-12
                gap-2
              "
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading} 
                        placeholder="Guitar solo" 
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button className="col-span-12 lg:col-span-2 w-full" type="submit" disabled={isLoading} size="icon">
                Generate
              </Button>
            </form>
          </Form>
        </div>

        <div className=" space-y-4 mt-4">
{isLoading && (
  <div className=" p-8 rounded-lg w-full flex items-center justify-center  bg-[#6096BA]">
    <Loader />
  </div>
)}
        {!music && !isLoading && (
<Empty label='No music generated'></Empty>     
     )}
          
{music && (
  <audio controls className='w-full mt-8'>  
  <source src={music} />
  </audio>
)}     
        </div>
      </div>
    </div>
   );
}
 
export default MusicPage;