let confession = `
My secret is that I really like cake.
Sometimes I sneak into the fridge at night and steal my housemate's cake
`;

const secret = "cake";
confession = confession.replaceAll(secret,'x'.repeat(secret.length));
console.log(confession);


/*
// a) How many function calls are there in this file?
two
// b) Explain what the expression confession.replaceAll(secret,'x'.repeat(secret.length)); is doing
it is trying to replace the value of the variable secret with "x" in the confession String.
// c) How many inputs do we pass to replaceAll when we call it? How can you tell?
two because you need to tell it what to replace and what to replace with
// d) How many inputs do we pass to repeat when we call it?  How can you tell?
one because you need to give the number to repeat
// e) What kind of statement is on line 7?
it is reassigning the variable