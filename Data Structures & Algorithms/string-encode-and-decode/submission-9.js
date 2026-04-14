class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.reduce((acc, str) => {
            return `${acc}${str.length}#${str}`;
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
            let cursor = i;
            while (str[cursor] !== "#") {
                cursor++;
            }

            const length = parseInt(str.substring(i, cursor));
            i = cursor + 1;
            cursor = i + length;
            result.push(str.substring(i, cursor));
            i = cursor;
        }

        return result;
    }
}
