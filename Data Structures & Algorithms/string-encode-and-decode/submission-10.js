class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.reduce((acc, str) => {
            return `${acc}${str.length}#${str}`;
        }, "");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];

        let i = 0;
        while (i < str.length) {
            let lengthStr = "";
            let cursor = i;
            while (cursor < str.length) {
                if (str[cursor] === "#") {
                    break;
                } else {
                    lengthStr += str[cursor];
                    cursor++;
                }
            }

            const length = parseInt(lengthStr);
            const base = cursor + 1;
            const segment = str.substring(base, base + length);
            result.push(segment);

            i = base + length;
        }

        return result
    }
}
