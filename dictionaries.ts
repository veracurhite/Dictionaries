let dictionaryDictionary: any = {}
let jbvhcfhbufdvihuhbhn: number
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
    //% block="Mass-add names $names values $values to dictionary $dict"
    export function massAdd(names: Array<string>,values: Array<any>,dict: string){
        if(names.length!=values.length){
            throw "lists must be same length"
        }
        for(jbvhcfhbufdvihuhbhn=0;jbvhcfhbufdvihuhbhn<names.length;jbvhcfhbufdvihuhbhn++){
            dictionaryDictionary[dict][names[jbvhcfhbufdvihuhbhn]]=values[jbvhcfhbufdvihuhbhn]
        }
    }
    //% block="Mass-add names $names values $values to dictionary $dict in dictionary $dictIn"
    export function massAddNested(names: Array<string>, values: Array<any>, dict: string, dictIn: string){
        if (names.length != values.length) {
            throw "lists must be same length"
        }
        for (jbvhcfhbufdvihuhbhn = 0; jbvhcfhbufdvihuhbhn < names.length; jbvhcfhbufdvihuhbhn++) {
            dictionaryDictionary[dictIn][dict][names[jbvhcfhbufdvihuhbhn]] = values[jbvhcfhbufdvihuhbhn]
        }
    }
    //% block="Get length of dictionary $dict"
    export function getLength(dict: string){
        return dictionaryDictionary[dict].length
    }
    //% block="Get length of dictionary $dict in dictionary $dictIn"
    export function getNestedLength(dict: string,dictIn: string) {
        return dictionaryDictionary[dictIn][dict].length
    }
}