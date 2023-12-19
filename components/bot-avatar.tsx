import {useUser} from '@clerk/nextjs'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export const BotAvatar = () =>{
return(
<Avatar className='h-9 w-9 bg-[#274C77] rounded-50%'>
<AvatarImage  className='p-1' src='/jay-i-logo.png' />
    

</Avatar> 
)
}