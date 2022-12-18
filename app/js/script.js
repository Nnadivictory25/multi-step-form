const body = document.querySelector("body");

let step1 = () => {
  const btn1 = document.querySelector("#submitBtn");
  const nameInput = document.querySelector("#name");
  const email = document.querySelector("#email");
  const phone = document.querySelector("#phone");
  const btnCtn = document.querySelector(".btn__ctn");
  const form = document.querySelector("#form");
  const screenHeight = window.innerHeight;
  const testInput = document.querySelector(".test");
  const personalInputs = [nameInput, email, phone];
  const errorMessageName = document.querySelector("#errMsgName");
  const errorMessageEmail = document.querySelector("#errMsgEmail");
  const errorMessagePhone = document.querySelector("#errMsgPhone");
  let nameValid = false;
  let emailValid = false;
  let phoneValid = false;
  let validations = [nameValid, emailValid, phoneValid];
  let step1Validated = false;

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
    step1Validated == true ? step2() : console.log(`Not complete`)
  });
};




let step2 = () => {
    console.log(`step 2 initialized`)

    const plansMonthly = [
        {
            name: 'Arcade',
            price: 9
        }
        ,
        {
            name: 'Advanced',
            price: 12
        }
        ,
        {
            name: 'Pro',
            price: 15
        }
    ]

    const plansYearly = [
        {
            name: 'Arcade',
            price: 90
        }
        ,
        {
            name: 'Advanced',
            price: 120
        }
        ,
        {
            name: 'Pro',
            price: 150
        }
    ]

    body.innerHTML = `
    <!-- side navbar for desktop -->
    <aside class="desktop__navbar hide-for-mobile pt-8 ml-5 fade-in">
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
    <div class="mobile__nav hide-for-desktop fade-in">
      <div class="steps__ctn container flex justify-center pt-9 mx-auto gap-x-5 px-11">
        <p>1</p>
        <p class="active">2</p>
        <p>3</p>
        <p>4</p>
      </div>
    </div>



    <main class="lg:w-1/2 self-start my-11 pt-4 fade-in">

      <div id="plans" class=" plans form fixed z-40 top-[6.45rem] inset-x-0 mx-auto rounded-md lg:relative px-7 py-6 lg:top-0 lg:py-2">
        <div class="plans__header">
            <h1 class="text-3xl font-bold py-1 lg:text-4xl"> Select your plan</h1>
            <p class="description text-lg py-0">
                You have the option of monthly or yearly billing.
              </p>
        </div>

        <div class="plans__ctn lg:mt-11 mt-4 lg:flex lg:gap-x-5">
            
            <div class="plans__ctn--card lg:w-1/3 sm:w-full flex lg:items-start items-center lg:flex-col py-4 my-3 lg:gap-y-14 gap-x-5 lg:py-5 relative px-6">
                <div class="plans__ctn--card__Img">
                    <img class="w-12" src="/assets/images/icon-arcade.svg" alt="arcade plan.jpg">
                </div>
                <div class="plans__ctn--card__header">
                    <h3 class="text-lg font-semibold">Arcade</h3>
                    <p class="text-gray-400 font-medium">$9/mo</p>
                    <p class="font-medium"></p>
                </div>
                <input class="invisible absolute" type="checkbox" name="arcade" checked id="arcadeChkBox">
            </div>

            <div class="plans__ctn--card lg:w-1/3 sm:w-full flex lg:items-start items-center lg:flex-col py-4 my-3 lg:gap-y-14 gap-x-5 lg:py-5 relative px-6">
                <div class="plans__ctn--card__Img">
                    <img class="w-12" src="/assets/images/icon-advanced.svg" alt="advanced plan.jpg">
                </div>
                <div class="plans__ctn--card__header">
                    <h3 class="text-lg font-semibold">Advanced</h3>
                    <p class="text-gray-400 font-medium"> $12/mo</p>
                    <p class="font-medium"></p>
                </div>
                <input class="invisible absolute" type="checkbox" name="advanced" id="advancedChkBox">
            </div>

            <div class="plans__ctn--card lg:w-1/3 sm:w-full flex lg:items-start items-center lg:flex-col py-4 my-3 lg:gap-y-14 gap-x-5 lg:py-5 relative px-6">
                <div class="plans__ctn--card__Img">
                    <img class="w-12" src="/assets/images/icon-pro.svg" alt="arcade plan.jpg">
                </div>
                <div class="plans__ctn--card__header">
                    <h3 class="text-lg font-semibold">Pro</h3>
                    <p class="text-gray-400 font-medium">$15/mo</p>
                    <p class="font-medium"></p>
                </div>
                <input class="invisible absolute" type="checkbox" name="pro" id="proChkBox">
            </div>

        </div>

        <div class="plans__subSwitchCtn mt-5 w-full flex justify-center gap-x-5 font-medium py-4 rounded-md">
            <p class="monthly">Monthly</p>
            <label class="switch" for="checkbox">
                <input class="subSwitch" type="checkbox" id="checkbox" />
                <div class="slider round"></div>
              </label>
              <p class="yearly">Yearly</p>
        </div>

    </div>

      <div class="btn__ctn bg-white w-full h-20 absolute bottom-0 lg:w-1/2">
        <button id="goBackBtn1" class=" goBackBtn py-3 font-medium absolute z-40 bottom-3 lg:bottom-10 left-5 lg:left-16" type="submit">Go Back</button>
        <button id="submitBtn" class="rounded-md py-3 px-6 text-white font-medium absolute z-40 bottom-3 lg:bottom-10 right-5 lg:right-16" type="submit">Next Step</button>
      </div>

    </main>

    `
    
}


step1()