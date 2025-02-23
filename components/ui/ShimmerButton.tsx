import React from 'react'

const ShimmerButton = ({words, href, download_name} : {words: string, href?: string, download_name?: string}) => {
    
  return (
    <div>
        <a
            href={href}
            download={download_name}
            target='_blank'
        >
        <button className="inline-flex mt-16 h-12 animate-shimmer mx-auto items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          {words}
        </button>
        </a>
    </div>
  )
}

export default ShimmerButton