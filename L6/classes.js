class Department {
    name;
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log("Department", this.name);
    }
}
const accounting = new Department("Accounting");
accounting.describe();
export {};
