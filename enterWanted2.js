var EnterWanted2 ={}

module.exports ={
    beforeEach: browser => {
        EnterWanted2 = browser.page.enterWantedPage()
        EnterWanted2.navigate()
        .expect.element('@versionNumber').text.to.equal('Version 1.0')

    },
    after:browser => {
        browser.end()
    },
    'It can enter/save Queries':browser => { 
        EnterWanted2.search2('111111111111','reee','aaaaaaaaa','popeye','M','A','111','111','red','stealing','09151987')
    },
    
    'It can enter/save Optional inputs':browser => {
        EnterWanted2.search3('111111111111','reee','aaaaaaaaa','popeye','M','A','111','111','red','stealing','09151987','12345678','NY','10242014','123456','NY','09152013')
    },
    'Displaying Error messages when mandatory inputs are left blank except for the header':browser=>{
        EnterWanted2.search4('0')
    },
    'Displaying error message with only Driver license input, optional input test':browser => {
        EnterWanted2.search5('111111111111','reee','aaaaaaaaa','popeye','M','A','111','111','red','stealing','09151987')
    },
    'Displaying error message when INVALID input on optional': browser=> {
        EnterWanted2.search6('111111111111','reee','aaaaaaaaa','popeye','M','A','111','111','red','stealing','09151987','111111111111111111111','aa','11111111','11','11','11111111')

    },
    'Displaying error message when INVALID input on mandatory entries': browser => {
        EnterWanted2.search7('1','a','a','a','1','1111','r','1','11111111')
    },


}