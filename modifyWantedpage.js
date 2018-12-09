var ModError={ 
        searchErrMod: function( WID, Header, MKE, OAI, Name, Height, Weight, Hair, Offense,DOW,DL,DLS,DLED,LP,LS,LED ){
            this
            .setValue('@WID', WID)
            .setValue('@header', Header)
             .setValue('@MKE', MKE)
             .setValue('@OAI',OAI)
             .setValue('@name',Name)
            .setValue('@height', Height)
             .setValue('@weight',Weight)
             .setValue('@hair', Hair)
             .setValue('@Off', Offense)
            .setValue('@DOW', DOW)
            .setValue('@DriverLic',DL)
             .setValue('@DLstate',DLS)
             .setValue('@DLexp',DLED)
            .setValue('@LicPlate',LP)
             .setValue('@LicState',LS)
             .setValue('@LicExp',LED)
             .click('@sBtn')
             .expect.element('@body').text.to.contain('The "Warrant ID" field should be 10 characters long.')
             this
             .expect.element('@body').text.to.contain('The "Header" field should be between 9 and 19 characters long.')
             this
             .expect.element('@body').text.to.contain('The "MKE" field should be between 2 and 4 characters long.')
             this
             .expect.element('@body').text.to.contain('The "Originating Agency Identifier" field should be 9 characters long.')
             this
             .expect.element('@body').text.to.contain('The "Name" field should be between 3 and 30 characters long.')
             this
             .expect.element('@body').text.to.contain('The "Height" field should be 3 characters long.')
             this
             .expect.element('@body').text.to.contain('The "Weight" field should be between 1 and 3 characters long.')
             this
             .expect.element('@body').text.to.contain('The "Hair" field should be between 3 and 10 characters long.')
             this
             .expect.element('@body').text.to.contain('The "Offense" field should be between 5 and 15 characters long')
             this
             .expect.element('@body').text.to.contain('The "Date of Warrant/Violation" field must be entered as a date, MM/DD/YYYY, no earlier than 01/01/1900 and no later than')
             this
             .expect.element('@body').text.to.contain('The "Drivers License" field should be between 1 and 20 characters long.')
            this
            .expect.element('@body').text.to.contain('The "DL State" field should be 2 characters long.')
            this
            .expect.element('@body').text.to.contain('The "DL Expiration Date" field can only include numeric characters.')
            this
            .expect.element('@body').text.to.contain('The "License Plate" field should be between 5 and 8 characters long.')
            this
            .expect.element('@body').text.to.contain('The "License State" field should be 2 characters long.')
            this
            .expect.element('@body').text.to.contain('The "License Expiration Date" field can only include numeric characters.')
             this.click('@clearBtn')
             return this 
}
}
var validMod ={
    searchValid: function(WID, Header){
this
        .setValue('@WID',WID)
        .setValue('@header',Header)
        .click('@sBtn')
        .expect.element('@body').text.to.contain('Valid')
        this
        .expect.element('@body').text.to.contain('Assembled Query: 1234567890.123456789.......000.........')
        this.click('@clearBtn')
        return this 
    }
    

}
var validMod2 ={
    searchValid2: function(WID, Header, Weight){
this
        .setValue('@WID',WID)
        .setValue('@header',Header)
        .setValue('@weight',Weight)
        .click('@sBtn')
        .expect.element('@body').text.to.contain('Valid')
        this
        .expect.element('@body').text.to.contain('Assembled Query: 1234567890.123456789.......001.........')
        this.click('@clearBtn')
        return this 
    }
    

}


module.exports = {
url: 'http://localhost:3000/#/modify',
commands: [ModError,validMod,validMod2],
elements:{
versionNumber: 'h6',  
WID: 'input[name="widInput"]',
header: 'input[name="hdrInput"]',
MKE :'input[name="mkeInput"]',
OAI: 'input[name="oriInput"]',
name: 'input[name="namInput"]',
sex: 'select[name="sexInput"]',
race: 'select[name="racInput"]',
height: 'input[name="hgtInput"]',
weight: 'input[name="wgtInput"]',
hair: 'input[name="haiInput"]',
Off: 'input[name="offInput"]',
DOW: 'input[name="dowInput"]',
DriverLic: 'input[name="olnInput"]',
DLstate: 'input[name="olsInput"]',
DLexp: 'input[name="oldInput"]',
LicPlate: 'input[name="licInput"]',
LicState: 'input[name="lisInput"]',
LicExp: 'input[name="lidInput"]',
sBtn: 'button[id="saveBtn"]',
clearBtn: 'button[id="clearBtn"]',
valid: 'h4#validHeader',
body: 'body'
}
}