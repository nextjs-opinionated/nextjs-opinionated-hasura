import React, { OptionHTMLAttributes } from 'react'
import * as TestingLib from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { FormSelect } from '../../src/components/forms/FormSelect/FormSelect'
import { fireEvent } from '@testing-library/react'


describe('Select Component', () => {
  it('should render a component', async() => {
    const render= TestingLib.render(
    
    <FormSelect  label= 'Name'
    placeholder=""
    name= 'input_name'
    register= {() => {
      /* noop */
    }}
    validationErrors= {''}
    className= 'text-lg select-accent'
    options= {
        [  
            { id: 'it1', value: 'item 1' },
            { id: 'it2', value: 'item 2' },
        ]

    }
    />)
    expect(render.getByTitle('select')).toHaveClass('select w-full')
  })

  it('should render component with default value', async() => {
    const render= TestingLib.render(
    
    <FormSelect  
    label= "Label"
    placeholder=""
    name= "Name"
    register= {() => {
      /* noop */
    }}
    validationErrors= {''}
    defaultValue="it2"
    className= 'text-lg select-accent'
    options= {
        [  
            { id: 'it1', value: 'item 1' },
            { id: 'it2', value: 'item 2' },
        ]

    }
    />)
    const allOptions:OptionHTMLAttributes<HTMLOptionElement>=render.getAllByRole('option') as OptionHTMLAttributes<HTMLOptionElement>
    expect(allOptions[0].selected).toBe(false)
    expect(allOptions[1].selected).toBe(false)
    expect(allOptions[2].selected).toBe(true)

  })

  it('should click and change the selected value', async() => {
    const render= TestingLib.render(
    
    <FormSelect  
    label= "Label"
    placeholder=""
    name= "Name"
    register= {() => {
      /* noop */
    }}
    validationErrors= {''}
    defaultValue="it2"
    className= 'text-lg select-accent'
    options= {
        [  
            { id: 'it1', value: 'item 1' },
            { id: 'it2', value: 'item 2' },
        ]

    }
    />)

    fireEvent.click(render.getByTitle('select'), { target: { value: 'it1' } })
    const allOptions: OptionHTMLAttributes<HTMLOptionElement> =render.getAllByRole('option') as OptionHTMLAttributes<HTMLOptionElement>
    expect(allOptions[0].selected).toBe(false)
    expect(allOptions[1].selected).toBe(true)
    expect(allOptions[2].selected).toBe(false)

  })


  it('should render component with error message', async() => {
    const render= TestingLib.render(
    
    <FormSelect  
    label= "Label"
    placeholder=""
    name= "text_with_error"
    register= {() => {
      /* noop */
    }}
    validationErrors= {
        {
            text_with_error: {
              message: 'Error Message'
            },
          }
    }
    defaultValue="it2"
    className= 'text-lg select-accent'
    options= {
        [  
            { id: 'it1', value: 'item 1' },
            { id: 'it2', value: 'item 2' },
        ]

    }
    />)
    expect(render.getByText('Error Message')).toHaveClass('text-error')


  })

 
})
