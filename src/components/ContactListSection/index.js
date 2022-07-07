import './index.css'

const ContactListSection = props => {
  const {contactDetails, clickingDeleteButton} = props
  const {firstname, lastname, number, id} = contactDetails
  const onClickDeleteButton = () => {
    clickingDeleteButton(id)
  }

  return (
    <>
      <li className="contact-list">
        <p>{firstname}</p>
        <p>{lastname}</p>
        <p>{number}</p>
        <button type="button" onClick={onClickDeleteButton}>
          Delete
        </button>
      </li>
      <hr />
    </>
  )
}

export default ContactListSection
