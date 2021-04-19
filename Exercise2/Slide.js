let curImgCode = 0
let srcLoc = "./image/"
let codeImgMap = {
    0: (srcLoc + "mf.jfif"),
    1: (srcLoc + "Akali.jpg"),
    2: (srcLoc + "Kaisa.jpg"),
    3: (srcLoc + "Bee.jfif"),
    4: (srcLoc + "Beijing.jfif")
}

function nextImg() {
    curImgCode = mod(curImgCode + 1, 5)
    document.getElementById("myImgId").src = codeImgMap[curImgCode]
}

function prevImg() {
    curImgCode = mod(curImgCode - 1, 5)
    document.getElementById("myImgId").src = codeImgMap[curImgCode]
}

function mod(num, n) {
    if(num < 0) {
        return((num % n) + n)
    }
    return(num % n)
}