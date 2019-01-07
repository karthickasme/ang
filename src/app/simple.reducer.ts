import {Action} from '@ngrx/store';

export function SimpleReducer(state:string="hello world",action:Action)
{
    console.log(action.type,state);
    switch(action.type)
    {
case 'french':
return state="hello french";

case 'english':
return state="hello english";

default:
return state;
    }
}