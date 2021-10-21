const sectionQueHacemos = document.querySelector('.que-hacemos')

const todoBtn = document.querySelector('#todo-btn')
const designThinkingBtn = document.querySelector('#design-thinking-btn')
const tailorMadeDevelopmentsBtn = document.querySelector('#tailor-made-developments-btn')
const iotSolutionsBtn = document.querySelector('#iot-solutions-btn')
const customerExperienceBtn = document.querySelector('#customer-experience-btn')
const enchancedDataAnalyticsBtn = document.querySelector('#enchanced-data-anlytics-btn')
const journeyToCloudBtn = document.querySelector('#journey-to-cloud-btn')

const designThinkingCards = document.querySelectorAll('.design-thinking')
const tailorMadeDevelopmentsCards = document.querySelectorAll('.tailor-made-developments')
const iotSolutionsCards = document.querySelectorAll('.iot-solutions')
const customerExperienceCards = document.querySelectorAll('.customer-experience')
const enchancedDataAnalyticsCards = document.querySelectorAll('.enchanced-data-anlytics')
const journeyToCloudCards = document.querySelectorAll('.journey-to-cloud')

const buttonsArray = [todoBtn,designThinkingBtn,tailorMadeDevelopmentsBtn, iotSolutionsBtn, customerExperienceBtn, enchancedDataAnalyticsBtn, journeyToCloudBtn]

const allCards = document.querySelectorAll('.que-hacemos__card')

const deleteAllCards = () => {
    allCards.forEach(card => {
        card.remove()
    })
}

const addCards = (arrayCards) => {
    arrayCards.forEach(card => {
        sectionQueHacemos.appendChild(card)
    })
}

const setActiveButton = (activeBtn) => {
    buttonsArray.forEach(button => {
        button.removeAttribute('class')
    })
    activeBtn.setAttribute('class','active')
}

todoBtn.addEventListener('click', () => {
    setActiveButton(todoBtn)
    addCards(allCards)
})

designThinkingBtn.addEventListener('click', () => {
    setActiveButton(designThinkingBtn)
    deleteAllCards()
    addCards(designThinkingCards)
})

tailorMadeDevelopmentsBtn.addEventListener('click', () => {
    setActiveButton(tailorMadeDevelopmentsBtn)
    deleteAllCards()
    addCards(tailorMadeDevelopmentsCards)
})

iotSolutionsBtn.addEventListener('click', () => {
    setActiveButton(iotSolutionsBtn)
    deleteAllCards()
    addCards(iotSolutionsCards)
})

customerExperienceBtn.addEventListener('click', () => {
    setActiveButton(customerExperienceBtn)
    deleteAllCards()
    addCards(customerExperienceCards)
})

enchancedDataAnalyticsBtn.addEventListener('click', () => {
    setActiveButton(enchancedDataAnalyticsBtn)
    deleteAllCards()
    addCards(enchancedDataAnalyticsCards)
})

journeyToCloudBtn.addEventListener('click', () => {
    setActiveButton(journeyToCloudBtn)
    deleteAllCards()
    addCards(journeyToCloudCards)
})

// ANIMACIÓN
const animateCards = document.querySelectorAll('.que-hacemos__card__content')
const animateTitles = document.querySelectorAll('.que-hacemos__card__title')
const animateDescriptions = document.querySelectorAll('.que-hacemos__card__description')

const offSet = 90

const cardView = (card) => {
    const cardTop = card.getBoundingClientRect().top
   
    return (
        cardTop <= 
        ((window.innerHeight || document.documentElement.clientHeight) - offSet)
      )
  }

const displayScrollCards = (cards) => {
    cards.style.transform = 'translateX(0)'
}
const displayScrollTitles = (titles) => {
    setTimeout(() => {
        titles.style.opacity = '1'
    }, 300);
}
const displayScrollDescriptions = (descriptions) => {
    setTimeout(() => {
        descriptions.style.opacity = '1'
    }, 600);
}

const handleScrollAnimation = () => {
    animateCards.forEach((card) => {
      if (cardView(card)) {
            displayScrollCards(card);
      }
    })
    animateTitles.forEach(title => {
        if(cardView(title)) {
            displayScrollTitles(title)
        }
    })
    animateDescriptions.forEach(title => {
        if(cardView(title)) {
            displayScrollDescriptions(title)
        }
    })
  }
window.scroll({
    top:1
})

window.addEventListener('scroll', () => {
    handleScrollAnimation();
})