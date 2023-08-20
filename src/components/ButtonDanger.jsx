import { Button, Text } from "@chakra-ui/react";

const ButtonDanger = ({ onClickClear, taskPending, clickHandlerRef }) => {
  return (
    <div className="buttonDanger">
      <Text>Tienes <span className="span-bold">{taskPending}</span> tareas pendientes</Text>
      <Button
        colorScheme="red"
        onClick={() => {
          onClickClear();
          clickHandlerRef(true);
        }}
      >
        Borrar todo
      </Button>
    </div>
  );
};

export default ButtonDanger;
