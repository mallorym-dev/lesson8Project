module.exports = {
    beforeEach: browser => {
        browser.url('http://alpha.yoodlize.com')
    },
    afterEach: browser => {
        browser.end()
    },
    'seeAll1': browser => {
        browser
            .useXpath()
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[1]')
            .verify.containsText('//div[text()="category: Recreational Vehicles"]', "category: Recreational Vehicles")
            .pause(5000)

    },
    'seeAll2': browser => {
        browser
            .useXpath()
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN")[2]')
            .verify.containsText('//div[text()="category: Outdoor Gear"]', "category: Outdoor Gear")
            .pause(5000)
    },
    'seeAll3': browser => {
        browser
            .useXpath()
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[3]')
            .verify.containsText('//div[text()="category: Electronics"]', "category: Electronics")
            .pause(5000)
    },
    'seeAll4': browser => {
        browser
            .useXpath()
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[4]')
            .verify.containsText('//div[text()="category: Party & Wedding Equipment"]', "category: Party & Wedding Equipment")
            .pause(5000)
    }
}