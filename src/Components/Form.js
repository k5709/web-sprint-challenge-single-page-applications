import React from 'react'
import { useHistory } from 'react-router-dom';



function Form(props) {
    const { change, submit, values } = props;

    console.log();

    const history = useHistory()


    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
        history.push('./form/confirmation')
    }

    const onChange = (evt) => {
        const { name, value, checked, type } = evt.target.value;
        const newVal = type === 'checkbox' ? checked : value;
        change(name, newVal);
    }

    return (


        <form id='pizza-form' className='form-container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Build a Custom Pizza!</h2>
                <button id='order-button' value={onSubmit}>submit</button>
                <div className='errors'>

                </div>

                <div className='form-group inputs'>
                    <h4>Order Details</h4>

                    <label>
                        <input
                            type='text'
                            id='name-input'
                            value={values.person}
                            onChange={onChange}
                            name='customerName'
                        />
                    </label>

                    <label>
                        <select
                            id='size-dropdown'
                            onChange={onChange}
                            value={values.size}
                            name='pizzaSize'
                        >
                            <option value='pizzaSelection'>-- Select a Pizza size --</option>
                            <option value='extra-small'>Extra Small</option>
                            <option value='small'>Small</option>
                            <option value='medium'>Medium</option>
                            <option value='large'>Large</option>
                        </select>
                    </label>
                </div>

                <div className='form-group checkboxes'>
                    <h4>Add-ons</h4>

                    <label>Pepperoni
                        <input
                            type='checkbox'
                            name='pepperoni'
                            checked={values.pepperoni}
                            onChange={onChange}
                        />
                    </label>

                    <label>Sausage
                        <input
                            type='checkbox'
                            name='sausage'
                            checked={values.sausage}
                            onChange={onChange}
                        />
                    </label>

                    <label>Peppers
                        <input
                            type='checkbox'
                            name='peppers'
                            checked={values.peppers}
                            onChange={onChange}
                        />
                    </label>

                    <label>Mushrooms
                        <input
                            type='checkbox'
                            name='mushrooms'
                            checked={values.mushrooms}
                            onChange={onChange}
                        />
                    </label>
                </div>

                <div className='form-group inputs'>
                    <label>Special Instructions
                        <input
                            id='special-text'
                            value={values.special}
                            onChange={onChange}
                            name='special'
                            type='text'
                        />
                    </label>
                </div>
            </div>
        </form>
    );
};


export default Form;


