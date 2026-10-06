import React from 'react';

const HireMe = () => {
  return (
<button className="group relative overflow-hidden cursor-pointer rounded-lg bg-blue-400 px-[16px] py-[8px] text-[14px] font-medium text-white transition-all duration-200 hover:bg-zinc-800">
  <span className="relative z-10 flex items-center gap-2">
    Start Your Project
    <span className="text-[15px] transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </span>
</button>
  );
}

export default HireMe;
