"use strict";var body=document.querySelector("body"),step1Validated=!1,nameInput=document.querySelector("#name"),email=document.querySelector("#email"),phone=document.querySelector("#phone"),personalInputs=[nameInput,email,phone],screenHeight=window.innerHeight,btnCtn=document.querySelector(".btn__ctn"),formData={},step1=function(){var e=document.querySelector("#submitBtn"),n=document.querySelector("#form"),t=(document.querySelector(".test"),document.querySelector("#errMsgName")),a=document.querySelector("#errMsgEmail"),s=document.querySelector("#errMsgPhone"),l=!1,d=!1,c=!1;personalInputs.forEach((function(e){e.addEventListener("focus",(function(){screen.width<=750&&(btnCtn.style.display="none",n.style.position="absolute")})),e.addEventListener("keyup",(function(){window.innerHeight===screenHeight&&(btnCtn.style.display="block")})),e.addEventListener("blur",(function(){btnCtn.style.display="block"}))})),window.addEventListener("resize",(function(e){window.innerHeight===screenHeight?btnCtn.style.display="block":btnCtn.style.display="none"}));var i=function(){step1Validated=![l,d,c].includes(!1)};e.addEventListener("click",(function(e){e.preventDefault(),""==nameInput.value?(l=!1,i(),t.textContent="This field is required",setTimeout((function(){t.textContent=""}),2e3)):(l=!0,i()),""==email.value?(d=!1,i(),a.textContent="This field is required",setTimeout((function(){a.textContent=""}),2e3)):email.value.includes("@")&&email.value.includes(".")?(d=!0,i()):(d=!1,i(),a.textContent="Enter a valid email address",setTimeout((function(){a.textContent=""}),2e3)),""==phone.value?(c=!1,i(),s.textContent="This field is required",setTimeout((function(){s.textContent=""}),2e3)):(c=!0,i()),step1Validated?(formData={name:nameInput.value,email:email.value,phone:phone.value},console.log(formData),step2()):console.log("Not complete")}))},yearlySelected=!1,step2Validated=!1,prices=[9,12,15],multiplied=!1,updateUIplans=function(){for(var e=[document.querySelector("#arcadePrice"),document.querySelector("#advancedPrice"),document.querySelector("#proPrice")],n=0;n<e.length;n++)e[n].textContent="$".concat(prices[n],"/mo")},handleCheck2=function(){console.log("handlecheck 2 active");var e=document.querySelector(".yearly"),n=document.querySelector(".monthly"),t=document.querySelector(".subSwitch");1==yearlySelected&&(t.checked=!0,multiplied=!0,updateUIplans(),n.classList.add("g"),e.classList.add("blue"))},handleCheck=function(e){var n=document.querySelector(".yearly"),t=document.querySelector(".monthly");1==e.checked?(yearlySelected=!0,prices=prices.map((function(e){return 10*e})),multiplied=!0,updateUIplans(),t.classList.add("g"),n.classList.add("blue")):(yearlySelected=!1,multiplied&&(prices=prices.map((function(e){return e/10})),multiplied=!1,updateUIplans()),t.classList.remove("g"),n.classList.remove("blue"))},arcadeChecked=!1,advancedChecked=!1,proChecked=!1,plansCheckedArr=[arcadeChecked,advancedChecked,proChecked],handleSelectedPlan=function(e,n,t){e.classList.remove("hover"),e.classList.remove("active"),n.checked?n.checked&&(e.classList.remove("active"),n.checked=!n.checked,console.log(n.checked),"arcade"==t&&(arcadeChecked=!1,updateCheckedPlans()),"advanced"==t&&(advancedChecked=!1,updateCheckedPlans()),"pro"==t&&(proChecked=!1,updateCheckedPlans()),e.addEventListener("mouseleave",(function(){return e.classList.add("hover")}))):(e.classList.add("active"),n.checked=!n.checked,"arcade"==t&&(arcadeChecked=!0,updateCheckedPlans()),"advanced"==t&&(advancedChecked=!0,updateCheckedPlans()),"pro"==t&&(proChecked=!0,updateCheckedPlans()))},updateCheckedPlans=function(){plansCheckedArr=[arcadeChecked,advancedChecked,proChecked]},validatePlansInputs=function(){var e=document.querySelector("#plansErrorMsg");plansCheckedArr.filter((function(e){return 1==e})).length>1?(e.textContent="Select only 1 plan!",step2Validated=!1,setTimeout((function(){e.textContent=""}),2e3)):step2Validated=!0,plansCheckedArr.every((function(e){return 0==e}))&&(e.textContent="Select at least 1 plan!",step2Validated=!1,setTimeout((function(){e.textContent=""}),2e3))},nextFromPlans=function(){validatePlansInputs(),step2Validated?step3():console.log("Not Complete")},nameInputValue="",emailInputValue="",phoneInputValue="",renderButton=function(){document.querySelector(".btn__ctn").innerHTML="\n    <button onclick=\"validateForm2('".concat(nameInputValue,"', '").concat(emailInputValue,"', '").concat(phoneInputValue,'\'); console.log(formData);" id="submitBtn" class="rounded-md py-3 px-6 text-white font-medium absolute z-40 bottom-3 lg:bottom-10 right-5 lg:right-16" type="submit">Next Step</button>\n    ')},handleInput=function(e){var n=window.innerHeight,t=document.querySelector(".btn__ctn");screen.width<=750&&(t.style.display="none",form.style.position="absolute"),e.addEventListener("keyup",(function(){window.innerHeight===n&&(t.style.display="block"),e.setAttribute("value",""),e.removeAttribute("value",""),"name"==e.name&&(nameInputValue=e.value,renderButton()),"email"==e.name&&(emailInputValue=e.value,renderButton()),"phone"==e.name&&(phoneInputValue=e.value,renderButton())})),e.addEventListener("blur",(function(){t.style.display="block"})),window.addEventListener("resize",(function(e){window.innerHeight===n?t.style.display="block":t.style.display="none"}))},nameValid2=!1,emailValid2=!1,phoneValid2=!1,validations2=[nameValid2,emailValid2,phoneValid2],step1Validatedagain=!1,updateValidState2=function(){step1Validatedagain=!(validations2=[nameValid2,emailValid2,phoneValid2]).includes(!1)},validateForm2=function(e,n,t){var a=document.querySelector("#errMsgName"),s=document.querySelector("#errMsgEmail"),l=document.querySelector("#errMsgPhone");""==e?(nameValid2=!1,updateValidState2(),a.textContent="This field is required",setTimeout((function(){a.textContent=""}),2e3)):(nameValid2=!0,updateValidState2()),""==n?(emailValid2=!1,updateValidState2(),s.textContent="This field is required",setTimeout((function(){s.textContent=""}),2e3)):n.includes("@")&&n.includes(".")?(emailValid2=!0,updateValidState2()):(emailValid2=!1,updateValidState2(),s.textContent="Enter a valid email address",setTimeout((function(){s.textContent=""}),2e3)),""==t?(phoneValid2=!1,updateValidState2(),l.textContent="This field is required",setTimeout((function(){l.textContent=""}),2e3)):(phoneValid2=!0,updateValidState2()),step1Validatedagain?(formData={name:e,email:n,phone:t},console.log(formData),step2(),handleCheck2()):console.log("Not complete")},goBacktoStep1=function(){nameInputValue=formData.name,emailInputValue=formData.email,phoneInputValue=formData.phone,console.log(formData),body.innerHTML='\n    \x3c!-- side navbar for desktop --\x3e\n    <aside class="desktop__navbar hide-for-mobile pt-8 ml-5 fade-in">\n      <div class="steps__ctn mt-8 px-9">\n        <div class="step">\n          <p class="number active">1</p>\n          <div class="description__ctn">\n            <p class="step__id ">STEP 1</p>\n            <p class="description uppercase">\n              YOUR INFO\n            </p>\n          </div>\n        </div>\n        <div class="step">\n          <p class="number">2</p>\n          <div class="description__ctn">\n            <p class="step__id">STEP 2</p>\n            <p class="description uppercase">\n              Select plan\n            </p>\n          </div>\n        </div>\n        <div class="step">\n          <p class="number">3</p>\n          <div class="description__ctn">\n            <p class="step__id">STEP 3</p>\n            <p class="description uppercase">\n              Add-ons\n            </p>\n          </div>\n        </div>\n        <div class="step">\n          <p class="number">4</p>\n          <div class="description__ctn">\n            <p class="step__id">STEP 4</p>\n            <p class="description uppercase">\n              SUMMARY\n            </p>\n          </div>\n        </div>\n      </div>\n    </aside>\n\n    \x3c!-- top navbar for mobile --\x3e\n    <div class="mobile__nav hide-for-desktop fade-in">\n      <div class="steps__ctn container flex justify-center pt-9 mx-auto gap-x-5 px-11">\n        <p class="active">1</p>\n        <p>2</p>\n        <p>3</p>\n        <p>4</p>\n      </div>\n    </div>\n\n\n\n    <main class="lg:w-1/2 self-start my-11 pt-4 fade-in">\n\n      <form  id="form" class="form fixed z-40 top-[7rem] inset-x-0 mx-auto rounded-md lg:relative px-7 py-6 lg:top-0 lg:py-2">\n\n        <div class="form__header">\n          <h1 class="text-3xl font-bold py-1 lg:text-4xl">Personal info</h1>\n          <p class="description text-lg py-0">\n            Please provide your name, email address, and phone number.\n          </p>\n        </div>\n\n        <div class="label flex justify-between lg:font-medium mt-5">\n          <p>Name</p>\n          <p id="errMsgName" class="errorMsg"></p>\n        </div>\n        <input onfocus="handleInput(this)" class="w-full py-3 px-4 mb-4 font-medium" type="text" value=\''.concat(nameInputValue,'\' placeholder="e.g. Stephen King" name="name" id="name">\n\n        \n        <div class="label flex justify-between lg:font-medium mt-5">\n          <p>Email Address</p>\n          <p id="errMsgEmail" class="errorMsg"></p>\n        </div>\n        <input onfocus="handleInput(this)" class="w-full py-3 px-4 mb-4 font-medium" value=').concat(emailInputValue,' type="email" placeholder="e.g. stephenking@lorem.com" name="email" id="email">\n\n        \n        <div class="label flex justify-between lg:font-medium mt-5">\n          <p>Phone Number</p>\n          <p id="errMsgPhone" class="errorMsg"></p>\n        </div>\n        <input  onfocus="handleInput(this)" class="w-full py-3 px-4 mb-4 font-medium" type="number" value=').concat(phoneInputValue,' placeholder="e.g. +1 234 567 890" name="phone" id="phone">\n\n\n      </form>\n\n      <div class="btn__ctn bg-white w-full z-40 h-20 absolute bottom-0 lg:w-1/2">\n        <button onclick="validateForm2(\'').concat(nameInputValue,"', '").concat(emailInputValue,"', '").concat(phoneInputValue,'\'); console.log(formData);" id="submitBtn" class="rounded-md py-3 px-6 text-white font-medium absolute z-40 bottom-3 lg:bottom-10 right-5 lg:right-16" type="submit">Next Step</button>\n      </div>\n\n    </main>\n    '),Object.keys(formData).forEach((function(e){return delete formData[e]}))},step2=function(){console.log("step 2 initialized"),body.innerHTML='\n    \x3c!-- side navbar for desktop --\x3e\n    <aside class="desktop__navbar hide-for-mobile pt-8 ml-5">\n      <div class="steps__ctn mt-8 px-9">\n        <div class="step">\n          <p class="number">1</p>\n          <div class="description__ctn">\n            <p class="step__id ">STEP 1</p>\n            <p class="description uppercase">\n              YOUR INFO\n            </p>\n          </div>\n        </div>\n        <div class="step">\n          <p class="number active">2</p>\n          <div class="description__ctn">\n            <p class="step__id">STEP 2</p>\n            <p class="description uppercase">\n              Select plan\n            </p>\n          </div>\n        </div>\n        <div class="step">\n          <p class="number">3</p>\n          <div class="description__ctn">\n            <p class="step__id">STEP 3</p>\n            <p class="description uppercase">\n              Add-ons\n            </p>\n          </div>\n        </div>\n        <div class="step">\n          <p class="number">4</p>\n          <div class="description__ctn">\n            <p class="step__id">STEP 4</p>\n            <p class="description uppercase">\n              SUMMARY\n            </p>\n          </div>\n        </div>\n      </div>\n    </aside>\n\n    \x3c!-- top navbar for mobile --\x3e\n    <div class="mobile__nav hide-for-desktop ">\n      <div class="steps__ctn container flex justify-center pt-9 mx-auto gap-x-5 px-11">\n        <p>1</p>\n        <p class="active">2</p>\n        <p>3</p>\n        <p>4</p>\n      </div>\n    </div>\n\n\n\n    <main class="lg:w-1/2 self-start my-11 pt-4 ">\n\n      <div id="plans" class="fade-in plans form fixed z-40 top-[6.65rem] inset-x-0 mx-auto rounded-md lg:relative px-7 py-6 lg:top-0 lg:py-2">\n        <div class="plans__header">\n            <h1 class="text-3xl font-bold py-1 lg:text-4xl"> Select your plan</h1>\n            <p class="description text-lg py-0">\n                You have the option of monthly or yearly billing.\n              </p>\n        </div>\n\n        <p id="plansErrorMsg" class="text-red-500 text-lg py-1"></p>\n\n        <div class="plans__ctn lg:mt-11 mt-4 lg:flex lg:gap-x-5">\n            \n            <div onclick="handleSelectedPlan(this, arcadeChkBox, this.id)" id="arcade" class="plans__ctn--card hover lg:w-1/3 sm:w-full flex lg:items-start items-center lg:flex-col py-4 my-3 lg:gap-y-14 gap-x-5 lg:py-5 relative px-6 '.concat(arcadeChecked?"active":"",'">\n                <div class="plans__ctn--card__Img">\n                    <img class="w-12" src="/assets/images/icon-arcade.svg" alt="arcade plan.jpg">\n                </div>\n                <div class="plans__ctn--card__header">\n                    <h3  class="text-lg font-semibold">Arcade</h3>\n                    <p id="arcadePrice" class="text-gray-400 font-medium">$9/mo</p>\n                    <p class="font-medium"></p>\n                </div>\n                <input class="invisible absolute" type="checkbox" ').concat(arcadeChecked?"checked":"",' name="arcade" id="arcadeChkBox">\n            </div>\n\n            <div onclick="handleSelectedPlan(this, advancedChkBox, this.id)" id="advanced" class="plans__ctn--card hover lg:w-1/3 sm:w-full flex lg:items-start items-center lg:flex-col py-4 my-3 lg:gap-y-14 gap-x-5 lg:py-5 relative px-6 ').concat(advancedChecked?"active":"",'">\n                <div class="plans__ctn--card__Img">\n                    <img class="w-12" src="/assets/images/icon-advanced.svg" alt="advanced plan.jpg">\n                </div>\n                <div class="plans__ctn--card__header">\n                    <h3 class="text-lg font-semibold">Advanced</h3>\n                    <p id="advancedPrice" class="text-gray-400 font-medium"> $12/mo</p>\n                    <p class="font-medium"></p>\n                </div>\n                <input class="invisible absolute" type="checkbox" ').concat(advancedChecked?"checked":"",' name="advanced" id="advancedChkBox">\n            </div>\n\n            <div onclick="handleSelectedPlan(this, proChkBox, this.id)" id="pro" class="plans__ctn--card hover lg:w-1/3 sm:w-full flex lg:items-start items-center lg:flex-col py-4 my-3 lg:gap-y-14 gap-x-5 lg:py-5 relative px-6 ').concat(proChecked?"active":"",'">\n                <div class="plans__ctn--card__Img">\n                    <img class="w-12" src="/assets/images/icon-pro.svg" alt="arcade plan.jpg">\n                </div>\n                <div class="plans__ctn--card__header">\n                    <h3 class="text-lg font-semibold">Pro</h3>\n                    <p id="proPrice" class="text-gray-400 font-medium">$15/mo</p>\n                    <p class="font-medium"></p>\n                </div>\n                <input class="invisible absolute" type="checkbox" ').concat(proChecked?"checked":"",' name="pro" id="proChkBox">\n            </div>\n\n        </div>\n\n        <div class="plans__subSwitchCtn mt-5 w-full flex justify-center gap-x-5 font-medium py-4 rounded-md">\n            <p class="monthly">Monthly</p>\n            <label class="switch overflow-hidden" for="checkbox">\n                <input class="subSwitch overflow-hidden" type="checkbox"  onchange="handleCheck(this);" id="checkbox" />\n                <div class="slider round overflow-hidden"></div>\n              </label>\n              <p class="yearly">Yearly</p>\n        </div>\n\n    </div>\n\n      <div class="btn__ctn bg-white w-full h-20 absolute bottom-0 lg:w-1/2">\n        <button onclick="goBacktoStep1();" id="goBackBtn1" class=" goBackBtn py-3 font-medium absolute z-40 bottom-3 lg:bottom-10 left-5 lg:left-16" type="submit">Go Back</button>\n        <button onclick="nextFromPlans();" id="submitBtn" class="rounded-md py-3 px-6 text-white font-medium absolute z-40 bottom-3 lg:bottom-10 right-5 lg:right-16" type="submit">Next Step</button>\n      </div>\n\n    </main>\n\n    ')},addOnsMonthly=[1,2,2],addOnsYearly=addOnsMonthly.map((function(e){return 10*e})),onlineServiceChecked=!1,largeStorageChecked=!1,customProfileChecked=!1,addOnsQuery=[onlineServiceChecked,largeStorageChecked,customProfileChecked],updateAddOns=function(){addOnsQuery=[onlineServiceChecked,largeStorageChecked,customProfileChecked]},handleAddOnContainer=function(e){var n=e.children[2];e.classList.remove("hover"),n.checked?e.classList.add("active"):(e.classList.remove("active"),e.addEventListener("mouseleave",(function(){return e.classList.add("hover")})))},handleAddOns=function(e){e.checked?(e.id.toLowerCase().includes("onlineservice")&&(onlineServiceChecked=!0,updateAddOns()),e.id.toLowerCase().includes("largerstorage")&&(largeStorageChecked=!0,updateAddOns()),e.id.toLowerCase().includes("profile")&&(customProfileChecked=!0,updateAddOns())):e.checked||(e.id.toLowerCase().includes("onlineservice")&&(onlineServiceChecked=!1,updateAddOns()),e.id.toLowerCase().includes("largerstorage")&&(largeStorageChecked=!1,updateAddOns()),e.id.toLowerCase().includes("profile")&&(customProfileChecked=!1,updateAddOns()))},step3=function(){console.log("step 3 initialized"),body.innerHTML='\n    \x3c!-- side navbar for desktop --\x3e\n    <aside class="desktop__navbar hide-for-mobile pt-8 ml-5 ">\n      <div class="steps__ctn mt-8 px-9">\n        <div class="step">\n          <p class="number">1</p>\n          <div class="description__ctn">\n            <p class="step__id ">STEP 1</p>\n            <p class="description uppercase">\n              YOUR INFO\n            </p>\n          </div>\n        </div>\n        <div class="step">\n          <p class="number">2</p>\n          <div class="description__ctn">\n            <p class="step__id">STEP 2</p>\n            <p class="description uppercase">\n              Select plan\n            </p>\n          </div>\n        </div>\n        <div class="step">\n          <p class="number active">3</p>\n          <div class="description__ctn">\n            <p class="step__id">STEP 3</p>\n            <p class="description uppercase">\n              Add-ons\n            </p>\n          </div>\n        </div>\n        <div class="step">\n          <p class="number">4</p>\n          <div class="description__ctn">\n            <p class="step__id">STEP 4</p>\n            <p class="description uppercase">\n              SUMMARY\n            </p>\n          </div>\n        </div>\n      </div>\n    </aside>\n\n    \x3c!-- top navbar for mobile --\x3e\n    <div class="mobile__nav hide-for-desktop">\n      <div class="steps__ctn container flex justify-center pt-9 mx-auto gap-x-5 px-11">\n        <p>1</p>\n        <p>2</p>\n        <p class="active">3</p>\n        <p>4</p>\n      </div>\n    </div>\n\n\n\n    <main class="lg:w-1/2 self-start my-11 pt-4">\n\n      <div id="add-ons" class="fade-in addOns form fixed z-40 top-[6.65rem] inset-x-0 mx-auto rounded-md lg:relative px-7 py-6 lg:top-0 lg:py-2">\n        <div class="addOns__header">\n            <h1 class="text-3xl font-bold py-1 lg:text-4xl"> Pick add-ons</h1>\n            <p class="description text-lg py-0">\n                Add-ons help enhance your gaming experience.\n              </p>\n        </div>\n\n        <div class="addOns__ctn lg:mr-14 lg:mt-9 mt-4">\n\n            <label onclick="handleAddOnContainer(this)"  class="container '.concat(onlineServiceChecked?"active":"",' hover addOns__ctn--card flex justify-between px-3 lg:px-11 my-4 py-4 items-center pl-12 lg:pl-20">\n                <div class="addOns__ctn--card__header">\n                    <h3 class="font-semibold">Online service</h3>\n                    <p class="text-gray-400">Access to multiplayer games</p>\n                </div>\n                <div class="addOns__ctn--card__priceCtn">\n                    <p id="price" class="price font-medium">+$').concat(yearlySelected?addOnsYearly[0]:addOnsMonthly[0],'/mo</p>\n                </div>\n                <input type="checkbox" ').concat(onlineServiceChecked?"checked":"",' onchange="handleAddOns(this)" id="chkForOnlineService">\n                <span class="checkmark left-1 lg:left-5"></span>\n              </label>\n\n            <label onclick="handleAddOnContainer(this)" class="container ').concat(largeStorageChecked?"active":"",' hover addOns__ctn--card flex justify-between px-3 lg:px-11 my-4 py-4 items-center pl-12 lg:pl-20">\n                <div class="addOns__ctn--card__header">\n                    <h3 class="font-semibold">Larger storage</h3>\n                    <p class="text-gray-400">Extra 1TB of cloud save</p>\n                </div>\n                <div class="addOns__ctn--card__priceCtn">\n                    <p id="price" class="price font-medium">+$').concat(yearlySelected?addOnsYearly[1]:addOnsMonthly[1],'/mo</p>\n                </div>\n                <input type="checkbox" ').concat(largeStorageChecked?"checked":"",' onchange="handleAddOns(this)" id="chkForLargerStorage">\n                <span class="checkmark left-1 lg:left-5"></span>\n              </label>\n\n            <label onclick="handleAddOnContainer(this)" ').concat(customProfileChecked?"active":"",' class="container hover addOns__ctn--card flex justify-between px-3 lg:px-11 my-4 py-4 items-center pl-12 lg:pl-20">\n                <div class="addOns__ctn--card__header">\n                    <h3 class="font-semibold">Customizable Profile</h3>\n                    <p class="text-gray-400 ">Custom theme on your profile</p>\n                </div>\n                <div class="addOns__ctn--card__priceCtn">\n                    <p id="price" class="price font-medium">+$').concat(yearlySelected?addOnsYearly[2]:addOnsMonthly[2],'/mo</p>\n                </div>\n                <input type="checkbox" ').concat(customProfileChecked?"checked":"",' onchange="handleAddOns(this)" id="chkForCustProfile">\n                <span class="checkmark left-1 lg:left-5"></span>\n              </label>\n\n        </div>\n\n    </div>\n\n      <div class="btn__ctn z-50 bg-white w-full h-[70px] absolute bottom-0 lg:w-1/2">\n        <button onclick="step2()" id="goBackBtn2" class=" goBackBtn py-3 font-medium absolute z-40 bottom-3 lg:bottom-10 left-5 lg:left-16" type="submit">Go Back</button>\n        <button id="submitBtn" class="rounded-md py-3 px-6 text-white font-medium absolute z-40 bottom-3 lg:bottom-10 right-5 lg:right-16" type="submit">Next Step</button>\n      </div>\n\n    </main>\n    ')};step1();
//# sourceMappingURL=script.js.map