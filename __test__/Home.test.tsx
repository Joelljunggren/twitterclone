import { render, screen } from '@testing-library/react';
import { WhyItem } from '@/components/whyitem';

//npm test för att köra alla tester

test('should render why component', () => {
    WhyComponent();
    const myElem = screen.getByTestId('whyitem')

    expect(myElem).toBeInTheDocument();
})

test('why component should include profile picture', () => {
    WhyComponent();

    const myElem = screen.getByAltText('profileimg')

    expect(myElem).toBeInTheDocument();
})

test('why component should include name of creator', () => {
    WhyComponent();

    const myElem = screen.getByTestId('creator')

    expect(myElem).toBeInTheDocument();
})

test('why component should include a message', () => {
    WhyComponent();

    const myElem = screen.getByTestId('message')

    expect(myElem).toBeInTheDocument();
})

test('why componend should include a button for likes', () => {
    WhyComponent();

    const myElem = screen.getByRole('button', {name: /Like/});

    expect(myElem).toBeInTheDocument();
})

test('why componend should include a button for dislikes', () => {
    WhyComponent();

    const myElem = screen.getByRole('button', {name: /Dislike/});

    expect(myElem).toBeInTheDocument();
})


test('should convert Date to string', () => {
    const createdAt = new Date('2024-01-01T15:15:15')
    
    const result = createdAt.toDateString()

    expect(result).toBe('Mon Jan 01 2024')
})


test('whould convert Time to local time', () => {
    const createdAt = new Date('2024-01-01T15:15:15')

    const result = createdAt.toLocaleTimeString()

    expect(result).toBe('15:15:15')
})



function WhyComponent(){
    render(<WhyItem id={''} message={''} createdAt={new Date}/>)
}
