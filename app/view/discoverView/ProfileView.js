import React, { Component } from 'react'
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form'
import {browserHistory} from 'react-router'
import http from '../../util/fetch'

const MyForm = (
  <Form
    onSubmit={(values) => {
      console.log('Success!', values)

      browserHistory.push('/list')
    }}

    // Let's give the form some default values
    defaultValues={{
      name : 'hitest'
    }}

    // Validating your form is super easy, just use the `validate` life-cycle method
    validate={values => {
      const { name, level } = values
      return {
        name: !name ? 'A name is required' : undefined,
        level: !level ? 'A level is required' : null
      }
    }}

    // `onValidationFail` is another handy form life-cycle method
    onValidationFail={() => {
      window.alert('There is something wrong with your form!  Please check for any required values and try again :)')
    }}
  >
    {({ values, submitForm, addValue, removeValue, getError }) => {
      // A Form's direct child will usually be a function that returns a component
      // This way you have access to form methods and form values to use in your component. See the docs for a complete list.
      return (
        // When the form is submitted, call the `submitForm` callback prop
        <form onSubmit={submitForm}>

          <RadioGroup field='gender'>
            <Radio value='male'  />男
            <Radio value='femal' />女
          </RadioGroup>

          <div className='item'>
            <div className='formLabel'>Full Name</div>
            <Text // This is the built-in Text formInput
              field='name' // field is a string version of the field location
              placeholder='Your name' // all other props are sent through to the underlying component, in this case an <input />
            />
          </div>

          <div className='item'>
            <div className='formLabel'>Country</div>
            <Text // This is the built-in Text formInput
              field='Country' // field is a string version of the field location
              placeholder='Your Country' // all other props are sent through to the underlying component, in this case an <input />
            />
          </div>

          <div className='item'>
            <div className="formLabel">Chinese Level</div>
            <Select // This is the built-in Select formInput
              field='level'
              options={[{ // You can ship it some options like usual
                label: 'Low',
                value: 'low'
              }, {
                label: 'Middle',
                value: 'middle'
              }, {
                label: 'High',
                value: 'high'
              }]}
            />
          </div>
          <button type="submit">Submit</button>
      
        </form>
      )
    }}
  </Form>
)


class ProfileView extends Component {
    render() {
        return(
	        <div>            
	        {MyForm}
	        </div>
        )
    }

}

export default ProfileView
// export default {area}