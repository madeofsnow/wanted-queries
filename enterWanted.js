var EnterWanted ={}


module.exports ={
    beforeEach: browser => {
        EnterWanted = browser.page.cancelWantedpage()
        EnterWanted.navigate ()
        .expect.element('@versionNumber').text.to.equal('Version 1.0')

    },
    after:browser => {
        browser.end()
    },
'It can cancel Wanted Queries':browser => {
        EnterWanted.search('1111111111','badsssssssssssssssssssssss','11111987')
        EnterWanted.search('3456789000','We made a mistake on the application.','09262001')
//Without Date of Cancellation
        EnterWanted.search4('1111111111','badsssssssssssssssssssssss')
//Without Reason of Cancellation
        EnterWanted.search5('1111111111','11111987')  
//Without Warrant ID
        EnterWanted.search6('badsssssssssssssssssssssss','11111987')
//Invalid Input error Warrant ID
//EnterWanted.search7('11','badsssssssssssssssssssssss','11111987')

//Invalid Input error message ALL!!! 
EnterWanted.search8('11','bv','11111400')

//Invalid Input Error Date of Cancellation
//EnterWanted.search8('1111111111','badsssssssssssssssssssssss','11111400')           

    },


}