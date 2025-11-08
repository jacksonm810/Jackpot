export const FooterCopyright = () => {
  return (
    <div className="items-center box-border caret-transparent flex flex-col gap-y-4 justify-between max-w-[1064px] w-full mt-[42px] mx-auto px-4 md:flex-row md:gap-y-0">
      <p className="text-neutral-400/40 text-sm font-[550] box-border caret-transparent leading-5 mr-2 text-center md:text-left">
        © 2024 Solpot.com All Rights Reserved
      </p>
      <button
        type="button"
        className="relative text-sm font-medium items-center bg-zinc-800 caret-transparent flex h-10 justify-center leading-5 min-w-10 w-full overflow-hidden px-4 py-0 rounded-lg hover:bg-neutral-700/80"
      >
        <span className="box-border caret-transparent block">
          <div className="items-center box-border caret-transparent gap-x-2 flex gap-y-2">
            <div className="relative box-border caret-transparent h-3 w-4 overflow-hidden rounded-[1px]">
              <img
                src="https://c.animaapp.com/mhjrz3vfjSIuqR/assets/US.svg"
                className="box-border caret-transparent h-full max-w-full object-cover w-full"
              />
            </div>
            English
          </div>
        </span>
        <img
          src="https://c.animaapp.com/mhjrz3vfjSIuqR/assets/icon-37.svg"
          alt="Icon"
          className="box-border caret-transparent h-[18px] -rotate-90 w-[18px] ml-2"
        />
      </button>
      <div
        role="menu"
        className="bg-stone-900 box-border caret-transparent hidden max-h-[1000px] max-w-[375px] origin-[50%_0%] z-[1002] border border-zinc-800 overflow-auto mt-2 p-2 rounded-lg border-solid md:max-w-screen-xl"
      >
        <div
          role="menuitem"
          className="text-sm font-semibold box-border caret-transparent leading-5 px-3 py-2 rounded-md"
        >
          English
        </div>
        <div
          role="menuitem"
          className="text-sm font-semibold box-border caret-transparent leading-5 px-3 py-2 rounded-md"
        >
          Español
        </div>
        <div
          role="menuitem"
          className="text-sm font-semibold box-border caret-transparent leading-5 px-3 py-2 rounded-md"
        >
          Français
        </div>
        <div
          role="menuitem"
          className="text-sm font-semibold box-border caret-transparent leading-5 px-3 py-2 rounded-md"
        >
          Türkçe
        </div>
        <div
          role="menuitem"
          className="text-sm font-semibold box-border caret-transparent leading-5 px-3 py-2 rounded-md"
        >
          简体中文
        </div>
      </div>
    </div>
  );
};
