import { Button } from "@/components/ui/button"
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp"
import { Skeleton } from "@/components/ui/skeleton"
import { Heart } from "lucide-react"
import { Switch } from "radix-ui"

const Main = () => {
  return (
    <div>
      name: aaloksah
      bio : 123456
      <Button className = "bg-red-500">EDIT</Button>
      <Button>Like<Heart/></Button> 
      <InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>
<Skeleton className="h-[50px] w-[200px] rounded-full" />
    </div>
  )
}
    

export default Main