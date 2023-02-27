import Card from './shared/Card'
import { FaEdit } from 'react-icons/fa'
import {RiDeleteBack2Fill} from 'react-icons/ri'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback} =useContext(FeedbackContext)

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color="#9DC08B" />
      </button>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <RiDeleteBack2Fill color="#609EA2" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}


export default FeedbackItem
