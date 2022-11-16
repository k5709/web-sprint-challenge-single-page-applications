import React from 'react'

const Form = (props) => {
    const { change, submit, errors } = props;
    const { customerName, size, pepperoni, sausage, mushrooms, peppers, special } = props.values;

    return (
        <div classname="App">
            <h1>Build Your Own Pizza!</h1>
            <Form id='pizza-form'>
                <label>
                    <input
                        name='customerName'
                        type='text'
                        value='{customerName}'
                    />
                </label>
            </Form>
        </div>

    )

}
export default Form;