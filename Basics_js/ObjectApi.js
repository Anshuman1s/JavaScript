//Destructuring

const course ={
    coursename:"Java with DSA",
    courseInstructor:'Mohit Dubey'
}
/* This is the metod of destructuring */
const{courseInstructor:instructor} = course
// console.log(courseInstructor)
console.log(instructor);

/* JSON looks like in this format sometimes it might be in form of array */

// {
//     "name":"Anshuman",
//     "age":18,
//     "location":"Jalandhar"
// }

