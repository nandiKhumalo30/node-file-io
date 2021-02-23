const { Visitor, load} = require ("../src/script.js")

describe("Visitor", function(){
    var alice = new Visitor('Alice Cooper', 26, new Date(), "I am happy", "Candice Abrahams")
    it("should have a full name", function() {
        expect(alice.name).toBe('Alice Cooper');
    })

    it('should have an age', function(){
        expect(alice.age).toBe(26);
    }) 

    it("should have a date", function() {
        expect(alice.date).toBeDefined(new Date());
    })

    it('should have comments', function(){
        expect(alice.comments).toBe("I am happy");
    })

    it ('should have an assistant', function() {
        expect(alice.assistant).toBe('Candice Abrahams')
    })

})
describe('Load', function(){
    it("should return components in json file", function(){
        var loadObj = ({load(){}})
        let spy = spyOn(loadObj, 'load')
        loadObj.load()
        expect(spy).toHaveBeenCalled() 
    })
})
