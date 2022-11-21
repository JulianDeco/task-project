import { render, screen, fireEvent } from '@testing-library/react';
import { TaskCreator } from '../../src/components/TaskCreator';

describe('Prueba en TaskCreator', () => { 
    test('debe crear una tarea con el input que yo le proporcione', () => { 

        render (<TaskCreator/>)

        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: 'Hacer ejercicio' } } );

        expect( input.value ).toBe( 'Hacer ejercicio' );

        // screen.debug()
    })

    test('evalua si llama a createNewTask una vez enviado el formulario', () => { 

        const createNewTask = jest.fn();
        const inputValue = 'Hacer ejercicio'

        render (<TaskCreator createNewTask = { createNewTask }/>)

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );
        
        expect( input.value ).toBe( '' );

        //Evalua si se llama
        expect( createNewTask ).toHaveBeenCalled();
        //Evalua cuantas veces se llama
        expect( createNewTask ).toHaveBeenCalledTimes(1);
        //Evalua si se llama con ese parametro
        expect( createNewTask ).toHaveBeenCalledWith( inputValue )

        
        

    })
 })