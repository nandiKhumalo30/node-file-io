var fs = require('fs')
class Visitor{
	constructor(fullName,age,dateOfVisitor, comments, nameOfPersonWhoAssistedTheVisitor){
    	this.name=fullName;
        this.age=age;
        this.date=dateOfVisitor;
        this.comments=comments
        this.assistant=nameOfPersonWhoAssistedTheVisitor
         
    } 
    save(){
    var visitors = JSON.stringify(new Visitor(this.name, this.age, this.date, this.comments, this.assistant))
    var name = `${this.name}`
    var str = name.replace(" ", "_")
    var lowwerCase = str.toLowerCase() 
    var data= fs.writeFile(`visitor_${lowwerCase}.json`, visitors, function(err){
        if(err){
            throw new Error('Unable to write file')
        }
        else{
           return
        }
    })  
    }
   
}
function load(name = new Visitor(this.name)){
    function asyncFunc(callback) {
        setTimeout(function (){ 
            var str = name.replace(" ", "_")
            var lowwerCase = str.toLowerCase() 
            var fetchData = fs.readFileSync(`visitor_${lowwerCase}.json`) 
            var data = JSON.parse(fetchData)
            console.log(data);
            callback();
        }, 1000);
      }  
    asyncFunc(function() {return})
}


module.exports = {Visitor, load}

