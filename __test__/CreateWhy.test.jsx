import { render, screen } from '@testing-library/react';
import React from 'react';
import CreateWhy from '@/app/createwhy/page';

it ('should have Imput your why below heading', () => {
    RenderPage()

    const myElem = screen.getByText('Imput your why below')

    AssertFunction(myElem);
})

it ('should have an input field', () => {
    RenderPage()

    const myElem = screen.getByRole('form')

    AssertFunction(myElem);
})

it ('should have two buttons for Cancel and Submit', () => {
    RenderPage()

    const myElem = screen.getByRole('button', {
        name: 'Cancel',
        name: 'Submit'
    })

    AssertFunction(myElem);
})



function RenderPage(){
    render(<CreateWhy/>)
}

function AssertFunction(myElem) {
    expect(myElem).toBeInTheDocument();
}