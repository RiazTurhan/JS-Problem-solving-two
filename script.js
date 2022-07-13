
// in this paragraph how many time use "my" word;

const Sentance = "My name is………. I am thirteen and a student in class eight. I am the only son of my parents, and I belong to a large combined family. I like to spend time with my grandparents in my leisure as they tell me old and interesting stories. They inspired me to write poems and short stories. Though watching cartoon is my favorite, I enjoyed the discovery channel most on tv. My mother helps me to prepare my lesson at home. I like to work with her in the kitchen garden."

const find = Sentance.match(/my/gi); //how many time 
const occurances = find.length; // length
console.log(find);
console.log(occurances);

//==================================================//

//input: linearSearch (["a", "b", "c", "d", "c"], "c")
//output: 2 or "not found"
//problem: linearSearch() funtion converted by implement

function linearSearch(arr , val){
    const length = arr.length;
    for (let i = 0; i < length; i++ ){
        if(arr[i]=== val){
            return i
        }
    }
    return "not found"
}

console.log(linearSearch(["a", "b", "c", "d", "c"], "c"));
