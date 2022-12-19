const body = document.querySelector("body");
let step1Validated = false;
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const personalInputs = [nameInput, email, phone];
let formdata = {}

let step1 = () => {
  const btn1 = document.querySelector("#submitBtn");
  const btnCtn = document.querySelector(".btn__ctn");
  const form = document.querySelector("#form");
  const screenHeight = window.innerHeight;
  const testInput = document.querySelector(".test");
  const errorMessageName = document.querySelector("#errMsgName");
  const errorMessageEmail = document.querySelector("#errMsgEmail");
  const errorMessagePhone = document.querySelector("#errMsgPhone");
  let nameValid = false;
  let emailValid = false;
  let phoneValid = false;
  let validations = [nameValid, emailValid, phoneValid];

  personalInputs.forEach((input) => {
    input.addEventListener("focus", () => {
      if (screen.width <= 750) {
        btnCtn.style.display = "none";
        form.style.position = "absolute";
      }
    });

    input.addEventListener("keyup", () => {
      if (window.innerHeight === screenHeight) {
        btnCtn.style.display = "block";
      }
    });

    input.addEventListener("blur", () => {
      btnCtn.style.display = "block";
    });
  });

  window.addEventListener("resize", (e) => {
    if (window.innerHeight === screenHeight) {
      btnCtn.style.display = "block";
    } else {
      btnCtn.style.display = "none";
    }
  });

  let updateValidState = () => {
      validations = [nameValid, emailValid, phoneValid];
      if (validations.includes(false)) {
          step1Validated = false
      } else {
          step1Validated = true
      }
  };

  let validateForm = () => {
    if (nameInput.value == "") {
      nameValid = false;
      updateValidState();
      errorMessageName.textContent = "This field is required";
      setTimeout(() => {
        errorMessageName.textContent = "";
      }, 2000);
    } else {
      nameValid = true;
      updateValidState();
    }

    if (email.value == "") {
      emailValid = false;
      updateValidState();
      errorMessageEmail.textContent = "This field is required";
      setTimeout(() => {
        errorMessageEmail.textContent = "";
      }, 2000);
    } else if (!email.value.includes("@") || !email.value.includes(".")) {
      emailValid = false;
      updateValidState();
      errorMessageEmail.textContent = "Enter a valid email address";
      setTimeout(() => {
        errorMessageEmail.textContent = "";
      }, 2000);
    } else {
      emailValid = true;
      updateValidState();
    }

    if (phone.value == "") {
      phoneValid = false;
      updateValidState();
      errorMessagePhone.textContent = "This field is required";
      setTimeout(() => {
        errorMessagePhone.textContent = "";
      }, 2000);
    } else {
      phoneValid = true;
      updateValidState();
      }
  };

  btn1.addEventListener("click", (e) => {
    e.preventDefault();
    validateForm();

    if (step1Validated) {
      formdata = {
        name: nameInput.value,
        email: email.value,
        phone: phone.value,
      };
      console.log(formdata);
      step2();
    } else {
        console.log('Not complete');
    }
  });
};






// STEP 2

let yearlySelected = true
let step2Validated = false
let prices = [9, 12, 15]
let multiplied = false

let updateUIplans = () => {
    const arcadePriceEle = document.querySelector('#arcadePrice')
    const advancedPriceEle = document.querySelector('#advancedPrice')
    const proPriceEle = document.querySelector('#proPrice')
    let elementsArr = [arcadePriceEle, advancedPriceEle, proPriceEle]

    for (let i = 0; i < elementsArr.length; i++) {
        elementsArr[i].textContent = `$${prices[i]}/mo`
    }
}

let handleCheck2 = () => {
    console.log('handlecheck 2 active')  
    const yearly = document.querySelector(".yearly");
    const monthly = document.querySelector(".monthly");
    const toggle = document.querySelector('.subSwitch')
    toggle.checked = true
    if (yearlySelected == true) {
        prices = prices.map(price => price * 10)
        multiplied = true
        updateUIplans()
        monthly.classList.add('g')
        yearly.classList.add('blue')
    }
}


let handleCheck = (yearlyChecked) => {
    const yearly = document.querySelector('.yearly')
    const monthly = document.querySelector('.monthly')
    if (yearlyChecked.checked == true) {
        yearlySelected = true
        prices = prices.map(price => price * 10)
        multiplied = true
        updateUIplans()
        monthly.classList.add('g')
        yearly.classList.add('blue')
    } else {
        yearlySelected = false
        if (multiplied) {
            prices = prices.map(price => price / 10)
            multiplied = false
            updateUIplans()
        }
        monthly.classList.remove('g')
        yearly.classList.remove('blue')
    }
}



let arcadeChecked = false
let advancedChecked = false
let proChecked = false
let plansCheckedArr = [arcadeChecked, advancedChecked, proChecked]

let handleSelectedPlan = (element, chkbox, eleId) => {
    element.classList.remove('hover')
    
    
    
    if (!chkbox.checked) {
        element.classList.add('active')
        chkbox.checked = !chkbox.checked

        if (eleId == 'arcade') {
            arcadeChecked = true
            updateCheckedPlans()
        }
        
        if (eleId == 'advanced') {
            advancedChecked = true
            updateCheckedPlans()
        }
        
        if (eleId == 'pro') {
            proChecked = true
            updateCheckedPlans()
        }

    } else if (chkbox.checked) {
        element.classList.remove('active')
        chkbox.checked = !chkbox.checked

        if (eleId == 'arcade') {
            arcadeChecked = false
            updateCheckedPlans()
        }
        
        if (eleId == 'advanced') {
            advancedChecked = false
            updateCheckedPlans()
        }
        
        if (eleId == 'pro') {
            proChecked = false
            updateCheckedPlans()
        }

        element.addEventListener('mouseleave', () => element.classList.add('hover'))
    }
}

let updateCheckedPlans = () => { plansCheckedArr = [arcadeChecked, advancedChecked, proChecked] }


let validatePlansInputs = () => {
    const planErrMsgEl = document.querySelector('#plansErrorMsg')
    let checkedQuery = []
    checkedQuery = plansCheckedArr.filter(plansQuery => plansQuery == true)

    if (checkedQuery.length > 1) {
        planErrMsgEl.textContent = 'Select only 1 plan!'
        step2Validated = false
        setTimeout(() => {
            planErrMsgEl.textContent = ''
        }, 2000);
    } else {
        step2Validated = true
    }

    if (plansCheckedArr.every(plan => plan == false)) {
        planErrMsgEl.textContent = 'Select at least 1 plan!'
        step2Validated = false

        setTimeout(() => {
            planErrMsgEl.textContent = ''
        }, 2000);
    }


}

let nextFromPlans = () => {
    validatePlansInputs()

    step2Validated ? step3() : console.log('Not Complete')
}


let goBacktoStep1 = () => {
    body.innerHTML = `
    <!-- side navbar for desktop -->
    <aside class="desktop__navbar hide-for-mobile pt-8 ml-5 fade-in">
      <div class="steps__ctn mt-8 px-9">
        <div class="step">
          <p class="number active">1</p>
          <div class="description__ctn">
            <p class="step__id ">STEP 1</p>
            <p class="description uppercase">
              YOUR INFO
            </p>
          </div>
        </div>
        <div class="step">
          <p class="number">2</p>
          <div class="description__ctn">
            <p class="step__id">STEP 2</p>
            <p class="description uppercase">
              Select plan
            </p>
          </div>
        </div>
        <div class="step">
          <p class="number">3</p>
          <div class="description__ctn">
            <p class="step__id">STEP 3</p>
            <p class="description uppercase">
              Add-ons
            </p>
          </div>
        </div>
        <div class="step">
          <p class="number">4</p>
          <div class="description__ctn">
            <p class="step__id">STEP 4</p>
            <p class="description uppercase">
              SUMMARY
            </p>
          </div>
        </div>
      </div>
    </aside>

    <!-- top navbar for mobile -->
    <div class="mobile__nav hide-for-desktop fade-in">
      <div class="steps__ctn container flex justify-center pt-9 mx-auto gap-x-5 px-11">
        <p class="active">1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
      </div>
    </div>



    <main class="lg:w-1/2 self-start my-11 pt-4 fade-in">

      <form  id="form" class="form fixed z-40 top-[7rem] inset-x-0 mx-auto rounded-md lg:relative px-7 py-6 lg:top-0 lg:py-2">

        <div class="form__header">
          <h1 class="text-3xl font-bold py-1 lg:text-4xl">Personal info</h1>
          <p class="description text-lg py-0">
            Please provide your name, email address, and phone number.
          </p>
        </div>

        <div class="label flex justify-between lg:font-medium mt-5">
          <p>Name</p>
          <p id="errMsgName" class="errorMsg"></p>
        </div>
        <input  class="w-full py-3 px-4 mb-4 font-medium" type="text" value=${formdata.name} placeholder="e.g. Stephen King" name="name" id="name">

        
        <div class="label flex justify-between lg:font-medium mt-5">
          <p>Email Address</p>
          <p id="errMsgEmail" class="errorMsg"></p>
        </div>
        <input class="w-full py-3 px-4 mb-4 font-medium" value=${formdata.email} type="email" placeholder="e.g. stephenking@lorem.com" name="email" id="email">

        
        <div class="label flex justify-between lg:font-medium mt-5">
          <p>Phone Number</p>
          <p id="errMsgPhone" class="errorMsg"></p>
        </div>
        <!-- <input class="test" type="text"> -->
        <input class="w-full py-3 px-4 mb-4 font-medium" type="number" value=${formdata.phone} placeholder="e.g. +1 234 567 890" name="phone number" id="phone">


      </form>

      <div class="btn__ctn bg-white w-full z-40 h-20 absolute bottom-0 lg:w-1/2">
        <button id="submitBtn" class="rounded-md py-3 px-6 text-white font-medium absolute z-40 bottom-3 lg:bottom-10 right-5 lg:right-16" type="submit">Next Step</button>
      </div>

    </main>
    `
}


let step2 = () => {
    console.log(`step 2 initialized`)

    body.innerHTML = `
    <!-- side navbar for desktop -->
    <aside class="desktop__navbar hide-for-mobile pt-8 ml-5">
      <div class="steps__ctn mt-8 px-9">
        <div class="step">
          <p class="number">1</p>
          <div class="description__ctn">
            <p class="step__id ">STEP 1</p>
            <p class="description uppercase">
              YOUR INFO
            </p>
          </div>
        </div>
        <div class="step">
          <p class="number active">2</p>
          <div class="description__ctn">
            <p class="step__id">STEP 2</p>
            <p class="description uppercase">
              Select plan
            </p>
          </div>
        </div>
        <div class="step">
          <p class="number">3</p>
          <div class="description__ctn">
            <p class="step__id">STEP 3</p>
            <p class="description uppercase">
              Add-ons
            </p>
          </div>
        </div>
        <div class="step">
          <p class="number">4</p>
          <div class="description__ctn">
            <p class="step__id">STEP 4</p>
            <p class="description uppercase">
              SUMMARY
            </p>
          </div>
        </div>
      </div>
    </aside>

    <!-- top navbar for mobile -->
    <div class="mobile__nav hide-for-desktop ">
      <div class="steps__ctn container flex justify-center pt-9 mx-auto gap-x-5 px-11">
        <p>1</p>
        <p class="active">2</p>
        <p>3</p>
        <p>4</p>
      </div>
    </div>



    <main class="lg:w-1/2 self-start my-11 pt-4 ">

      <div id="plans" class="fade-in plans form fixed z-40 top-[6.45rem] inset-x-0 mx-auto rounded-md lg:relative px-7 py-6 lg:top-0 lg:py-2">
        <div class="plans__header">
            <h1 class="text-3xl font-bold py-1 lg:text-4xl"> Select your plan</h1>
            <p class="description text-lg py-0">
                You have the option of monthly or yearly billing.
              </p>
        </div>

        <p id="plansErrorMsg" class="text-red-500 text-lg py-1"></p>

        <div class="plans__ctn lg:mt-11 mt-4 lg:flex lg:gap-x-5">
            
            <div onclick="handleSelectedPlan(this, arcadeChkBox, this.id)" id="arcade" class="plans__ctn--card hover lg:w-1/3 sm:w-full flex lg:items-start items-center lg:flex-col py-4 my-3 lg:gap-y-14 gap-x-5 lg:py-5 relative px-6 ${arcadeChecked ? 'active' : ''}">
                <div class="plans__ctn--card__Img">
                    <img class="w-12" src="/assets/images/icon-arcade.svg" alt="arcade plan.jpg">
                </div>
                <div class="plans__ctn--card__header">
                    <h3  class="text-lg font-semibold">Arcade</h3>
                    <p id="arcadePrice" class="text-gray-400 font-medium">$9/mo</p>
                    <p class="font-medium"></p>
                </div>
                <input class="invisible absolute" type="checkbox" name="arcade" id="arcadeChkBox">
            </div>

            <div onclick="handleSelectedPlan(this, advancedChkBox, this.id)" id="advanced" class="plans__ctn--card hover lg:w-1/3 sm:w-full flex lg:items-start items-center lg:flex-col py-4 my-3 lg:gap-y-14 gap-x-5 lg:py-5 relative px-6 ${advancedChecked ? 'active' : ''}">
                <div class="plans__ctn--card__Img">
                    <img class="w-12" src="/assets/images/icon-advanced.svg" alt="advanced plan.jpg">
                </div>
                <div class="plans__ctn--card__header">
                    <h3 class="text-lg font-semibold">Advanced</h3>
                    <p id="advancedPrice" class="text-gray-400 font-medium"> $12/mo</p>
                    <p class="font-medium"></p>
                </div>
                <input class="invisible absolute" type="checkbox" name="advanced" id="advancedChkBox">
            </div>

            <div onclick="handleSelectedPlan(this, proChkBox, this.id)" id="pro" class="plans__ctn--card hover lg:w-1/3 sm:w-full flex lg:items-start items-center lg:flex-col py-4 my-3 lg:gap-y-14 gap-x-5 lg:py-5 relative px-6 ${proChecked ? 'active' : ''}">
                <div class="plans__ctn--card__Img">
                    <img class="w-12" src="/assets/images/icon-pro.svg" alt="arcade plan.jpg">
                </div>
                <div class="plans__ctn--card__header">
                    <h3 class="text-lg font-semibold">Pro</h3>
                    <p id="proPrice" class="text-gray-400 font-medium">$15/mo</p>
                    <p class="font-medium"></p>
                </div>
                <input class="invisible absolute" type="checkbox" name="pro" id="proChkBox">
            </div>

        </div>

        <div class="plans__subSwitchCtn mt-5 w-full flex justify-center gap-x-5 font-medium py-4 rounded-md">
            <p class="monthly">Monthly</p>
            <label class="switch overflow-hidden" for="checkbox">
                <input class="subSwitch overflow-hidden" type="checkbox"  onchange="handleCheck(this);" id="checkbox" />
                <div class="slider round overflow-hidden"></div>
              </label>
              <p class="yearly">Yearly</p>
        </div>

    </div>

      <div class="btn__ctn bg-white w-full h-20 absolute bottom-0 lg:w-1/2">
        <button onclick="goBacktoStep1();" id="goBackBtn1" class=" goBackBtn py-3 font-medium absolute z-40 bottom-3 lg:bottom-10 left-5 lg:left-16" type="submit">Go Back</button>
        <button onclick="nextFromPlans();" id="submitBtn" class="rounded-md py-3 px-6 text-white font-medium absolute z-40 bottom-3 lg:bottom-10 right-5 lg:right-16" type="submit">Next Step</button>
      </div>

    </main>

    `
}


let step3 = () => {
    console.log('step 3 initialized')

    body.innerHTML = `
    <!-- side navbar for desktop -->
    <aside class="desktop__navbar hide-for-mobile pt-8 ml-5 ">
      <div class="steps__ctn mt-8 px-9">
        <div class="step">
          <p class="number">1</p>
          <div class="description__ctn">
            <p class="step__id ">STEP 1</p>
            <p class="description uppercase">
              YOUR INFO
            </p>
          </div>
        </div>
        <div class="step">
          <p class="number">2</p>
          <div class="description__ctn">
            <p class="step__id">STEP 2</p>
            <p class="description uppercase">
              Select plan
            </p>
          </div>
        </div>
        <div class="step">
          <p class="number active">3</p>
          <div class="description__ctn">
            <p class="step__id">STEP 3</p>
            <p class="description uppercase">
              Add-ons
            </p>
          </div>
        </div>
        <div class="step">
          <p class="number">4</p>
          <div class="description__ctn">
            <p class="step__id">STEP 4</p>
            <p class="description uppercase">
              SUMMARY
            </p>
          </div>
        </div>
      </div>
    </aside>

    <!-- top navbar for mobile -->
    <div class="mobile__nav hide-for-desktop">
      <div class="steps__ctn container flex justify-center pt-9 mx-auto gap-x-5 px-11">
        <p>1</p>
        <p>2</p>
        <p class="active">3</p>
        <p>4</p>
      </div>
    </div>



    <main class="lg:w-1/2 self-start my-11 pt-4">

      <div id="add-ons" class=" addOns form fixed z-40 top-[6.65rem] inset-x-0 mx-auto rounded-md lg:relative px-7 py-6 lg:top-0 lg:py-2">
        <div class="addOns__header">
            <h1 class="text-3xl font-bold py-1 lg:text-4xl"> Pick add-ons</h1>
            <p class="description text-lg py-0">
                Add-ons help enhance your gaming experience.
              </p>
        </div>

        <div class="addOns__ctn lg:mr-14 lg:mt-9 mt-4">

            <label class="container active addOns__ctn--card flex justify-between px-3 lg:px-11 my-4 py-4 items-center pl-12 lg:pl-20">
                <div class="addOns__ctn--card__header">
                    <h3 class="font-semibold">Online service</h3>
                    <p class="text-gray-400">Access to multiplayer games</p>
                </div>
                <div class="addOns__ctn--card__priceCtn">
                    <p id="price" class="price font-medium">+$1/mo</p>
                </div>
                <input type="checkbox" checked id="chkForOnlineService">
                <span class="checkmark left-1 lg:left-5"></span>
              </label>

            <label class="container active addOns__ctn--card flex justify-between px-3 lg:px-11 my-4 py-4 items-center pl-12 lg:pl-20">
                <div class="addOns__ctn--card__header">
                    <h3 class="font-semibold">Larger storage</h3>
                    <p class="text-gray-400">Extra 1TB of cloud save</p>
                </div>
                <div class="addOns__ctn--card__priceCtn">
                    <p id="price" class="price font-medium">+$2/mo</p>
                </div>
                <input type="checkbox" checked id="chkForLargerStorage">
                <span class="checkmark left-1 lg:left-5"></span>
              </label>

            <label class="container addOns__ctn--card flex justify-between px-3 lg:px-11 my-4 py-4 items-center pl-12 lg:pl-20">
                <div class="addOns__ctn--card__header">
                    <h3 class="font-semibold">Customizable Profile</h3>
                    <p class="text-gray-400 ">Custom theme on your profile</p>
                </div>
                <div class="addOns__ctn--card__priceCtn">
                    <p id="price" class="price font-medium">+$2/mo</p>
                </div>
                <input type="checkbox" id="chkForCustProfile">
                <span class="checkmark left-1 lg:left-5"></span>
              </label>

        </div>

    </div>

      <div class="btn__ctn z-50 bg-white w-full h-[70px] absolute bottom-0 lg:w-1/2">
        <button id="goBackBtn1" class=" goBackBtn py-3 font-medium absolute z-40 bottom-3 lg:bottom-10 left-5 lg:left-16" type="submit">Go Back</button>
        <button id="submitBtn" class="rounded-md py-3 px-6 text-white font-medium absolute z-40 bottom-3 lg:bottom-10 right-5 lg:right-16" type="submit">Next Step</button>
      </div>

    </main>
    `
}


step1()