import {TbSquareKey} from 'react-icons/tb'
import {BsPSquare} from 'react-icons/bs'
import {TbUserSquare} from 'react-icons/tb'
import {LuWallet} from 'react-icons/lu'
import {TbDiscount2} from 'react-icons/tb'
import {BiMessageAltError} from 'react-icons/bi'



export const sidebarItems = [
    { id: 1, icon: <TbSquareKey size={23}/>, text: 'Dashboard' },
    { id: 2, icon: <BsPSquare size={20}/>, text: 'Product' },
    { id: 3, icon: <TbUserSquare size={24}/>, text: 'Customers' },
    { id: 4, icon: <LuWallet size={23}/>, text: 'Income' },
    { id: 5, icon: <TbDiscount2 size={25}/>, text: 'Promote' },
    { id: 6, icon: <BiMessageAltError size={25}/>, text: 'Help' },       
];