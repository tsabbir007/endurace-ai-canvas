import Navbar from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";

const DashboardLayout = async ({
                                   children,
                               }: {
    children: React.ReactNode
}) => {
    const apiLimitCount =1;
    const isPro = true;

    return (
        <div className="h-full relative">
            <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-gray-900">
                <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
            </div>
            <main className="md:pl-72 pb-10 bg-gray-50 min-h-screen">
                <Navbar />
                {children}
            </main>
        </div>
    );
}

export default DashboardLayout;