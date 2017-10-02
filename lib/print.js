module.exports.printName = function (name, familyName) {
//my public function
    if (!name && !familyName)
        console.log("Did you forget your name?")
    else
        console.log("Your lovely name is:" + (name ? (" " + myToUpperCase(name)) : "") + (familyName ? (" " + myToUpperCase(familyName)) : ""))
};

function myToUpperCase(name) {
    return name.toUpperCase()
//My private function
}
