import {useUser} from '@clerk/nextjs'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export const UserAvatar = () =>{
    const { user } = useUser();
return(
<Avatar className='h-9 w-9'>
<AvatarImage src={user?.imageUrl} />
    <AvatarFallback>
        {user?.firstName?.charAt(0)}
        {user?.lastName?.charAt(0)}
    </AvatarFallback>
{/* </AvatarImage> */}

</Avatar> 
)
}