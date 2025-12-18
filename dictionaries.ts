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
    //% block="Create new dictionary inside of dictionary $name with name $valuename"
    export function createNested(name: string, valuename: string) {
        dictionaries.setoradd(valuename, {}, name)
    }
    //% block="Set/add value $valuename $value in nested dictionary $name that is in dictionary $name1"
    export function setoraddnested(valuename: string, value: any, name: string, name1: string) {
        dictionaryDictionary[name1][name][valuename] = value
    }
    //% block="Get value at nested dictionary $name that is is dictionary $name1 at value $valuename"
    export function getNested(name:string,name1:string,valuename:string){
        return dictionaryDictionary[name1][name][valuename]
    }
}