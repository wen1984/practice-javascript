document.write("You can to do yourself good!!");

// practice
 const Me = {
     firstName: 'Wen Chi',
     lastName: 'Yu',
     conutry: 'Taiwan',
     skills: ['HTML', 'CSS', 'JavaScript']
 }

 const { firstName, lastName, conutry, skills } = Me;

 bio = `${firstName} ${lastName} from a ${conutry} Learn skilled is ${skills.join(' & ')}`

 console.log(bio);

 // 函式引數(function argument) [JavaScript學習手冊]
 function f(today) {
     today.message = `Learn ES6 any knowledge (previous value: '${today.message}')`;
 }
 let today = {
     message: "How JS to Run?"
 };
 console.log(`before calling f: today.message="${today.message}"`);
 f(today);
 console.log(`after calling f: today.message="${today.message}"`);

 // this keyword [JavaScript學習手冊]
 const t = {
     name: 'repeat is important',
     speak() { return `I love to learn JavaScript ${this.name}!`; },
 }
 t.speak();
 console.log(t.speak());