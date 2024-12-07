
// 1) Write a function named calculateDifference that takes two arguments and returns the difference between the first and second arguments.
// 1) calculateDifference নামে একটি ফাংশন লিখুন যা দুটি আর্গুমেন্ট নেয় এবং প্রথম এবং দ্বিতীয় আর্গুমেন্টের মধ্যে পার্থক্য প্রদান করে।
    
function calculateDifference(first, second){
    return first, second ;
}

// 2) Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.
// 2) isOdd নামের একটি ফাংশন লিখুন যেটি একটি আর্গুমেন্ট নেয় এবং সংখ্যাটি বিজোড় হলে true এবং না হলে মিথ্যা দেয়।

function isOdd(numbers){
    return numbers % 2 !== 0;
}

// 3) Write a function named findMin that takes an array of numbers and returns the smallest number from the array.
// 3) findMin নামে একটি ফাংশন লিখুন যা সংখ্যার অ্যারে নেয় এবং অ্যারে থেকে সবচেয়ে ছোট সংখ্যাটি ফেরত দেয়।

function findMin(numbers){
    return Math.min(...numbers)
}

// 4) Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.
// 4) filterEvenNumbers নামে একটি ফাংশন লিখুন যা সংখ্যার অ্যারে নেয় এবং শুধুমাত্র জোড় সংখ্যা ধারণকারী একটি নতুন অ্যারে প্রদান করে।

function filterEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
}

// 5) Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.
// 5) sortArrayDescending নামে একটি ফাংশন লিখুন যা সংখ্যার একটি অ্যারে নেয় এবং একটি নতুন অ্যারে প্রদান করে যা অবতরণ ক্রমে সাজানো হয়।

function sortArrayDescending(numbers){
    return [...numbers].sort((a, b) => b - a);
}

// 6) Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.
// 6) LowercaseFirstLetter নামে একটি ফাংশন লিখুন যা একটি স্ট্রিং নেয় এবং প্রথম অক্ষর ছোট হাতের সাথে একই স্ট্রিং প্রদান করে।
function LowercaseFirstLetter(str){
    if (str.length === 0) {
        return str; // Return empty string if input is empty
    }
    return str.charAt(0).toLowerCase() + str.slice(1);
}

// 7) Write a function named findAverage that takes an array of numbers and returns the average of all elements.
// 7) findAverage নামে একটি ফাংশন লিখুন যা সংখ্যার অ্যারে নেয় এবং সমস্ত উপাদানের গড় প্রদান করে।
function findAverage(numbers) {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

// 8) Write a function named isLeapYear that takes a year as an argument and returns true if the year is a leap year, and false if it is not.
// 8) isLeapYear নামে একটি ফাংশন লিখুন যেটি একটি আর্গুমেন্ট হিসাবে একটি বছর নেয় এবং যদি বছরটি একটি লিপ ইয়ার হয় তবে সত্য এবং যদি এটি না হয় তাহলে মিথ্যা দেয়৷

function isLeapYear(year){
    return (year % 4 === 0 && year % 100 !== 0)||(year % 400 === 0);
}


// each function call is here
console.log(calculateDifference(20, 15));
console.log(isOdd(31));
console.log(findMin([5, 2, 8, 1, 4, 3, 4, 9, 7, 6]));
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 20]));
console.log(sortArrayDescending([1, 2, 3, 4, 5, 6, 20]));
console.log(LowercaseFirstLetter("ASSIGNMENT"));
console.log(findAverage([2, 3, 4, 5, 6, 20, 30, 60, 95]));
console.log(isLeapYear(2000));


