const milisecondsToHms = require("../timer");

describe("testing timer",()=>{
    it("if input less than 1000",()=>{
        expect((milisecondsToHms(100))).toBe("Value can not be less 1000 ms");
    });
    it("if input is 1000",()=>{
        expect((milisecondsToHms(1000))).toBe("1 second");
    });
    it("if input is 60000",()=>{
        expect((milisecondsToHms(60000))).toBe("1 minute ");
    });
    it("if input is 3600000",()=>{
        expect((milisecondsToHms(3600000))).toBe("1 hour ");
    });
    it("if input is between 1000 and 59000",()=>{
        expect((milisecondsToHms(59000))).toBe("59 seconds");
    });
    it("if input is between 60000 and 359000",()=>{
        expect((milisecondsToHms(3540000))).toBe("59 minutes ");
    });
    it("if input is greater than 3600000",()=>{
        expect((milisecondsToHms(7200000))).toBe("2 hours ");
    });
    it("if input is combination of minute and sec",()=>{
        expect((milisecondsToHms(61000))).toBe("1 minute 1 second");
    });
    it("if input is combination of all the three parameter",()=>{
        expect((milisecondsToHms(6105000))).toBe("1 hour 41 minutes 45 seconds");
    });

})