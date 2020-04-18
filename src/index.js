/**********************************************************************
 * @file        logger.js
 * @author      Rick van Rheenen
 * @license     MIT
 * @description Extends console logging by adding prefix and colors
 * @usage       const console = new (require("consolert"))(options)
 *                  OR
 *              const Consolert = require("./util/logger")
 *              const console = new Consolert(options)
 * 
 *              options: Object containing any of the following k/v pairs: 
 *                          tag      - String   (default: "N/A")
 *                          debug    - Boolean  (default: false) 
 *                          showTime - Boolean  (default: true) 
 *                          showTag  - Boolean  (default: true) 
 *                          showType - Boolean  (default: true) 
 *
 ***********************************************************************/

const { Console } = require('console');
const chalk = require("chalk")

module.exports = class Consolert extends Console {
    constructor(  {tag=["N/A"], debug=false, showTime=true, showTag=true, showType=true} = {}  ) {
        super(process.stdout);
        
        this.setConfig({tag, debug,showTime, showTag, showType})

        this.METHODS = {
            "log": {
                type: "LOG",
                color: "cyan",
                onlyInDebugMode: false,
            },
            "error": {
                type: "ERROR",
                color: "red",
                onlyInDebugMode: false,
            },
            "warn": {
                type: "WARN",
                color: "yellow",
                onlyInDebugMode: false,
            },
            "info": {
                type: "INFO",
                color: "green",
                onlyInDebugMode: false,
            },
            "debug": {
                type: "DEBUG",
                color: "magenta",
                onlyInDebugMode: true,
            },
            
        }
        this._populateMethods()
    }

    setConfig = (options = {}) => {
        this.tag       = options.hasOwnProperty('tag') ? options.tag : this.tag;
        this.debugMode = options.hasOwnProperty('debug') ? options.debug : this.debugMode;
        this.showTime  = options.hasOwnProperty('showTime') ? options.showTime : this.showTime;
        this.showTag   = options.hasOwnProperty('showTag') ? options.showTag : this.showTag;
        this.showType  = options.hasOwnProperty('showType') ? options.showType : this.showType;
    }

    _populateMethods() {
        Object.keys(this.METHODS).forEach(method => {
            this[method] = function() {
                if (this.METHODS[method].onlyInDebugMode && !this.debugMode) return
                console[method](
                    ...this._buildPrefix(this.METHODS[method].type, this.METHODS[method].color),
                    ...Object.values(arguments) // arguments
                )
            }
        })
    }

    _buildPrefix = (type="LOG", color="cyan") => {
        var prefix = []
        
        if (this.showType) prefix.push( chalk[color].inverse(this._getType(type)) )    // type
        if (this.showTime) prefix.push( chalk[color](this._getTime()) ) // time
        if (this.showTag)  prefix.push( chalk[color](this._getTag()) )  // tag
        
        return prefix
    }

    _getTime = () => {
        return new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
    }
    
    _getTag = () => {
         return `[${this.tag}]`
    }

    _getType = (type="LOG") => {
        return type.padEnd( this._getLengthOfLongestMethod() )
    }

    _getLengthOfLongestMethod = () => {
        return Math.max(...Object.keys(this.METHODS).map(m => m.length))
    }


}