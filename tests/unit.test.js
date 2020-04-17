const { Console } = require('console');
var Consolert = require('../src/index');; 


test("Should ascertain that true == true", () => {
    expect(true).toBe(true)
})

test("Should ascertain that Consolert is notNull", () => {
    expect(Consolert).not.toBeNull()
})

test("Should ascertain that console can be initiated.", () => {
    consolert = new Consolert()
    expect(consolert).toBeInstanceOf(Console)
})

test("Should ascertain that tag is properly passed ", () => {
    consolert = new Consolert({tag: "TAG"})
    expect(consolert).toBeInstanceOf(Console)
    expect(consolert.tag).toBe("TAG")
})

test("Should ascertain that debug is properly passed ", () => {
    consolert = new Consolert({debug: true})
    expect(consolert).toBeInstanceOf(Console)
    expect(consolert.debugMode).toBe(true)
})

test("Should ascertain that showTime is properly passed ", () => {
    consolert = new Consolert({showTime: false})
    expect(consolert).toBeInstanceOf(Console)
    expect(consolert.showTime).toBe(false)
})

test("Should ascertain that showTag is properly passed ", () => {
    consolert = new Consolert({showTag: false})
    expect(consolert).toBeInstanceOf(Console)
    expect(consolert.showTag).toBe(false)
})

test("Should ascertain that showType is properly passed ", () => {
    consolert = new Consolert({showType: false})
    expect(consolert).toBeInstanceOf(Console)
    expect(consolert.showType).toBe(false)
})