/**
 * @fileoverview
 *    Excessive tests for {@link rotl} and {@link rotr}, which exist strictly
 *    to sate my sick obsession with watching shit line up in my text-editor.
 */
export default [[
	[0b11111000000000000000000000000000, 0b11110000000000000000000000000001],
	[0b11110000000000000000000000000001, 0b11100000000000000000000000000011],
	[0b11100000000000000000000000000011, 0b11000000000000000000000000000111],
	[0b11000000000000000000000000000111, 0b10000000000000000000000000001111],
	[0b10000000000000000000000000001111, 0b00000000000000000000000000011111],
	[0b00000000000000000000000000011111, 0b00000000000000000000000000111110],
	[0b00000000000000000000000000111110, 0b00000000000000000000000001111100],
	[0b00000000000000000000000001111100, 0b00000000000000000000000011111000],
	[0b00000000000000000000000011111000, 0b00000000000000000000000111110000],
	[0b00000000000000000000000111110000, 0b00000000000000000000001111100000],
	[0b00000000000000000000001111100000, 0b00000000000000000000011111000000],
	[0b00000000000000000000011111000000, 0b00000000000000000000111110000000],
	[0b00000000000000000000111110000000, 0b00000000000000000001111100000000],
	[0b00000000000000000001111100000000, 0b00000000000000000011111000000000],
	[0b00000000000000000011111000000000, 0b00000000000000000111110000000000],
	[0b00000000000000000111110000000000, 0b00000000000000001111100000000000],
	[0b00000000000000001111100000000000, 0b00000000000000011111000000000000],
	[0b00000000000000011111000000000000, 0b00000000000000111110000000000000],
	[0b00000000000000111110000000000000, 0b00000000000001111100000000000000],
	[0b00000000000001111100000000000000, 0b00000000000011111000000000000000],
	[0b00000000000011111000000000000000, 0b00000000000111110000000000000000],
	[0b00000000000111110000000000000000, 0b00000000001111100000000000000000],
	[0b00000000001111100000000000000000, 0b00000000011111000000000000000000],
	[0b00000000011111000000000000000000, 0b00000000111110000000000000000000],
	[0b00000000111110000000000000000000, 0b00000001111100000000000000000000],
	[0b00000001111100000000000000000000, 0b00000011111000000000000000000000],
	[0b00000011111000000000000000000000, 0b00000111110000000000000000000000],
	[0b00000111110000000000000000000000, 0b00001111100000000000000000000000],
	[0b00001111100000000000000000000000, 0b00011111000000000000000000000000],
	[0b00011111000000000000000000000000, 0b00111110000000000000000000000000],
	[0b00111110000000000000000000000000, 0b01111100000000000000000000000000],
	[0b01111100000000000000000000000000, 0b11111000000000000000000000000000],
],[
	[0b11100011111000011001000001110001, 0b10001111100001100100000111000111],
	[0b10001111100001100100000111000111, 0b00111110000110010000011100011110],
	[0b00111110000110010000011100011110, 0b11111000011001000001110001111000],
	[0b11111000011001000001110001111000, 0b11100001100100000111000111100011],
	[0b11100001100100000111000111100011, 0b10000110010000011100011110001111],
	[0b10000110010000011100011110001111, 0b00011001000001110001111000111110],
	[0b00011001000001110001111000111110, 0b01100100000111000111100011111000],
	[0b01100100000111000111100011111000, 0b10010000011100011110001111100001],
	[0b10010000011100011110001111100001, 0b01000001110001111000111110000110],
	[0b01000001110001111000111110000110, 0b00000111000111100011111000011001],
	[0b00000111000111100011111000011001, 0b00011100011110001111100001100100],
	[0b00011100011110001111100001100100, 0b01110001111000111110000110010000],
	[0b01110001111000111110000110010000, 0b11000111100011111000011001000001],
	[0b11000111100011111000011001000001, 0b00011110001111100001100100000111],
	[0b00011110001111100001100100000111, 0b01111000111110000110010000011100],
	[0b01111000111110000110010000011100, 0b11100011111000011001000001110001],
],[
	[0b01001010011011110110100001101110, 0b01010011011110110100001101110010],
	[0b01010011011110110100001101110010, 0b10011011110110100001101110010010],
	[0b10011011110110100001101110010010, 0b11011110110100001101110010010100],
	[0b11011110110100001101110010010100, 0b11110110100001101110010010100110],
	[0b11110110100001101110010010100110, 0b10110100001101110010010100110111],
	[0b10110100001101110010010100110111, 0b10100001101110010010100110111101],
	[0b10100001101110010010100110111101, 0b00001101110010010100110111101101],
	[0b00001101110010010100110111101101, 0b01101110010010100110111101101000],
	[0b01101110010010100110111101101000, 0b01110010010100110111101101000011],
	[0b01110010010100110111101101000011, 0b10010010100110111101101000011011],
	[0b10010010100110111101101000011011, 0b10010100110111101101000011011100],
],[
	[0b11110000100111111001100010000010, 0b00001001111110011000100000101111],
	[0b00001001111110011000100000101111, 0b10011111100110001000001011110000],
	[0b10011111100110001000001011110000, 0b11111001100010000010111100001001],
	[0b11111001100010000010111100001001, 0b10011000100000101111000010011111],
	[0b10011000100000101111000010011111, 0b10001000001011110000100111111001],
	[0b10001000001011110000100111111001, 0b10000010111100001001111110011000],
	[0b10000010111100001001111110011000, 0b00101111000010011111100110001000],
	[0b00101111000010011111100110001000, 0b11110000100111111001100010000010],
],[
	[0b01100010011010010111010001110011, 0b01001101001011101000111001101100],
	[0b01001101001011101000111001101100, 0b10100101110100011100110110001001],
	[0b10100101110100011100110110001001, 0b10111010001110011011000100110100],
	[0b10111010001110011011000100110100, 0b01000111001101100010011010010111],
	[0b01000111001101100010011010010111, 0b11100110110001001101001011101000],
	[0b11100110110001001101001011101000, 0b11011000100110100101110100011100],
	[0b11011000100110100101110100011100, 0b00010011010010111010001110011011],
	[0b11111000001111111111000000011111, 0b00000111111111100000001111111111],
	[0b00000111111111100000001111111111, 0b11111111110000000111111111100000],
	[0b11111111110000000111111111100000, 0b11111000000011111111110000011111],
	[0b11111000000011111111110000011111, 0b00000001111111111000001111111111],
	[0b00000001111111111000001111111111, 0b00111111111100000111111111100000],
	[0b00111111111100000111111111100000, 0b11111110000011111111110000000111],
	[0b11111110000011111111110000000111, 0b11000001111111111000000011111111],
	[0b11000001111111111000000011111111, 0b00111111111100000001111111111000],
	[0b00111111111100000001111111111000, 0b11111110000000111111111100000111],
],[
	[0b11111000000000000000000000000000, 0b00000000000000000000000000111110],
	[0b00000000000000000000000000111110, 0b00000000000000000000111110000000],
	[0b00000000000000000000111110000000, 0b00000000000000111110000000000000],
	[0b00000000000000111110000000000000, 0b00000000111110000000000000000000],
	[0b00000000111110000000000000000000, 0b00111110000000000000000000000000],
	[0b00111110000000000000000000000000, 0b10000000000000000000000000001111],
	[0b10000000000000000000000000001111, 0b00000000000000000000001111100000],
],[
	[0b11111000000000000000000000000000, 0b00000000000000000000000001111100],
	[0b00000000000000000000000001111100, 0b00000000000000000011111000000000],
	[0b00000000000000000011111000000000, 0b00000000000111110000000000000000],
	[0b00000000000111110000000000000000, 0b00001111100000000000000000000000],
	[0b00001111100000000000000000000000, 0b11000000000000000000000000000111],
	[0b11000000000000000000000000000111, 0b00000000000000000000001111100000],
	[0b00000000000000000000001111100000, 0b00000000000000011111000000000000],
	[0b00000000000000011111000000000000, 0b00000000111110000000000000000000],
],[
	[0b11111110000000000000000001111111, 0b00000000000000000111111111111110],
	[0b00000000000000000111111111111110, 0b00000000011111111111111000000000],
	[0b00000000011111111111111000000000, 0b01111111111111100000000000000000],
	[0b01111111111111100000000000000000, 0b11111110000000000000000001111111],
	[0b11111110000000000000000001111111, 0b00000000000000000111111111111110],
	[0b00000000000000000111111111111110, 0b00000000011111111111111000000000],
	[0b00000000011111111111111000000000, 0b01111111111111100000000000000000],
	[0b01111111111111100000000000000000, 0b11111110000000000000000001111111],
	[0b11111110000000000000000001111111, 0b00000000000000000111111111111110],
],[
	[0b11110000111100001111000011110000, 0b11100001111000011110000111100001],
	[0b11100001111000011110000111100001, 0b11000011110000111100001111000011],
	[0b11000011110000111100001111000011, 0b10000111100001111000011110000111],
	[0b10000111100001111000011110000111, 0b00001111000011110000111100001111],
	[0b00001111000011110000111100001111, 0b00011110000111100001111000011110],
	[0b00011110000111100001111000011110, 0b00111100001111000011110000111100],
	[0b00111100001111000011110000111100, 0b01111000011110000111100001111000],
	[0b01111000011110000111100001111000, 0b11110000111100001111000011110000],
],[
	[0b11111000001111111111000000001100, 0b11111111110000000011001111100000],
	[0b11111111110000000011001111100000, 0b00000000110011111000001111111111],
	[0b00000000110011111000001111111111, 0b00111110000011111111110000000011],
	[0b00111110000011111111110000000011, 0b00111111111100000000110011111000],
	[0b00111111111100000000110011111000, 0b11000000001100111110000011111111],
	[0b11000000001100111110000011111111, 0b11001111100000111111111100000000],
	[0b11001111100000111111111100000000, 0b00001111111111000000001100111110],
	[0b00001111111111000000001100111110, 0b11110000000011001111100000111111],
	[0b11110000000011001111100000111111, 0b00110011111000001111111111000000],
],[
	[0b00000000000000011111111111111111, 0b00001111111111111111100000000000],
	[0b00001111111111111111100000000000, 0b11111111110000000000000001111111],
	[0b11111111110000000000000001111111, 0b00000000000000111111111111111110],
	[0b00000000000000111111111111111110, 0b00011111111111111111000000000000],
	[0b00011111111111111111000000000000, 0b11111111100000000000000011111111],
	[0b11111111100000000000000011111111, 0b00000000000001111111111111111100],
	[0b00000000000001111111111111111100, 0b00111111111111111110000000000000],
	[0b00111111111111111110000000000000, 0b11111111000000000000000111111111],
	[0b11111111000000000000000111111111, 0b00000000000011111111111111111000],
	[0b00000000000011111111111111111000, 0b01111111111111111100000000000000],
],[
	[0b11111000001110000000000000000000, 0b10000000000000000000111110000011],
	[0b10000000000000000000111110000011, 0b00000000111110000011100000000000],
	[0b00000000111110000011100000000000, 0b10000011100000000000000000001111],
	[0b10000011100000000000000000001111, 0b00000000000000001111100000111000],
	[0b00000000000000001111100000111000, 0b00001111100000111000000000000000],
	[0b00001111100000111000000000000000, 0b00111000000000000000000011111000],
	[0b00111000000000000000000011111000, 0b00000000000011111000001110000000],
	[0b00000000000011111000001110000000, 0b11111000001110000000000000000000],
	[0b11111000001110000000000000000000, 0b10000000000000000000111110000011],
	[0b10000000000000000000111110000011, 0b00000000111110000011100000000000],
],[
	[0b11111111111100000000000000001110, 0b00000000000000011101111111111110],
	[0b00000000000000011101111111111110, 0b00111011111111111100000000000000],
	[0b00111011111111111100000000000000, 0b11111000000000000000011101111111],
	[0b11111000000000000000011101111111, 0b00000000111011111111111100000000],
	[0b00000000111011111111111100000000, 0b11111111111000000000000000011101],
	[0b11111111111000000000000000011101, 0b00000000000000111011111111111100],
	[0b00000000000000111011111111111100, 0b01110111111111111000000000000000],
	[0b01110111111111111000000000000000, 0b11110000000000000000111011111111],
	[0b11110000000000000000111011111111, 0b00000001110111111111111000000000],
	[0b00000001110111111111111000000000, 0b11111111110000000000000000111011],
	[0b11111111110000000000000000111011, 0b00000000000001110111111111111000],
	[0b00000000000001110111111111111000, 0b11101111111111110000000000000000],
],[
	[0b00011101011100000101011110111010, 0b00010101111011101000011101011100],
	[0b00010101111011101000011101011100, 0b10100001110101110000010101111011],
	[0b10100001110101110000010101111011, 0b11000001010111101110100001110101],
	[0b11000001010111101110100001110101, 0b10111010000111010111000001010111],
	[0b10111010000111010111000001010111, 0b01011100000101011110111010000111],
	[0b01011100000101011110111010000111, 0b01111011101000011101011100000101],
	[0b01111011101000011101011100000101, 0b01110101110000010101111011101000],
	[0b01110101110000010101111011101000, 0b01010111101110100001110101110000],
	[0b01010111101110100001110101110000, 0b10000111010111000001010111101110],
	[0b10000111010111000001010111101110, 0b00000101011110111010000111010111],
	[0b00000101011110111010000111010111, 0b11101000011101011100000101011110],
	[0b11101000011101011100000101011110, 0b01110000010101111011101000011101],
	[0b01110000010101111011101000011101, 0b11101110100001110101110000010101],
],[
	[0b10000010100000100000001100100100, 0b00000001100100100100000101000001],
	[0b00000001100100100100000101000001, 0b00100000101000001000000011001001],
	[0b00100000101000001000000011001001, 0b01000000011001001001000001010000],
	[0b01000000011001001001000001010000, 0b01001000001010000010000000110010],
	[0b01001000001010000010000000110010, 0b00010000000110010010010000010100],
	[0b00010000000110010010010000010100, 0b10010010000010100000100000001100],
	[0b10010010000010100000100000001100, 0b00000100000001100100100100000101],
	[0b00000100000001100100100100000101, 0b00100100100000101000001000000011],
	[0b00100100100000101000001000000011, 0b01000001000000011001001001000001],
	[0b01000001000000011001001001000001, 0b11001001001000001010000010000000],
	[0b11001001001000001010000010000000, 0b01010000010000000110010010010000],
],[
	[0b10110011100101100001101001110101, 0b00011010011101011011001110010110],
	[0b00011010011101011011001110010110, 0b10110011100101100001101001110101],
	[0b00000000111111110000000011111111, 0b00000000111111110000000011111111],
],[
	[0b11111000000000000000000000000000, 0b00000000000000011111000000000000],
	[0b00000000000000011111000000000000, 0b11100000000000000000000000000011],
	[0b11100000000000000000000000000011, 0b00000000000001111100000000000000],
	[0b00000000000001111100000000000000, 0b10000000000000000000000000001111],
	[0b10000000000000000000000000001111, 0b00000000000111110000000000000000],
	[0b00000000000111110000000000000000, 0b00000000000000000000000000111110],
	[0b00000000000000000000000000111110, 0b00000000011111000000000000000000],
	[0b00000000011111000000000000000000, 0b00000000000000000000000011111000],
	[0b00000000000000000000000011111000, 0b00000001111100000000000000000000],
	[0b00000001111100000000000000000000, 0b00000000000000000000001111100000],
	[0b00000000000000000000001111100000, 0b00000111110000000000000000000000],
	[0b00000111110000000000000000000000, 0b00000000000000000000111110000000],
	[0b00000000000000000000111110000000, 0b00011111000000000000000000000000],
	[0b00011111000000000000000000000000, 0b00000000000000000011111000000000],
	[0b00000000000000000011111000000000, 0b01111100000000000000000000000000],
	[0b01111100000000000000000000000000, 0b00000000000000001111100000000000],
	[0b00000000000000001111100000000000, 0b11110000000000000000000000000001],
],[
	[0b10110101010100010101110100110000, 0b01110100110000101101010101000101],
	[0b01110100110000101101010101000101, 0b01010101000101011101001100001011],
	[0b01010101000101011101001100001011, 0b01001100001011010101010001010111],
	[0b01001100001011010101010001010111, 0b01010001010111010011000010110101],
	[0b01010001010111010011000010110101, 0b11000010110101010100010101110100],
	[0b11000010110101010100010101110100, 0b00010101110100110000101101010101],
	[0b00010101110100110000101101010101, 0b00101101010101000101011101001100],
	[0b00101101010101000101011101001100, 0b01011101001100001011010101010001],
	[0b01011101001100001011010101010001, 0b11010101010001010111010011000010],
	[0b11010101010001010111010011000010, 0b11010011000010110101010100010101],
	[0b11010011000010110101010100010101, 0b01010100010101110100110000101101],
]];
