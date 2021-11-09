exports.string_parsing = function (string)
{
    const result = [];
    const vowels = 'aeiouy';
    let numberOfvowels = 0;
    for (let i = 0, c = ''; c = string.charAt(i); i++)
    {
        if (vowels.includes(c))
        {
            numberOfvowels++;
        }
    }
    console.log('Number of vowels in string: ' + numberOfvowels);
    console.log('Number of consonants in string: ' + (string.length-numberOfvowels));
    console.log('String length: ' + string.length);

    result.push(numberOfvowels);
    result.push(string.length-numberOfvowels);
    result.push(string.length);
    console.log(result);
}