
export function getAllStudents(){
    return fetch((`http://localhost:5000/api/students/`), {
      "method": "GET"
    })
    .then((res) => res.json())
  }

  export function showStudent(id){
    return fetch(
        (`http://localhost:5000/api/students/${id}`), {
      "method": "GET"
    })
    .then((res) => res.json())
  }

  export function createStudent(data){
    return fetch(
        (`http://localhost:5000/api/students/`), {
      "method": "POST",
      "headers": { "body": data}
    })
    .then((res) => res.json())
  }


  export function deleteStudent(id){
    return fetch(
        (`http://localhost:5000/api/students/${id}`), {
      "method": "DELETE"
    })
    .then((res) => res.json())
  }


  export function updateStudent(id,data){
    return fetch(
        (`http://localhost:5000/api/students/${id}`), {
      "method": "PATCH",
      "headers": { "body": data}
    })
    .then((res) => res.json())
  }
