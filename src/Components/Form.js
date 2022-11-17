import React from 'react'


function Form(props) {
    const { change, submit, errors } = props;
    const { person, size, pepperoni, mushrooms, peppers, sausage, other } = props.values;
    console.log(props)


    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }

    const onChange = (evt) => {
        const { name, value, checked, type } = evt.target;
        const newVal = type === checked ? checked : value;
        change(name, newVal);
    }

    return (
        <div classname="App">

            <h1>Build Your Own Pizza!</h1>

            <Form id='pizza-form' onSubmit={onSubmit}>
                <h4>Build Your Own Pizza!</h4>
                <label>Customer Name:
                    <input
                        name='person'
                        id="name-input"
                        type='text'
                        value={person}
                        onChange={onChange}
                    />
                </label>

                <label>Choice of Size:
                    <select
                        name='size'
                        value={size}
                        id='pizza-dropdown'
                        type='dropdown'
                        onChange={onChange}
                    >
                        <option value='personal-pizza'>--Personal Pizza!--</option>
                        <option value='small'>--Small Pizza!--</option>
                        <option value='medium'>--Medium Pizza!--</option>
                        <option value='large'>--Large pizza!--</option>
                    </select>
                </label>
            </Form>
        </div>

    )

}
export default Form;