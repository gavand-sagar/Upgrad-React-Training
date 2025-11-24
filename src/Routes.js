import StateDemo from './StateDemo';
import ColorChangeWithState from './ColorChangeWithState';
import HideShow from './HideShow';
import ToggleButton from './ToggleButton';
import CustomAttributes from './CustomAttributes';
import CustomEvents from './CustomEvents';
import ListAndStates from './ListAndStates';
import UseEffectBasics from './UseEffectBasics';
import UseRefDemo from './UseRefDemo';
import UseRefForForms from './UseRefForForms';
import ControlledForm from './ControlledForm';
import ReactHookForm from './ReactHookForm';
import ReactHookFormMUI from './ReactHookFormMUI';
import SimpleTodoApp from './SimpleTodoApp';
import ApiCallDemo from './ApiCallDemo';
import ProductDetails from './ProductDetails';
import LoginFormPostAPI from './LoginFormPostAPI';
import ContextAPI from './ContextAPI';
import ContextAPIDataChangeDemo from './ContextAPIDataChangeDemo';
import ReduxDataChange from './ReduxDataChange';
import ApiWithRedux from './ApiWithRedux';
import HOCDemo from './HOCDemo';
import LazyLoadingDemo from './LazyLoadingDemo';

export const routes = [
    {
        path: '/StateDemo',
        linkText: "State Demo",
        element: <StateDemo />
    },
    {
        path: '/SimpleTodoApp',
        linkText: "Simple Todo App",
        element: <SimpleTodoApp />
    },
    {
        path: '/ReactHookFormMUI',
        linkText: "React Hook Form MUI",
        element: <ReactHookFormMUI />
    },
    {
        path: '/ApiCallDemo',
        linkText: "Api Call Demo",
        element: <ApiCallDemo />
    },
    {
        path: '/ProductDetails/:productid',
        element: <ProductDetails />
    },
    {
        path: '/ContextAPI',
        linkText: "Context API",
        element: <ContextAPI />
    },
    {
        path: '/ContextAPIDataChangeDemo',
        linkText: "Context API Data Change Demo",
        element: <ContextAPIDataChangeDemo />
    },
    {
        path: '/ReduxDataChange',
        linkText: "ReduxDataChange",
        element: <ReduxDataChange />
    },
    {
        path: '/ApiWithRedux',
        linkText: "ApiWithRedux",
        element: <ApiWithRedux />
    },
    {
        path: '/HocDemo',
        linkText: "HOC Demo",
        element: <HOCDemo />
    },
    {
        path: '/LazyLoadingDemo',
        linkText: "Lazy Loading Demo",
        element: <LazyLoadingDemo/>
    },
    {
        path: '/Login',
        element: <LoginFormPostAPI />
    }
]