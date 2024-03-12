import ResultBox from './ResultBox';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

  describe('Component ResultBox', () => {
    it('should render without crashing', () => {
        render(<ResultBox  from='PLN' to='USD' amount={100} />);
    });
    it('should render proper info about conversion when PLN -> USD', () => {

        const testCases = [
            { amount: '100', score: '28.57'},
            { amount: '20', score: '5.71'},
            { amount: '200', score: '57.14'},
            { amount: '345', score: '98.57'},
        ];

        for ( const testObj of testCases){
            render(<ResultBox  from='PLN' to='USD' amount={parseInt(testObj.amount)} />);

            const scoreField = screen.getByTestId('div-score');

             expect(scoreField).toHaveTextContent(`PLN ${testObj.amount}.00 = $${testObj.score}`);
             cleanup();
        }
    
    });

    it('should render proper info about conversion when USD -> PLN', () => {

        const testCases = [
            { amount: '100', score: '350.00'},
            { amount: '20', score: '70.00'},
            { amount: '200', score: '700.00'},
            { amount: '345', score: '1,207.50'},
        ];

        for ( const testObj of testCases){
            render(<ResultBox  from='USD' to='PLN' amount={parseInt(testObj.amount)} />);

            const scoreField = screen.getByTestId('div-score');

             expect(scoreField).toHaveTextContent(`$${testObj.amount}.00 = PLN ${testObj.score}`);
             cleanup();
        }
    
    });

    it('should render proper info about conversion when USD -> USD', () => {

        const testCases = [
            { amount: '100', score: '100.00'},
            { amount: '123', score: '123.00'},
            { amount: '200', score: '200.00'},
            { amount: '1207', score: '1,207.00'},
        ];

        for ( const testObj of testCases){
            render(<ResultBox  from='USD' to='USD' amount={parseInt(testObj.amount)} />);

            const scoreField = screen.getByTestId('div-score');

             expect(scoreField).toHaveTextContent(`$${testObj.score} = $${testObj.score}`);
             cleanup();
        }
    
    });
    it('should render proper info about conversion when PLN -> PLN', () => {

        const testCases = [
            { amount: '100', score: '100.00'},
            { amount: '123', score: '123.00'},
            { amount: '200', score: '200.00'},
            { amount: '1207', score: '1,207.00'},
        ];

        for ( const testObj of testCases){
            render(<ResultBox  from='PLN' to='PLN' amount={parseInt(testObj.amount)} />);

            const scoreField = screen.getByTestId('div-score');

             expect(scoreField).toHaveTextContent(`PLN ${testObj.score} = PLN ${testObj.score}`);
             cleanup();
        }
    
    });

    it('should render proper info about conversion when USD is minus value', () => {

        const testCases = [
            { amount: '-100'},
            { amount: '-20'},
            { amount: '-200'},
            { amount: '-345'},
        ];

        for ( const testObj of testCases){
            render(<ResultBox  from='USD' to='PLN' amount={parseInt(testObj.amount)} />);

            const scoreField = screen.getByTestId('div-score');

             expect(scoreField).toHaveTextContent(`Wrong value…`);
             cleanup();
        }
    
    });
    it('should render proper info about conversion when PLN is minus value', () => {

        const testCases = [
            { amount: '-100'},
            { amount: '-20'},
            { amount: '-200'},
            { amount: '-345'},
        ];

        for ( const testObj of testCases){
            render(<ResultBox  from='PLN' to='USD' amount={parseInt(testObj.amount)} />);

            const scoreField = screen.getByTestId('div-score');

             expect(scoreField).toHaveTextContent(`Wrong value…`);
             cleanup();
        }
    
    });
    
});