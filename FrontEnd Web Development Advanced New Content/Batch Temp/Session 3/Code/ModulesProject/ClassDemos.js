/**
 * Created by saikiranchalla on 12/17/2016.
 */

// class Task {
//
//     constructor(){
//         console.log('Constructing Task')
//     }
//
//     showId(){
//         console.log('99');
//     }
// }

//let task = new Task();
//console.log(typeof Task);

// console.log(typeof task);
//
// console.log(task instanceof  Task);
//
// task.showId();
//
// console.log(task.showId === Task.prototype.showId);


//Inheritance

// class Project {
//     // constructor(name){
//     //     console.log('Constructing Project : ' + name);
//     // }
//
//     getTaskCount(){
//         return 50;
//     }
// }
//
// class SoftwareProject extends Project{
//     // constructor(){
//     //     console.log('constructing SoftwareProject');
//     // }
//     getTaskCount(){
//         return super.getTaskCount() + 6;
//     }
// }
//
// let p = new SoftwareProject();
// console.log(p.getTaskCount());

// let project = {
//     getTaskCount() {
//         return 50;
//     }
// };
//
// let softwareProject = {
//     getTaskCount(){
//         return super.getTaskCount() + 8;
//     }
// }
//
// Object.setPrototypeOf(softwareProject, project);
//
// console.log(softwareProject.getTaskCount());


// class Project {
//     constructor() { this.location = 'Kerala';}
// }
//
// class SoftwareProject extends Project {
//     constructor(){
//         super();
//         this.location = this.location + ' Beach';
//     }
// }
//
// let p = new SoftwareProject();
// console.log(p.location);


class Project {
    // static getDefaultId(){
    //     return 0;
    // }

    //static let id = 0;
}

Project.id = 99;

var p = new Project();
console.log(Project.id);