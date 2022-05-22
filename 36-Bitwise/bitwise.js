/*
&	AND	Sets each bit to 1 if both bits are 1
|	OR	Sets each bit to 1 if one of two bits is 1
^	XOR	Sets each bit to 1 if only one of two bits is 1
~	NOT	Inverts all the bits
<<	Zero fill left shift	Shifts left by pushing zeros in from the right and let the leftmost bits fall off
>>	Signed right shift	Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
>>>	Zero fill right shift	Shifts right by pushing zeros in from the left, and let the rightmost bits fall off

5 & 1	1	0101 & 0001	 0001
5 | 1	5	0101 | 0001	 0101
~ 5	10	 ~0101	 1010
5 << 1	10	0101 << 1	 1010
5 ^ 1	4	0101 ^ 0001	 0100
5 >> 1	2	0101 >> 1	 0010
5 >>> 1	2	0101 >>> 1	 0010
*/

// converting dec to binary
const n = 5;
console.log(n.toString(2)); // returns 101. binary 0101
const x = 1;
console.log(x.toString(2)); // returns 1. binary 0001
or
function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}

// converting binary to decimal:
console.log(0b0101.toString(10)); // add extra 0b
or
function bin2dec(bin) {
    return parseInt(bin, 2).toString(10);
}