// console.log(users);
const keys_obj = Object.keys(users);
keys_obj.forEach(e => {
    // console.log(e);
    // console.log(users[e].skills);
    const check = users[e].skills.filter(ele => {
        if((ele === "React") && (ele === "Node") && (ele === "MongoDB") && (ele === "Express"))
            // return true;
    });
    console.log(check);
});
   