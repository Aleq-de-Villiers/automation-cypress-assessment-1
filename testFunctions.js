// Problem 1 - Mathematical operators

export function numbers() {
    let response;

    /**
     * Using the following variables, return the number 89
     * 
     * The variables can be used multiple times
     */

    const a = 4, b = 6, c = 1;

    // ----------- DO NOT EDIT ABOVE -----------

    
    
    response = (a + b) * 9 - c



    // ----------- DO NOT EDIT BELOW -----------

    return response;
}

// Problem 2 - String manipulation

export function strings() {
    let response;

    /**
     * Using the following variables, return the following string:
     * "Happy birthday to you!"
     * 
     * The variables can be used multiple times
     */

    const a = "Happy you", b = "!", c = "to birthday";

    // ----------- DO NOT EDIT ABOVE -----------

    
    let a_b = a.split(" ")
    let c_b = c.split(" ")
    response = [a_b[0], c_b[1], c_b[0], [a_b[1], b].join("")].join(" ")



    // ----------- DO NOT EDIT BELOW -----------

    return response;
}

// Problem 3 - Array merging

export function arrays() {
    let response;

    /**
     * Using the following variables, return the array:
     * [1, "Tom", 2, "James", 3, "Jess", 4, "Chris", 5, "Mary"]
     * 
     * The variables can be used multiple times
     */

    const a = [1, 2, 3, 4, 5], b = ["Tom", "James", "Jess", "Chris", "Mary"];

    // ----------- DO NOT EDIT ABOVE -----------

    
    response = []
    for (let i = 0; i < a.length; i++) {
        response.push(a[i])
        response.push(b[i])
    }



    // ----------- DO NOT EDIT BELOW -----------

    return response;
}

// Problem 4 - Object accessing

export function objects() {
    let response;

    /**
     * Using the following variable, return the mock users city, and second favourite interest, separated with &:
     * "Oxford & Golf"
     */
    const a = {
        name: "Angela",
        age: 25,
        location: {
            city: "Oxford",
            country: "United Kingdom",
        },
        interests: [
            "Cycling",
            "Golf",
            "Skiing"
        ]
    };

    // ----------- DO NOT EDIT ABOVE -----------


    
    response = [a.location.city, a.interests[1]].join(" & ")



    // ----------- DO NOT EDIT BELOW -----------

    return response;
}

// Problem 5 - Conditional responses

export function conditionals() {
    let response;

    /**
     * When the isGreenLight variable is true, return:
     * "Green Light!"
     * 
     * When the isGreenLight variable is false, return:
     * "Red Light!"
     */
    let isGreenLight = false;

    // ----------- DO NOT EDIT ABOVE -----------



    if (isGreenLight) {
        response = "Green Light!"
    } else {
        response = "Red Light!"
    }



    // ----------- DO NOT EDIT BELOW -----------

    return [ response, isGreenLight ];
}

// Problem 6 - Looping

export function loops() {
    let response;

    /**
     * For each of the following items in the array, increment the counter by 2.5 using a loop
     */
    const arr = [9, 16, 2, 14, 11, 5, 24, 6, 10, 5, 19, 21, 17];
    let counter = 0;

    // ----------- DO NOT EDIT ABOVE -----------

    let counter_b = arr.length * 2.5

    for (let i = 0; i < arr.length; i++) {
        counter += 2.5
    }


    // ----------- DO NOT EDIT BELOW -----------

    response = counter;
    return response;
}