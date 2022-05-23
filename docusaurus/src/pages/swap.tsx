import "./swap.scss";

import React from "react";

import { Helmet } from "react-helmet";

import Layout from "@theme/Layout";

export default function Swap() {
  const nextData = {
    props: { pageProps: {} },
    page: "/swap",
    query: {},
    buildId: "54f9bf98563b7c6bfd2ae75f5fb28318bcf105dd",
    nextExport: true,
    autoExport: true,
    isFallback: false,
    scriptLoader: [],
  };

  return (
    <Layout title="Hello" description="Hello React Page">
      <Helmet>
        <link rel="preload" href="/_next/static/css/98f8fe567cabb426.css" as="style" />
        <link rel="stylesheet" href="/_next/static/css/98f8fe567cabb426.css" data-n-g="" />
        <script defer="" nomodule="" src="/_next/static/chunks/polyfills-5cd94c89d3acac5f.js"></script>
        <script src="/_next/static/chunks/webpack-60100ddd931b7b72.js" defer=""></script>
        <script src="/_next/static/chunks/framework-75db3117d1377048.js" defer=""></script>
        <script src="/_next/static/chunks/main-deb732c9f81f04c3.js" defer=""></script>
        <script src="/_next/static/chunks/pages/_app-fe8d35b5aeb3f36a.js" defer=""></script>
        <script src="/_next/static/chunks/241-8adc3fbfcc295ec3.js" defer=""></script>
        <script src="/_next/static/chunks/143-94e38f626f66b587.js" defer=""></script>
        <script src="/_next/static/chunks/41-93b5790e12fb11d5.js" defer=""></script>
        <script src="/_next/static/chunks/907-0f51d9addcd81740.js" defer=""></script>
        <script src="/_next/static/chunks/505-52de6470515364df.js" defer=""></script>
        <script src="/_next/static/chunks/pages/swap-d734afa59d6bfe35.js" defer=""></script>
        <script src="/_next/static/54f9bf98563b7c6bfd2ae75f5fb28318bcf105dd/_buildManifest.js" defer=""></script>
        <script src="/_next/static/54f9bf98563b7c6bfd2ae75f5fb28318bcf105dd/_ssgManifest.js" defer=""></script>
        <script src="/_next/static/54f9bf98563b7c6bfd2ae75f5fb28318bcf105dd/_middlewareManifest.js" defer=""></script>
        <script id="__NEXT_DATA__" type="application/json">
          {JSON.stringify(nextData)}
        </script>
      </Helmet>

      <section>
        <div id="__next">
          <div className="app">
            <div
              style={{
                padding:
                  "env(safe-area-inset-top, 0px) env(safe-area-inset-right, 0px) env(safe-area-inset-bottom, 0px)\n              env(safe-area-inset-left, 0px)",
                position: "relative",
                display: "grid",
                gridTemplate:
                  "'d d d' auto\n              'a a a' auto\n              'b c c' 1fr\n              'b c c' 1fr / auto 1fr 1fr",
                overflow: "hidden",
                willChange: "opacity",
              }}
              className="w-screen mobile:w-full h-screen mobile:h-full"
            >
              <div className="grid-area-d"></div>
              <nav className="select-none text-white px-12 py-4 mobile:px-5 mobile:py-3 transition-all grid-area-a">
                <div className="Row flex justify-between items-center">
                  <span tabIndex={0} className="Link clickable text-link-color hover:underline underline-offset-1">
                    <img className="Image cursor-pointer" src="/logo/logo-with-text.svg" alt="logo-with-text" />
                  </span>
                  <div className="Row flex gap-8 items-center">
                    <div>
                      <div className="PopoverButton">
                        <div className="Icon grid h-[max-content] w-[max-content] text-[#ABC4FF] opacity-60 hover:opacity-75 clickable clickable-filter-effect clickable-mask-offset-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="h-6 w-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="PopoverButton">
                        <button className="Button px-4 py-2.5 rounded-xl mobile:rounded-lg whitespace-nowrap appearance-none inline-block font-medium bg-formkit-thumb text-formkit-thumb-text-normal clickable clickable-filter-effect frosted-glass frosted-glass-teal">
                          <div className="Row flex items-center gap-3 my-0.5">
                            <div className="Icon grid h-[max-content] w-[max-content]">
                              <img src="/icons/msic-wallet.svg" alt="msic-wallet" className="h-4 w-4" />
                            </div>
                            <div className="text-sm font-medium text-[#39D0D8]">Connect Wallet</div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
              <div className="Col flex flex-col h-full overflow-y-auto w-56 mobile:w-48 mobile:rounded-tr-2xl mobile:rounded-br-2xl flex-container grid-area-b">
                <div className="Col flex-col grid grid-rows-[2fr,1fr,auto] flex-1 overflow-hidden">
                  <div className="shrink overflow-y-auto min-h-[120px] py-4 space-y-1 mobile:py-0 px-2 mr-2 mobile:ml-2 mb-2">
                    <a
                      tabIndex={0}
                      rel="nofollow noopener noreferrer"
                      target="_blank"
                      className="Link clickable group block py-2.5 mobile:py-2 px-4 mobile:px-1 rounded-xl mobile:rounded-lg hover:bg-[rgba(57,208,216,0.05)]"
                      href="https://dex.raydium.io/"
                    >
                      <div className="Row flex items-center">
                        <div className="grid bg-gradient-to-br from-[rgba(57,208,216,0.2)] to-[rgba(57,208,216,0)] rounded-lg p-1.5 mr-3">
                          <div className="Icon grid h-[max-content] w-[max-content]">
                            <img src="/icons/entry-icon-trade.svg" alt="entry-icon-trade" className="h-4 w-4" />
                          </div>
                        </div>
                        <div className="Row flex grow items-center justify-between text-[#ACE3E5] text-sm mobile:text-xs font-medium">
                          <div>Trading</div>
                          <div className="Icon inline-grid h-[max-content] w-[max-content] opacity-80">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              aria-hidden="true"
                              className="h-4 w-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a>
                    <span
                      tabIndex={0}
                      className="Link clickable group block py-2.5 mobile:py-2 px-4 mobile:px-1 rounded-xl mobile:rounded-lg hover:bg-[rgba(57,208,216,0.05)] bg-[rgba(57,208,216,0.1)]"
                    >
                      <div className="Row flex items-center">
                        <div className="grid bg-gradient-to-br from-[rgba(57,208,216,0.2)] to-[rgba(57,208,216,0)] rounded-lg p-1.5 mr-3">
                          <div className="Icon grid h-[max-content] w-[max-content]">
                            <img src="/icons/entry-icon-swap.svg" alt="entry-icon-swap" className="h-4 w-4" />
                          </div>
                        </div>
                        <div className="Row flex grow items-center justify-between text-[rgba(57,208,216,1)] text-sm mobile:text-xs font-medium">
                          <div>Swap</div>
                        </div>
                      </div>
                    </span>
                    <span
                      tabIndex={0}
                      className="Link clickable group block py-2.5 mobile:py-2 px-4 mobile:px-1 rounded-xl mobile:rounded-lg hover:bg-[rgba(57,208,216,0.05)]"
                    >
                      <div className="Row flex items-center">
                        <div className="grid bg-gradient-to-br from-[rgba(57,208,216,0.2)] to-[rgba(57,208,216,0)] rounded-lg p-1.5 mr-3">
                          <div className="Icon grid h-[max-content] w-[max-content]">
                            <img src="/icons/entry-icon-liquidity.svg" alt="entry-icon-liquidity" className="h-4 w-4" />
                          </div>
                        </div>
                        <div className="Row flex grow items-center justify-between text-[#ACE3E5] text-sm mobile:text-xs font-medium">
                          <div>Liquidity</div>
                        </div>
                      </div>
                    </span>
                    <span
                      tabIndex={0}
                      className="Link clickable group block py-2.5 mobile:py-2 px-4 mobile:px-1 rounded-xl mobile:rounded-lg hover:bg-[rgba(57,208,216,0.05)]"
                    >
                      <div className="Row flex items-center">
                        <div className="grid bg-gradient-to-br from-[rgba(57,208,216,0.2)] to-[rgba(57,208,216,0)] rounded-lg p-1.5 mr-3">
                          <div className="Icon grid h-[max-content] w-[max-content]">
                            <img src="/icons/entry-icon-pools.svg" alt="entry-icon-pools" className="h-4 w-4" />
                          </div>
                        </div>
                        <div className="Row flex grow items-center justify-between text-[#ACE3E5] text-sm mobile:text-xs font-medium">
                          <div>Pools</div>
                        </div>
                      </div>
                    </span>
                    <span
                      tabIndex={0}
                      className="Link clickable group block py-2.5 mobile:py-2 px-4 mobile:px-1 rounded-xl mobile:rounded-lg hover:bg-[rgba(57,208,216,0.05)]"
                    >
                      <div className="Row flex items-center">
                        <div className="grid bg-gradient-to-br from-[rgba(57,208,216,0.2)] to-[rgba(57,208,216,0)] rounded-lg p-1.5 mr-3">
                          <div className="Icon grid h-[max-content] w-[max-content]">
                            <img src="/icons/entry-icon-farms.svg" alt="entry-icon-farms" className="h-4 w-4" />
                          </div>
                        </div>
                        <div className="Row flex grow items-center justify-between text-[#ACE3E5] text-sm mobile:text-xs font-medium">
                          <div>Farms</div>
                        </div>
                      </div>
                    </span>
                    <span
                      tabIndex={0}
                      className="Link clickable group block py-2.5 mobile:py-2 px-4 mobile:px-1 rounded-xl mobile:rounded-lg hover:bg-[rgba(57,208,216,0.05)]"
                    >
                      <div className="Row flex items-center">
                        <div className="grid bg-gradient-to-br from-[rgba(57,208,216,0.2)] to-[rgba(57,208,216,0)] rounded-lg p-1.5 mr-3">
                          <div className="Icon grid h-[max-content] w-[max-content]">
                            <img src="/icons/entry-icon-staking.svg" alt="entry-icon-staking" className="h-4 w-4" />
                          </div>
                        </div>
                        <div className="Row flex grow items-center justify-between text-[#ACE3E5] text-sm mobile:text-xs font-medium">
                          <div>Staking</div>
                        </div>
                      </div>
                    </span>
                    <a
                      tabIndex={0}
                      rel="nofollow noopener noreferrer"
                      target="_blank"
                      className="Link clickable group block py-2.5 mobile:py-2 px-4 mobile:px-1 rounded-xl mobile:rounded-lg hover:bg-[rgba(57,208,216,0.05)]"
                      href="https://v1.raydium.io/acceleRaytor/"
                    >
                      <div className="Row flex items-center">
                        <div className="grid bg-gradient-to-br from-[rgba(57,208,216,0.2)] to-[rgba(57,208,216,0)] rounded-lg p-1.5 mr-3">
                          <div className="Icon grid h-[max-content] w-[max-content]">
                            <img
                              src="/icons/entry-icon-acceleraytor.svg"
                              alt="entry-icon-acceleray"
                              className="h-4 w-4"
                            />
                          </div>
                        </div>
                        <div className="Row flex grow items-center justify-between text-[#ACE3E5] text-sm mobile:text-xs font-medium">
                          <div>AcceleRaytor</div>
                          <div className="Icon inline-grid h-[max-content] w-[max-content] opacity-80">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              aria-hidden="true"
                              className="h-4 w-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      tabIndex={0}
                      rel="nofollow noopener noreferrer"
                      target="_blank"
                      className="Link clickable group block py-2.5 mobile:py-2 px-4 mobile:px-1 rounded-xl mobile:rounded-lg hover:bg-[rgba(57,208,216,0.05)]"
                      href="https://dropzone.raydium.io/"
                    >
                      <div className="Row flex items-center">
                        <div className="grid bg-gradient-to-br from-[rgba(57,208,216,0.2)] to-[rgba(57,208,216,0)] rounded-lg p-1.5 mr-3">
                          <div className="Icon grid h-[max-content] w-[max-content]">
                            <img src="/icons/entry-icon-dropzone.svg" alt="entry-icon-dropzone" className="h-4 w-4" />
                          </div>
                        </div>
                        <div className="Row flex grow items-center justify-between text-[#ACE3E5] text-sm mobile:text-xs font-medium">
                          <div>Dropzone</div>
                          <div className="Icon inline-grid h-[max-content] w-[max-content] opacity-80">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              aria-hidden="true"
                              className="h-4 w-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      tabIndex={0}
                      rel="nofollow noopener noreferrer"
                      target="_blank"
                      className="Link clickable group block py-2.5 mobile:py-2 px-4 mobile:px-1 rounded-xl mobile:rounded-lg hover:bg-[rgba(57,208,216,0.05)]"
                      href="https://nft.raydium.io/"
                    >
                      <div className="Row flex items-center">
                        <div className="grid bg-gradient-to-br from-[rgba(57,208,216,0.2)] to-[rgba(57,208,216,0)] rounded-lg p-1.5 mr-3">
                          <div className="Icon grid h-[max-content] w-[max-content]">
                            <img src="/icons/entry-icon-nft.svg" alt="entry-icon-nft" className="h-4 w-4" />
                          </div>
                        </div>
                        <div className="Row flex grow items-center justify-between text-[#ACE3E5] text-sm mobile:text-xs font-medium">
                          <div>NFT</div>
                          <div className="Icon inline-grid h-[max-content] w-[max-content] opacity-80">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              aria-hidden="true"
                              className="h-4 w-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="Col flex flex-col mobile:h-[180px] overflow-scroll no-native-scrollbar">
                    <div className="mx-8 border-b border-[rgba(57,208,216,0.16)] my-2 mobile:my-1"></div>
                    <div className="flex-1 overflow-auto no-native-scrollbar mt-2">
                      <div>
                        <div className="PopoverButton">
                          <div className="block py-4 mobile:py-3 px-8 pl-6 mobile:px-5 hover:bg-[rgba(57,208,216,0.1)] active:bg-[rgba(41,157,163,0.3)] cursor-pointer group">
                            <div className="Row flex items-center w-full mobile:justify-center">
                              <div className="h-4 w-4 mobile:w-3 mobile:h-3 grid place-items-center mr-3">
                                <div
                                  className="w-1.5 h-1.5 mobile:w-1 mobile:h-1 bg-[#2de680] text-[#2de680] rounded-full"
                                  style={{ boxShadow: "0 0 6px 1px currentColor" }}
                                ></div>
                              </div>
                              <span className="text-[rgba(172,227,229)] text-sm mobile:text-xs font-medium flex-grow overflow-ellipsis overflow-hidden">
                                --
                              </span>
                              <div className="Icon grid h-[max-content] w-[max-content]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="2"
                                  stroke="currentColor"
                                  aria-hidden="true"
                                  className="h-4 w-4 text-[#ACE3E6]"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="PopoverButton">
                          <span className="block py-3 mobile:py-3 px-8 pl-6 mobile:px-5 hover:bg-[rgba(57,208,216,0.1)] active:bg-[rgba(41,157,163,0.3)] cursor-pointer group">
                            <div className="Row flex items-center w-full mobile:justify-center">
                              <div className="Icon grid h-[max-content] w-[max-content] mr-3 text-[rgba(57,208,216,1)]">
                                <img src="/icons/msic-settings.svg" alt="msic-settings" className="h-4 w-4" />
                              </div>
                              <span className="text-[#ACE3E5] text-sm mobile:text-xs font-medium flex-grow">
                                Settings
                              </span>
                              <div className="Icon grid h-[max-content] w-[max-content]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="2"
                                  stroke="currentColor"
                                  aria-hidden="true"
                                  className="h-4 w-4 text-[#ACE3E6]"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                                </svg>
                              </div>
                            </div>
                          </span>
                        </div>
                      </div>
                      <div>
                        <div className="PopoverButton">
                          <span className="block py-3 mobile:py-3 px-8 pl-6 mobile:px-5 hover:bg-[rgba(57,208,216,0.1)] active:bg-[rgba(41,157,163,0.3)] cursor-pointer group">
                            <div className="Row flex items-center w-full mobile:justify-center">
                              <div className="Icon grid h-[max-content] w-[max-content] mr-3 text-[rgba(57,208,216,1)]">
                                <img src="/icons/msic-community.svg" alt="msic-community" className="h-4 w-4" />
                              </div>
                              <span className="text-[#ACE3E5] text-sm mobile:text-xs font-medium flex-grow">
                                Community
                              </span>
                              <div className="Icon grid h-[max-content] w-[max-content]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="2"
                                  stroke="currentColor"
                                  aria-hidden="true"
                                  className="h-4 w-4 text-[#ACE3E6]"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                                </svg>
                              </div>
                            </div>
                          </span>
                        </div>
                      </div>
                      <a
                        tabIndex={0}
                        rel="nofollow noopener noreferrer"
                        target="_blank"
                        className="Link clickable block py-3 mobile:py-3 px-8 pl-6 mobile:px-5 hover:bg-[rgba(57,208,216,0.1)] active:bg-[rgba(41,157,163,0.3)] cursor-pointer group"
                        href="https://raydium.gitbook.io/raydium/"
                      >
                        <div className="Row flex items-center w-full mobile:justify-center">
                          <div className="Icon grid h-[max-content] w-[max-content] mr-3 text-[rgba(57,208,216,1)]">
                            <img src="/icons/msic-docs.svg" alt="msic-docs" className="h-4 w-4" />
                          </div>
                          <span className="text-[#ACE3E5] text-sm mobile:text-xs font-medium flex-grow group-hover:text-[rgba(57,208,216,1)]">
                            Docs
                          </span>
                        </div>
                      </a>
                      <a
                        tabIndex={0}
                        rel="nofollow noopener noreferrer"
                        target="_blank"
                        className="Link clickable block py-3 mobile:py-3 px-8 pl-6 mobile:px-5 hover:bg-[rgba(57,208,216,0.1)] active:bg-[rgba(41,157,163,0.3)] cursor-pointer group"
                        href="https://v1.raydium.io/swap"
                      >
                        <div className="Row flex items-center w-full mobile:justify-center">
                          <div className="Icon grid h-[max-content] w-[max-content] mr-3 text-[rgba(57,208,216,1)]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              aria-hidden="true"
                              className="h-4 w-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              ></path>
                            </svg>
                          </div>
                          <span className="text-[#ACE3E5] text-sm mobile:text-xs font-medium flex-grow group-hover:text-[rgba(57,208,216,1)]">
                            Raydium V1
                          </span>
                        </div>
                      </a>
                      <a
                        tabIndex={0}
                        rel="nofollow noopener noreferrer"
                        target="_blank"
                        className="Link clickable block py-3 mobile:py-3 px-8 pl-6 mobile:px-5 hover:bg-[rgba(57,208,216,0.1)] active:bg-[rgba(41,157,163,0.3)] cursor-pointer group"
                        href="https://forms.gle/DvUS4YknduBgu2D7A"
                      >
                        <div className="Row flex items-center w-full mobile:justify-center">
                          <div className="Icon grid h-[max-content] w-[max-content] mr-3 text-[rgba(57,208,216,1)]">
                            <img src="/icons/misc-feedback.svg" alt="misc-feedback" className="h-4 w-4" />
                          </div>
                          <span className="text-[#ACE3E5] text-sm mobile:text-xs font-medium flex-grow group-hover:text-[rgba(57,208,216,1)]">
                            Feedback
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="text-sm m-2 opacity-20 hover:opacity-100 transition font-medium text-[#abc4ff] whitespace-nowrap"></div>
                </div>
              </div>
              <main
                className="PageLayoutContent relative isolate flex-container grid-area-c bg-gradient-to-b from-[#0c0927] to-[#110d36] rounded-tl-3xl mobile:rounded-none p-12 mobile:py-2 mobile:px-3"
                style={{ contentVisibility: "auto", overflowX: "hidden", overflowY: "scroll" }}
              >
                <div className="Row flex justify-center mb-12 mobile:mb-2">
                  <div
                    className="flex rounded-full p-1"
                    style={{
                      background:
                        "linear-gradient(140.14deg, rgba(0, 182, 191, 0.15) 0%, rgba(27, 22, 89, 0.1) 86.61%), linear-gradient(321.82deg, #18134d 0%, #1b1659 100%)",
                    }}
                    id="headlessui-radiogroup-:R1n5m:"
                    role="radiogroup"
                  >
                    <div
                      className="cursor-pointer flex"
                      id="headlessui-radiogroup-option-:R1ln5m:"
                      role="radio"
                      aria-checked="true"
                      tabIndex={0}
                    >
                      <div
                        className="grid place-items-center grid min-w-[96px] mobile:min-w-[72px] px-4 h-9 mobile:h-7 rounded-full place-items-center text-sm mobile:text-xs font-medium text-white"
                        style={{
                          background:
                            "linear-gradient(245.22deg, rgb(218, 46, 239), rgb(43, 106, 255), rgb(57, 208, 216))",
                          backgroundSize: "400% 100%",
                          backgroundPosition: "0%",
                        }}
                      >
                        Swap
                      </div>
                    </div>
                    <div
                      className="cursor-pointer flex"
                      id="headlessui-radiogroup-option-:R2ln5m:"
                      role="radio"
                      aria-checked="false"
                      tabIndex="-1"
                    >
                      <div className="grid place-items-center grid min-w-[96px] mobile:min-w-[72px] px-4 h-9 mobile:h-7 rounded-full place-items-center text-sm mobile:text-xs font-medium text-[#ABC4FF]">
                        Liquidity
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="w-[min(456px,100%)] self-center cyberpunk-bg-light"
                  style={{
                    borderRadius: "21px",
                    padding: "1px",
                    backgroundImage: "linear-gradient(246deg, #da2eef 7.97%, #2b6aff 49.17%, #39d0d8 92.1%)",
                  }}
                >
                  <div
                    className="Card rounded-3xl py-8 pt-4 px-6 mobile:py-5 mobile:px-3"
                    style={{
                      background:
                        "linear-gradient(140.14deg, rgba(0, 182, 191, 0.15) 0%, rgba(27, 22, 89, 0.1) 86.61%),\n                    linear-gradient(321.82deg, #18134d 0%, #1b1659 100%)",
                    }}
                  >
                    <div className="space-y-5 mt-5">
                      <div
                        className="Row flex flex-col bg-[#141041] cursor-text rounded-xl py-3 px-6 mobile:px-4"
                        tabIndex={0}
                      >
                        <div className="Row flex justify-between mb-2 mobile:mb-4">
                          <div className="text-xs mobile:text-2xs text-[rgba(171,196,255,.5)]">From</div>
                          <div className="text-xs mobile:text-2xs justify-self-end text-[rgba(171,196,255,.5)] clickable no-clicable-transform-effect clickable-filter-effect">
                            Balance: (wallet not connected)
                          </div>
                        </div>
                        <div className="Row flex col-span-full items-center">
                          <div className="Row flex items-center gap-1.5 clickable clickable-mask-offset-2">
                            <div className="text-[rgb(171,196,255)] font-medium text-base flex-grow mobile:text-sm whitespace-nowrap">
                              --
                            </div>
                            <div className="Icon grid h-[max-content] w-[max-content] text-[#ABC4FF]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="h-3 w-3"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="my-1 mx-4 mobile:my-0 mobile:mx-2 border-r border-[rgba(171,196,255,0.5)] self-stretch"></div>
                          <div className="Row flex justify-between flex-grow-2">
                            <div className="Row flex gap-px items-center mr-2">
                              <button className="Button mobile:rounded-lg whitespace-nowrap appearance-none inline-block opacity-50 cursor-not-allowed py-0.5 px-1.5 rounded text-[rgba(171,196,255,.5)] font-bold bg-[#1B1659] bg-opacity-80 text-xs mobile:text-2xs transition">
                                Max
                              </button>
                              <button className="Button mobile:rounded-lg whitespace-nowrap appearance-none inline-block opacity-50 cursor-not-allowed py-0.5 px-1.5 rounded text-[rgba(171,196,255,.5)] font-bold bg-[#1B1659] bg-opacity-80 text-xs mobile:text-2xs transition">
                                Half
                              </button>
                            </div>
                            <div className="Row flex Input cursor-not-allowed items-center font-medium text-lg text-white flex-grow w-full">
                              <div className="flex-initial"></div>
                              <div className="flex-grow flex-shrink">
                                <input
                                  autoComplete="off"
                                  type="number"
                                  className="bg-transparent border-none w-full outline-none block text-right mobile:text-sm font-medium text-white"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-xs mobile:text-2xs text-[rgba(171,196,255,.5)] invisible text-ellipsis overflow-hidden text-right">
                          --
                        </div>
                      </div>
                      <div className="relative h-8">
                        <div className="Row flex absolute items-center transition-all left-1/2 -translate-x-1/2">
                          <div className="Icon grid h-[max-content] w-[max-content] p-2 frosted-glass frosted-glass-teal rounded-full mr-4 clickable select-none transition">
                            <img src="/icons/msic-swap.svg" alt="msic-swap" className="h-4 w-4" />
                          </div>
                        </div>
                        <div className="absolute right-0">
                          <div>
                            <div className="PopoverButton">
                              <div className="w-full h-full rounded clickable clickable-filter-effect">
                                <svg width="36" height="36" viewBox="0 0 36 36">
                                  <circle
                                    r="9"
                                    cx="50%"
                                    cy="50%"
                                    fill="transparent"
                                    style={{ strokeWidth: "3", stroke: "#ffffff2e" }}
                                  ></circle>
                                  <circle
                                    id="bar"
                                    r="9"
                                    cx="50%"
                                    cy="50%"
                                    fill="transparent"
                                    strokeDasharray="56.548667764616276"
                                    strokeDashoffset="56.548667764616276"
                                    style={{
                                      strokeWidth: "3",
                                      stroke: "#92e1ffd9",
                                      transform: "rotate(-90deg)",
                                      transformOrigin: "center",
                                      strokeLinecap: "round",
                                      transition: "200ms",
                                    }}
                                  ></circle>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="Row flex flex-col bg-[#141041] cursor-text rounded-xl py-3 px-6 mobile:px-4"
                        tabIndex={0}
                      >
                        <div className="Row flex justify-between mb-2 mobile:mb-4">
                          <div className="text-xs mobile:text-2xs text-[rgba(171,196,255,.5)]">To</div>
                          <div className="text-xs mobile:text-2xs justify-self-end text-[rgba(171,196,255,.5)]">
                            Balance: (wallet not connected)
                          </div>
                        </div>
                        <div className="Row flex col-span-full items-center">
                          <div className="Row flex items-center gap-1.5 clickable clickable-mask-offset-2">
                            <div className="text-[rgb(171,196,255)] font-medium text-base flex-grow mobile:text-sm whitespace-nowrap">
                              --
                            </div>
                            <div className="Icon grid h-[max-content] w-[max-content] text-[#ABC4FF]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="h-3 w-3"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="my-1 mx-4 mobile:my-0 mobile:mx-2 border-r border-[rgba(171,196,255,0.5)] self-stretch"></div>
                          <div className="Row flex justify-between flex-grow-2">
                            <div className="Row flex gap-px items-center mr-2">
                              <button className="Button mobile:rounded-lg whitespace-nowrap appearance-none inline-block opacity-50 cursor-not-allowed py-0.5 px-1.5 rounded text-[rgba(171,196,255,.5)] font-bold bg-[#1B1659] bg-opacity-80 text-xs mobile:text-2xs transition">
                                Max
                              </button>
                              <button className="Button mobile:rounded-lg whitespace-nowrap appearance-none inline-block opacity-50 cursor-not-allowed py-0.5 px-1.5 rounded text-[rgba(171,196,255,.5)] font-bold bg-[#1B1659] bg-opacity-80 text-xs mobile:text-2xs transition">
                                Half
                              </button>
                            </div>
                            <div className="Row flex Input cursor-not-allowed items-center font-medium text-lg text-white flex-grow w-full">
                              <div className="flex-initial"></div>
                              <div className="flex-grow flex-shrink">
                                <input
                                  autoComplete="off"
                                  type="number"
                                  className="bg-transparent border-none w-full outline-none block text-right mobile:text-sm font-medium text-white"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-xs mobile:text-2xs text-[rgba(171,196,255,.5)] invisible text-ellipsis overflow-hidden text-right">
                          --
                        </div>
                      </div>
                    </div>
                    <button className="Button px-4 py-2.5 rounded-xl mobile:rounded-lg whitespace-nowrap appearance-none inline-block font-medium bg-formkit-thumb text-formkit-thumb-text-normal clickable clickable-filter-effect w-full frosted-glass-teal mt-5">
                      Connect Wallet
                    </button>
                  </div>
                </div>
                <div
                  className="Card rounded-3xl flex invisible flex-col mt-10 p-2 w-[min(456px,100%)] self-center"
                  style={{
                    background:
                      "linear-gradient(140.14deg, rgba(0, 182, 191, 0.15) 0%, rgba(27, 22, 89, 0.1) 86.61%),\n                  linear-gradient(321.82deg, #18134d 0%, #1b1659 100%)",
                  }}
                >
                  <div></div>
                  <div></div>
                </div>
              </main>
            </div>
            <div id="popover-stack" className="fixed z-popover inset-0 self-pointer-events-none"></div>
            <div id="drawer-stack" className="fixed z-popover inset-0 self-pointer-events-none"></div>
            <div
              className="Col flex flex-col items-end mobile:items-stretch pointer-events-none"
              style={{ position: "fixed", right: "0", bottom: "0", top: "unset", left: "unset", zIndex: "9999" }}
            ></div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
