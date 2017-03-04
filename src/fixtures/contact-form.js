export default {
  id: 'contact',
  action: '/email',
  status: '',
  message: '',
  submit: false,
  successMsg: 'Your message has been sent!',
  errorMsg: 'Something went wrong.',
  fields: [

    // Name
    {
      breakpoints: {
        col: 12
      },
      name: 'name',
      type: 'text',
      required: true,
      placeholder: 'Name',
      maxLength: 100,
      status: '',
      message: '',
      value: null
    },

    // Email
    {
      breakpoints: {
        col: 12
      },
      customValidation: 'email',
      name: 'email',
      type: 'text',
      required: true,
      placeholder: 'Email',
      maxLength: 100,
      status: '',
      message: '',
      value: null
    },

    // Message
    {
      breakpoints: {
        col: 12
      },
      name: 'message',
      type: 'textarea',
      required: true,
      placeholder: 'Message',
      maxLength: 300,
      status: '',
      message: '',
      value: null
    },

    // Submit
    {
      breakpoints: {
        col: 12
      },
      name: 'submit',
      type: 'submit',
      value: 'SEND'
    }
  ]
};
