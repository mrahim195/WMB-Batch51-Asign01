const dinnerGuestList: string[] = ["Hasan", "Muneeb", "Kashan", "Umer", "Irtiza", "Hamza"];

console.log("I can invite only two people for dinner.");


console.log(`Sorry ${dinnerGuestList[5]}, I can't invite you to dinner.`);
dinnerGuestList.pop();
console.log(`Sorry ${dinnerGuestList[4]}, I can't invite you to dinner.`);
dinnerGuestList.pop();
console.log(`Sorry ${dinnerGuestList[3]}, I can't invite you to dinner.`);
dinnerGuestList.pop();
console.log(`Sorry ${dinnerGuestList[2]}, I can't invite you to dinner.`);
dinnerGuestList.pop();

console.log(`You're still invited to dinner, ${dinnerGuestList[0]}!`);
console.log(`You're still invited to dinner, ${dinnerGuestList[1]}!`);

dinnerGuestList.pop();
dinnerGuestList.pop();

console.log(dinnerGuestList);
