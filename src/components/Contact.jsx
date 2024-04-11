import React from 'react'

const Contact = () => {
  return (
    <div id='contact'>
      <h1>CONTACT US</h1>
      <form>
        <input type="text" placeholder='Full Name' required />
        <input type="email" placeholder='Type Your E-Mail' required />
        <input type="phone" placeholder='Enter Your Phone Number' required />
        <textarea placeholder='Write Here....' cols="30" rows="10" name='message'></textarea>
        <input type="submit" value='send'/>
      </form>
    </div>
  )
}

export default Contact