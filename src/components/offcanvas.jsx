import Logo from '/Logo_youtube.svg';
import { Link } from 'react-router-dom';
import {Menu} from 'lucide-react'

export default function Offcanvas({ open, onClose, children }) {
  return (
    <>
      {/* overlay */}
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0  bg-black/40 z-[998] xl:hidden"
        />
      )}

      {/* panel */}
      <div
        className={`
          fixed left-0 z-[9999]
          h-[100vh]
          w-[256px]
          bg-white
          overflow-y-auto
          top-0
          transition-transform duration-300
          xl:hidden

          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className='flex items-center ps-3 bg-white'>
            <button onClick={onClose} className="h-[40px] w-[40px] grid text-black place-items-center rounded-full hover:bg-[#E5E5E5] transition-all duration-600">
                <Menu size={24} />
            </button>
            <Link to="/" className=' py-[18px] px-[14px]'>
                    <img
                        className='h-[25px] w-[98px]'
                        src={Logo} alt='Logo' />
                </Link>
        </div>
        <div>
            {children}
        </div>
      </div>
    </>
  );
}