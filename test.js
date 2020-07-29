//Question 1

const arr = [1,5,7,8,4,2,5]

let evenarraay=[]
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        evenarraay.push(arr[i])
    }
}

console.log("Q1",evenarraay)

//Question 2

function maxconsone(array) {
    let count = 0;
    let temp = 0;
    for (let i = 0; i < array.length; i++) {
    if (array[i] == 1) {
    count++;
    if (count > temp)
    temp = count;
    } else {
    count = 0;
    }
    }
    return temp;
    }

    console.log("Q2",maxconsone([1,0,0,1,0,0,1,1,1,0,0]))

//Question 3
const Q4arr = [1,2,3,4,5,6,6,7]
for(let i = 0; i < Q4arr.length; i++) {  
    for(let j = i + 1; j < Q4arr.length; j++) {  
        if(Q4arr[i] == Q4arr[j]){
            console.log(Q4arr[j]);  
            return;
        }  
    }  
}

//Question4

//To solve this we simple need to make the input fields required

{/* <form>
   <input type=”text” name=”firstname” required/>
   <input type=”check” name=”checkme” required/>
   <input type=”submit” value=”submit”/>
</form> */}

//Question5

//HTML
{/* <div className="Q5">Javascript Developer</div> */}
//CSS

// .Q5{
//     border: 1px solid black;
//     padding: 5px;
//     border-radius: 25px
//   }


//Question 6

//to center the box on the empty page

//<div className="Q6">Box</div>

// .Q6{
//     height: 100px;
//     width:100px;
//     background-color: blue
//   }
  
//   body{
//     height: 100vh;
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//Question 7

var getData;
$.ajax({
    type: 'GET',
    url: 'www.example.com/api/get/1',
    dataType: 'json',
    success: function (response) {
        getData[name] = response;

    }
});

//Question 8

//To sort this object we can simply use sort method after converting json to javascript object

// var obj = {
//     “id” : 4, “name” : “abc”,
//     “id” : 10, “name” : “ab2”,
//     “id” : 5, “name” : “abc3”,
//     “id” : 6, “name” : “abc5”
//    }

var jsobj = JSON.parse(obj)

console.log(jsobj.sort((a, b) => a.id.localeCompare(b.id)))

