function convertSnakeToCamel ( snakeCase ) {
    let split = snakeCase.split("");
    for ( let i = 0; i < split.length; i++ ) {
        if ( split[i] === "_" ) {
            if ( i === 0  ) {
                if ( split[i + 1] === "_" ) i++;
                continue;
            }
            if ( split[i + 1] === "_" ) i++;
            else if ( i + 1 < split.length ) {
                split = split.slice(0, i).concat(split.slice(i + 1));
                split[i] = split[i].toUpperCase();
            }
        }
    }
    return split.join("");
}

// console.log(convertSnakeToCamel('snake_case'));
// 'snakeCase'
// console.log(convertSnakeToCamel('is_flag_on'));
// // 'isFlagOn'
// console.log(convertSnakeToCamel('is_IOS_or_Android'));
// // 'isIOSOrAndroid'
// console.log(convertSnakeToCamel('_first_underscore'));
// // '_firstUnderscore'
// console.log(convertSnakeToCamel('last_underscore_'));
// // 'lastUnderscore_'
console.log(convertSnakeToCamel('_double__underscore_'));
// '_double__underscore_'


console.log(convertSnakeToCamel('__first_underscore'));
// '__firstUnderscore'
