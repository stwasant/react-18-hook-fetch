import React from 'react';
import { render, screen } from '@testing-library/react';
import Grid from '../components/grid/Grid';

describe('Se probara el render de la tabla', () => {

    test('Se evalua que Table Grid esté renderizado', () => {
        render( <Grid />);
        const tableGrid = screen.getByRole('table', {name: 'table grid'});
        expect(tableGrid).toBeInTheDocument();
        
    });
});