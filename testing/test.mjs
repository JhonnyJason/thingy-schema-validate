import * as tested from "../output/index.js"

import {
    NUMBER, STRING, STRINGHEX, STRINGHEX32, STRINGHEX64, STRINGHEX128, 
    BOOLEAN, ARRAY, NUMBERORNULL, OBJECT, NONNULLOBJECT,
    validate
} from "thingy-schema-validate"


const schemaNumber = {
    member: NUMBER
}

const schemaString = {
    member: STRING
}

const schemaStringHex = {
    member: STRINGHEX
}

const schemaStringHex32 = {
    member: STRINGHEX32
}

const schemaStringHex64 = {
    member: STRINGHEX64
}


const schemaStringHex128 = {
    member: STRINGHEX128
}

const schemaBoolean = {
    member: BOOLEAN
}

const schemaArray = {
    member: ARRAY
}

const schemaObject = {
    member: OBJECT
}

const schemaNonNullObject = {
    member: NONNULLOBJECT
}

const schemaNumberOrNull = {
    member: NUMBERORNULL
}

const schemaStringOrNull = {
    member: STRINGORNULL
}

const schemaStringHexOrNull = {
        member: STRINGHEXORNULL
}

const schemaStringHex32OrNull = {
    member: STRINGHEX32ORNULL
}

const schemaStringHex64OrNull = {
    member: STRINGHEX64ORNULL
}

const schemaStringHex128OrNull = {
    member: STRINGHEX128ORNULL
}

const schemaBooleanOrNull = {
    member: BOOLEANORNULL
}

const schemaArrayOrNull = {
    member: ARRAYORNULL
}



const objNumber = {
    member: 0
}

const objString = {
    member: ""
}

// const objString = {
//     member: ""
// }


async function run() {

    validate( objNumber, schemaNumber )
    validate( objString, schemaString )
    //TODO actually test... 

    // validate( objStringHex, schemaStringHex )    
    // validate( objStringHex32, schemaStringHex32 )    
    // validate( objStringHex64, schemaStringHex64 )    
    // validate( objStringHex128, schemaStringHex128 )
    // validate( )
}

run()
