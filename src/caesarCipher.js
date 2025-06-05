export function caesarCipher(string, shift){
    return string.split('').map(char => shiftChar(char, shift)).join('')
}

function shiftChar(char, shift){
    const isUpper = char >= "A" && char <= "Z";
    const isLower = char >= "a" && char <= "z";

    if(!isUpper && !isLower) return char;

    const base = isUpper? "A".charCodeAt(0) : "a".charCodeAt(0);
    const code = char.charCodeAt(0) - base;
    const shifted = (code + shift + 26) % 26;
    return String.fromCharCode(base + shifted);
}
