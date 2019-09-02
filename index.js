const fs = require('fs');
const csvFilePath='./data.csv'
const csv=require('csvtojson')
const {exec} = require('child_process');


/*
function getJSONfromCsv(callback){

csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    //console.log(jsonObj);
    fs.writeFileSync('./jsonfromcsv.json',JSON.stringify(jsonObj));
    callback();
});
}

function runtests(){
    exec('npm test')  
}
getJSONfromCsv(runtests)

const createTestCafe = require('testcafe');
let testcafe         = null;

createTestCafe('localhost')
    .then(tc => {
        testcafe     = tc;
        const runner = testcafe.createRunner();

        return runner
            .src('demo.ts')
            .browsers('chrome')
            .run();
    })
    .then(failedCount => {
        console.log('Tests failed: ' + failedCount);
        testcafe.close();
    });
    */

   csv()
   .fromFile(csvFilePath)
   .then((jsonObj)=>{
       //console.log(jsonObj);
       fs.writeFileSync('./jsonfromcsv.json',JSON.stringify(jsonObj));
        })
    .then(exec('npm test') )


    
   