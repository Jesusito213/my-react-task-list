import { useForms } from "../hooks/useForm";
import { Flex, Input } from "@chakra-ui/react"

export default function Task({ handleNewTask }) {
	const { description, onInputChange, onResetForm } = useForms({
		description: "",
	});

	const onFormSubmit = (e) => {
		e.preventDefault();

		if (description.length <= 1) return;

		let newTask = {
			id: new Date().getTime(),
			description: description,
			complete: false,
		};

		handleNewTask(newTask);
		onResetForm();
	};

	return (
		<form onSubmit={onFormSubmit}>
         <Flex mb={4}>
			<Input
				display={"flex"}
            gap={"20"}
				mr={4}
				color="#11111"
				fontSize="14px"
				fontWeight="bold"
				type="text"
				className="input-add"
				name="description"
				value={description}
				onChange={onInputChange}
				placeholder="Add New Task"
			/>
			<button className="btn-add" type="submit">
				+
			</button>
         </Flex>
		</form>
	);
}


