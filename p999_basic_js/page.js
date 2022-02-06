function equalityTest(myVal){
    console.log(myVal == 10)
    console.log(1 == 1)
    console.log(1 == 2)
    console.log(1 == "1")
    console.log("3" ==3)
}

function testStrictEqual(){
    console.log("3" == 3)
    console.log("3" === 3)
}

function moreTest(){
    console.log(1 !=  2) // yes, not euqla
    console.log(1 != "1") // no, they are qual
    console.log(1 != '1') // no, they are qual
    console.log(1 != true) // no they are equal
    console.log(0 != false) // no they are equal
    console.log(1 !== 32) // yes, not equal.
}

function testLogicalAnd(val){
    if (val >=25 && val <=50){
        return "Yes"
    }
    return "No"
}

function testLogicalOr(val) {

    if (val <5 || val > 10){
        return "Out"
    }

    return "In"
}

console.log(testLogicalOr())
