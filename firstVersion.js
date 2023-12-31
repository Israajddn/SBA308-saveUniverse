// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
        {
            id: 1,
            name: "Declare a Variable",
            due_at: "2023-01-25",
            points_possible: 50
        },
        {
            id: 2,
            name: "Write a Function",
            due_at: "2023-02-27",
            points_possible: 150
        },
        {
            id: 3,
            name: "Code the World",
            due_at: "3156-11-15",
            points_possible: 500
        }
    ]
};

// The provided learner submission data.
const LearnerSubmissions = [
    {
        learner_id: 125,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-25",
            score: 47
        }
    },
    {
        learner_id: 125,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-02-12",
            score: 150
        }
    },
    {
        learner_id: 125,
        assignment_id: 3,
        submission: {
            submitted_at: "2023-01-25",
            score: 400
        }
    },
    {
        learner_id: 132,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-24",
            score: 39
        }
    },
    {
        learner_id: 132,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-03-07",
            score: 140
        }
    }
];


function getLearnerData(CourseInfo, AssignmentGroup, [LearnerSubmissions]) {
    // here, we would process this data to achieve the desired result.
    const result = [];

  


    return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);






// the ID of the learner for which this data has been collected
let learners_ids = [];
let arr = [];

LearnerSubmissions.forEach(learner => {
    const obj = {
        learnerId: learner.learner_id,
        assignmentId: learner.assignment_id,
        
    };
   arr.push(obj);

    // for (const key in learner) {
    //     if (key === 'learner_id' && !(learners_ids.includes(learner[key])))
    //         learners_ids.push(learner[key]);
    // }
});
console.log(arr);


// the ID of the learner for which this data has been collected
learners_ids = [];
LearnerSubmissions.forEach(learner => {
    for (const key in learner) {
        if (key === 'learner_id' && !(learners_ids.includes(learner[key])))
            learners_ids.push(learner[key]);
    }
});
console.log(learners_ids);


/** each assignment should have a key with its ID,
 * and the value associated with it should be the percentage that
 * the learner scored on the assignment (submission.score / points_possible)
*/
LearnerSubmissions.forEach(learner => {
    for (const key in learner) {
        const learnerObj = learner[key];
        for (const grade in learnerObj) {
            if (key === 'score') {

            }
        }
    }
});

// assignmentsTotal
let assignmentsTotal = 0;
for (const key in AssignmentGroup) {
    if (key === "assignments") {
        AssignmentGroup[key].forEach(element => {
            for (const keyElement in element) {
                if (keyElement === "points_possible") {
                    assignmentsTotal += element[keyElement];
                }
            }
        })
    }
}
console.log(assignmentsTotal);

// converted objects of learners into multiple arrays
let learners = [];
LearnerSubmissions.forEach(learner => {
    learners.push(Object.values(learner));
});
console.log(learners);

// converted objects of submissions into arrays
let learnersArray = [];

for (let i = 0; i < learners.length; i++) {
    for (let j = 0; j < learners[i].length; j++) {
    if (typeof learners[i][j] === "object") {
        
        learnersArray.push(Object.values(learners[i][j]));
    } 
}
};
console.log(learnersArray);





// converted objects of assignments into multiple arrays
for (const key in AssignmentGroup) {
    if (key === "assignments") {
        AssignmentGroup[key].forEach(element => {
            console.log(Object.values(element));
        })
    }
}
