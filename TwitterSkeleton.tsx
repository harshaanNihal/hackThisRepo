/*
 * Twitter Skeleton Loader
 * @Author: zehan9211@gmail.com
 * @Date: 2023-10-14 03:15:23
 * @Last Modified by: zehan9211@gmail.com
 * @Last Modified time: 2023-10-14 03:15:23
 */


import React from "react";
type props = {}
export default function TwitterSkeleton:React.FC<props>(props) {
  return (
    <div className="rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="w-full h-80 rounded-md h-12 bg-slate-700" />
      <div className="card w-full shadow-xl flex-none">
        <div className="card-body">
          <div className="flex gap-2 items-center">
            <div className="avatar">
              <div className="w-12 rounded-full h-12 bg-slate-700" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-full h-2 bg-slate-700 rounded" />
              <div className="w-full h-2 bg-slate-700 rounded" />
            </div>
          </div>
          <div className="w-full h-2 bg-slate-700 rounded" />
          <div className="w-full h-2 bg-slate-700 rounded" />
          <div className="w-full h-2 bg-slate-700 rounded" />
        </div>
      </div>
    </div>
  );
}
