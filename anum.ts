/**
 * What is an enum
An enum is a group of named constant values. Enum stands for enumerated type.
To define an enum, you follow these steps:
First, use the enum keyword followed by the name of the enum.
Then, define constant values for the enum.
 */
enum Month {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
};

function isItSummer(month: Month) {
    let isSummer: boolean;
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}
console.log(isItSummer(Month.Jan));
