"use client";

import Logo from "@/public/svg-react/logo";
import Right from "@/public/svg-react/right";
import Link from "next/link";
import Toggle, { ToogleProps } from "../components/toggle";
import { useEffect, useRef, useState } from "react";
import Google from "@/public/svg-react/google";
import Facbook from "@/public/svg-react/facebook";
import Close from "@/public/svg-react/close";

const Root = () => {
  const [isWindow, setIsWindow] = useState(false);
  useEffect(() => {
    const isWindow = typeof window !== "undefined";
    setIsWindow(isWindow);
  }, []);

  const [open, setOpen] = useState<number | null>(null);
  const [data, setData] = useState<ToogleProps[]>([
    {
      label: "Why can you offer low fees?",
      description:
        "Over the past four years, we have built a powerful digital financial institution with modern technology. Like many other brokers, we receive rebates from trading partners. As a result, we can free you from high order commissions through our efficient structures. When placing an order, savings plans are free of brokerage fees and there is one euro for single trades plus third party costs and spreads, but no order commission.",
    },
    {
      label: "How is my money protected?",
      description: `All funds in the cash account are legally protected up to €100,000 per investor. They are held in an escrow account at one of our partner banks. These currently are Solaris SE, J.P. Morgan SE, Citibank Europe plc and Deutsche Bank. Solaris SE and Deutsche Bank are subject to supervision by the Deutsche Bundesbank and the BaFin (Federal Financial Supervisory Authority Germany). Citibank Europe plc is supervised by the Central Bank of Ireland.The securities in your custody account are not covered by the deposit guarantee scheme, they are your property instead. They are deposited by our custodian bank HSBC Germany in the corresponding depositories in Germany and abroad. Therefore, the securities belong to you for all purposes.`,
    },
    {
      label: "Who can open an account?",
      description:
        "To open a Trade Republic account, you must meet the following criteria: You own a smartphone (iOS or Android operating system). You are at least 18 years old and have your permanent residence in Germany with tax liability in Germany. You have a European cell phone number and a SEPA bank account.",
    },
    {
      label: "What assets do you offer?",
      description:
        "With Trade Republic, you can invest in worldwide stocks & ETFs, corporate and government bonds, crypto and derivatives from our premium partners - Citi, HSBC, Société Générale and UBS. You can also make saving a habit by setting up savings plans on stocks, ETFs or crypto.",
    },
    {
      label: "Are you a bank?",
      description:
        "Trade Republic Bank is a German investment firm. We are supervised by the Federal Bank of Germany and BaFin (Federal Financial Supervisory Authority) and offer you the usual reliability and security of a German financial institution. The money you pay in is held in one of our omnibus trust accounts with banks that are authorized to conduct deposit business. These are currently Solaris SE, Deutsche Bank AG, J.P. Morgan SE and Citibank Europe plc.",
    },
    {
      label: "Am I receiving interest?",
      description: `Trade Republic accepts your funds only in connection with the provision of investment services. For this purpose, Trade Republic has opened omnibus trust accounts at partner banks on which your cash is held.
    You can pay in funds for investment services on the cash account. When you buy and sell securities, we settle these transactions directly on your cash account. Trade Republic transfers the conditions of the partner bank to you, subtracting the costs. As of now, you receive 4% p.a. on your uninvested cash, from our partner banks, up to 50.000€.`,
    },
  ]);

  const [firstHeight, setFirstHeight] = useState(0);
  const [secondHeight, setSecondHeight] = useState(0);
  const [thirdHeight, setThirdHeight] = useState(0);
  const [fourthHeight, setFourthHeight] = useState(0);
  const [fiveHeight, setFiveHeight] = useState(0);

  const [isIntersecting, setIsIntersecting] = useState(false);
  // useEffect(() => {
  //   console.log(isIntersecting);
  // }, [isIntersecting]);

  const [tab, setTab] = useState(0);
  const firstRef = useRef<any>(null);
  const secondRef = useRef<any>(null);
  // const headerRef = useRef<any>(null);
  const thirdRef = useRef<any>(null);
  const fourthRef = useRef<any>(null);
  const fiveRef = useRef<any>(null);
  const loginRef = useRef<HTMLDialogElement>(null);
  const registerRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!firstRef.current) return;
    setFirstHeight(firstRef.current.clientHeight);
  }, [firstRef]);
  useEffect(() => {
    if (!secondRef.current) return;
    setSecondHeight(secondRef.current.clientHeight);
  }, [secondRef]);
  useEffect(() => {
    if (!thirdRef.current) return;
    setThirdHeight(thirdRef.current.clientHeight);
  }, [thirdRef]);
  useEffect(() => {
    if (!fourthRef.current) return;
    setFourthHeight(fourthRef.current.clientHeight);
  }, [fourthRef]);
  useEffect(() => {
    if (!fiveRef.current) return;
    setFiveHeight(fiveRef.current.clientHeight);
  }, [fiveRef]);
  // Tab
  // useEffect(() => console.log(tab), [tab]);
  const fun = (event: any) => {
    const firstRefHeight = firstHeight - 10;
    const secondRefHeight = secondHeight - 10;
    const thirdRefHeight = thirdHeight - 10;
    // console.log(`firstRefHeight:${firstRefHeight}`);
    // console.log(`secondRefHeight:${secondRefHeight}`);
    // console.log(`thirdRefHeight:${thirdRefHeight}`);

    const scrollTop = isWindow ? window.scrollY : 0;
    // console.log(scrollTop);
    // console.log(firstRefHeight + 150);
    if (firstRefHeight > 0 && secondRefHeight > 0 && thirdRefHeight > 0) {
      if (scrollTop > firstRefHeight + secondRefHeight + thirdRefHeight) {
        if (isIntersecting == false) {
          setIsIntersecting(true);
        }
      } else if (scrollTop > firstRefHeight + secondRefHeight) {
        if (isIntersecting == true) {
          setIsIntersecting(false);
        }
      } else if (scrollTop > firstRefHeight) {
        if (isIntersecting == false) {
          setIsIntersecting(true);
        }
      } else {
        if (isIntersecting == true) {
          setIsIntersecting(false);
        }
      }
    }
    if (isWindow && window.innerWidth > 991) {
    } else if (isWindow && window.innerWidth < 991) {
      // console.log(scrollTop);
      // console.log(firstRefHeight + 50);

      if (
        isWindow &&
        firstRefHeight > 0 &&
        secondRefHeight > 0 &&
        thirdRefHeight > 0
      ) {
        if (
          scrollTop >
          firstRefHeight +
            secondRefHeight +
            thirdRefHeight -
            window.innerHeight +
            30
        ) {
          // setTab(3);
          setTab(2);
          // if (isIntersecting == false) {
          //   setIsIntersecting(true);
          // }
        } else if (
          scrollTop >
          firstRefHeight + secondRefHeight - window.innerHeight + 20
        ) {
          setTab(1);
          // if (isIntersecting == true) {
          //   setIsIntersecting(false);
          // }
        } else if (scrollTop > firstRefHeight) {
          setTab(0);
        } else {
          setTab(0);
        }
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", fun);
    return () => window.removeEventListener("scroll", fun);
  }, [firstHeight, secondHeight, thirdHeight, isIntersecting]);

  const _class: any =
    isWindow && window.innerWidth < 640
      ? { position: "relative", display: "block", width: "100%" }
      : {};
  const _classActive: any =
    isWindow && window.innerWidth < 640
      ? {
          position: "fixed",
          width: "100%",
        }
      : {};

  return (
    <main>
      {/* Login */}
      <dialog
        className="fixed shadow-md backdrop:bg-black backdrop:opacity-40 py-9 px-3 max-sm:m-0 max-sm:min-w-full max-sm:fixed max-sm:top-16 sm:px-8 md:px-16 md:py-12   rounded-xl"
        ref={loginRef}
      >
        <button
          className="absolute right-4 top-4"
          onClick={() => loginRef.current?.close()}
        >
          <Close className="w-8 h-8 hover:opacity-40 duration-300" />
        </button>
        <form
          className="w-full"
          onSubmit={(e) => {
            e.preventDefault();
            console.log("hello");
          }}
        >
          <div className="flex flex-col gap-y-8 justify-center  sm:w-fit sm:min-w-[350px]  mx-auto">
            <div className="flex flex-col  ">
              <label
                className="text-sm font-[620] tracking-tight"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="mt-1 h-10 px-4 py-6 bg-[#f7f7f7] focus-within:border-black text-base font-medium rounded-xl border outline-none"
                id="email"
                type="email"
              />
              <span className="text-red-600 mt-2"></span>
            </div>
            <div className="flex flex-col ">
              <label
                className="text-sm font-[620] tracking-tight"
                htmlFor="pasword"
              >
                Password
              </label>
              <input
                className="mt-1 h-10 px-4 py-6 bg-[#f7f7f7]  focus-within:border-black text-base font-medium rounded-xl border outline-none"
                id="pasword"
                type="password"
              />
              <span className="text-red-600 mt-2"></span>
              <span className="text-sm font-[680]  cursor-pointer mt-2 opacity-80 hover:opacity-100 transition-colors duration-300 tracking-wide max-w-fit">
                did you forget your password?
              </span>
            </div>
            <button
              type="submit"
              className="bg-black rounded-3xl text-base font-[680] w-full text-white py-4"
            >
              Log in
            </button>
            <div className="flex w-full items-center">
              <div className="flex-1 h-[1px] bg-gray-400 opacity-40"></div>
              <span className="text-sm px-2 font-normal"> Or Login with</span>
              <div className="flex-1 h-[1px] bg-gray-400 opacity-40"></div>
            </div>
            <div className="flex justify-between gap-1 sm:gap-x-6">
              {/* Google */}
              <div className="flex-1 flex justify-center items-center sm:gap-x-3 py-2 px-1 sm:py-4 sm:px-2 cursor-pointer  shadow-xl  rounded-3xl bg-[#f7f7f7]">
                <Google className="w-6 h-6" />
                <span className="text-lg tracking-tight ">Google</span>
              </div>
              {/* Facebook */}
              <div className="flex-1 flex justify-center items-center gap-x-3 py-2 px-1 sm:py-4 sm:px-2 cursor-pointer shadow-xl  rounded-3xl bg-[#f7f7f7]">
                <Facbook className="w-6 h-6" />
                <span className="text-lg tracking-tight ">Facebook</span>
              </div>
            </div>
          </div>
        </form>
      </dialog>
      {/* Sign Up */}
      <dialog
        className="fixed shadow-md backdrop:bg-black backdrop:opacity-40 py-9 px-3 max-sm:m-0 max-sm:min-w-full max-sm:fixed max-sm:top-16 sm:px-8 md:px-16 md:py-12   rounded-xl"
        ref={registerRef}
      >
        <button
          className="absolute right-4 top-4"
          onClick={() => registerRef.current?.close()}
        >
          <Close className="w-8 h-8 hover:opacity-40 duration-300" />
        </button>
        <form
          className="w-full"
          onSubmit={(e) => {
            e.preventDefault();
            console.log("hello");
          }}
        >
          <div className="flex flex-col gap-y-8 justify-center  sm:w-fit sm:min-w-[350px]  mx-auto">
            <h2 className=""></h2>
            <div className="flex flex-col  ">
              <label
                className="text-sm font-[620] tracking-tight"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="mt-1 h-10 px-4 py-6 bg-[#f7f7f7]  focus-within:border-black text-base font-medium rounded-xl border outline-none"
                id="email"
                type="email"
              />
              <span className="text-red-600 mt-2"></span>
            </div>
            <div className="flex flex-col ">
              <label
                className="text-sm font-[620] tracking-tight"
                htmlFor="pasword"
              >
                Password
              </label>
              <input
                className="mt-1 h-10 px-4 py-6 bg-[#f7f7f7]  focus-within:border-black text-base font-medium rounded-xl border outline-none"
                id="pasword"
                type="password"
              />
              <span className="text-red-600 mt-2"></span>
            </div>
            <button
              type="submit"
              className="bg-black rounded-3xl text-base font-[680] w-full text-white py-4"
            >
              Sign Up
            </button>
            <div className="flex w-full items-center">
              <div className="flex-1 h-[1px] bg-gray-400 opacity-40"></div>
              <span className="text-sm px-2 font-normal">
                {" "}
                Or Register with
              </span>
              <div className="flex-1 h-[1px] bg-gray-400 opacity-40"></div>
            </div>
            <div className="flex justify-between gap-1 sm:gap-x-6">
              {/* Google */}
              <div className="flex-1 flex justify-center items-center sm:gap-x-3 py-2 px-1 sm:py-4 sm:px-2 cursor-pointer  shadow-xl  rounded-3xl bg-[#f7f7f7]">
                <Google className="w-6 h-6" />
                <span className="text-lg tracking-tight ">Google</span>
              </div>
              {/* Facebook */}
              <div className="flex-1 flex justify-center items-center gap-x-3 py-2 px-1 sm:py-4 sm:px-2 cursor-pointer shadow-xl  rounded-3xl bg-[#f7f7f7]">
                <Facbook className="w-6 h-6" />
                <span className="text-lg tracking-tight ">Facebook</span>
              </div>
            </div>
            <span className="text-[#a9a9a9] text-xs font-[680] text-center">
              Already have an account?
              <strong
                onClick={() => {
                  registerRef.current?.close();
                  loginRef.current?.showModal();
                }}
                className="text-black  cursor-pointer font-[680] ml-1"
              >
                Log in
              </strong>
            </span>
          </div>
        </form>
      </dialog>
      {/* // Header */}
      <header
        className={`fixed ${
          isIntersecting ? "" : "bg-transparent"
        } left-0 top-0 w-full z-20 p-4`}
      >
        <div
          className={`flex justify-between items-center w-full ${
            isIntersecting ? "invert-[0]" : "invert-[1]"
          }`}
        >
          <Link href={""} className="text-[unset]">
            <div className="w-[213px] aspect-[213/18]">
              <Logo />
            </div>
          </Link>
          <nav className="flex gap-4 items-center ">
            <span
              onClick={() => loginRef.current?.showModal()}
              className="text-[#000] cursor-pointer bg-transparent text-sm md:text-base p-4 font-[680]"
            >
              Log in
            </span>
            {/* <Link
              href={""}
              className=""
            >
              Log in
            </Link> */}
            <button
              onClick={() => {
                registerRef.current?.showModal();
              }}
              className=" min-[743px]:flex hidden bg-black  items-center text-base font-[680] gap-[2.8125rem] p-4 whitespace-nowrap relative rounded-2xl border-none
           text-white shadow-[0_0_#00000024,0_3px_6px_#00000024,0_11px_11px_#0000001c,0_24px_15px_#0000000d,0_43px_17px_#00000005,0_68px_19px_0_transparent]"
            >
              Sign up
              <Right className="w-4 h-4 bg-black" />
            </button>
          </nav>
        </div>
      </header>
      <div className="fixed flex right-4 bottom-8 gap-1 z-50  md:hidden">
        <Link
          href={""}
          className="flex items-center rounded-2xl text-base font-[680]  gap-[2.8125rem] p-4 bg-black text-white shadow-[0_0_#00000024,0_3px_6px_#00000024,0_11px_11px_#0000001c,0_24px_15px_#0000000d,0_43px_17px_#00000005,0_68px_19px_0_transparent]"
        >
          Get the app
          <svg
            data-v-c07429e7=""
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M5.184 4.925a.5.5 0 0 1 0-.707l.864-.864a.5.5 0 0 1 .707 0l4.523 4.523a.5.5 0 0 1 0 .707l-4.523 4.523a.5.5 0 0 1-.707 0l-.864-.865a.5.5 0 0 1 0-.707L8.488 8.23 5.184 4.925Z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>

      {/* First Section */}
      <StickyControl isWindow={isWindow} height={firstHeight}>
        <div
          style={tab == 0 ? _classActive : _class}
          ref={firstRef}
          className="md:sticky top-0 z-[1]"
        >
          <div className="flex items-end  relative p-4 h-[calc(100svh_-_16px)]">
            {/* Video  */}
            <div className="absolute left-0 right-0 top-0 bottom-0 w-full h-full">
              <div className="w-full h-full overflow-hidden">
                <video
                  autoPlay
                  loop
                  preload="auto"
                  className="h-full max-h-full max-w-full w-full object-cover"
                >
                  <source src="/video/main_video.mp4"></source>
                </video>
              </div>
            </div>
            {/* Content */}
            <div className="min-[1200px]:text-[5.5rem] md:max-w-[38.4375rem] md:w-full md:pb-0 relative z-10 flex flex-col gap-8 break-normal  w-full text-white">
              <h1 className="min-[1200px]:text-[5.5rem] min-[680px]:text-[5rem] antialiased min-[480px]:text-[4rem]  text-[4rem] font-[740] tracking-[.0125rem] leading-none">
                <span className="inline-block    align-top no-underline">
                  Do more with your money.
                </span>
              </h1>
              <p
                className="text-base  leading-[1.25] tracking-[.0125rem] font-[680]  text-white
                  min-[1200px]:text-[1.375rem] min-[1200px]:leading-[1.2727272727]
                  min-[1100px]:text-[1.25rem] min-[1100px]:leading-[1.3]
                  min-[900px]:text-[1.125rem] min-[900px]:leading-[1.2222222222]
                  min-[800px]:text-[1rem] min-[800px]:leading-[1.25]
                  min-[744px]:text-[1.375rem] min-[744px]:leading-[1.25]
                  min-[480px]:text-[1.125rem] min-[480px]:leading-[1.3]
              "
              >
                <span className="inline-block  align-top no-underline ">
                  The easiest way to save and invest in
                  <br /> stocks, ETFs, bonds, derivatives and crypto.
                </span>
              </p>
            </div>
          </div>
        </div>
      </StickyControl>
      {/* Second Section */}
      <StickyControl isWindow={isWindow} height={secondHeight}>
        <div
          style={tab == 1 ? _classActive : _class}
          ref={secondRef}
          className={`${
            tab == 1 ? "bottom-0 flex items-end" : ""
          } md:sticky top-0  z-[2]`}
        >
          <div
            className="max-w-full md:flex-row  p-4  flex flex-1  flex-col 
          min-[800px]:gap-[6.125vw] min-[900px]:gap-[5.9vw] min-[1100px]:gap-[10.9vw] min-[1200px]:gap-[11.5vw]
            md:h-[130vh] md:pb-4 md:pt-[6rem]  text-[#000] bg-white"
          >
            {/* Mobile Content */}
            <div className="pt-2 sm:hidden">
              <div className="sticky   sm:hidden w-[288px] top-20 left-4 text-black">
                <h2 className="text-5xl font-[740] tracking-[.0125rem] leading-none">
                  {" "}
                  Save now, for later
                </h2>
              </div>
              <div className="invisible h-[100px]"></div>
            </div>
            {/* Video */}
            <div className="flex   flex-1">
              <div className="w-[458.7px] h-[611.6px] flex flex-col justify-between max-w-full max-h-full">
                <div className="flex flex-1  justify-start max-w-full max-h-full w-full h-full">
                  <div className="rounded-[.75rem] w-full h-full overflow-hidden">
                    <video
                      autoPlay
                      loop
                      preload="auto"
                      className="max-h-full max-w-full object-cover w-full h-full"
                    >
                      <source src="/video/section_two_video.mp4"></source>
                    </video>
                  </div>
                </div>
              </div>
            </div>
            {/* Content */}
            <div className="flex-col  sm:flex-row flex  justify-end  flex-1">
              <div className="flex flex-col max-w-full max-h-full gap-20 ">
                {/* Heading */}
                <div
                  className="hidden text-black sm:block  
                min-[800px]:-mt-[0.5625rem]  min-[800px]:max-w-[20.875rem]
                 min-[900px]:-mt-[0.625rem]  
                 min-[1100px]:-mt-[0.75rem] min-[1100px]:max-w-[25.875rem] "
                >
                  <h2 className="text-5xl font-[740] tracking-[.0125rem] leading-none min-[1100px]:text-[4.5rem]   ">
                    {" "}
                    Save now, for later
                  </h2>
                </div>
                {/* Bottom */}
                <div className="min-[800px]:max-w-[456px] min-[800px]:pr-14 flex flex-col gap-12 min-[1200px]:gap-16   min-[744px]:mb-[-.375rem] justify-end">
                  <div className="text-[#c4cbd1]">
                    <p
                      className="min-[800px]:text-[1rem] min-[800px]:text-[1.25]
                     min-[900px]:text-[1.125rem]
                     min-[900px]:leading-[1.2222222222] 
                     min-[1100px]:text-[1.25rem] min-[1100px]:leading-[1.3]
                     min-[1200px]:text-[1.375rem] min-[1200px]:leading-[1.2727272727]
                     "
                    >
                      <strong className="text-black">Savings Plans </strong>
                      on ETFs, stocks and crypto. Invest regularly to grow your
                      wealth with the market.
                    </p>
                  </div>
                  <div className="text-[#c4cbd1]">
                    <p
                      className="min-[800px]:text-[1rem] min-[800px]:text-[1.25]
                     min-[900px]:text-[1.125rem]
                     min-[900px]:leading-[1.2222222222] 
                     min-[1100px]:text-[1.25rem] min-[1100px]:leading-[1.3]
                     min-[1200px]:text-[1.375rem] min-[1200px]:leading-[1.2727272727]
                     "
                    >
                      <strong className="text-black">
                        Bonds to lock in high interest
                      </strong>
                      for years and get regular payments. Start with 1 €, sell
                      anytime.
                    </p>
                  </div>
                  <div className="text-[#c4cbd1]">
                    <p
                      className="min-[800px]:text-[1rem] min-[800px]:text-[1.25]
                     min-[900px]:text-[1.125rem] min-[900px]:leading-[1.2222222222] 
                     min-[1100px]:text-[1.25rem] min-[1100px]:leading-[1.3]
                     min-[1200px]:text-[1.375rem] min-[1200px]:leading-[1.2727272727]
                     "
                    >
                      <strong className="text-black">
                        Europe’s largest ETF offering
                      </strong>
                      to diversify your portfolio and build long term wealth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StickyControl>
      {/* Third Section */}
      <StickyControl isWindow={isWindow} height={thirdHeight}>
        <div
          style={tab == 2 ? _classActive : _class}
          ref={thirdRef}
          className={`${
            tab == 2 ? "bottom-0 flex items-end" : ""
          } md:sticky  top-0 z-[3]`}
        >
          <div
            className="max-w-full flex flex-col p-4 text-white bg-black
           min-[800px]:gap-[6.125vw] min-[900px]:gap-[5.9vw] min-[1100px]:gap-[10.9vw] min-[1200px]:gap-[11.5vw] 
           md:flex-row  md:h-[130vh] md:pb-4 md:pt-[6rem] gap-[5.9vw] "
          >
            {/* Mobile Content */}
            <div className="pt-2 sm:hidden">
              <div className="sticky   sm:hidden w-[288px] top-20 left-4 text-white">
                <h2 className="text-5xl font-[740] tracking-[.0125rem] leading-none">
                  {" "}
                  Trusted & transparent
                </h2>
              </div>
              <div className="invisible h-[100px]"></div>
            </div>
            {/*  */}
            <div className="flex   flex-1">
              <div className="w-[458.7px] h-[611.6px] flex flex-col justify-between max-w-full max-h-full">
                <div className="flex flex-1  justify-start max-w-full max-h-full w-full h-full">
                  <div className="rounded-[.75rem] w-full h-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="/images/section_three.jpg"
                      alt="Couple hugging each other"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Content */}
            <div className="flex  justify-end  flex-1">
              <div className="flex flex-col max-w-full max-h-full gap-20">
                {/* Heading */}
                <div
                  className="hidden sm:block  text-white
                 
                min-[800px]:-mt-[0.5625rem]  min-[800px]:max-w-[20.875rem] min-[900px]:-mt-[0.625rem]  min-[1100px]:-mt-[0.75rem] min-[1100px]:max-w-[25.875rem] "
                >
                  <h2 className="text-5xl font-[740] tracking-[.0125rem] leading-none min-[1100px]:text-[4.5rem]   ">
                    {" "}
                    Trusted & transparent
                  </h2>
                </div>
                {/* Bottom */}
                <div className="mt-[4rem] min-[800px]:max-w-[456px] min-[800px]:pr-14 flex flex-col gap-12 min-[1200px]:gap-16   min-[744px]:mb-[-.375rem] justify-end">
                  <div className="text-[#676a70]">
                    <p
                      className="min-[800px]:text-[1rem] min-[800px]:text-[1.25]
                     min-[900px]:text-[1.125rem]
                     min-[900px]:leading-[1.2222222222] 
                     min-[1100px]:text-[1.25rem] min-[1100px]:leading-[1.3]
                     min-[1200px]:text-[1.375rem] min-[1200px]:leading-[1.2727272727]
                     "
                    >
                      <strong className="text-white">Millions of users </strong>
                      and billions of assets under management across 17 European
                      countries.
                    </p>
                  </div>
                  <div className="text-[#676a70]">
                    <p
                      className="min-[800px]:text-[1rem] min-[800px]:text-[1.25]
                     min-[900px]:text-[1.125rem]
                     min-[900px]:leading-[1.2222222222] 
                     min-[1100px]:text-[1.25rem] min-[1100px]:leading-[1.3]
                     min-[1200px]:text-[1.375rem] min-[1200px]:leading-[1.2727272727]
                     "
                    >
                      <strong className="text-white">
                        German financial institution
                      </strong>
                      regulated by BaFin and Bundesbank.
                    </p>
                  </div>
                  <div className="text-[#676a70]">
                    <p
                      className="min-[800px]:text-[1rem] min-[800px]:text-[1.25]
                     min-[900px]:text-[1.125rem] min-[900px]:leading-[1.2222222222] 
                     min-[1100px]:text-[1.25rem] min-[1100px]:leading-[1.3]
                     min-[1200px]:text-[1.375rem] min-[1200px]:leading-[1.2727272727]
                     "
                    >
                      <strong className="text-white">
                        Publicly regulated exchange
                      </strong>
                      and better spreads on average than the reference market.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StickyControl>
      {/* Fourth  Section */}

      <StickyControl isWindow={isWindow} height={fourthHeight}>
        <div
          style={tab == 3 ? _classActive : _class}
          ref={fourthRef}
          className={`${
            tab == 3 && isWindow && window.innerWidth < 640
              ? "max-h-screen overflow-scroll"
              : ""
          } md:relative top-0  z-[4] overflow-hidden`}
        >
          {/* <div
            id={"section-3"}
            ref={fourthRef}
            className="absolute h-full -z-10 top-0 w-full"
          ></div> */}
          <div
            className={`flex flex-col h-full justify-around relative  min-h-screen sm:min-h-full  pt-8 px-4 pb-4 bg-white text-black`}
          >
            {/* FAQ */}
            <div className="absolute top-[120px] left-4">
              <h2
                className="text-[3rem] font-[740] tracking-[.0125rem] leading-none text-black  min-[744px]:text-[4.5rem] min-[800px]:text-[3.5rem] min-[900px]:text-[4rem] min-[1100px]:text-[4.5rem] min-[1200px]:text-[5rem]
               "
              >
                FAQ
              </h2>
            </div>
            <ul className="min-[744px]:mt-[18.75rem] mt-[12rem] w-[615px] max-w-full p-0">
              {data.map((item, index) => {
                return (
                  <Toggle
                    key={index}
                    id={index}
                    open={open}
                    setOpen={setOpen}
                    label={item.label}
                    description={item.description}
                  />
                );
              })}
            </ul>
            <div className="flex -ml-4 mt-8 ">
              <Link
                className="text-[#000] bg-transparent 
                min-[1200px]:text-[1.375rem] min-[1200px]:leading-[1.2727272727]
                min-[1100px]:text-[1.25rem] min-[1100px]:leading-[1.3]
                min-[900px]:text-[1.125rem] min-[900px]:leading-[1.2222222222]
                min-[800px]:text-[1rem] min-[800px]:leading-[1.25]
                min-[744px]:text-[1.375rem] min-[744px]:leading-[1.25]
                min-[480px]:text-[1.125rem] min-[480px]:leading-[1.3]
                cursor-pointer
                flex text-base
                font-[680]
                gap-[1rem]
                sm:gap-[2.8125rem]
                p-4
                relative
                items-center
              "
                href={""}
              >
                Support
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="scale(1 -1) rotate(45)"
                >
                  <g clipPath="url(#a)">
                    <path
                      d="M16 16V8H8"
                      stroke="#000"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h24v24H0z" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </StickyControl>
      <StickyControl isWindow={isWindow} z={"z-[5]"} height={fiveHeight}>
        <footer
          ref={fiveRef}
          style={tab == 4 ? _classActive : _class}
          className="md:relative top-0 z-[5] flex text-black bg-white flex-col justify-end items-start gap-16 pt-44 px-4 pb-16 sm:pb-8"
        >
          {/* Footer Logo
          <div className="aspect-[213/18] w-[213px]">
            {" "}
            <Logo className="w-full h-full" />
          </div> */}
          {/* Footer middle */}
          <div className="flex items-start self-stretch flex-wrap gap-16">
            <div className="flex items-start flex-grow flex-shrink-0 basis-0 flex-col gap-4">
              <p className="text-lg font-medium tracking-[.0125rem] leading-[1.25]  antialiased ">
                Offering
              </p>
              <div className="text-[#c4cbd1]">
                <div className="">
                  <span className="text-[.875rem] font-[580] tracking-[.0125rem] leading-[1.1428571429] antialiased ">
                    <Link href={""}>Save</Link>
                  </span>{" "}
                </div>
                <div className="">
                  <span className="text-[.875rem] font-[580] tracking-[.0125rem] leading-[1.1428571429] antialiased ">
                    <Link href={""}>Invest</Link>
                  </span>{" "}
                </div>
                <div className="">
                  <span className="text-[.875rem] font-[580] tracking-[.0125rem] leading-[1.1428571429] antialiased ">
                    <Link href={""}>Trust</Link>
                  </span>{" "}
                </div>
              </div>
            </div>
            <div className="flex items-start flex-grow flex-shrink-0 basis-0 flex-col gap-4">
              <p className="text-lg font-medium tracking-[.0125rem] leading-[1.25]  antialiased ">
                Company
              </p>
              <div className="text-[#c4cbd1]">
                <div className="">
                  <span className="text-[.875rem] font-[580] tracking-[.0125rem] leading-[1.1428571429] antialiased ">
                    <Link href={""}>About us</Link>
                  </span>{" "}
                </div>
                <div className="">
                  <span className="text-[.875rem] font-[580] tracking-[.0125rem] leading-[1.1428571429] antialiased ">
                    <Link href={""}>Careers</Link>
                  </span>{" "}
                </div>
                <div className="">
                  <span className="text-[.875rem] font-[580] tracking-[.0125rem] leading-[1.1428571429] antialiased ">
                    <Link href={""}>Press</Link>
                  </span>{" "}
                </div>
              </div>
            </div>
            <div className="flex items-start flex-grow flex-shrink-0 basis-0 flex-col gap-4">
              <p className="text-lg font-medium tracking-[.0125rem] leading-[1.25]  antialiased ">
                Customers
              </p>
              <div className="text-[#c4cbd1]">
                <div className="">
                  <span className="text-[.875rem] font-[580] tracking-[.0125rem] leading-[1.1428571429] antialiased ">
                    <Link href={""}>Support</Link>
                  </span>{" "}
                </div>
                <div className="">
                  <span className="text-[.875rem] font-[580] tracking-[.0125rem] leading-[1.1428571429] antialiased ">
                    <Link href={""}>Pricing</Link>
                  </span>{" "}
                </div>
                <div className="">
                  <span className="text-[.875rem] font-[580] tracking-[.0125rem] leading-[1.1428571429] antialiased ">
                    <Link href={""}>Legal</Link>
                  </span>{" "}
                </div>
              </div>
            </div>
            <div className="flex items-start flex-grow flex-shrink-0 basis-0 flex-col gap-4"></div>
          </div>
          {/* Footer bottom */}
          <div className="flex flex-col mt-[4rem] sm:mt-0 items-start justify-end self-stretch gap-8">
            <span className="opacity-90 text-[.875rem] font-[580] tracking-[.0125rem] leading-[1.1428571429] antialiased ">
              © Trade Republic Bank 2023
            </span>{" "}
            <span className="opacity-90 text-[.875rem] font-[580] tracking-[.0125rem] leading-[1.1428571429] antialiased ">
              Investing in the stock markets carries risk: the value of
              investments can go up as well as down and you may receive back
              less than your original investment. Individual investors should
              make their own decisions or seek independent advice.
            </span>{" "}
            <div className="flex flex-wrap content-start items-start self-stretch gap-8">
              <div>
                <span className="opacity-90 text-[.875rem] font-[580] tracking-[.0125rem] leading-[1.1428571429] antialiased ">
                  <Link href={""}>All assets</Link>
                </span>{" "}
              </div>
              <div>
                <span className="opacity-90 text-[.875rem] font-[580] tracking-[.0125rem] leading-[1.1428571429] antialiased ">
                  <Link href={""}>Privacy</Link>
                </span>{" "}
              </div>
              <div>
                <span className="opacity-90 text-[.875rem] font-[580] tracking-[.0125rem] leading-[1.1428571429] antialiased ">
                  <Link href={""}>Imprint</Link>
                </span>{" "}
              </div>
              <div>
                <span className="opacity-90  text-[.875rem] font-[580] tracking-[.0125rem] leading-[1.1428571429] antialiased ">
                  <Link href={""}>Cookies</Link>
                </span>{" "}
              </div>
            </div>
          </div>
        </footer>
      </StickyControl>
    </main>
  );
};

const StickyControl = ({
  z,
  height,
  children,
  isWindow,
}: {
  z?: string;
  height: number;
  children: React.ReactNode;
  isWindow: boolean;
}) => {
  if (isWindow && window.innerWidth > 640) {
    return children;
  } else {
    return (
      <div
        className={`overflow-hidden relative bg-white ${z} `}
        style={{ height: height }}
      >
        {children}
      </div>
    );
  }
};

export default Root;
