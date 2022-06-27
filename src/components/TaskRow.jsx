import React, {Fragment} from 'react'

export const TaskRow = ({task, toggleTask}) => {
    return (
        <Fragment>
            <tr key={task.name}>
                <td className='d-flex justify-content-between'>
                    {task.name}
                    <input type="checkbox"
                        checked={task.done}
                        onChange={() => toggleTask(task)}
                    />
                </td>
            </tr>
        </Fragment>
    )
}
