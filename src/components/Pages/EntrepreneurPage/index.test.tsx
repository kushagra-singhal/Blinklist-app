import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import EntrepreneurComp from '.';
import {BrowserRouter} from 'react-router-dom';

const setLibrary = jest.fn();
const setData = jest.fn();
const setBooks = jest.fn();

const router = (data:any, books:any, library: any)=>{
    return (
        <BrowserRouter>
             <EntrepreneurComp books={books} setBooks={setBooks} data={data} setData={setData} library={library} setLibrary={setLibrary} />
        </BrowserRouter>
    )
}

describe('Home', () => {
    let response, data:any, library: any, books: any;
    beforeAll(async ()=> {
        response = await fetch('http://localhost:3000/extra');
        data = await response.json();
        response = await fetch('http://localhost:3000/library');
        library = await response.json();
        response = await fetch('http://localhost:3000/books');
        books = await response.json();
    })
    test('it should render input', () => {
        render(router(data, books, library));
        const bannerElement = screen.getByPlaceholderText('Search by title or author');
        expect(bannerElement).toBeInTheDocument();
    })
    test('it should render the containers matching to data length', async () => {
        render(router(data, books, library));
        const extraElement = await screen.findAllByTestId('container');
        expect(extraElement.length).toBe(data.length);
    })
    test('should render circularbox if library is empty', async () => {
        let librarys = false;
        render(router(data, books, librarys));
        const circularElement = await screen.findAllByTestId('circular-progress');
        expect(circularElement.length).toBe(data.length);
    })
    test('clickable library handler', async () => {
        render(router(data, books, library));
        const linkElement = await screen.findAllByTestId('card-library-handler');
        fireEvent.click(linkElement[0]);
    })
});