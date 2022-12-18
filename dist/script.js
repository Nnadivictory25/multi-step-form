"use strict";var body=document.querySelector("body"),step1=function(){var n=document.querySelector("#submitBtn"),e=document.querySelector("#name"),t=document.querySelector("#email"),s=document.querySelector("#phone"),l=document.querySelector(".btn__ctn"),i=document.querySelector("#form"),a=window.innerHeight,c=(document.querySelector(".test"),[e,t,s]),d=document.querySelector("#errMsgName"),o=document.querySelector("#errMsgEmail"),p=document.querySelector("#errMsgPhone"),r=!1,u=!1,m=!1,v=!1;c.forEach((function(n){n.addEventListener("focus",(function(){screen.width<=750&&(l.style.display="none",i.style.position="absolute")})),n.addEventListener("keyup",(function(){window.innerHeight===a&&(l.style.display="block")})),n.addEventListener("blur",(function(){l.style.display="block"}))})),window.addEventListener("resize",(function(n){window.innerHeight===a?l.style.display="block":l.style.display="none"}));var g=function(){v=![r,u,m].includes(!1)};n.addEventListener("click",(function(n){n.preventDefault(),""==e.value?(r=!1,g(),d.textContent="This field is required",setTimeout((function(){d.textContent=""}),2e3)):(r=!0,g()),""==t.value?(u=!1,g(),o.textContent="This field is required",setTimeout((function(){o.textContent=""}),2e3)):t.value.includes("@")&&t.value.includes(".")?(u=!0,g()):(u=!1,g(),o.textContent="Enter a valid email address",setTimeout((function(){o.textContent=""}),2e3)),""==s.value?(m=!1,g(),p.textContent="This field is required",setTimeout((function(){p.textContent=""}),2e3)):(m=!0,g()),1==v?step2():console.log("Not complete")}))},step2=function(){console.log("step 2 initialized");body.innerHTML='\n    \x3c!-- side navbar for desktop --\x3e\n    <aside class="desktop__navbar hide-for-mobile pt-8 ml-5 fade-in">\n      <div class="steps__ctn mt-8 px-9">\n        <div class="step">\n          <p class="number">1</p>\n          <div class="description__ctn">\n            <p class="step__id ">STEP 1</p>\n            <p class="description uppercase">\n              YOUR INFO\n            </p>\n          </div>\n        </div>\n        <div class="step">\n          <p class="number active">2</p>\n          <div class="description__ctn">\n            <p class="step__id">STEP 2</p>\n            <p class="description uppercase">\n              Select plan\n            </p>\n          </div>\n        </div>\n        <div class="step">\n          <p class="number">3</p>\n          <div class="description__ctn">\n            <p class="step__id">STEP 3</p>\n            <p class="description uppercase">\n              Add-ons\n            </p>\n          </div>\n        </div>\n        <div class="step">\n          <p class="number">4</p>\n          <div class="description__ctn">\n            <p class="step__id">STEP 4</p>\n            <p class="description uppercase">\n              SUMMARY\n            </p>\n          </div>\n        </div>\n      </div>\n    </aside>\n\n    \x3c!-- top navbar for mobile --\x3e\n    <div class="mobile__nav hide-for-desktop fade-in">\n      <div class="steps__ctn container flex justify-center pt-9 mx-auto gap-x-5 px-11">\n        <p>1</p>\n        <p class="active">2</p>\n        <p>3</p>\n        <p>4</p>\n      </div>\n    </div>\n\n\n\n    <main class="lg:w-1/2 self-start my-11 pt-4 fade-in">\n\n      <div id="plans" class=" plans form fixed z-40 top-[6.45rem] inset-x-0 mx-auto rounded-md lg:relative px-7 py-6 lg:top-0 lg:py-2">\n        <div class="plans__header">\n            <h1 class="text-3xl font-bold py-1 lg:text-4xl"> Select your plan</h1>\n            <p class="description text-lg py-0">\n                You have the option of monthly or yearly billing.\n              </p>\n        </div>\n\n        <div class="plans__ctn lg:mt-11 mt-4 lg:flex lg:gap-x-5">\n            \n            <div class="plans__ctn--card lg:w-1/3 sm:w-full flex lg:items-start items-center lg:flex-col py-4 my-3 lg:gap-y-14 gap-x-5 lg:py-5 relative px-6">\n                <div class="plans__ctn--card__Img">\n                    <img class="w-12" src="/assets/images/icon-arcade.svg" alt="arcade plan.jpg">\n                </div>\n                <div class="plans__ctn--card__header">\n                    <h3 class="text-lg font-semibold">Arcade</h3>\n                    <p class="text-gray-400 font-medium">$9/mo</p>\n                    <p class="font-medium"></p>\n                </div>\n                <input class="invisible absolute" type="checkbox" name="arcade" checked id="arcadeChkBox">\n            </div>\n\n            <div class="plans__ctn--card lg:w-1/3 sm:w-full flex lg:items-start items-center lg:flex-col py-4 my-3 lg:gap-y-14 gap-x-5 lg:py-5 relative px-6">\n                <div class="plans__ctn--card__Img">\n                    <img class="w-12" src="/assets/images/icon-advanced.svg" alt="advanced plan.jpg">\n                </div>\n                <div class="plans__ctn--card__header">\n                    <h3 class="text-lg font-semibold">Advanced</h3>\n                    <p class="text-gray-400 font-medium"> $12/mo</p>\n                    <p class="font-medium"></p>\n                </div>\n                <input class="invisible absolute" type="checkbox" name="advanced" id="advancedChkBox">\n            </div>\n\n            <div class="plans__ctn--card lg:w-1/3 sm:w-full flex lg:items-start items-center lg:flex-col py-4 my-3 lg:gap-y-14 gap-x-5 lg:py-5 relative px-6">\n                <div class="plans__ctn--card__Img">\n                    <img class="w-12" src="/assets/images/icon-pro.svg" alt="arcade plan.jpg">\n                </div>\n                <div class="plans__ctn--card__header">\n                    <h3 class="text-lg font-semibold">Pro</h3>\n                    <p class="text-gray-400 font-medium">$15/mo</p>\n                    <p class="font-medium"></p>\n                </div>\n                <input class="invisible absolute" type="checkbox" name="pro" id="proChkBox">\n            </div>\n\n        </div>\n\n        <div class="plans__subSwitchCtn mt-5 w-full flex justify-center gap-x-5 font-medium py-4 rounded-md">\n            <p class="monthly">Monthly</p>\n            <label class="switch" for="checkbox">\n                <input class="subSwitch" type="checkbox" id="checkbox" />\n                <div class="slider round"></div>\n              </label>\n              <p class="yearly">Yearly</p>\n        </div>\n\n    </div>\n\n      <div class="btn__ctn bg-white w-full h-20 absolute bottom-0 lg:w-1/2">\n        <button id="goBackBtn1" class=" goBackBtn py-3 font-medium absolute z-40 bottom-3 lg:bottom-10 left-5 lg:left-16" type="submit">Go Back</button>\n        <button id="submitBtn" class="rounded-md py-3 px-6 text-white font-medium absolute z-40 bottom-3 lg:bottom-10 right-5 lg:right-16" type="submit">Next Step</button>\n      </div>\n\n    </main>\n\n    '};step1();
//# sourceMappingURL=script.js.map