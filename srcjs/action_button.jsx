import { reactShinyInput } from 'reactR';
import { Button } from 'reactstrap';

function ActionButton({ configuration, value, setValue }) {
  return (
    <Button
      color={configuration.status}
      onClick={() => setValue(value + 1)}>
      {configuration.label}
    </Button>
  );
}

export default function initActionButton(){
  reactShinyInput(
    '.action_button',
    'reactstrapTest.action_button',
    ActionButton
  );
}
