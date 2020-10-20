//this is just my ridiculous file to translate color values so that I can copy and paste it into a color website.  Will delete later
export const colors = `
#730000
#960000
#B90900
#DC1F13
#FF3B30
#FF463B
#FF5349
#FF6258
#FF736A
#FF8680
`

export const gett = colors.trim(/['"]+/g).split(/\s+/)



export const cat = gett.map((item)=>{return " " + `"${item}"`})
console.log('cat', cat)
//export const reversed = "[" + cat.reverse() + " ]"
export const reversed = "[" + cat + " ]"


const newcat = cat.map((val)=> {
    return `{ "name": "color", "color": ${val} }`
})

export const reversednewcat = "[" + newcat + " ]"



console.log('newcat', newcat)

console.log('reversed', reversed)
const lightcolors = {
    orange: [ "#FFF3E9", "#FFE5CF", "#FFCBA4", "#FFA76A", "#FB8132", "#F5660F", "#E55E0D", "#D35307", "#BF4702", "#9A3500" ],
}


export const newgett = colors.split("#")
export const cattt = newgett.map((item)=>{return " " + `"${item}"`})


const jsoncolors = newgett.map((value) => {
    return { "name": "color", "color": value }
})


console.log('jsoncolors', jsoncolors)


