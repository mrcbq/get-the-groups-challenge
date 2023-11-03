// As new students begin to arrive at college, each receives a unique ID number, 1 to n. Initially, the students do not know one another, and each has a different circle of friends. As the semester progresses, other groups of friends begin to form randomly. There will be three arrays, each aligned by an index. The first array will contain a queryType which will be either Friend or Total. The next two arrays, students1 and students, will each contain a student ID. If the query type is Friend, the two students become friends. If the query type is Total, report the sum of the sizes of each group of friends for the two students. Example n = 4 query Type = ['Friend', 'Friend', 'Total'] student 1 = [1, 2, 1] student2 = [2, 3, 4] Initial Friend 1 2 & Friend 2 3 Total 14 Size:1 Size:1 Size:1 Size:1 Size:3 Size:1 3 + 1 = 4 2 The queries are assembled, aligned by index: Index student2 studenti 1 0 2 query Type Friend Friend Total 1 2 3 2 1 4 Students will start as discrete groups {1}, {2},{3} and {4}. Students 1 and 2 become friends with the first query, as well as students 2 and 3 in the second. The new groups are {1, 2}, {2, 3} and {4} which simplifies to {1, 2, 3} and {4}. In the third query, the number of friends for student 1 = 3 and student 4 = 1 for a Total = 4. Notice that student 3 is indirectly part of the circle of friends of student 1 because of student

const n = 3;
const queryType = ['Friend', 'Total'];
const student1 = [1, 2];
const student2 = [2, 3];

function getTheGroups(n, queryType, student1, student2){

  

}

module.exports = getTheGroups