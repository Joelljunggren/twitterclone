import { render, screen } from '@testing-library/react';
import React from 'react';
import Home from '@/app/page';

//Ser inte var felen är, antar att det ligger någonting i 
//jest.config eller jest.setup som gör att det här inte fungerar.

//Kör npm run test eftersom jag skapat ett script för det i package.json

//Jest failed to parse a file. 
//This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, 
//or when Jest is not configured to support such syntax.

//Är det på grund av att sidan jag försöker kolla igenom är skapad i typescript och testfilen är jsx?
//Fick inte testfilen att fatta vad "it" eller "toBeInTheDocument" var om den var i tsx-format.


//Tror inte det är några fel med test-syntaxen
it ('should have Why though? heading', () => {
    RenderPage()

    const myElem = screen.getByText('Why though?')

    AssertFunction(myElem);
})

it ('should have a Create why button', () => {
    RenderPage()

    const myElem = screen.getByRole('button', {
        name: 'Create why'
    })

    AssertFunction(myElem);
})

it ('should have a profile image', () => {
    RenderPage()

    const myElem = screen.getAllByAltText('profileimg')

    AssertFunction(myElem);
})

it ('should have two buttons for like and dislike', () => {
    RenderPage()

    const myElem = screen.getByRole('button', {
        name: 'Like this why #NYI',
        name: 'Dislike this why #NYI'
    })

    AssertFunction(myElem);
})

it ('should have a why message', () => {
    RenderPage()

})

function RenderPage(){
    render(<Home/>)
}

function AssertFunction(myElem) {
    expect(myElem).toBeInTheDocument();
}