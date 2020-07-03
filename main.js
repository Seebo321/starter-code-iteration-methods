// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')
function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}
const greenEyes1 = users.filter(user => user.eyeColor === "green")
// OR...
const greenEyes2 = users.filter(function (user) {
    return user.eyeColor === "green"
})
printKata(0, JSON.stringify(greenEyes1))   // If you don't have this function already, see the "Set up" section above.

                        // kata 1
const isactive = users.filter(user => user.isActive === true)
printKata(1, isactive)
                        // kata 2
const emails = users.map(user => user.email)
printKata(2, emails)
                        // kata 3
const companys = users.some(user => user.company === "OVATION")
printKata(3, companys)
                        // kata 4
const oldage = users.find(user => user.age>=38)
printKata(4, oldage)
// const oldagename=oldage.name
// printKata(4, oldagename)
                        // kata 5
const oldAgeActive = isactive.find(user => user.age>=38 )
// printKata(5, oldAgeActive.name)
printKata(5, oldAgeActive)

                        // kata 6
const balanceZ = users.filter(user => user.company === 'ZENCO').map(user => user.balance)
printKata(6, balanceZ)
                        // kata 7
const fugiage = users.filter(user => user.tags.includes('fugiat')).map(user => user.age)
printKata(7, fugiage)
                        