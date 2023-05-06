
import { RxDashboard } from "react-icons/rx"
import { IconType} from 'react-icons'

export type NavItemType={
    label:String;
    path:string;
    icon:IconType

}
export const navigation :NavItemType[]=[
    {
        label:"Dashboard",
        icon:RxDashboard,
        path:"/dashboard"

    }
]