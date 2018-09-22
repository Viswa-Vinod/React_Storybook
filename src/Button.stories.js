import React from 'react';
//import {withInfo} from '@storybook/addon-info';
import {wInfo} from './utils';
import {storiesOf} from '@storybook/react';
import {Button} from './Button';
import {color} from '@storybook/addon-knobs/react';

storiesOf('Button', module).addWithJSX('with background', 
wInfo(
    
     
        `description 
        ~~~js
        <Button>lkjkl</Button>
        ~~~
        ` 
    
)(
    ()=>(
        <Button bg={color('bg', 'goldenrod', 'group1')}>Hello World</Button>
    )
)
).addWithJSX('with bg 2', ()=>(
     <Button bg="crimson">Hello World2</Button>
))