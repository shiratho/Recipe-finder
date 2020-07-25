var data = [{
  "image": "http://forkgasm.com/images/chicken-liver-pate.jpg",
  "name": "Chicken Liver Pâté",
  "id": "chicken-liver-pate",
  "description": "Rich and creamy, delicious on bread or even on its own",
}, {
  "image": "http://forkgasm.com/images/gambas.png",
  "name": "Gambas al Ajillo",
  "id": "gambas-al-ajillo",
  "description": "Quick and garlicky!",
}, {
  "image": "http://forkgasm.com/images/mushrooms.jpg",
  "name": "Garlic mushrooms a la crème with lardons and green pepper",
  "id": "garlic-mushrooms-a-la-creme-with-lardons-and-green-pepper",
  "description": "Not the most photogenic dish, but really easy, quick and delicious!"
}, {
  "name": "Papoutsakia",
  "id": "papoutsakia",
  "description": "A traditional Greek dish that tastes very similar to moussaka, but is much quicker to cook. Fun fact: Papoutsakia in Greek means \"little shoes\" and a portion usually has two. However, when cooking with large American eggplants, you'll likely find that one per portion is enough.",
  "image": "http://forkgasm.com/images/6410429C-D04A-4624-9026-715C0A64A005.jpeg"
}, {
  "name": "Real Caesar Salad",
  "id": "real-caesar-salad",
  "description": "Based on the original 1920's Italian-American table-side recipe",
  "image": "http://salad.com/salad.jpg",

}, {
  "name": "Shakshuka",
  "id": "shakshuka",
  "description": "Breakfast of champions (one of them)",
  "image": "http://forkgasm.com/images/shakshuka.jpg"
}, {
  "image": "http://forkgasm.com/images/40813912_2213541505597183_7740637805202109577_n.jpg",
  "name": "Spiced lamb chops with mint-mango sauce",
  "id": "spiced-lamb-chops-with-mint-mango-sauce",
  "description": "Delicious, refreshing, and super quick to make!",

}, {
  "image": "http://forkgasm.com/images/carbonara.jpg",
  "name": "Turnip Noodle Carbonara",
  "id": "turnip-carbonara",
  "description": "A healthier version of the classic dish that tastes just as good!",
}]
module.exports = {
  'Should have ion-header-bar': function (browser) {
    browser
      .url(browser.launch_url)
      .verify.elementPresent('ion-header-bar')
      .end()
  },
  'Should have Title "Recipe"': function (browser) {
    browser
      .url(browser.launch_url)
      .verify.containsText('ion-header-bar', "Recipe")
      .end()
  },
  'Should display recipes on load sorted by published name(a to z)': function (browser) {
    browser
      .url(browser.launch_url)
      .verify.elementPresent('.recipe-image')
      .verify.elementPresent('.recipe-name')
      .verify.elementPresent('.recipe-desc')
      .elements('css selector', '.recipe-image', function (result) {
        browser.verify.equal(result.value.length, data.length)
        for (let i = 0; i < result.value.length; i++) {
          browser.elementIdLocationInView(result.value[i].ELEMENT, (res) => {
            browser.elementIdAttribute(result.value[i].ELEMENT, "src", function (ele) {
              if (ele.value.trim().includes(data[i].image.trim())) {
                browser.verify.equal(true, true)
              } else {
                browser.verify.equal(true, false)
              }
            })
          })
        }
      })
      .elements('css selector', '.recipe-name', function (result) {
        browser.verify.equal(result.value.length, data.length)
        for (let i = 0; i < result.value.length; i++) {
          browser.elementIdLocationInView(result.value[i].ELEMENT, (res) => {
            browser.elementIdText(result.value[i].ELEMENT, (ele) => {
              if (ele.value.trim().includes(data[i].name.trim())) {
                browser.verify.equal(true, true)
              } else {
                browser.verify.equal(true, false)
              }
            })
          })
        }
      })
      .elements('css selector', '.recipe-desc', function (result) {
        browser.verify.equal(result.value.length, data.length)
        for (let i = 0; i < result.value.length; i++) {
          browser.elementIdLocationInView(result.value[i].ELEMENT, (res) => {
            browser.elementIdText(result.value[i].ELEMENT, (ele) => {
              if (ele.value.trim().includes(data[i].description.trim())) {
                browser.verify.equal(true, true)
              } else {
                browser.verify.equal(true, false)
              }
            })
          })
        }
      }).end()
  },
  'Search text change should change the Recipe list(by name)': function (browser) {
    browser
      .url(browser.launch_url)
      .verify.elementPresent('.recipe-image')
      .verify.elementPresent('.recipe-name')
      .verify.elementPresent('.recipe-desc')
      .elements('css selector', '.recipe-image', function (result) {
        browser.verify.equal(result.value.length, data.length)
        browser.setValue('#txt-search', 'ch')
          .elements('css selector', '.recipe-name', function (result) {
            browser.verify.equal(result.value.length, 4)
            browser.elementIdLocationInView(result.value[2].ELEMENT, (res) => {
              browser.elementIdText(result.value[2].ELEMENT, (ele) => {
                if (ele.value.trim().includes(data[5].name.trim())) {
                  browser.verify.equal(true, true)
                } else {
                  browser.verify.equal(true, false)
                }
              })
            })
          })
      })
      .end()
  },
  'Search text change should change the Recipe list(by description)': function (browser) {
    browser
      .url(browser.launch_url)
      .verify.elementPresent('.recipe-image')
      .verify.elementPresent('.recipe-name')
      .verify.elementPresent('.recipe-desc')
      .elements('css selector', '.recipe-image', function (result) {
        browser.verify.equal(result.value.length, data.length)
        browser.setValue('#txt-search', 'gree')
          .elements('css selector', '.recipe-desc', function (result) {
            browser.verify.equal(result.value.length, 2)
            browser.elementIdLocationInView(result.value[1].ELEMENT, (res) => {
              browser.elementIdText(result.value[1].ELEMENT, (ele) => {
                if (ele.value.trim().includes(data[3].description.trim())) {
                  browser.verify.equal(true, true)
                } else {
                  browser.verify.equal(true, false)
                }
              })
            })
          })
      })
      .end()
  },
};
//