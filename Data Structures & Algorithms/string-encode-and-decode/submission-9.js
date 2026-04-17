class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.reduce((acc, str) => `${acc}${str.length}#${str}`, "");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];

        let i = 0;
        while (i < str.length) {
            console.log(i);
            if (str[i] === undefined) {
                break;
            }

            let j = i;
            
            let lengthStr = "";
            while (j < str.length) {
                if (str[j] !== "#") {
                    lengthStr += str[j];
                    j++;
                } else {
                    break;
                }
            }
            
            const length = parseInt(lengthStr);
            const segment = str.substring(j + 1, j + 1 + length);
            result.push(segment);

            i = j + 1 + length;
        }

        return result;
    }
}
