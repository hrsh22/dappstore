"use client"
import { Web3Button } from '@web3modal/react'

const Navbar = () => {
  return (

<nav class="relative flex w-full items-center justify-between  pb-2 bg-gradient-to-r from-slate-900 to-slate-700">


{/* <!-- Container wrapper --> */}
<div class="flex w-full flex-wrap items-center justify-between px-6 pt-2">
  <div class="flex items-center">
    {/* <!-- Navbar Brand --> */}
    <a class="text-slate-50 font-bold text-xl" href="/">
      <span>
        Dapp Store
      </span>
    </a>
  </div>
  {/* <!-- Right elements --> */}
  <div class="my-1 flex items-center lg:my-0 lg:ml-auto">
    {/* <button type="button" class="mr-2 inline-block rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-300 focus:text-neutral-300 focus:outline-none focus:ring-0 active:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:hover:bg-opacity-60 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:active:text-neutral-400" data-te-ripple-init data-te-ripple-color="light">
      Login
    </button> */}
    {/* <button type="button" class="inline-block rounded bg-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-neutral-200 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-300 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]" data-te-ripple-init data-te-ripple-color="light">
      Sign up for free
    </button> */}
    <Web3Button />
  </div>
  {/* <!-- Right elements --> */}
</div>
{/* <!-- Container wrapper --> */}
</nav>
  )
    };
    
export default Navbar;