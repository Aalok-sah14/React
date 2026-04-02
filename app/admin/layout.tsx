import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { TooltipProvider } from "@/components/ui/tooltip"
import EcomNavbar from "@/components/Navbar"
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    
    <SidebarProvider>
      <EcomNavbar/>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
    
  )
}