import Navbar from "@/components/Navbar";
import  Sidebar  from "@/components/Sidebar";
import { getApiLimitCount } from "@/lib/api-limits";
import { checkSubscription } from "@/lib/subscription";

const DashboardLayout= async ({
    children
}:{
    children: React.ReactNode;
}) => {
    const apiLimitCount = await getApiLimitCount()
    const isPro = await checkSubscription()
    return (
        <div className="h-full relative">
            <div className="hidden h-full md:flex md:w-72
            md:flex-col md:fixed md:inset-y-0
            bg-[#274C77]">
<Sidebar apiLimitCount={apiLimitCount} isPro={isPro} />          
    </div>
    <main className="md:pl-72">
    <Navbar />               
     {children}
            </main>
        </div>
    );
}

export default DashboardLayout 