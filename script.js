/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  //Write your code here
  arr.map(function (data) {
    if (data.profession === "developer") {
      console.log(data);
    }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here
  arr.forEach(function (data) {
    if (data.profession === "developer") {
      console.log(data);
    }
  })
}

function addData() {
  //Write your code here
  arr.push({id:4,name:"susan",age:"20",profession:"intern"})
  console.log(arr);
}

function removeAdmin() {
  //Write your code here
  let filterArr = arr.filter((arr)=>arr.profession !== "admin");
  console.log(filterArr);
}

function concatenateArray() {
  //Write your code here
  let updatedArr =[{id:5,name:"ayush",age:"23",profession:"senior developer"},
  {id:6,name:"pallavi",age:"25",profession:"senior manager"}];
  let concatArr = arr.concat(updatedArr);
  console.log(concatArr)
}
