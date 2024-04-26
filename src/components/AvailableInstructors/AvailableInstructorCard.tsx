import Image from 'next/image';
import Table from '@mui/joy/Table';
import IconButton from '@mui/joy/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';



const AvailableInstructorCard = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th style={{ width: '25%' }}>INSTRUCTOR</th>
          <th>ORGANIZATION</th>
          <th>COURSE</th>
          <th>STATUS</th>
          <th>DATE ADDED</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
          <tr>
            <td><div><img src="/assets/images/avatar.png" alt="" /></div></td>
            <td>cl</td>
            <td>mnxn</td>
            <td>,mxxmnzzj</td>
            <td>sfsfsczfz</td>
            <td><IconButton><MoreVertIcon /></IconButton></td>
          </tr>
      </tbody>
    </Table>
  )
}

export default AvailableInstructorCard