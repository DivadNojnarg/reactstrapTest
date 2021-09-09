import { reactShinyInput } from 'reactR';
import { Button, ButtonGroup } from 'reactstrap';

function ButtonGroupUI({ configuration, value, setValue }) {
  const choices = configuration.choices
  const buttons = choices.map(
    (choice) => <Button
      key={choice}
      color={configuration.status}
      onClick={() => setValue(choice)}
      active={value === choice}>
        {choice}
      </Button>
  )

  return (
    <>
      <h5>{configuration.label}</h5>
      <ButtonGroup>
       {buttons}
      </ButtonGroup>
      <p>Selected: {value}</p>
    </>
  );
}


export default function initButtonGroup(){
  reactShinyInput(
    '.button_group',
    'reactstrapTest.button_group',
    ButtonGroupUI
  );
}
