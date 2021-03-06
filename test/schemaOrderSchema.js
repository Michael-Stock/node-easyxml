module.exports = {
    "schemaRoot" : {
        "0" : {
            "ElementName" : "single",
            "Type" : "sz" // testing where there is no matching type in the schema
        },
        "1" : {
            "ElementName" : "deeper",
            "Type" : "deepRoot" // will pass to next level in the schema
        }
    },

    "deepRoot" : {
        "0" : {
            "ElementName" : "many",
            "Type" : null // specifically no schema fo sub-type
        }
        // the other elements are not specified, and should come in normal key order
    }

}
