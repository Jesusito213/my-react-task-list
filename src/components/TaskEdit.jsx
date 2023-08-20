import { useState, useRef } from "react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	FormLabel,
	Input,
	FormControl,
	ModalFooter,
	Button,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import TaskClass from "../models/task/data.class";

const TaskEdit = ({ dataTask, onClickUpdate, isOpen, onClose }) => {
	const miStorage = window.localStorage;
	var dataTasks = JSON.parse(miStorage.getItem("dataTasks"));

	const initialRef = useRef(null);
	const finalRef = useRef(null);

	const [valueInput, setValueInput] = useState(dataTask);

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setValueInput({ ...valueInput, [name]: value });
	};

	const handleChangeClose = () => {
		setValueInput(dataTask);
	};

	const handleChangeSave = () => {
		if (
			valueInput.name !== "" &&
			valueInput.name !== 0 &&
			valueInput.name.length > 3
		) {
			var newList = [];
			dataTasks.map((task) => {
				if (task.id == dataTask.id) {
					task.name = valueInput.name;
					task.description = valueInput.description;
				}
				newList.push(task);
			});
			onClickUpdate(newList);
		} else {
			setValueInput(dataTask);
		}
	};

	return (
		<div>
			<Modal
				initialFocusRef={initialRef}
				finalFocusRef={finalRef}
				isOpen={isOpen}
				onClose={onClose}>
				<ModalContent>
					<ModalHeader>Edit Task Name</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<FormControl>
							<FormLabel>New Task Name</FormLabel>
							<Input
								ref={initialRef}
								type="text"
								name="name"
								placeholder="name task"
								value={valueInput.name}
								onChange={(e) => handleChangeInput(e)}
							/>
						</FormControl>

						<FormControl mt={4}>
							<FormLabel>New Task Description</FormLabel>
							<Input
								type="text"
								name="description"
								placeholder="description task"
								value={valueInput.description}
								onChange={(e) => handleChangeInput(e)}
							/>
						</FormControl>
					</ModalBody>

					<ModalFooter>
						<Button
							colorScheme="blue"
							mr={3}
							onClick={() => handleChangeSave()}>
							Save
						</Button>
						<Button
							onClick={() => {
								handleChangeClose();
								onClose();
							}}>
							Cancel
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</div>
	);
};

TaskEdit.propTypes = {
	dataTask: PropTypes.instanceOf(TaskClass),
	onClickUpdate: PropTypes.func.isRequired,
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
};
export default TaskEdit;
