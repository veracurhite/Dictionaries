let dictionaryDictionary: any = {}

//% block="Dictionaries"
//% color=#555500
//% icon="\uf02d"
namespace dictionaries {
    //% block="Create new dictionary of name $name"
    export function create(name: string){
        dictionaryDictionary[name] = {}
    }
    //% block="Set/add value $valuename $value to dictionary $name"
    export function setoradd(valuename: string, value: any, name: string){
        dictionaryDictionary[name][valuename] = value
    }
    //% block="Get value at dictionary name $name value $valuename"
    export function get(name: string, valuename: string){
        return dictionaryDictionary[name][valuename]
    }
}