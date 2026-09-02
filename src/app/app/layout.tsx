import AppFooter from "@/src/components/ui/AppFooter";
import AppHeader from "@/src/components/ui/AppHeader";
import BackgroundHeader from "@/src/components/ui/background-pattern";
import App from "next/app";

export default function layout ({children}) :
    { children: React.ReactNode}{
    return (
        <>
        <BackgroundHeader/>

        <div className="max-w-[1050px] mx-auto">
        <AppHeader/>
        {children}
        <AppFooter/>

        
        
        </div>
        
        </>
    )
}