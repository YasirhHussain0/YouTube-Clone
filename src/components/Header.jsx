import { Link } from "react-router-dom";
import Logo from '/Logo_youtube.svg'
import Profile from '../assets/profile.jpeg'
import { Search, Menu, Plus, Bell } from 'lucide-react'
export default function Header({ onMenuClick }) {
    return (
        <header className="w-full min-h-[56px] flex justify-between items-center px-4 fixed z-[1000] bg-[#fffffffa]">
            <div className='flex items-center'>
                <button
                    type="button"
                    onClick={onMenuClick}
                    className="h-[40px] w-[40px] grid text-black place-items-center rounded-full hover:bg-[#E5E5E5] transition-all duration-600"
                    aria-label="Toggle sidebar"
                >
                    <Menu size={24} />
                </button>
                <Link to="/" href='#' className=' py-[18px] px-[14px]'>
                    <img
                        className='h-[25px] w-[98px]'
                        src={Logo} alt='Logo' />
                </Link>
            </div>


            <form className='rounded-full border border-[#c6c6c6] w-[400px] xl:w-[732px] flex justify-between ps-3 flex hidden lg:flex'>
                <input type='text' placeholder='Search' className='h-[40px] focus:outline-none focus:border-none w-full'></input>
                <button
                    className="w-[64px] flex items-center justify-center border-l border-[#c6c6c6] rounded-tr-full rounded-br-full hover:bg-gray-100 transition focus:outline-none focus:border-none"
                    type='submit'>
                    <Search size={24} />
                </button>
            </form>

            <div className='flex gap-2 items-center'>
                <button className='flex gap-1 bg-[#F2F2F2] hover:bg-[#E5E5E5] rounded-full leading-[36px] text-sm items-center px-3 text-black font-semibold transition-all duration-600'>
                    <Plus size={24} /> Create
                </button>
                <button className="h-[40px] w-[40px] grid place-items-center rounded-full hover:bg-[#E5E5E5] transition-all duration-600">
                    <Bell size={24} />
                </button>
                <img src={Profile}
                    className='w-[35px] h-[35px] rounded-full cursor-pointer'
                ></img>

            </div>

        </header>
    );
}