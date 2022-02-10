/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import MyLibrary from '.';
import {BrowserRouter} from 'react-router-dom';

const router = (books:any, library: any)=>{
    return (
        <BrowserRouter>
            <MyLibrary books={books} library={library} />
        </BrowserRouter>
    )
}

describe('Library', () => {
    let response, data, library: any, books: any;
    beforeAll(async ()=> {
        response = await fetch('http://localhost:3000/extra');
        data = await response.json();
        response = await fetch('http://localhost:3000/library');
        library = await response.json();
        response = await fetch('http://localhost:3000/books');
        books = await response.json();
    })
    test('it renders cicular progress bar if books are not available', async () => {
        let books:any=[];
        render(router(books, library));
        const linkElement = screen.getByTestId('circular-progress');
        expect(linkElement).toBeInTheDocument();
    });
    test('should not render cicular progress bar if books are available', async () => {
        render(router(books, library));
        const linkElement = screen.queryByTestId('circular-progress');
        expect(linkElement).not.toBeInTheDocument();
    });
    test('it should render the same no of finished books',async () => {
        render(router(books, library));
        const tabsElement = screen.getByTestId(/tab-finished/);
        fireEvent.click(tabsElement);
        const progressBarElement = await screen.findAllByRole('progressbar');
        expect(progressBarElement.length).toBe(library.finishedBook.length);
    });
    test('should render same no of currently books',async () => {
        render(router(books, library));
        const tabsElement = screen.getByTestId(/tab-reading/);
        fireEvent.click(tabsElement);
        const progressBarElement = await screen.findAllByRole('progressbar');
        expect(progressBarElement.length).toBe(library.currentlyReading.length);
    });
})