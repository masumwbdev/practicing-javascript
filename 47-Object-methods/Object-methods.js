const obj = {
    fname: "Masum",
    lname: "Hossain",
    fullName: function () {
        const x = this.fname + " " + this.lname;
        return x;
    }
};

// obj.fullName = function () {
//     const x = this.fname + " " + this.lname;
//     return x;
// }
console.log(obj.fullName().toUpperCase());