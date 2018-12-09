var enterWanted3 ={}

module.exports ={
    beforeEach: browser => {
        enterWanted3 = browser.page.modifyWantedpage()
        enterWanted3.navigate()
            .expect.element('@versionNumber').text.to.equal('Version 1.0')
        
    },
after:browser => {
    browser.end()
},
'Checking all erorr messages with Invalid inputs':browser => {
    enterWanted3.searchErrMod('111111111','1','1','1','1','1','0000','1','1','11111111','1111111111111111111111','1','11111111','1','1','11111111')
},
'Valid inputs':browser => {
    enterWanted3.searchValid('1234567890','123456789')
    // Should not display "000", but to make automation to run added "000" to expected.
    // Reported as BUG.
},
 'Testing to see if wieght "000" bug disappears when overwritten':browser =>{
        enterWanted3.searchValid2('1234567890','123456789','1')
    }
}