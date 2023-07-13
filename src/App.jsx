import { useEffect, useState } from 'react';
import { BsArrowLeftShort, BsSearch, BsChevronDown, BsFillImageFill, BsReverseLayoutTextSidebarReverse, BsPerson, BsMenuUp } from 'react-icons/bs';
import { AiFillEnvironment, AiOutlineBarChart, AiOutlineFileText, AiOutlineLogout, AiOutlineMail, AiOutlineSetting } from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";
function App() {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false)
  const [mobilenav, setmobilenav] = useState(false)
  const [scrSize, setscrSize] = useState(0);
  useEffect(() => {
    window.addEventListener('resize', () => {
      setscrSize(window.innerWidth)
      if (scrSize > 500) {
        setmobilenav(false)
      }
    })

  }, [scrSize])

  const Menus = [
    { title: "Dashboard" },
    { title: "Pages", icon: <AiOutlineFileText /> },
    { title: "Media", spacing: true, icon: <BsFillImageFill /> },
    {
      title: "Projects",
      icon: <BsReverseLayoutTextSidebarReverse />,
      submenu: true,
      submenuItems: [
        { title: "Submenu 1" },
        { title: "Submenu 2" },
        { title: "Submenu 3" }
      ]
    },
    { title: "Analytics", icon: <AiOutlineBarChart /> },
    { title: "Inbox", icon: <AiOutlineMail /> },
    { title: "Profile", spacing: true, icon: <BsPerson /> },
    { title: "Setting", icon: <AiOutlineSetting /> },
    { title: "Logout", icon: <AiOutlineLogout /> }
  ];
  return (
    <>
      <div className='flex'>
        {/* left side */}
        <div className={`bg-purple-800 h-screen p-5 pt-8  ${open ? "w-72" : "w-20"} duration-300 ${mobilenav && scrSize < 500 ? "invisible  w-0 " : ""} $ relative  ${mobilenav && 'opacity-0'} `}>
          <BsArrowLeftShort className={`bg-white text-purple-800 text-3xl rounded-full absolute -right-3 top-9 border border-purple-800 cursor-pointer ${!open && "rotate-180"}`} onClick={() => { setOpen(!open) }} />
          <div className='inline-flex'>
            <AiFillEnvironment className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${open && "rotate-[360deg]"}`} />
            <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"} `}>Tailwind</h1>
          </div>
          <div className={`flex items-center rounded-md bg-slate-100 mt-6 ${!open ? "px-4" : "px-2.5"} py-2 `}>
            <BsSearch className='text-purple-800 text-lg block float-left cursor-pointer' />
            <input type={"search"} placeholder='Search' className={`text-base bg-transparent w-full text-purple-800 focus:outline-none ${!open && "hidden"}`} />
          </div>
          <ul className={`pt-2 `}>
            {Menus.map((menu, index) => (
              <>
                <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 rounded-md mt-2 hover:bg-slate-500 ${menu.spacing ? "mt-9" : "mt-2"}`}>
                  <span className='text-2xl block float-left'>
                    {menu.icon ? menu.icon : <RiDashboardFill />}
                  </span>
                  <span className={`text-base font-medium flex-1 duration-500 ${!open && "hidden"}`}>{menu.title}</span>
                  {menu.submenu && (
                    <BsChevronDown className={`${submenuOpen && "rotate-180"}`} onClick={() => setSubmenuOpen(!submenuOpen)} />
                  )}
                </li>
                {menu.submenu && submenuOpen && open && (
                  <ul>
                    {menu.submenuItems.map((submenuItem, index) => (
                      <li key={index}>
                        {submenuItem.title}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ))}
          </ul>
        </div>
        {/* Right Side */}
        <div className="p-7 w-full">
          <h1 className="text-2xl font-semibold">
            <div className='justify-end absolute right-5 sm:hidden '>
              <BsMenuUp onClick={() => setmobilenav(!mobilenav)} />
            </div>
          </h1>
          <div className='nav'>hello world</div>
        </div>
      </div>

    </>
  )
}

export default App
