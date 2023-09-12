export const toggleServiceActiveClass = (event) => {
    // Function to add the "active" class and "non-active" class to the clicked card and other cards, respectively

    // Get all elements with the class "service-card"
    const serviceCards = document.querySelectorAll(".service-card");
    const serviceInfo = document.querySelector(".service-info");
    const clickedCard = event.currentTarget;
    let resetAll = false;
    // Loop through all service cards
    serviceCards.forEach((card) => {
      if (card === clickedCard) {
        let orderNum = getOrderNumber(card);
        let serviceShadow = card.querySelector(".service-card__shadow");
        let serviceInfoData = card.querySelector(".mobile-service-info");
        //add service info to selected card
        let serviceInfoHTML = serviceInfoData.innerHTML;

        // remove active if clicking an already active card. Also reset all classes
        if (clickedCard.classList.contains("active")) {
          resetAll = true;
          serviceInfo.classList.remove("active");
          setTimeout(function () {
            serviceShadow.classList.remove("active");
            serviceShadow.classList.remove("transform");
            card.classList.remove("active");
            // reset translation
            if (orderNum == 2) {
              card.classList.remove("translate-active-2");
            }
            // reset translation
            if (orderNum == 3) {
              card.classList.remove("translate-active-3");
            }
          }, 200);
        }
        // Add "active" class to the clicked card
        else {
          resetAll = false;
          card.classList.add("active");
          setTimeout(function () {
            serviceInfo.classList.add("active");
          }, 200);
          serviceShadow.classList.add("active");
          serviceInfo.innerHTML = serviceInfoHTML;
          //add shadow transform
          setTimeout(function () {
            serviceShadow.classList.add("transform");
          }, 180);

          if (orderNum == 2) {
            card.classList.add("translate-active-2");
          }
          if (orderNum == 3) {
            card.classList.add("translate-active-3");
          }
          card.classList.remove("non-active");
        }
      } else {
        // Add "non-active" class to other cards
        card.classList.remove("active");
        card.classList.add("non-active");
      }
      if (resetAll == true) {
        setTimeout(function () {
          serviceCards.forEach((card) => {
            card.classList.remove("active");
            card.classList.remove("non-active");
          });
        }, 200);
      }
    });
  }

  const getOrderNumber = (element) => {
    let css_obj = getComputedStyle(element);
    let orderNum = css_obj.order;
    return orderNum;
  }