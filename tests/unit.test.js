const fs = require('fs')
const chalk = require('chalk')

const { Console } = require('console');
var Consolert = require('../src/index');



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

    consolert.setConfig({showType:true})
    expect(consolert.showType).toBe(true)
    
})

test("Should ascertain that showTag is properly passed ", () => {
    consolert = new Consolert({showTag: false})
    expect(consolert).toBeInstanceOf(Console)
    expect(consolert.showTag).toBe(false)

    consolert.setConfig({showTag:true})
    expect(consolert.showTag).toBe(true)
})

test("Should ascertain that showType is properly passed ", () => {
    consolert = new Consolert({showType: false})
    expect(consolert).toBeInstanceOf(Console)
    expect(consolert.showType).toBe(false)

    consolert.setConfig({showType:true})
    expect(consolert.showType).toBe(true)
})

test("Should ascertain that length of longes method works", () => {
    consolert = new Consolert()

    var longestLen = 0;
    for (method in consolert.METHODS) {
        longestLen = (method.length > longestLen) ? method.length : longestLen;
    }
    expect(consolert._getLengthOfLongestMethod()).toBe(longestLen);
})

test("Should ascertain that methods get called properly", () => {
    global.console = { 
        log: jest.fn(), 
        error: jest.fn(), 
        warn: jest.fn(), 
        info: jest.fn(), 
        debug: jest.fn(), 
    }
    
    var consolert = new Consolert({tag: "TAG", showTime: false, showType: false, showTag: false})

    var methods = consolert.METHODS
    expect(Object.keys(methods)).toEqual(expect.arrayContaining([ 'log', 'error', 'warn', 'info', 'debug' ]))

    for (method in methods) {
        consolert[method]("test")
        expect(global.console.log).toHaveBeenCalledWith('test')
    }
})

test("Should ascertain that setConfig is applied properly", () => {
    global.console = { log: jest.fn() }
    var consolert = new Consolert({showTime: false, showType: false, showTag: false})

    consolert.log("test")
    expect(global.console.log).toHaveBeenCalledWith('test')
    
    consolert.setConfig({tag: "TAG", showTag:true})

    let logColor = consolert.METHODS['log'].color
    consolert.log("test")
    expect(global.console.log).toHaveBeenCalledWith(chalk[logColor]("[TAG]"), 'test')

    consolert.setConfig({showType : true})
    consolert.log("test")
    expect(global.console.log).toHaveBeenCalledWith(
        chalk[logColor].inverse("LOG".padEnd(consolert._getLengthOfLongestMethod())),
        chalk[logColor]("[TAG]"), 
        'test')

})