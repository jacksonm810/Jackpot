export const FooterLinks = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-12 flex flex-col justify-between max-w-[1064px] gap-y-12 w-full mt-[42px] mx-auto md:flex-row px-4">
      <div className="box-border caret-transparent gap-x-6 flex flex-col gap-y-6 text-center w-full md:flex-row md:w-max md:text-left">
        <a
          href="mailto://support@solpot.com"
          className="box-border caret-transparent block text-center md:text-left"
        >
          <p className="text-neutral-400 text-sm font-medium box-border caret-transparent leading-[17px] text-center mb-2 md:text-left">
            Contact Support:
          </p>
          <div className="font-[550] box-border caret-transparent leading-[19px] text-center md:text-left">
            support@solpot.com
          </div>
        </a>
        <a
          href="mailto://partners@solpot.com"
          className="box-border caret-transparent block text-center md:text-left"
        >
          <p className="text-neutral-400 text-sm font-medium box-border caret-transparent leading-[17px] text-center mb-2 md:text-left">
            Marketing Inquiries:
          </p>
          <div className="font-[550] box-border caret-transparent leading-[19px] text-center md:text-left">
            partners@solpot.com
          </div>
        </a>
      </div>
      <div className="box-border caret-transparent gap-x-6 flex flex-col gap-y-6 w-full md:flex-row md:w-max">
        <a
          href="https://x.com/solpotcom"
          className="relative bg-[linear-gradient(to_right,rgb(48,48,48),rgb(43,43,43))] box-border caret-transparent block w-full p-px rounded-xl md:w-[236px]"
        >
          <div className="absolute bg-[linear-gradient(98.59deg,rgb(0,131,46)_-19.86%,rgb(0,210,137)_2.42%,rgb(0,143,45)_93.44%)] box-border caret-transparent rotate-[3.0000011085596214deg] z-[3] p-px rounded-lg -right-3 -top-1.5">
            <div className="text-sm font-[550] bg-green-900 box-border caret-transparent h-full leading-5 w-full px-3 py-[5px] rounded-[7px]">
              Follow now
            </div>
          </div>
          <div className="relative items-center bg-[linear-gradient(to_right,rgb(29,29,29)_50%,rgb(39,67,47)_120%)] box-border caret-transparent gap-x-2.5 flex h-full gap-y-2.5 w-full overflow-hidden p-3 rounded-[11px]">
            <div className="items-center bg-stone-950 box-border caret-transparent flex h-9 justify-center w-9 rounded-md">
              <img
                src="https://c.animaapp.com/mhjrz3vfjSIuqR/assets/icon-35.svg"
                alt="Icon"
                className="box-border caret-transparent h-4 w-4"
              />
            </div>
            <div className="box-border caret-transparent">
              <p className="text-stone-300 text-xs box-border caret-transparent leading-4">
                Follow our
              </p>
              <p className="text-sm font-semibold box-border caret-transparent leading-5">
                X / Twitter
              </p>
            </div>
            <img
              src="https://c.animaapp.com/mhjrz3vfjSIuqR/assets/dot-pattern-referral.webp"
              alt=""
              className="absolute box-border caret-transparent max-w-full object-cover w-full -right-5 top-0"
            />
          </div>
        </a>
        <a
          href="https://discord.gg/solpot"
          className="relative bg-[linear-gradient(to_right,rgb(48,48,48),rgb(43,43,43))] box-border caret-transparent block w-full p-px rounded-xl md:w-[236px]"
        >
          <div className="absolute bg-[linear-gradient(98.59deg,rgb(0,131,46)_-19.86%,rgb(0,210,137)_2.42%,rgb(0,143,45)_93.44%)] box-border caret-transparent rotate-[3.0000011085596214deg] z-[3] p-px rounded-lg -right-3 -top-1.5">
            <div className="text-sm font-[550] bg-green-900 box-border caret-transparent h-full leading-5 w-full px-3 py-[5px] rounded-[7px]">
              Join
            </div>
          </div>
          <div className="relative items-center bg-[linear-gradient(to_right,rgb(29,29,29)_50%,rgb(39,67,47)_120%)] box-border caret-transparent gap-x-2.5 flex h-full gap-y-2.5 w-full overflow-hidden p-3 rounded-[11px]">
            <div className="items-center bg-stone-950 box-border caret-transparent flex h-9 justify-center w-9 rounded-md">
              <img
                src="https://c.animaapp.com/mhjrz3vfjSIuqR/assets/icon-36.svg"
                alt="Icon"
                className="text-indigo-500 box-border caret-transparent h-5 w-5"
              />
            </div>
            <div className="box-border caret-transparent">
              <p className="text-stone-300 text-xs box-border caret-transparent leading-4">
                Join our
              </p>
              <p className="text-sm font-semibold box-border caret-transparent leading-5">
                Discord
              </p>
            </div>
            <img
              src="https://c.animaapp.com/mhjrz3vfjSIuqR/assets/dot-pattern-referral.webp"
              alt=""
              className="absolute box-border caret-transparent max-w-full object-cover w-full -right-5 top-0"
            />
          </div>
        </a>
      </div>
    </div>
  );
};
