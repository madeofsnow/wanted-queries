var SaveWebCommands ={
search2: function(head, mk, OAI, name, sex, race, height,weight,hair,Offense,DOW ){
    this
    .setValue('@header', head)
    .setValue('@MKE', mk)
    .setValue('@OAI',OAI)
    .setValue('@name',name)
    .click('@sex')
    .setValue('@sex',sex)
    .click('@race')
    .setValue('@race',race)
    .setValue('@height', height)
    .setValue('@weight',weight)
    .setValue('@hair', hair)
    .setValue('@Off', Offense)
    .setValue('@DOW', DOW)
    .click('@sBtn')
    .expect.element('@valid').text.to.equal('Valid')
    this.click('@clearBtn')
}
}
var webCommands ={
    search3: function(head, mk, OAI, name, sex, race, height,weight,hair,Offense,DOW,DL,DLS,DLED,LP,LS,LED ){
        this
        .setValue('@header', head)
         .setValue('@MKE', mk)
         .setValue('@OAI',OAI)
         .setValue('@name',name)
         .click('@sex')
         .setValue('@sex',sex)
         .click('@race')
         .setValue('@race',race)
        .setValue('@height', height)
         .setValue('@weight',weight)
         .setValue('@hair', hair)
         .setValue('@Off', Offense)
        .setValue('@DOW', DOW)
        .setValue('@DriverLic',DL)
         .setValue('@DLstate',DLS)
         .setValue('@DLexp',DLED)
        .setValue('@LicPlate',LP)
         .setValue('@LicState',LS)
         .setValue('@LicExp',LED)
         .click('@sBtn')
        .expect.element('@valid').text.to.equal('Valid')
         this.click('@clearBtn')
         return this 
}
}
var blankcommands ={
    search4: function(head){
        this
        .setValue('@header', head)
        .click('@sBtn')
        .expect.element('@body').text.to.contain('No results generated due to error.')
        this
        .expect.element('@body').text.to.contain('The field named "MKE" must be included.')
        this
        .expect.element('@body').text.to.contain('The field named "Originating Agency Identifier" must be included.')
        this
        .expect.element('@body').text.to.contain('The field named "Name" must be included.')
        this
        .expect.element('@body').text.to.contain('The field named "Sex" must be included.')
        this
        .expect.element('@body').text.to.contain('The field named "Race / Ethnicity" must be included.')
        this
        .expect.element('@body').text.to.contain('The field named "Height" must be included.')
        this
        .expect.element('@body').text.to.contain('The field named "Weight" must be included.')
        this
        .expect.element('@body').text.to.contain('The field named "Hair" must be included.')
        this
        .expect.element('@body').text.to.contain('The field named "Offense" must be included.')
        this
        .expect.element('@body').text.to.contain('The field named "Date of Warrant/Violation" must be included.')
        this.click('@clearBtn')
        return this
    }
    }
    var blankOptional ={
        search5: function(head, mk, OAI, name, sex, race, height,weight,hair,Offense,DOW,DL){
            this
            .setValue('@header', head)
             .setValue('@MKE', mk)
             .setValue('@OAI',OAI)
             .setValue('@name',name)
             .click('@sex')
             .setValue('@sex',sex)
             .click('@race')
             .setValue('@race',race)
            .setValue('@height', height)
             .setValue('@weight',weight)
             .setValue('@hair', hair)
             .setValue('@Off', Offense)
            .setValue('@DOW', DOW)
            .setValue('@DriverLic',DL)
             .click('@sBtn')
            .expect.element('@body').text.to.contain('If one of the following are present, all must be present: Drivers License, DL State, DL Expiration Date.')
             this.click('@clearBtn')
             return this 
    }
    }
    var invalidOptional ={
        search6: function(head, mk, OAI, name, sex, race, height,weight,hair,Offense,DOW,DL,DLS,DLED,LP,LS,LED ){
            this
            .setValue('@header', head)
             .setValue('@MKE', mk)
             .setValue('@OAI',OAI)
             .setValue('@name',name)
             .click('@sex')
             .setValue('@sex',sex)
             .click('@race')
             .setValue('@race',race)
            .setValue('@height', height)
             .setValue('@weight',weight)
             .setValue('@hair', hair)
             .setValue('@Off', Offense)
            .setValue('@DOW', DOW)
            .setValue('@DriverLic',DL)
             .setValue('@DLstate',DLS)
             .setValue('@DLexp',DLED)
            .setValue('@LicPlate',LP)
             .setValue('@LicState',LS)
             .setValue('@LicExp',LED)
             .click('@sBtn')
            .expect.element('@body').text.to.contain('The "Drivers License" field should be between 1 and 20 characters long.')
            this
            .expect.element('@body').text.to.contain('The "DL State" field can only include a valid State/Territory abbreviation.')
            this
            .expect.element('@body').text.to.contain('The "DL Expiration Date" field must be entered as a date, MM/DD/YYYY, no earlier than 01/01/1900 and no later than')
            this
            .expect.element('@body').text.to.contain('The "License Plate" field should be between 5 and 8 characters long.')
            this
            .expect.element('@body').text.to.contain('The "License State" field can only include a valid State/Territory abbreviation.')
            this
            .expect.element('@body').text.to.contain('The "License Expiration Date" field must be entered as a date, MM/DD/YYYY, no earlier than 01/01/1900 and no later than')
             this.click('@clearBtn')
             return this 
    }
    }  
    
    var invalidLegit ={
        search7: function(head, mk, OAI, name,height,weight,hair,Offense,DOW ){
            this
            .setValue('@header', head)
            .setValue('@MKE', mk)
            .setValue('@OAI',OAI)
            .setValue('@name',name)
            .setValue('@height', height)
            .setValue('@weight',weight)
            .setValue('@hair', hair)
            .setValue('@Off', Offense)
            .setValue('@DOW', DOW)
            .click('@sBtn')
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
            this.click('@clearBtn')
            return this
        }
        }
module.exports = {
    url:'http://localhost:3000/#/enter',
    commands:[SaveWebCommands,webCommands,blankcommands,blankOptional,invalidOptional,invalidLegit],
    elements:{
    versionNumber: 'h6',
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
