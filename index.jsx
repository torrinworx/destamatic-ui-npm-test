import { mount, Observer } from 'destam-dom';

import { h, Button, Shown, Typography, Icon, Icons } from 'destamatic-ui';
import IconifyDriver from "destamatic-ui/icons/IconifyIcons";

mount(document.body, <div>
    <Icons value={[IconifyDriver]} >
        <Icon name='feather:user' size={50} style={{ color: 'black' }} />
        <Shown value={Observer.timer(1000).map(t => t % 2 === 0)}>
            <Button label='test' />
            <Typography label='this is another test ' />
        </Shown>
        test
    </Icons>
</div>);
