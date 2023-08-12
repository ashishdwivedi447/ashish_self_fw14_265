import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

describe("testing counter",()=>{
    it("should have counter component",()=>{
        render(<Counter/>)
        let counter = screen.getByText("Counter App");
        expect(counter).toBeInTheDocument();
    });
    it("counter value must be zero initially",()=>{
        render(<Counter/>)
        let value = screen.getByText(0);
        expect(value).toBeInTheDocument();
    });
    it("on add it should increase by 5",()=>{
        render(<Counter/>)
        let value = screen.getByText(0);
        expect(value).toBeInTheDocument();
        let addbtn = screen.getByRole("button",{name:"Add",exact:true});
        fireEvent.click(addbtn);
        let updatedvalue = screen.getByText(5);
        expect(updatedvalue).toBeInTheDocument();
    });
    it("on reduce it should decrease by 5",()=>{
        render(<Counter/>)
        let value = screen.getByText(0);
        expect(value).toBeInTheDocument();
        let addbtn = screen.getByRole("button",{name:"Add",exact:true});
        fireEvent.click(addbtn);
        let updatedvalue = screen.getByText(5);
        expect(updatedvalue).toBeInTheDocument();
        let reducebtn = screen.getByRole("button",{name:"Reduce",exact:true});
        fireEvent.click(reducebtn);
        let reducevalue = screen.getByText(0);
        expect(reducevalue).toBeInTheDocument();
    });
})