(function(){
// ANIMACIÓN
const animateCards = document.querySelectorAll('.que-hacemos__card__content')
const animateTitles = document.querySelectorAll('.que-hacemos__card__title')
const animateDescriptions = document.querySelectorAll('.que-hacemos__card__description')

const resetStyles = () => {
    animateCards.forEach(card => {
        if(card.classList.contains('show-que-hacemos__card__content')){
            card.classList.replace('show-que-hacemos__card__content','hide-que-hacemos__card__content')
        }
    })
    animateTitles.forEach(title => {
        if(title.classList.contains('show-que-hacemos__card__title-description')){
            title.classList.replace('show-que-hacemos__card__title-description','hide-que-hacemos__card__title-description')
        }
    })
    animateDescriptions.forEach(description => {
        if(description.classList.contains('show-que-hacemos__card__title-description')){
            description.classList.replace('show-que-hacemos__card__title-description','hide-que-hacemos__card__title-description')
        }
    })
    
}

const offSet = 200

const cardView = (card) => {
    const cardTop = card.getBoundingClientRect().top
   
    return (
        cardTop <= 
        ((window.innerHeight || document.documentElement.clientHeight) - offSet)
      )
  }

const displayScrollCards = (cards) => {
    cards.classList.add('show-que-hacemos__card__content')
}
const displayScrollTitles = (titles) => {
    setTimeout(() => {
        titles.classList.add('show-que-hacemos__card__title-description')
    }, 600);
}
const displayScrollDescriptions = (descriptions) => {
    setTimeout(() => {
        descriptions.classList.add('show-que-hacemos__card__title-description')
    }, 1200);
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

// FILTRO
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
    resetStyles()
    setActiveButton(todoBtn)
    addCards(allCards)
    handleScrollAnimation();
})

designThinkingBtn.addEventListener('click', () => {
    resetStyles()
    setActiveButton(designThinkingBtn)
    deleteAllCards()
    addCards(designThinkingCards)
    handleScrollAnimation();
})

tailorMadeDevelopmentsBtn.addEventListener('click', () => {
    resetStyles()
    setActiveButton(tailorMadeDevelopmentsBtn)
    deleteAllCards()
    addCards(tailorMadeDevelopmentsCards)
    handleScrollAnimation();
})

iotSolutionsBtn.addEventListener('click', () => {
    resetStyles()
    setActiveButton(iotSolutionsBtn)
    deleteAllCards()
    addCards(iotSolutionsCards)
    handleScrollAnimation();
})

customerExperienceBtn.addEventListener('click', () => {
    resetStyles()
    setActiveButton(customerExperienceBtn)
    deleteAllCards()
    addCards(customerExperienceCards)
    handleScrollAnimation();
})

enchancedDataAnalyticsBtn.addEventListener('click', () => {
    resetStyles()
    setActiveButton(enchancedDataAnalyticsBtn)
    deleteAllCards()
    addCards(enchancedDataAnalyticsCards)
    handleScrollAnimation();
})

journeyToCloudBtn.addEventListener('click', () => {
    resetStyles()
    setActiveButton(journeyToCloudBtn)
    deleteAllCards()
    addCards(journeyToCloudCards)
    handleScrollAnimation();
})
})()