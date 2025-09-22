

export default function StoreButtons() {
  return (
    <div className="flex flex-col md:flex-row gap-4 mt-4">
      {/* Google Play */}
      <a
        href="#"
        className="flex w-[80%] items-center gap-3 rounded-lg bg-black px-4 py-4 shadow-lg transition hover:scale-105"
      >
        {/* Google Play Colored SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 512 512"
        >
          <path
            fill="#32bbff"
            d="M325.3 234.3 104.4 13.4C97.6 6.6 86.8 4.8 77.7 9l221.6 221.6 26 26Z"
          />
          <path
            fill="#00aaff"
            d="M435.4 194.9 372.3 231 326 257.6l109.4-62.7Z"
          />
          <path
            fill="#ffbb00"
            d="M77.7 503c9.1 4.2 19.9 2.4 26.7-4.4l220.9-220.9-26-26L77.7 503Z"
          />
          <path
            fill="#ff444f"
            d="M372.3 281.1 435.4 317c17.2 9.9 17.2 35.3 0 45.2l-63.1 35.9-46.2 26.5 81.1-46.1L372.3 281.1Z"
          />
        </svg>
        <div className="flex flex-col leading-tight">
          <span className="text-[10px] text-gray-300">GET IT ON</span>
          <span className="text-white font-semibold text-sm">Google Play</span>
        </div>
      </a>

      {/* App Store */}
      <a
        href="#"
        className="flex w-[80%] items-center gap-3 rounded-lg bg-black px-4 py-4 shadow-lg transition hover:scale-105"
      >
        {/* Apple Logo (official is monochrome) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M19.665 17.27c-.37.82-.55 1.18-1.02 1.9-.66.99-1.59 2.22-2.74 2.23-1.03.01-1.3-.65-2.71-.65-1.42 0-1.72.65-2.75.64-1.15-.01-2.01-1.13-2.67-2.12-1.84-2.68-2.04-5.82-.9-7.49.8-1.16 2.07-1.84 3.26-1.84 1.22 0 1.98.65 2.99.65.98 0 1.57-.65 2.98-.65 1.03 0 2.12.56 2.92 1.53-2.56 1.4-2.14 5.07.84 6.7zM15.95 6.91c.52-.63.91-1.52.76-2.41-.73.05-1.61.52-2.13 1.15-.47.55-.94 1.45-.78 2.3.82.06 1.63-.42 2.15-1.04z" />
        </svg>
        <div className="flex flex-col leading-tight">
          <span className="text-[10px] text-gray-300">Download on the</span>
          <span className="text-white font-semibold text-sm">App Store</span>
        </div>
      </a>
    </div>
  );
}
