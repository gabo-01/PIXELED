import React, { useState } from 'react';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import ShopCards01 from '../../partials/ecommerce/ShopCards01';
import ShopCards02 from '../../partials/ecommerce/ShopCards02';
import ShopCards03 from '../../partials/ecommerce/ShopCards03';
import ShopCards04 from '../../partials/ecommerce/ShopCards04';
import ShopCards05 from '../../partials/ecommerce/ShopCards05';
import ShopCards06 from '../../partials/ecommerce/ShopCards06';

function Shop() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Page header */}
            <div className="mb-5">

              {/* Title */}
              <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">Encuentra el material ideal para ti ✨</h1>

            </div>

            {/* Search form */}
            <div className="max-w-xl mb-5">
              <form className="relative">
                <label htmlFor="app-search" className="sr-only">Buscar</label>
                <input id="app-search" className="form-input w-full pl-9 py-3 focus:border-slate-300" type="search" placeholder="Search…" />
                <button className="absolute inset-0 right-auto group" type="submit" aria-label="Search">
                  <svg className="w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-3 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                    <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Filters */}
            <div className="mb-4 border-b border-slate-200">
              <ul className="text-sm font-medium flex flex-nowrap -mx-4 sm:-mx-6 lg:-mx-8 overflow-x-scroll no-scrollbar">
                <li className="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                  <a className="text-indigo-500 whitespace-nowrap" href="#0">Ver Todo</a>
                </li>
              
              </ul>
            </div>

            {/* Page content */}
            <div>

              {/* Cards 1 (Video Courses) */}
              <div className="mt-8">
                <h2 className="text-xl leading-snug text-slate-800 font-bold mb-5">MATERIALES</h2>
                <div className="grid grid-cols-12 gap-6">
                  <ShopCards01 />
                </div>
              </div>

              
            </div>

          </div>
        </main>

      </div>

    </div>
  );
}

export default Shop;