import { render, screen } from '@testing-library/react'
import GreetingComponent, { Capitalize, CounterForTest } from "./GreetingComponent";
import userEvent from '@testing-library/user-event'

test('to check if heading exists', () => {
    render(<GreetingComponent />)
    const element = screen.getByTestId('heading-tag')
    expect(element).toBeInTheDocument()
});


test('to check if heading has Greeting Text', () => {
    const message = 'Hello World'
    render(<GreetingComponent message={message} />)
    const element = screen.getByTestId('heading-tag')
    expect(element).toHaveTextContent(message)
});


test('to check Capitalize 1', () => {
    render(<Capitalize text={'hello'} />)
    const element = screen.getByTestId('capitalText')
    expect(element).toHaveTextContent('Hello')
});

test('to check Capitalize 2', () => {
    render(<Capitalize text={'hElLo'} />)
    const element = screen.getByTestId('capitalText')
    expect(element).toHaveTextContent('Hello')
});


test('to check if counter has all elements', () => {
    render(<CounterForTest/>)
    const inc_btn = screen.getByTestId('inc-btn')
    const dec_btn = screen.getByTestId('dec-btn')
    const out_span = screen.getByTestId('out-span')

    expect(inc_btn).toBeInTheDocument()
    expect(dec_btn).toBeInTheDocument()
    expect(out_span).toBeInTheDocument()
})

test('to check if buttons have proper label', () => {
    render(<CounterForTest/>)
    const inc_btn = screen.getByTestId('inc-btn')
    const dec_btn = screen.getByTestId('dec-btn')

    expect(inc_btn).toHaveTextContent('+')
    expect(dec_btn).toHaveTextContent('-')
})

test('to check initial counter value 0', () => {
    render(<CounterForTest/>)
    const out_span = screen.getByTestId('out-span')
    expect(out_span.innerHTML).toBe('0')
})


test('to check increment btn',async () => {
    render(<CounterForTest/>)
    const out_span = screen.getByTestId('out-span')
    const inc_btn = screen.getByTestId('inc-btn')
    expect(out_span.innerHTML).toBe('0') 
    //click
    await userEvent.click(inc_btn)

    //
    expect(out_span.innerHTML).toBe('1')
})