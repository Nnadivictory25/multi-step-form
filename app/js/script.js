const body = document.querySelector("body");
let step1Validated = false;
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const personalInputs = [nameInput, email, phone];
const screenHeight = window.innerHeight;
const btnCtn = document.querySelector(".btn__ctn");
let formData = {}
let allPrices = []


// ! STEP1 //
let step1 = () => {
  const btn1 = document.querySelector("#submitBtn");
  const form = document.querySelector("#form");
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
      formData = {
        name: nameInput.value,
        email: email.value,
        phone: phone.value,
      };
      step2();
    } 
  });
};






// * STEP 2 * //

let yearlySelected = false
let step2Validated = false
let prices = [9, 12, 15]
let yearlyPrices = prices.map(price => price * 10)
let multiplied = false

let updateUIplans = () => {
    const arcadePriceEle = document.querySelector('#arcadePrice')
    const advancedPriceEle = document.querySelector('#advancedPrice')
    const proPriceEle = document.querySelector('#proPrice')
    const promoTextEl = document.querySelectorAll('.promo')
    let elementsArr = [arcadePriceEle, advancedPriceEle, proPriceEle]

    for (let i = 0; i < elementsArr.length; i++) {
        elementsArr[i].textContent = `$${yearlySelected ? prices[i] + '/yr' : prices[i] + '/mo'}`

        if (yearlySelected) {
            promoTextEl[i].textContent = '2 months free'
        } else {
            promoTextEl[i].textContent = ''
        }
    }
}

let handleCheck2 = () => {
    const yearly = document.querySelector(".yearly");
    const monthly = document.querySelector(".monthly");
    const toggle = document.querySelector('.subSwitch')
    if (yearlySelected == true) {
        toggle.checked = true
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
    element.classList.remove('active')

    
    
    
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


// !  Going to nextPage  , i.e: step3 //
let nextFromPlans = () => {
    validatePlansInputs()

    step2Validated ? step3() : console.log('Not Complete')
}



// ! When 'go back' is clicked ; going back to step1 //

let nameInputValue = ''
let emailInputValue = ''
let phoneInputValue = ''

let renderButton = () => {
    const btnCtn = document.querySelector(".btn__ctn");

    btnCtn.innerHTML = `
    <button onclick="validateForm2('${nameInputValue}', '${emailInputValue}', '${phoneInputValue}');" id="submitBtn" class="rounded-md py-3 px-6 text-white font-medium absolute z-40 bottom-3 lg:bottom-10 right-5 lg:right-16" type="submit">Next Step</button>
    `
}

let handleInput = (element) => {
    const screenHeight = window.innerHeight;
    const btnCtn = document.querySelector(".btn__ctn");

          if (screen.width <= 750) {
            btnCtn.style.display = "none";
            form.style.position = "absolute";
          }

          element.addEventListener("keyup", () => {
            if (window.innerHeight === screenHeight) {
              btnCtn.style.display = "block";
              }
              element.setAttribute('value', '')
              element.removeAttribute('value', '')

              if (element.name == 'name') {
                  nameInputValue = element.value
                  renderButton()
              }
              if (element.name == 'email') {
                  emailInputValue = element.value
                  renderButton()
              }
              if (element.name == 'phone') {
                  phoneInputValue = element.value
                  renderButton()
              }
          });

          element.addEventListener("blur", () => {
            btnCtn.style.display = "block";
          });

    window.addEventListener("resize", (e) => {
            if (window.innerHeight === screenHeight) {
              btnCtn.style.display = "block";
            } else {
              btnCtn.style.display = "none";
            }
          });
}



let nameValid2 = false;
let emailValid2 = false;
let phoneValid2 = false;
let validations2 = [nameValid2, emailValid2, phoneValid2];
let step1Validatedagain = false
let updateValidState2 = () => {
    validations2 = [nameValid2, emailValid2, phoneValid2];
    if (validations2.includes(false)) {
        step1Validatedagain = false
    } else {
        step1Validatedagain = true
    }
};





let validateForm2 = (name, email, phone) => {
    const errorMessageName = document.querySelector("#errMsgName");
    const errorMessageEmail = document.querySelector("#errMsgEmail");
    const errorMessagePhone = document.querySelector("#errMsgPhone");

    if (name == "") {
      nameValid2 = false;
      updateValidState2();
      errorMessageName.textContent = "This field is required";
      setTimeout(() => {
        errorMessageName.textContent = "";
      }, 2000);
    } else {
      nameValid2 = true;
      updateValidState2();
    }

    if (email == "") {
      emailValid2 = false;
      updateValidState2();
      errorMessageEmail.textContent = "This field is required";
      setTimeout(() => {
        errorMessageEmail.textContent = "";
      }, 2000);
    } else if (!email.includes("@") || !email.includes(".")) {
      emailValid2 = false;
      updateValidState2();
      errorMessageEmail.textContent = "Enter a valid email address";
      setTimeout(() => {
        errorMessageEmail.textContent = "";
      }, 2000);
    } else {
      emailValid2 = true;
      updateValidState2();
    }

    if (phone == "") {
      phoneValid2 = false;
      updateValidState2();
      errorMessagePhone.textContent = "This field is required";
      setTimeout(() => {
        errorMessagePhone.textContent = "";
      }, 2000);
    } else {
      phoneValid2 = true;
      updateValidState2();
    }
    
    if (step1Validatedagain) {
        formData = {
          name: name,
          email: email,
          phone: phone,
        }
        step2()
        handleCheck2()
      } else {
      }
  };


// ! Go back to step1 function  //
let goBacktoStep1 = () => {
    nameInputValue = formData.name
    emailInputValue = formData.email
    phoneInputValue = formData.phone

    body.innerHTML = `
    <!-- side navbar for desktop -->
    <aside class=" fixed mt-4 desktop__navbar hide-for-mobile ml-5">
    <img class="fixed z-[-1] top-5 h-[93%]" src="/assets/images/bg-sidebar-desktop.svg" alt="">
      <div class="steps__ctn px-9">
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
    <div class="mobile__nav hide-for-desktop">
      <div class="steps__ctn container flex justify-center pt-9 mx-auto gap-x-5 px-11">
        <p class="active">1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
      </div>
    </div>



    <main class="lg:w-[55%] lg:ml-[30%] self-start my-12 pt-4 fade-in">

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
        <input onfocus="handleInput(this)" class="w-full py-3 px-4 mb-4 font-medium" type="text" value='${nameInputValue}' placeholder="e.g. Stephen King" name="name" id="name">

        
        <div class="label flex justify-between lg:font-medium mt-5">
          <p>Email Address</p>
          <p id="errMsgEmail" class="errorMsg"></p>
        </div>
        <input onfocus="handleInput(this)" class="w-full py-3 px-4 mb-4 font-medium" value=${emailInputValue} type="email" placeholder="e.g. stephenking@lorem.com" name="email" id="email">

        
        <div class="label flex justify-between lg:font-medium mt-5">
          <p>Phone Number</p>
          <p id="errMsgPhone" class="errorMsg"></p>
        </div>
        <input  onfocus="handleInput(this)" class="w-full py-3 px-4 mb-4 font-medium" type="number" value=${phoneInputValue} placeholder="e.g. +1 234 567 890" name="phone" id="phone">


      </form>

      <div class="btn__ctn bg-white w-full z-40 h-20 absolute bottom-0 lg:w-[55%]">
        <button onclick="validateForm2('${nameInputValue}', '${emailInputValue}', '${phoneInputValue}');" id="submitBtn" class="rounded-md py-3 px-6 text-white font-medium absolute z-40 bottom-3 lg:bottom-10 right-5 lg:right-16" type="submit">Next Step</button>
      </div>

    </main>
    `
    Object.keys(formData).forEach(key => delete formData[key])
}



let step2 = () => {
    allPrices = []

    body.innerHTML = `
    <!-- side navbar for desktop -->
    <aside class=" fixed mt-4 desktop__navbar hide-for-mobile ml-5 grow-0">
    <img class="fixed z-[-1] top-5 h-[93%]" src="/assets/images/bg-sidebar-desktop.svg" alt="">
      <div class="steps__ctn px-9">
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



    <main class="lg:w-[55%] lg:ml-[30%] self-start my-12 pt-4 ">

      <div id="plans" class="fade-in plans form fixed z-40 top-[6.65rem] inset-x-0 mx-auto rounded-md lg:relative px-7 py-6 lg:top-0 lg:py-2">
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
                    <p class="promo font-medium py-1"></p>
                </div>
                <input class="invisible absolute" type="checkbox" ${arcadeChecked ? 'checked' : ''} name="arcade" id="arcadeChkBox">
            </div>

            <div onclick="handleSelectedPlan(this, advancedChkBox, this.id)" id="advanced" class="plans__ctn--card hover lg:w-1/3 sm:w-full flex lg:items-start items-center lg:flex-col py-4 my-3 lg:gap-y-14 gap-x-5 lg:py-5 relative px-6 ${advancedChecked ? 'active' : ''}">
                <div class="plans__ctn--card__Img">
                    <img class="w-12" src="/assets/images/icon-advanced.svg" alt="advanced plan.jpg">
                </div>
                <div class="plans__ctn--card__header">
                    <h3 class="text-lg font-semibold">Advanced</h3>
                    <p id="advancedPrice" class="text-gray-400 font-medium"> $12/mo</p>
                    <p class="promo font-medium py-1"></p>
                </div>
                <input class="invisible absolute" type="checkbox" ${advancedChecked ? 'checked' : ''} name="advanced" id="advancedChkBox">
            </div>

            <div onclick="handleSelectedPlan(this, proChkBox, this.id)" id="pro" class="plans__ctn--card hover lg:w-1/3 sm:w-full flex lg:items-start items-center lg:flex-col py-4 my-3 lg:gap-y-14 gap-x-5 lg:py-5 relative px-6 ${proChecked ? 'active' : ''}">
                <div class="plans__ctn--card__Img">
                    <img class="w-12" src="/assets/images/icon-pro.svg" alt="arcade plan.jpg">
                </div>
                <div class="plans__ctn--card__header">
                    <h3 class="text-lg font-semibold">Pro</h3>
                    <p id="proPrice" class="text-gray-400 font-medium">$15/mo</p>
                    <p class="promo font-medium py-1"></p>
                </div>
                <input class="invisible absolute" type="checkbox" ${proChecked ? 'checked' : ''} name="pro" id="proChkBox">
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

      <div class="btn__ctn bg-white w-full h-20 absolute bottom-0 lg:w-[55%]">
        <button onclick="goBacktoStep1();" id="goBackBtn1" class=" goBackBtn py-3 font-medium absolute z-40 bottom-3 lg:bottom-10 left-5 lg:left-16" type="submit">Go Back</button>
        <button onclick="nextFromPlans();" id="submitBtn" class="rounded-md py-3 px-6 text-white font-medium absolute z-40 bottom-3 lg:bottom-10 right-5 lg:right-16" type="submit">Next Step</button>
      </div>

    </main>

    `
}



// ! STEP 3 SCRIPTS //
let addOnsMonthly = [1, 2, 2]
let addOnsYearly = addOnsMonthly.map(price => price * 10)
let addOnsValidated = false
let onlineServiceChecked = false
let largeStorageChecked = false
let customProfileChecked = false

let addOnsQuery = [onlineServiceChecked, largeStorageChecked, customProfileChecked]

let updateAddOns = () => {
    addOnsQuery = [onlineServiceChecked, largeStorageChecked, customProfileChecked]
}

let handleAddOnContainer = (container) => {
    const elementChkBox = container.children[2]
    container.classList.remove('hover')
    if (elementChkBox.checked) {
        container.classList.add('active')
    } else {
        container.classList.remove('active')
        container.addEventListener('mouseleave', () => container.classList.add('hover'))
    }
}

let handleAddOns = (checkBox) => {

    if (checkBox.checked) {
        if (checkBox.id.toLowerCase().includes('onlineservice')) {
            onlineServiceChecked = true
            updateAddOns()
        }
        if (checkBox.id.toLowerCase().includes('largerstorage')) {
            largeStorageChecked = true
            updateAddOns()
        }
        if (checkBox.id.toLowerCase().includes('profile')) {
            customProfileChecked = true
            updateAddOns()
        }

    } else if (!checkBox.checked) {
        if (checkBox.id.toLowerCase().includes('onlineservice')) {
            onlineServiceChecked = false
            updateAddOns()
        }
        if (checkBox.id.toLowerCase().includes('largerstorage')) {
            largeStorageChecked = false
            updateAddOns()
        }
        if (checkBox.id.toLowerCase().includes('profile')) {
            customProfileChecked = false
            updateAddOns()
        }
    }
}

let validateAddOns = () => {
    const addOnErrMsgEl = document.querySelector('#addOnsErrorMsg')

    if (addOnsQuery.every(addOn => addOn == false)) {
        addOnsValidated = false
        addOnErrMsgEl.textContent = 'Select at least 1 add-on!'

        setTimeout(() => {
            addOnErrMsgEl.textContent = ''
        }, 2000);
    } else {
        addOnsValidated = true
    }
}


// ! Next Page (Leaving 'Add-ons' page going to STEP 4) Function //
let nextFromAddOns = () => {
    allPrices = []
    validateAddOns()

    if (addOnsValidated) {
        
        if (yearlySelected) {
            if (arcadeChecked) {
                allPrices.push(yearlyPrices[0])
            }
            if (advancedChecked) {
                allPrices.push(yearlyPrices[1])
            }
            if (proChecked) {
                allPrices.push(yearlyPrices[2])
            }
        } else {
            if (arcadeChecked) {
                allPrices.push(prices[0])
            }
            if (advancedChecked) {
                allPrices.push(prices[1])
            }
            if (proChecked) {
                allPrices.push(prices[2])
            }
        }
        step4()
    }
}





// ! STEP 3 FUNCTION //
let step3 = () => {

    body.innerHTML = `
    <!-- side navbar for desktop -->
    <aside class=" fixed mt-4 desktop__navbar hide-for-mobile ml-5 ">
    <img class="fixed z-[-1] top-5 h-[93%]" src="/assets/images/bg-sidebar-desktop.svg" alt="">
      <div class="steps__ctn px-9">
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



    <main class="lg:w-[55%] lg:ml-[30%] self-start my-12 pt-4">

      <div id="add-ons" class="fade-in addOns form fixed z-40 top-[6.65rem] inset-x-0 mx-auto rounded-md lg:relative px-7 py-6 lg:top-0 lg:py-2">
        <div class="addOns__header">
            <h1 class="text-3xl font-bold py-1 lg:text-4xl"> Pick add-ons</h1>
            <p class="description text-lg py-0">
                Add-ons help enhance your gaming experience.
              </p>
        </div>

        <p id="addOnsErrorMsg" class="text-red-500 text-lg py-1"></p>

        <div class="addOns__ctn lg:mr-14 lg:mt-9 mt-4">

            <label onclick="handleAddOnContainer(this)"  class="container ${onlineServiceChecked ? 'active' : ''} hover addOns__ctn--card flex justify-between px-3 lg:px-11 my-4 py-4 items-center pl-12 lg:pl-20">
                <div class="addOns__ctn--card__header">
                    <h3 class="font-semibold">Online service</h3>
                    <p class="text-gray-400">Access to multiplayer games</p>
                </div>
                <div class="addOns__ctn--card__priceCtn">
                    <p id="price" class="price font-medium">+$${yearlySelected ? addOnsYearly[0] + '/yr' : addOnsMonthly[0] + '/mo'}</p>
                </div>
                <input type="checkbox" ${onlineServiceChecked ? 'checked' : ''} onchange="handleAddOns(this)" id="chkForOnlineService">
                <span class="checkmark left-1 lg:left-5"></span>
              </label>

            <label onclick="handleAddOnContainer(this)" class="container ${largeStorageChecked ? 'active' : ''} hover addOns__ctn--card flex justify-between px-3 lg:px-11 my-4 py-4 items-center pl-12 lg:pl-20">
                <div class="addOns__ctn--card__header">
                    <h3 class="font-semibold">Larger storage</h3>
                    <p class="text-gray-400">Extra 1TB of cloud save</p>
                </div>
                <div class="addOns__ctn--card__priceCtn">
                    <p id="price" class="price font-medium">+$${yearlySelected ? addOnsYearly[1] + '/yr' : addOnsMonthly[1] + '/mo'}</p>
                </div>
                <input type="checkbox" ${largeStorageChecked ? 'checked' : ''} onchange="handleAddOns(this)" id="chkForLargerStorage">
                <span class="checkmark left-1 lg:left-5"></span>
              </label>

            <label onclick="handleAddOnContainer(this)"  class="${customProfileChecked ? 'active' : ''} container hover addOns__ctn--card flex justify-between px-3 lg:px-11 my-4 py-4 items-center pl-12 lg:pl-20">
                <div class="addOns__ctn--card__header">
                    <h3 class="font-semibold">Customizable Profile</h3>
                    <p class="text-gray-400 ">Custom theme on your profile</p>
                </div>
                <div class="addOns__ctn--card__priceCtn">
                    <p id="price" class="price font-medium">+$${yearlySelected ? addOnsYearly[2] + '/yr' : addOnsMonthly[2] + '/mo'}</p>
                </div>
                <input type="checkbox" ${customProfileChecked ? 'checked' : ''} onchange="handleAddOns(this)" id="chkForCustProfile">
                <span class="checkmark left-1 lg:left-5"></span>
              </label>

        </div>

    </div>

      <div class="btn__ctn z-50 bg-white w-full h-[70px] absolute bottom-0 lg:w-[55%]">
        <button onclick="step2(); handleCheck2();" id="goBackBtn2" class=" goBackBtn py-3 font-medium absolute z-40 bottom-3 lg:bottom-10 left-5 lg:left-16" type="submit">Go Back</button>
        <button onclick="nextFromAddOns();" id="submitBtn" class="rounded-md py-3 px-6 text-white font-medium absolute z-40 bottom-3 lg:bottom-10 right-5 lg:right-16" type="submit">Next Step</button>
      </div>

    </main>
    `
}



// ! STEP 4 SCRIPTS //

let checkSelectedPlan = () => {
    
    if (arcadeChecked && !yearlySelected) {
        return 'Arcade (Monthly)'
    }

    if (arcadeChecked && yearlySelected) {
        return 'Arcade (Yearly)'
    }

    if (advancedChecked && !yearlySelected) {
        return 'Advanced (Monthly)'
    }

    if (advancedChecked && yearlySelected) {
        return 'Advanced (Yearly)'
    }

    if (proChecked && !yearlySelected) {
        return 'Pro (Monthly)'
    }

    if (proChecked && yearlySelected) {
        return 'Pro (Yearly)'
    }

}

Array.prototype.multiIndexOf = (arr, el) => { 
    let idxs = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === el) {
            idxs.unshift(i);
        }
    }
    return idxs;
}




let updateAddOnPriceUI = () => {
    let selectedAdOnsIndexs = addOnsQuery.multiIndexOf(addOnsQuery, true)
    let html = ``

    for (let i = 0; i < selectedAdOnsIndexs.length; i++) {
        if (yearlySelected) {
            html += `<p>+$${addOnsYearly[selectedAdOnsIndexs[i]]}/yr</p>
            `
            allPrices.push(addOnsYearly[selectedAdOnsIndexs[i]])
        } else {
            html += `<p>+$${addOnsMonthly[selectedAdOnsIndexs[i]]}/mo</p>
            `
            allPrices.push(addOnsMonthly[selectedAdOnsIndexs[i]])
        }
    }

    return html
}

let AddOnCost = () => {
    if (arcadeChecked && !yearlySelected) {
        return '$9/mo'
    }

    if (arcadeChecked && yearlySelected) {
        return '$90/yr'
    }

    if (advancedChecked && !yearlySelected) {
        return '$12/mo'
    }

    if (advancedChecked && yearlySelected) {
        return '$120/yr'
    }

    if (proChecked && !yearlySelected) {
        return '$15/mo'
    }

    if (proChecked && yearlySelected) {
        return '$150/yr'
    }
}

let getTotal = () => {
    let total = allPrices.reduce((a, b) => a + b)
    let html = ``
    if (yearlySelected) {
        html = `<p class="font-bold text-lg">+$${total}/yr</p>`
    } else {
        html = `<p class="font-bold text-lg">+$${total}/mo</p>`
    }

    return html
}

let step4 = () => {

    body.innerHTML = `

    <!-- side navbar for desktop -->
     <aside class="desktop__navbar hide-for-mobile fixed mt-4 ml-5">
    <img class="fixed z-[-1] top-5 h-[93%]" src="/assets/images/bg-sidebar-desktop.svg" alt="">
        <div class="steps__ctn px-9">
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
                <p class="number">3</p>
                <div class="description__ctn">
                    <p class="step__id">STEP 3</p>
                    <p class="description uppercase">
                        Add-ons
                    </p>
                </div>
            </div>
            <div class="step">
                <p class="number active">4</p>
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
            <p>3</p>
            <p class="active">4</p>
        </div>
    </div>



    <main class="lg:w-[55%] lg:ml-[30%] self-start my-12 pt-4">

        <div id="finish"
            class="fade-in finish form fixed z-40 top-[6.65rem] inset-x-0 mx-auto rounded-md lg:relative px-7 py-6 lg:top-0 lg:py-2">
            <div class="finish__header">
                <h1 class="text-3xl font-bold py-1 lg:text-4xl"> Finishing up</h1>
                <p class="description text-lg py-0">
                    Double-check everything looks OK before confirming.
                </p>
            </div>

            <div class="finish__ctn relative mt-6 rounded-md flex justify-between px-5 lg:px-7 py-5 items-center ">
                <div class="finish__ctn--left">
                    <div class="planCtn mb-7">
                        <h3 class="font-semibold">${checkSelectedPlan()}</h3>
                        <a onclick="step2(); handleCheck2();" class="underline pt-0 mt-0 g hover:text-blue-900" href="">change</a>
                    </div>
                    ${onlineServiceChecked ? '<p class="g">Online service</p>' : ''}
                    ${largeStorageChecked ? '<p class="g">Larger storage</p>' : ''}
                    ${customProfileChecked ? '<p class="g">Customizable profile</p>' : ''}
                </div>

                <div class="finish__ctn--right">
                    <p class="font-semibold text-right mb-7">${AddOnCost()}</p>
                    ${updateAddOnPriceUI()}
                </div>
                <hr class="bg-gray-300 absolute w-[90%] top-[90px] h-[1.5px] mx-auto inset-x-0">
            </div>


            <div class="finish__totalCtn flex justify-between px-5 lg:px-7 items-center mt-5">
                <p class="totalWriteUp">Total (per ${yearlySelected ? 'year' : 'month'})</p>
                ${getTotal()}
            </div>

        </div>

        <div class="btn__ctn z-50 bg-white w-full h-[70px] absolute bottom-0 lg:w-[55%]">
            <button onclick="step3()" id="goBackBtn3"
                class=" goBackBtn py-3 font-medium absolute z-40 bottom-3 lg:bottom-10 left-5 lg:left-16"
                type="submit">Go Back</button>
            <button onclick="thankYou()" id="submitBtn"
                class="btn_hover rounded-md py-3 px-6 text-white font-medium absolute z-40 bottom-3 lg:bottom-10 right-5 lg:right-16"
                type="submit">Confirm</button>
        </div>

    </main>

    `

    const aLinks = document.querySelectorAll("a");

    aLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
      });
    });
}


let thankYou = () => {

    body.innerHTML = `
    <!-- side navbar for desktop -->
    <aside class=" fixed mt-4 desktop__navbar hide-for-mobile ml-5 ">
    <img class="fixed z-[-1] top-5 h-[93%]" src="/assets/images/bg-sidebar-desktop.svg" alt="">
      <div class="steps__ctn px-9">
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
          <p class="number">3</p>
          <div class="description__ctn">
            <p class="step__id">STEP 3</p>
            <p class="description uppercase">
              Add-ons
            </p>
          </div>
        </div>
        <div class="step">
          <p class="number active">4</p>
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
        <p>3</p>
        <p class="active">4</p>
      </div>
    </div>



    <main class="lg:w-1/2 lg:ml-[30%] self-start my-12 pt-4">

      <div id="thankyou" class=" fade-in thankyou form fixed z-40 top-[6.65rem] inset-x-0 mx-auto text-center rounded-md lg:relative px-7 py-6 lg:top-0 lg:py-2 ">

        <div class="container lg:my-28 my-12">
            <img class="mx-auto" src="/assets/images/icon-thank-you.svg" alt="">

            <h1 class="thankyou__header text-3xl font-bold my-3">
                Thank you!
            </h1>
            <p class="text-gray-500">  
                Thanks for confirming your subscription! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at support@loremgaming.com.
            </p>
    
        </div>

    </main>

    `
}


step1()