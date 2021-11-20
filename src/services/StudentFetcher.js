
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
      "headers":  {
        "Content-Type": "application/json"
      },
      "body":data
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


  export function updateStud(id,data){
    return fetch(
        (`http://localhost:5000/api/students/${id}`),  {
            method: 'PUT',
            headers: {"Accept": "application/json",
                'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
    .then((res) => res.json())
  }
