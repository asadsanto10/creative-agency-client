import React from 'react';
import { Form } from 'react-bootstrap';

const AdminShowServiceList = (props) => {
    const { email, name, projectDescription, service, status, _id } = props.list;
    const colors = `
        ${status == 0 && 'text-danger'}
        ${status == 1 && 'text-info'}
        ${status == 2 && 'text-success'}
    `
    return (
        <tr>
            <td>{email}</td>
            <td>{name}</td>
            <td>{service}</td>
            <td>{projectDescription}</td>
            <td>
                <Form>
                    <Form.Group>
                        <Form.Control className={colors} id="getValue" onChange={(e) => props.chnageClik({ value: e.target.value, id: _id})} as="select">
                            <option className='text-dark' selected={status == 0 && 'selected'} value="0">Pending</option>
                            <option className='text-dark' selected={status == 1 && 'selected'} value="1">Ongoing</option>
                            <option className='text-dark' selected={status == 2 && 'selected'} value="2">Done</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </td>
        </tr>
    );
};

export default AdminShowServiceList;