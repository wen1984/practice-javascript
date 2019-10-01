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