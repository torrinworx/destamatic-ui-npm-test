import { mount, Observer } from 'destam-dom';

// import { h } from './destamatic-ui/components/utils/h.jsx'; // Like importing React.
// import Button from './destamatic-ui/components/inputs/Button.jsx';
// import Shown from './destamatic-ui/components/utils/Shown.jsx';
// import { Typography } from './destamatic-ui/components/display/Typography.jsx';

import { h, Button, Shown, Typography, Icon, Icons } from 'destamatic-ui';
// import IconifyDriver from "destamatic-ui/icons/IconifyIcons";

// import {h} from './node_modules/destamatic-ui/components/utils/h.jsx';
// import Button from './node_modules/destamatic-ui/components/inputs/Button.jsx';
// import Shown from './node_modules/destamatic-ui/components/utils/Shown.jsx';
// import { Typography } from './node_modules/destamatic-ui/components/display/Typography.jsx';

mount(document.body, <>
    {/* <Icons value={[IconifyDriver]} > */}
        {/* <Icon name='user' /> */}
        <Shown value={Observer.timer(1000).map(t => t % 2 === 0)}>
            <Button label='test' />
            <Typography label='this is another test ' />
        </Shown>
        test
    {/* </Icons> */}
</>);
