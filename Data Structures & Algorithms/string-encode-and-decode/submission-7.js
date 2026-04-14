class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.reduce((acc, str) => {
            return `${acc}#${str.length}#${str}`;
        }, "")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];

        let i = 0;
        while (i < str.length) {
            const char = str[i]
            if (char !== "#") {
                break
            }

            let lengthStr = "";
            for (let j = i + 1; j < str.length; j++) {
                if (str[j] === "#") {
                    break;
                } else {
                    lengthStr += str[j];
                }
            }

            const segmentStartIndex = i + lengthStr.length + 2;
            const length = parseInt(lengthStr, 10);
            const segment = str.slice(segmentStartIndex, segmentStartIndex + length);
            result.push(segment);

            i += lengthStr.length + 2 + length;
        }

        return result;
    }
}
