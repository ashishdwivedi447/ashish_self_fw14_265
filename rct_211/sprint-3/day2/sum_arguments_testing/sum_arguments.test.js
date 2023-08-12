const sum=require("./sum_arguments")

describe("testcase for sum function",()=>{
    test("call sum  with no arguments",()=>{
        expect(sum()).toBe("sum invoked without arguments")
    })

    test("call sum  with 1 arguments",()=>{
        expect(sum(3)).toBe("sum needs atleast 2 arguments")
    })

    test("add 4 numbers",()=>{
        expect(sum(1,2,3,4)).toBe(10)
    })

    test ("add three negative numbers",()=>{
        expect(sum(-1,-2,-3)).toBe(-6)
    })

    
})