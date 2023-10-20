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

function getLearnerData(course, ag, submissions) {


  // match the course id in assignment group and course info
  try {
      if (AssignmentGroup.course_id === CourseInfo.id) {
          const result = [[], []];

          const Result = [];

          // learners ids array
          learners_ids = [];
          LearnerSubmissions.forEach(learner => {
              for (const key in learner) {
                  if (key === 'learner_id') {
                      if (learners_ids.includes(learner[key])) {
                          continue;
                      }
                      learners_ids.push(learner[key]);
                  }
              }
          });
          result[0][0] = learners_ids[0];
          result[1][0] = learners_ids[1];

          try {
              if ((AssignmentGroup.assignments[0].points_possible !== 0 && typeof AssignmentGroup.assignments[0].points_possible !== "string") && (AssignmentGroup.assignments[1].points_possible !== 0 && typeof AssignmentGroup.assignments[1].points_possible !== "string") && (AssignmentGroup.assignments[2].points_possible !== 0 && typeof AssignmentGroup.assignments[2].points_possible !== "string")) {
                  // grades for student1
                  let s1grade1 = LearnerSubmissions[0].submission.score / AssignmentGroup.assignments[0].points_possible * 100;
                  let s1grade2 = LearnerSubmissions[1].submission.score / AssignmentGroup.assignments[1].points_possible * 100;
                  let s1grade3 = LearnerSubmissions[2].submission.score / AssignmentGroup.assignments[2].points_possible * 100;

                  // grades for student2
                  let s2grade1 = LearnerSubmissions[3].submission.score / AssignmentGroup.assignments[0].points_possible * 100;
                  let s2grade2 = LearnerSubmissions[4].submission.score / AssignmentGroup.assignments[1].points_possible * 100;

                  // average for student1
                  let s1average = Math.round((LearnerSubmissions[0].submission.score + LearnerSubmissions[1].submission.score + LearnerSubmissions[2].submission.score) / (AssignmentGroup.assignments[0].points_possible + AssignmentGroup.assignments[1].points_possible + AssignmentGroup.assignments[2].points_possible) * 100);

                  // average for student2
                  let s2average = Math.round((LearnerSubmissions[3].submission.score + LearnerSubmissions[4].submission.score) / (AssignmentGroup.assignments[0].points_possible + AssignmentGroup.assignments[1].points_possible) * 100);

                  // result for student 1

                  result[0][1] = s1grade1;
                  result[0][2] = s1grade2;
                  result[0][3] = s1grade3;
                  result[0][4] = s1average;

                  // result for student 2

                  result[1][1] = s2grade1;
                  result[1][2] = Math.round(s2grade2);
                  result[1][3] = s2average;
              } else {
                  throw "Please make sure possible point is not a zero or a string";
              }
          } catch (error) {
              console.log(error);
          }

          // final result
          const student1 = {
              id: result[0][0],
              first_assignment: result[0][1],
              second_assignment: result[0][2],
              third_assignment: result[0][3],
              avg: result[0][4],
          };

          if (AssignmentGroup.assignments[2].due_at > LearnerSubmissions[2].submission.submitted_at) {
            delete student1.third_assignment;
            s1average = Math.round((LearnerSubmissions[0].submission.score + LearnerSubmissions[1].submission.score) / (AssignmentGroup.assignments[0].points_possible + AssignmentGroup.assignments[1].points_possible) * 100);
            student1.avg = s1average;
          }

          Result.push(student1);


          const student2 = {
              id: result[1][0],
              first_assignment: result[1][1],
              second_assignment: result[1][2],
              avg: result[1][3],
          };

          if (AssignmentGroup.assignments[1].due_at < LearnerSubmissions[4].submission.submitted_at) {
            let deductTenPercent = result[1][2] / 10;
            student2.second_assignment = result[1][2]- deductTenPercent;
          }

          Result.push(student2);

          return Result;
      } else {
          throw "Please check the course id in the assignment to match the course id";
      }
  } catch (error) {
      console.log(error);
  }


}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);



