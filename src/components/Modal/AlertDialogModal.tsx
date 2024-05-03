import Button from '@mui/joy/Button';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import DialogActions from '@mui/joy/DialogActions';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal } from '@/src/store/instructorOptionSlice';

interface InstructorState {
  name: string;
  email: string;
  course: string;
  status: string;
  dateAdded: string;
  lastActivity: string;
}

interface optionState {
  showOptions: boolean;
  showModal: boolean;
  selectedRow: number | null;
}

interface Props {
  handleClick: () => void;
}

const AlertDialogModal: React.FC<Props> = ({ handleClick }) => {  

    const dispatch = useDispatch()

    const {showModal} = useSelector((state:{instructorState:InstructorState[], instructorOption:optionState }) => state.instructorOption)


  return (
      <Modal open={showModal} onClose={() => dispatch(hideModal())}>
        <ModalDialog variant="outlined" role="alertdialog" size='lg' sx={{ width: '400px' }}>
          <DialogTitle sx={{ justifyContent: 'space-between' }}>
            Delete Instructor
            <Button variant="plain" color="neutral" onClick={() => dispatch(hideModal())} sx={{ fontSize: '20px' }}>
              X
            </Button>
          </DialogTitle>
          <DialogContent>
            <p>
              Deleting this Instructor cannot be undone, but if you really want to, proceed by clicking the delete button.
            </p>
          </DialogContent>
          <DialogActions sx={{ justifyContent: 'space-between' }}>
            <Button variant="solid" color="danger" onClick={handleClick}>
              Delete
            </Button>
            <Button variant="plain" color="neutral" onClick={() => dispatch(hideModal())}>
              Cancel
            </Button>
          </DialogActions>
        </ModalDialog>
      </Modal>
  );
}

export default AlertDialogModal;
