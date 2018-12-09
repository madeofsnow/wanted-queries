var EnterWantedCommands = {
    search: function(WarrantID,ROS,DOC){
        this
        .setValue('@wID', WarrantID)
        .setValue('@rFc',ROS)
        .setValue('@dOc',DOC)
        .click('@saveBtn')
        .expect.element('h4#validHeader').text.to.equal('Valid')
        this.click('@clearBtn')
             return this
}
    }
 var ErrorCheck ={
    search4: function(WarrantID,ROS){
        this
       .setValue('@wID', WarrantID)
        .setValue('@rFc',ROS)
        .click('@saveBtn')
       .expect.element('@errMsg').text.to.equal('The field named "Date of Cancellation" must be included.')
        this.click('@clearBtn')         
    return this
     }
}
    
var ErrorCheck2 ={
search5: function(WarrantID,DOC){
    this
   .setValue('@wID', WarrantID)
   .setValue('@dOc',DOC)
    .click('@saveBtn')
   .expect.element('@errMsg').text.to.equal('The field named "Reason for Cancellation" must be included.')
    this.click('@clearBtn')         
    return this

    }
}

var ErrorCheck3 ={
    search6: function(ROS,DOC){
        this
        .setValue('@rFc',ROS)
        .setValue('@dOc',DOC)
        .click('@saveBtn')
       .expect.element('@errMsg').text.to.equal('The field named "Warrant ID" must be included.')
        this.click('@clearBtn')         
        return this
    
        }
    }
// var ErrorCheck4 = {
//         search7: function(WarrantID,ROS,DOC){
//             this
//             .setValue('@wID', WarrantID)
//             .setValue('@rFc',ROS)
//             .setValue('@dOc',DOC)
//             .click('@saveBtn')
//             .expect.element('@errMsg').text.to.equal('The "Warrant ID" field should be 10 characters long.')
//             this.click('@clearBtn')
//                  return this

//         }
//     }
var ErrorCheck5 ={
    search8: function(WarrantID,ROS,DOC){
            this
            .setValue('@wID', WarrantID)
            .setValue('@rFc',ROS)
            .setValue('@dOc',DOC)
            .click('@saveBtn')
            .expect.element('@body').text.to.contain('The "Warrant ID" field should be 10 characters long.')
            this
            .expect.element('@body').text.to.contain('The "Reason for Cancellation" field should be between 5 and 150 characters long.')
            this    
            .expect.element('@body').text.to.contain('The "Date of Cancellation" field can only include characters from the English Alphabet or numeric characters.')
            this.click('@clearBtn')
            return this
        
            }
        }
       
module.exports ={
    url:'http://localhost:3000/#/cancel',
    commands: [EnterWantedCommands,ErrorCheck,ErrorCheck2,ErrorCheck3,ErrorCheck5],
    elements:{
    versionNumber: 'h6',
    browseButton: 'div[class="bm-burger-button"]',
    EnterWantedBtn: 'p[name="enterOption"]',
    ModWantedBtn: 'p[name="modifyOption"]',
    xWantedBtn: 'a[href="#/cancel"]',
    result:'span[name="queryBody"]',
    valid: 'h4#validHeader',
    saveBtn: 'button[id="saveBtn"]',
    clearBtn: 'button[id="clearBtn"]',
    wID: 'input[name="widInput"]',
    rFc: 'input[name="resInput"]',
    dOc: 'input[name="datInput"]',
    errMsg: 'li[class="errorMessage"]',
    errBoard: 'td[class="results"]',
    body: 'body'
}
}







