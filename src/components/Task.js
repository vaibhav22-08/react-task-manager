import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder && 'reminder'}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <span>{task.time}</span>
      {` , `}
      <span>{task.day}</span>
    </div>
  )
}

export default Task
