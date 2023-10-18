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

// the ID of the learner for which this data has been collected
 let learners_ids = [];
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

function getLearnerData(CourseInfo, AssignmentGroup, [LearnerSubmissions]) {
    // here, we would process this data to achieve the desired result.
    const result = [];


    return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);


