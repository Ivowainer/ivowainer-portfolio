import { AiOutlineHome, AiFillHome } from 'react-icons/ai'
import { RiUserFill, RiUserLine } from 'react-icons/ri'
import { HiOutlineNewspaper, HiNewspaper } from 'react-icons/hi'

import { IconType } from 'react-icons'

export interface Route {
    name: PagesNames;
    path: string;
    IconActive: IconType;
    IconOutlined: IconType;
}

export type PagesNames = "Home" | "About" | "Blog"

export const PAGES: Route[] = [
    {
        name: 'Home',
        path: '/',
        IconActive: AiFillHome,
        IconOutlined: AiOutlineHome,
    },
    {
        name: 'About',
        path: '/about',
        IconActive: RiUserFill,
        IconOutlined: RiUserLine
    },
    {
        name: 'Blog',
        path: '/blog',
        IconActive: HiNewspaper,
        IconOutlined: HiOutlineNewspaper
    },

]